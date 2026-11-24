// Jardim Perene - Controlador do App (SPA) com Ícones Premium Lucide e Nuvem Supabase
import { MODULOS, NIVEIS, DICAS_DO_DIA, ITENS } from './data.js';

// Configuração do Supabase (Nuvem em Alta Disponibilidade)
const SUPABASE_CONFIG = {
  url: 'https://ipsdzbkhgxtnpkwvijeq.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlwc2R6YmtoZ3h0bnBrd3ZpamVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU0NjI2MzIsImV4cCI6MjExMTAzODYzMn0.8AjBwC0XllDXHx0WYgAbsS77vGKfU7MYKijW_qp5AlI'
};

class JardimApp {
  constructor() {
    this.deviceId = this.getDeviceId();
    this.userLevel = this.loadUserLevel();
    this.favorites = this.loadFavorites();
    this.currentTab = 'inicio'; // 'inicio', 'meujardim', 'nivel'
    this.currentModule = null;  // 'ferramentas', 'plantas', 'adubacao', 'servicos'
    this.currentFilter = this.userLevel; // abre filtrado pelo nível do perfil conforme especificação
    this.activeItem = null;
    this.previousView = null; // para o botão Voltar retornar à tela de origem
    this.searchQuery = '';
    this.toastTimer = null;

    // Estado de Autenticação Supabase
    this.currentUser = null;
    this.currentUserSession = null;
    this.authMode = 'login'; // 'login' ou 'signup'
    this.supabase = null;

    this.dom = {
      content: document.getElementById('main-content'),
      tabBtns: document.querySelectorAll('.nav-tab-btn'),
      userLevelHeaderPill: document.getElementById('user-level-pill'),
      userLevelHeaderText: document.getElementById('user-level-header-text'),
      favCountBadge: document.getElementById('fav-count-badge'),
      favCountBadgeStatic: document.getElementById('fav-count-badge-static'),
      bottomNavWrapper: document.querySelector('.bottom-nav-wrapper'),
      toast: document.getElementById('toast-notice'),
      toastIcon: document.getElementById('toast-icon'),
      toastText: document.getElementById('toast-text'),
      modalOverlay: document.getElementById('modal-overlay'),
      modalTitle: document.getElementById('modal-title'),
      modalBody: document.getElementById('modal-body'),
      modalCloseBtn: document.getElementById('modal-close-btn'),

      // Elementos de Autenticação e Perfil
      btnAuthUser: document.getElementById('btn-auth-user'),
      labelAuthUser: document.getElementById('label-auth-user'),
      authModalOverlay: document.getElementById('auth-modal-overlay'),
      authCloseBtn: document.getElementById('auth-close-btn'),
      tabAuthLogin: document.getElementById('tab-auth-login'),
      tabAuthSignup: document.getElementById('tab-auth-signup'),
      btnGoogleLogin: document.getElementById('btn-google-login'),
      authAlert: document.getElementById('auth-alert'),
      authAlertIcon: document.getElementById('auth-alert-icon'),
      authAlertMsg: document.getElementById('auth-alert-msg'),
      authForm: document.getElementById('auth-form'),
      groupAuthName: document.getElementById('group-auth-name'),
      authInputName: document.getElementById('auth-input-name'),
      authInputEmail: document.getElementById('auth-input-email'),
      authInputPassword: document.getElementById('auth-input-password'),
      btnForgotPasswordLink: document.getElementById('btn-forgot-password-link'),
      btnTogglePassword: document.getElementById('btn-toggle-password'),
      iconTogglePwd: document.getElementById('icon-toggle-pwd'),
      btnAuthSubmit: document.getElementById('btn-auth-submit'),
      btnAuthSubmitText: document.getElementById('btn-auth-submit-text'),
      authModalTitle: document.getElementById('auth-modal-title'),
      authModalSubtitle: document.getElementById('auth-modal-subtitle'),
      btnToggleAuthMode: document.getElementById('btn-toggle-auth-mode'),
      labelAuthSwitchPrompt: document.getElementById('label-auth-switch-prompt'),
      figmaOptionsRow: document.getElementById('figma-options-row'),

      // Modal de Perfil
      profileModalOverlay: document.getElementById('profile-modal-overlay'),
      profileCloseBtn: document.getElementById('profile-close-btn'),
      profileUserAvatar: document.getElementById('profile-user-avatar'),
      profileUserName: document.getElementById('profile-user-name'),
      profileUserEmail: document.getElementById('profile-user-email'),
      profileUserProvider: document.getElementById('profile-user-provider'),
      profileFavoritesCount: document.getElementById('profile-favorites-count'),
      profileLevelLabel: document.getElementById('profile-level-label'),
      btnLogout: document.getElementById('btn-logout')
    };

    this.init();
  }

  // Identificador único persistente do dispositivo/usuário (mantém dados isolados por usuário)
  getDeviceId() {
    try {
      let id = localStorage.getItem('jardim_device_id');
      if (!id || id.length < 8) {
        id = 'user_' + (typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36));
        localStorage.setItem('jardim_device_id', id);
      }
      return id;
    } catch (e) {
      return 'user_guest_' + Date.now().toString(36);
    }
  }

  // Persistência segura (com fallback se localStorage estiver bloqueado)
  loadUserLevel() {
    try {
      const saved = localStorage.getItem('jardim_nivel_usuario');
      return saved ? parseInt(saved, 10) : 1; // Padrão: 1 (Iniciante)
    } catch (e) {
      console.warn('Armazenamento local indisponível, usando padrão.');
      return 1;
    }
  }

  saveUserLevel(level) {
    this.userLevel = level;
    try {
      localStorage.setItem('jardim_nivel_usuario', level.toString());
    } catch (e) {}
    this.updateHeaderBadge();
    this.syncLevelToCloud(level);
  }

  getEffectiveId() {
    return this.currentUser ? `usr_${this.currentUser.id}` : this.deviceId;
  }

  getAuthHeaders() {
    const token = this.currentUserSession?.access_token || SUPABASE_CONFIG.anonKey;
    return {
      'apikey': SUPABASE_CONFIG.anonKey,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  }

  initAuth() {
    let attempts = 0;
    const setup = () => {
      attempts++;
      if (typeof window !== 'undefined' && window.supabase && window.supabase.createClient) {
        try {
          this.supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

          this.supabase.auth.onAuthStateChange(async (event, session) => {
            this.currentUserSession = session;
            this.currentUser = session?.user || null;
            this.updateUserAuthUI();

            if (event === 'SIGNED_IN') {
              this.closeAuthModal();
              const displayName = this.getUserDisplayName();
              this.showToast(`Conectado como ${displayName}`);
              await this.syncCloudData();
              if (this.currentTab === 'meujardim') {
                this.renderMeuJardim();
              }
            } else if (event === 'SIGNED_OUT') {
              this.updateUserAuthUI();
              if (this.currentTab === 'meujardim') {
                this.renderMeuJardim();
              }
            }
          });

          this.checkExistingSession();
        } catch (err) {
          console.warn('Erro ao inicializar Supabase Auth:', err);
        }
      } else if (attempts < 20) {
        setTimeout(setup, 150);
      }
    };
    setup();

    // Abre automaticamente a tela de login para quem ainda não estiver logado
    setTimeout(() => {
      if (!this.currentUser) {
        this.openAuthModal('login');
      }
    }, 400);
  }

  async checkExistingSession() {
    if (!this.supabase) return;
    try {
      const { data: { session } } = await this.supabase.auth.getSession();
      if (session && session.user) {
        this.currentUserSession = session;
        this.currentUser = session.user;
        this.updateUserAuthUI();
      } else {
        setTimeout(() => {
          if (!this.currentUser) {
            this.openAuthModal('login');
          }
        }, 200);
      }
    } catch (e) {
      console.warn('Erro ao checar sessão:', e);
    }
  }

  getUserDisplayName() {
    if (!this.currentUser) return 'Visitante';
    const meta = this.currentUser.user_metadata || {};
    return meta.full_name || meta.display_name || meta.name || (this.currentUser.email ? this.currentUser.email.split('@')[0] : 'Jardineiro(a)');
  }

  getUserInitials() {
    const name = this.getUserDisplayName();
    const parts = name.trim().split(/\s+/);
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  }

  updateUserAuthUI() {
    if (this.dom.labelAuthUser && this.dom.btnAuthUser) {
      if (this.currentUser) {
        const name = this.getUserDisplayName();
        const firstName = name.split(' ')[0];
        this.dom.labelAuthUser.textContent = firstName.length > 10 ? firstName.slice(0, 9) + '…' : firstName;
        this.dom.btnAuthUser.classList.add('logged-in');
        this.dom.btnAuthUser.title = `Conectado como ${name} (${this.currentUser.email})`;
        const icon = this.dom.btnAuthUser.querySelector('i');
        if (icon) icon.setAttribute('data-lucide', 'user-check');
      } else {
        this.dom.labelAuthUser.textContent = 'Entrar';
        this.dom.btnAuthUser.classList.remove('logged-in');
        this.dom.btnAuthUser.title = 'Entrar na sua conta';
        const icon = this.dom.btnAuthUser.querySelector('i');
        if (icon) icon.setAttribute('data-lucide', 'user');
      }
      this.refreshIcons();
    }
  }

  openAuthModal(mode = 'login') {
    this.authMode = mode;
    this.hideAuthAlert();
    this.updateAuthModalTabs();
    if (this.dom.authModalOverlay) {
      this.dom.authModalOverlay.classList.add('open');
      this.dom.authModalOverlay.classList.add('active');
      this.dom.authModalOverlay.setAttribute('aria-hidden', 'false');
      setTimeout(() => {
        if (this.dom.authInputEmail) this.dom.authInputEmail.focus();
      }, 100);
    }
  }

  closeAuthModal() {
    if (this.dom.authModalOverlay) {
      this.dom.authModalOverlay.classList.remove('open');
      this.dom.authModalOverlay.classList.remove('active');
      this.dom.authModalOverlay.setAttribute('aria-hidden', 'true');
    }
    this.hideAuthAlert();
  }

  updateAuthModalTabs() {
    const isLogin = this.authMode === 'login';
    if (this.dom.tabAuthLogin) {
      this.dom.tabAuthLogin.classList.toggle('active', isLogin);
      this.dom.tabAuthLogin.setAttribute('aria-selected', isLogin ? 'true' : 'false');
    }
    if (this.dom.tabAuthSignup) {
      this.dom.tabAuthSignup.classList.toggle('active', !isLogin);
      this.dom.tabAuthSignup.setAttribute('aria-selected', !isLogin ? 'true' : 'false');
    }
    if (this.dom.authModalTitle) {
      this.dom.authModalTitle.textContent = isLogin ? 'Login' : 'Criar Conta';
    }
    if (this.dom.authModalSubtitle) {
      this.dom.authModalSubtitle.textContent = isLogin 
        ? 'Welcome back please login to your account.' 
        : 'Crie sua conta para sincronizar suas plantas na nuvem.';
    }
    if (this.dom.groupAuthName) {
      this.dom.groupAuthName.style.display = isLogin ? 'none' : 'flex';
    }
    if (this.dom.figmaOptionsRow) {
      this.dom.figmaOptionsRow.style.display = isLogin ? 'flex' : 'none';
    }
    if (this.dom.authInputEmail) {
      this.dom.authInputEmail.placeholder = isLogin ? 'User Name' : 'E-mail';
    }
    if (this.dom.btnAuthSubmitText) {
      this.dom.btnAuthSubmitText.textContent = isLogin ? 'Login' : 'Cadastrar';
    }
    if (this.dom.labelAuthSwitchPrompt) {
      this.dom.labelAuthSwitchPrompt.textContent = isLogin ? 'Don’t have an account?' : 'Já tem uma conta?';
    }
    if (this.dom.btnToggleAuthMode) {
      this.dom.btnToggleAuthMode.textContent = isLogin ? 'Signup' : 'Entrar';
    }
    this.hideAuthAlert();
    this.refreshIcons();
  }

  showAuthAlert(message, type = 'error') {
    if (!this.dom.authAlert || !this.dom.authAlertMsg) return;
    this.dom.authAlert.className = `auth-alert ${type}`;
    this.dom.authAlertMsg.textContent = message;
    if (this.dom.authAlertIcon) {
      const iconName = type === 'success' ? 'check-circle' : (type === 'info' ? 'info' : 'alert-circle');
      this.dom.authAlertIcon.setAttribute('data-lucide', iconName);
    }
    this.dom.authAlert.style.display = 'flex';
    this.refreshIcons();
  }

  hideAuthAlert() {
    if (this.dom.authAlert) {
      this.dom.authAlert.style.display = 'none';
    }
  }

  async handleGoogleLogin() {
    if (!this.supabase) {
      this.showAuthAlert('Serviço de autenticação não inicializado.', 'error');
      return;
    }
    try {
      this.hideAuthAlert();
      const { data, error } = await this.supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin
        }
      });
      if (error) {
        if (error.message && error.message.toLowerCase().includes('not enabled')) {
          this.showAuthAlert('O login com Google está sendo configurado. Use seu E-mail e Senha para entrar!', 'info');
        } else {
          this.showAuthAlert(error.message, 'error');
        }
      }
    } catch (err) {
      this.showAuthAlert(err.message || 'Falha ao conectar com o Google.', 'error');
    }
  }

  async handleEmailAuth(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!this.supabase) {
      this.showAuthAlert('Serviço de autenticação indisponível.', 'error');
      return;
    }

    const email = (this.dom.authInputEmail?.value || '').trim();
    const password = (this.dom.authInputPassword?.value || '');
    const name = (this.dom.authInputName?.value || '').trim();

    if (!email || !email.includes('@')) {
      this.showAuthAlert('Informe um endereço de e-mail válido.', 'error');
      this.dom.authInputEmail?.focus();
      return;
    }

    if (!password || password.length < 6) {
      this.showAuthAlert('A senha deve conter no mínimo 6 caracteres.', 'error');
      this.dom.authInputPassword?.focus();
      return;
    }

    const btnSubmit = this.dom.btnAuthSubmit;
    const btnText = this.dom.btnAuthSubmitText;
    const originalText = btnText ? btnText.textContent : '';
    if (btnSubmit) btnSubmit.disabled = true;
    if (btnText) btnText.textContent = this.authMode === 'login' ? 'Entrando...' : 'Criando conta...';
    this.hideAuthAlert();

    try {
      if (this.authMode === 'login') {
        const { data, error } = await this.supabase.auth.signInWithPassword({ email, password });
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            this.showAuthAlert('E-mail ou senha incorretos. Verifique suas credenciais.', 'error');
          } else if (error.message.includes('Email not confirmed')) {
            this.showAuthAlert('E-mail não confirmado. Verifique sua caixa de entrada para ativar a conta.', 'info');
          } else {
            this.showAuthAlert(error.message, 'error');
          }
        } else {
          this.closeAuthModal();
        }
      } else {
        const { data, error } = await this.supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              display_name: name || email.split('@')[0],
              full_name: name || ''
            }
          }
        });
        if (error) {
          if (error.message.includes('already registered')) {
            this.showAuthAlert('Este e-mail já está cadastrado. Alterne para a aba "Entrar" acima.', 'error');
          } else {
            this.showAuthAlert(error.message, 'error');
          }
        } else if (data.session) {
          this.closeAuthModal();
          this.showToast('Conta criada com sucesso! Bem-vindo(a)!');
        } else {
          this.showAuthAlert('Conta criada com sucesso! Enviamos um link de confirmação para seu e-mail.', 'success');
        }
      }
    } catch (err) {
      this.showAuthAlert(err.message || 'Erro inesperado ao conectar.', 'error');
    } finally {
      if (btnSubmit) btnSubmit.disabled = false;
      if (btnText) btnText.textContent = originalText;
    }
  }

  async handleForgotPassword() {
    const email = (this.dom.authInputEmail?.value || '').trim();
    if (!email || !email.includes('@')) {
      this.showAuthAlert('Digite seu e-mail no campo acima para recuperar sua senha.', 'info');
      this.dom.authInputEmail?.focus();
      return;
    }
    if (!this.supabase) return;
    try {
      const { error } = await this.supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin
      });
      if (error) {
        this.showAuthAlert(error.message, 'error');
      } else {
        this.showAuthAlert(`Instruções de recuperação enviadas para ${email}.`, 'success');
      }
    } catch (err) {
      this.showAuthAlert('Falha ao enviar e-mail de recuperação.', 'error');
    }
  }

  togglePasswordVisibility() {
    if (!this.dom.authInputPassword) return;
    const isPwd = this.dom.authInputPassword.type === 'password';
    this.dom.authInputPassword.type = isPwd ? 'text' : 'password';
    if (this.dom.iconTogglePwd) {
      this.dom.iconTogglePwd.setAttribute('data-lucide', isPwd ? 'eye-off' : 'eye');
      this.refreshIcons();
    }
  }

  openProfileModal() {
    if (!this.currentUser) {
      this.openAuthModal('login');
      return;
    }
    const name = this.getUserDisplayName();
    const initials = this.getUserInitials();
    const email = this.currentUser.email || '';
    const nivelObj = NIVEIS[this.userLevel] || NIVEIS[1];
    const isGoogle = this.currentUser.app_metadata?.provider === 'google';

    if (this.dom.profileUserAvatar) this.dom.profileUserAvatar.textContent = initials;
    if (this.dom.profileUserName) this.dom.profileUserName.textContent = name;
    if (this.dom.profileUserEmail) this.dom.profileUserEmail.textContent = email;
    if (this.dom.profileFavoritesCount) this.dom.profileFavoritesCount.textContent = this.favorites.size;
    if (this.dom.profileLevelLabel) this.dom.profileLevelLabel.textContent = nivelObj.nome;
    if (this.dom.profileUserProvider) {
      this.dom.profileUserProvider.innerHTML = `<i data-lucide="${isGoogle ? 'chrome' : 'shield-check'}"></i> Conta ${isGoogle ? 'Google' : 'E-mail/Senha'}`;
    }

    if (this.dom.profileModalOverlay) {
      this.dom.profileModalOverlay.classList.add('open');
      this.dom.profileModalOverlay.classList.add('active');
      this.dom.profileModalOverlay.setAttribute('aria-hidden', 'false');
      this.refreshIcons();
    }
  }

  closeProfileModal() {
    if (this.dom.profileModalOverlay) {
      this.dom.profileModalOverlay.classList.remove('open');
      this.dom.profileModalOverlay.classList.remove('active');
      this.dom.profileModalOverlay.setAttribute('aria-hidden', 'true');
    }
  }

  async handleLogout() {
    if (!this.supabase) return;
    try {
      await this.supabase.auth.signOut();
      this.closeProfileModal();
      this.showToast('Você saiu da sua conta.');
    } catch (err) {
      console.warn('Erro ao sair da conta:', err);
    }
  }

  async syncLevelToCloud(level) {
    if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) return;
    const effectiveId = this.getEffectiveId();
    const headers = this.getAuthHeaders();
    try {
      await fetch(`${SUPABASE_CONFIG.url}/rest/v1/user_settings`, {
        method: 'POST',
        headers: {
          ...headers,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          device_id: effectiveId,
          user_level: level,
          updated_at: new Date().toISOString()
        })
      });
    } catch (err) {
      console.warn('Sincronização de nível na nuvem:', err);
    }
  }

  loadFavorites() {
    try {
      const saved = localStorage.getItem('jardim_favoritos');
      if (!saved) return new Set();
      const ids = JSON.parse(saved);
      const validIds = new Set(ITENS.map(i => i.id));
      const cleaned = ids.filter(id => validIds.has(id));
      if (cleaned.length !== ids.length) {
        localStorage.setItem('jardim_favoritos', JSON.stringify(cleaned));
      }
      return new Set(cleaned);
    } catch (e) {
      return new Set();
    }
  }

  saveFavorites() {
    try {
      localStorage.setItem('jardim_favoritos', JSON.stringify(Array.from(this.favorites)));
    } catch (e) {}
    this.updateFavBadge();
  }

  async syncCloudData() {
    if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) return;
    const effectiveId = this.getEffectiveId();
    const headers = this.getAuthHeaders();

    // 1. Sincronizar Favoritos na Nuvem
    try {
      const favRes = await fetch(
        `${SUPABASE_CONFIG.url}/rest/v1/user_favorites?device_id=eq.${encodeURIComponent(effectiveId)}&select=item_id`,
        { method: 'GET', headers }
      );
      if (favRes.ok) {
        const cloudRows = await favRes.json();
        const cloudIds = new Set((cloudRows || []).map(r => r.item_id));
        let changed = false;

        // Mescla itens da nuvem com locais
        cloudIds.forEach(id => {
          if (!this.favorites.has(id)) {
            this.favorites.add(id);
            changed = true;
          }
        });

        // Envia itens locais que ainda não estão na nuvem
        const toUpload = Array.from(this.favorites).filter(id => !cloudIds.has(id));
        if (toUpload.length > 0) {
          const bodyPayload = toUpload.map(itemId => ({
            device_id: effectiveId,
            item_id: itemId
          }));
          await fetch(`${SUPABASE_CONFIG.url}/rest/v1/user_favorites`, {
            method: 'POST',
            headers: { ...headers, 'Prefer': 'resolution=ignore-duplicates' },
            body: JSON.stringify(bodyPayload)
          });
        }

        if (changed) {
          this.saveFavorites();
          if (this.currentTab === 'meujardim') {
            this.renderMeuJardim();
          }
        }
      }
    } catch (err) {
      console.warn('Sincronização de favoritos na nuvem:', err);
    }

    // 2. Sincronizar Nível do Usuário na Nuvem
    try {
      const settRes = await fetch(
        `${SUPABASE_CONFIG.url}/rest/v1/user_settings?device_id=eq.${encodeURIComponent(effectiveId)}&select=user_level`,
        { method: 'GET', headers }
      );
      if (settRes.ok) {
        const rows = await settRes.json();
        if (rows && rows.length > 0 && rows[0].user_level) {
          const cloudLvl = parseInt(rows[0].user_level, 10);
          if (cloudLvl && cloudLvl !== this.userLevel) {
            this.userLevel = cloudLvl;
            try {
              localStorage.setItem('jardim_nivel_usuario', cloudLvl.toString());
            } catch (e) {}
            this.updateHeaderBadge();
            if (this.currentTab === 'nivel') {
              this.renderNivel();
            }
          }
        } else {
          this.syncLevelToCloud(this.userLevel);
        }
      }
    } catch (err) {
      console.warn('Sincronização de perfil na nuvem:', err);
    }
  }

  init() {
    this.initAuth();
    if (this.dom.bottomNavWrapper) {
      this.dom.bottomNavWrapper.dataset.activeTab = this.currentTab || 'inicio';
    }
    this.bindEvents();
    this.updateHeaderBadge();
    this.updateFavBadge();
    this.render();
    this.syncCloudData();
  }

  bindEvents() {
    // Navegação pelas abas inferiores
    this.dom.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Clique no botão de login / perfil no topo
    if (this.dom.btnAuthUser) {
      this.dom.btnAuthUser.addEventListener('click', () => {
        if (this.currentUser) {
          this.openProfileModal();
        } else {
          this.openAuthModal('login');
        }
      });
    }

    // Modal de Autenticação
    if (this.dom.authCloseBtn) {
      this.dom.authCloseBtn.addEventListener('click', () => this.closeAuthModal());
    }
    if (this.dom.authModalOverlay) {
      this.dom.authModalOverlay.addEventListener('click', (e) => {
        if (e.target === this.dom.authModalOverlay) this.closeAuthModal();
      });
    }

    // Alternar abas de Login e Cadastro
    if (this.dom.tabAuthLogin) {
      this.dom.tabAuthLogin.addEventListener('click', () => this.openAuthModal('login'));
    }
    if (this.dom.tabAuthSignup) {
      this.dom.tabAuthSignup.addEventListener('click', () => this.openAuthModal('signup'));
    }

    // Alternar modo de autenticação no footer do Figma ("Don't have an account? Signup")
    if (this.dom.btnToggleAuthMode) {
      this.dom.btnToggleAuthMode.addEventListener('click', () => {
        const nextMode = this.authMode === 'login' ? 'signup' : 'login';
        this.openAuthModal(nextMode);
      });
    }

    // Login com Google
    if (this.dom.btnGoogleLogin) {
      this.dom.btnGoogleLogin.addEventListener('click', () => this.handleGoogleLogin());
    }

    // Formulário de E-mail / Senha
    if (this.dom.authForm) {
      this.dom.authForm.addEventListener('submit', (e) => this.handleEmailAuth(e));
    }

    // Alternar visibilidade da senha
    if (this.dom.btnTogglePassword) {
      this.dom.btnTogglePassword.addEventListener('click', () => this.togglePasswordVisibility());
    }

    // Esqueci a senha
    if (this.dom.btnForgotPasswordLink) {
      this.dom.btnForgotPasswordLink.addEventListener('click', () => this.handleForgotPassword());
    }

    // Modal de Perfil
    if (this.dom.profileCloseBtn) {
      this.dom.profileCloseBtn.addEventListener('click', () => this.closeProfileModal());
    }
    if (this.dom.profileModalOverlay) {
      this.dom.profileModalOverlay.addEventListener('click', (e) => {
        if (e.target === this.dom.profileModalOverlay) this.closeProfileModal();
      });
    }

    // Sair da conta
    if (this.dom.btnLogout) {
      this.dom.btnLogout.addEventListener('click', () => this.handleLogout());
    }

    // Clique na pílula de nível no topo abre a tela de perfil/nível
    if (this.dom.userLevelHeaderPill) {
      this.dom.userLevelHeaderPill.addEventListener('click', () => {
        this.switchTab('nivel');
      });
    }

    // Modal close
    if (this.dom.modalCloseBtn) {
      this.dom.modalCloseBtn.addEventListener('click', () => this.closeModal());
    }
    if (this.dom.modalOverlay) {
      this.dom.modalOverlay.addEventListener('click', (e) => {
        if (e.target === this.dom.modalOverlay) this.closeModal();
      });
    }

    // Tecla ESC fecha modais
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
        this.closeAuthModal();
        this.closeProfileModal();
      }
    });
  }

  refreshIcons() {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  updateHeaderBadge() {
    const nivelObj = NIVEIS[this.userLevel] || NIVEIS[1];
    if (this.dom.userLevelHeaderText) {
      this.dom.userLevelHeaderText.textContent = nivelObj.nome;
    }
  }

  updateFavBadge() {
    const count = this.favorites.size;
    [this.dom.favCountBadge, this.dom.favCountBadgeStatic].forEach(badge => {
      if (badge) {
        if (count > 0) {
          badge.textContent = count;
          badge.style.display = 'inline-block';
        } else {
          badge.style.display = 'none';
        }
      }
    });
  }

  switchTab(tab) {
    this.currentTab = tab;
    this.currentModule = null;
    this.activeItem = null;
    this.searchQuery = '';
    this.currentFilter = this.userLevel; // reseta filtro para o nível do usuário

    // Atualiza estado ativo no wrapper para animar o entalhe e a bolinha
    if (this.dom.bottomNavWrapper) {
      this.dom.bottomNavWrapper.dataset.activeTab = tab;
    }

    // Atualiza botões da barra inferior
    this.dom.tabBtns.forEach(btn => {
      if (btn.dataset.tab === tab) {
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  showToast(message, iconName = 'check-circle-2') {
    if (!this.dom.toast) return;
    this.dom.toastIcon.innerHTML = `<i data-lucide="${iconName}"></i>`;
    this.dom.toastText.textContent = message;
    this.dom.toast.classList.add('visible');
    this.refreshIcons();

    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.dom.toast.classList.remove('visible');
    }, 2800);
  }

  openModal(title, contentHtml) {
    if (!this.dom.modalOverlay) return;
    this.dom.modalTitle.textContent = title;
    this.dom.modalBody.innerHTML = contentHtml;
    this.dom.modalOverlay.classList.add('open');
    this.dom.modalOverlay.setAttribute('aria-hidden', 'false');
    this.refreshIcons();
  }

  closeModal() {
    if (!this.dom.modalOverlay) return;
    this.dom.modalOverlay.classList.remove('open');
    this.dom.modalOverlay.setAttribute('aria-hidden', 'true');
  }

  toggleFavorite(itemId) {
    const item = ITENS.find(i => i.id === itemId);
    const itemName = item ? item.nome : 'Item';
    const isAdding = !this.favorites.has(itemId);

    if (isAdding) {
      this.favorites.add(itemId);
      this.showToast(`"${itemName}" salvo no Meu Jardim!`, 'bookmark-check');
    } else {
      this.favorites.delete(itemId);
      this.showToast(`"${itemName}" removido do Meu Jardim`, 'trash-2');
    }
    this.saveFavorites();

    // Re-renderiza detalhe se estiver aberto para atualizar botão
    if (this.activeItem && this.activeItem.id === itemId) {
      const btn = document.getElementById(`btn-fav-${itemId}`);
      if (btn) {
        const isSaved = this.favorites.has(itemId);
        btn.className = `btn-save-jardim ${isSaved ? 'saved' : ''}`;
        btn.innerHTML = isSaved
          ? `<i data-lucide="bookmark-check"></i> Salvo no Meu Jardim`
          : `<i data-lucide="bookmark"></i> Salvar no Meu Jardim`;
        this.refreshIcons();
      }
    }

    // Se estiver na aba Meu Jardim e removeu um item, atualiza a lista imediatamente
    if (this.currentTab === 'meujardim' && !this.activeItem) {
      this.renderMeuJardim();
    }

    // Sincroniza alteração com a nuvem Supabase em segundo plano
    this.syncFavoriteToCloud(itemId, isAdding);
  }

  async syncFavoriteToCloud(itemId, isAdding) {
    if (!SUPABASE_CONFIG.url || !SUPABASE_CONFIG.anonKey) return;
    const effectiveId = this.getEffectiveId();
    const headers = this.getAuthHeaders();
    try {
      if (isAdding) {
        await fetch(`${SUPABASE_CONFIG.url}/rest/v1/user_favorites`, {
          method: 'POST',
          headers: { ...headers, 'Prefer': 'resolution=ignore-duplicates' },
          body: JSON.stringify({
            device_id: effectiveId,
            item_id: itemId
          })
        });
      } else {
        await fetch(
          `${SUPABASE_CONFIG.url}/rest/v1/user_favorites?device_id=eq.${encodeURIComponent(effectiveId)}&item_id=eq.${encodeURIComponent(itemId)}`,
          { method: 'DELETE', headers }
        );
      }
    } catch (err) {
      console.warn('Erro ao sincronizar favorito com Supabase:', err);
    }
  }

  getDicaDoDia() {
    const hoje = new Date();
    const dia = hoje.getDate();
    const meses = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    const dataFormatada = `Hoje · ${dia} de ${meses[hoje.getMonth()]}`;
    const totalDicas = (typeof DICAS_DO_DIA !== 'undefined' && DICAS_DO_DIA && DICAS_DO_DIA.length) ? DICAS_DO_DIA.length : 31;
    const index = (dia - 1) % totalDicas;
    const texto = (typeof DICAS_DO_DIA !== 'undefined' && DICAS_DO_DIA && DICAS_DO_DIA[index])
      ? DICAS_DO_DIA[index]
      : "Cheque a umidade da terra com a ponta do dedo antes de regar: se sair sujo, o solo ainda tem água.";
    return {
      dia: dia,
      dataFormatada: dataFormatada,
      texto: texto
    };
  }

  // ROTEAMENTO E RENDERIZAÇÃO
  render() {
    if (this.activeItem) {
      this.renderDetalhe(this.activeItem);
    } else if (this.currentModule) {
      this.renderModulo(this.currentModule);
    } else if (this.searchQuery.trim().length > 0) {
      this.renderBusca();
    } else {
      switch (this.currentTab) {
        case 'meujardim':
          this.renderMeuJardim();
          break;
        case 'nivel':
          this.renderNivel();
          break;
        case 'inicio':
        default:
          this.renderInicio();
          break;
      }
    }

    this.refreshIcons();
  }

  // ==========================================
  // TELA 1: INÍCIO
  // ==========================================
  renderInicio() {
    const dica = this.getDicaDoDia();

    this.dom.content.innerHTML = `
      <!-- Caixa de Busca -->
      <section class="search-container" aria-label="Busca de itens">
        <div class="search-input-wrapper">
          <i data-lucide="search" class="search-icon"></i>
          <input 
            type="search" 
            id="global-search-input" 
            class="search-input" 
            placeholder="Buscar plantas, ferramentas, adubos..." 
            value="${this.searchQuery}"
            autocomplete="off"
            aria-label="Buscar no Jardim Perene"
          />
          <button id="search-clear-btn" class="search-clear-btn ${this.searchQuery ? 'visible' : ''}" title="Limpar busca">
            <i data-lucide="x"></i>
          </button>
        </div>
      </section>

      <!-- Dica do Dia -->
      <article class="daily-tip-card">
        <div class="tip-header">
          <span class="tip-label">
            <svg class="tip-icon-svg" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
            <span>Dica do Dia</span>
          </span>
          <span class="tip-date">${dica.dataFormatada}</span>
        </div>
        <p class="tip-content">${dica.texto}</p>
      </article>

      <!-- Cartões dos 4 Módulos -->
      <section>
        <div class="section-title">
          <span>Explorar Módulos</span>
          <span style="font-size: 0.8rem; font-weight: 500; color: var(--texto-secundario);">60 itens catalogados</span>
        </div>
        <div class="modules-grid">
          ${MODULOS.map(mod => `
            <button class="module-card" data-module-id="${mod.id}" aria-label="Módulo ${mod.nome}">
              <div class="module-icon-wrap">
                <i data-lucide="${mod.icone}"></i>
              </div>
              <div class="module-info">
                <h3>${mod.nome}</h3>
                <span class="module-count">${mod.total} itens disponíveis</span>
              </div>
            </button>
          `).join('')}
        </div>
      </section>

      <!-- Atalho Rápido para Itens Recomendados do Nível Atual -->
      <section>
        <div class="section-title">
          <span>Recomendados para você</span>
          <span class="badge-nivel ${NIVEIS[this.userLevel].slug}">
            Nível ${NIVEIS[this.userLevel].nome}
          </span>
        </div>
        <div class="items-list">
          ${ITENS.filter(i => i.nivel === this.userLevel).slice(0, 3).map(item => this.renderItemCardHtml(item)).join('')}
        </div>
      </section>
    `;

    // Eventos da Tela Início
    const searchInput = document.getElementById('global-search-input');
    const clearBtn = document.getElementById('search-clear-btn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        if (this.searchQuery.trim().length > 0) {
          this.renderBusca();
        } else {
          this.render();
        }
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.searchQuery = '';
        this.render();
      });
    }

    this.dom.content.querySelectorAll('.module-card').forEach(btn => {
      btn.addEventListener('click', () => {
        const modId = btn.dataset.moduleId;
        this.openModule(modId);
      });
    });

    this.attachItemCardEvents();
  }

  // ==========================================
  // TELA 2: BUSCA EM TEMPO REAL
  // ==========================================
  renderBusca() {
    const q = this.searchQuery.toLowerCase().trim();
    const tokens = q.split(/\s+/).filter(Boolean);

    // 1. Busca prioritária exata pelo nome do item
    // Se o usuário busca "tesoura", só itens que REALMENTE são tesouras aparecem!
    const correspondenciasNome = ITENS.filter(item => {
      const nome = item.nome.toLowerCase();
      return tokens.every(token => nome.includes(token));
    });

    let resultados = correspondenciasNome;

    // Se NÃO houver nenhuma correspondência no nome, busca nas tags específicas do item
    if (resultados.length === 0) {
      resultados = ITENS.filter(item => {
        const tags = (item.tags || []).map(t => t.toLowerCase()).join(' ');
        return tokens.every(token => tags.includes(token));
      });
    }

    // Se ainda não houver nenhum resultado, busca no início do resumo
    if (resultados.length === 0) {
      resultados = ITENS.filter(item => {
        const resumo = item.resumo.toLowerCase();
        return tokens.every(token => resumo.includes(token));
      });
    }

    this.dom.content.innerHTML = `
      <section class="search-container">
        <div class="search-input-wrapper">
          <i data-lucide="search" class="search-icon"></i>
          <input 
            type="search" 
            id="global-search-input" 
            class="search-input" 
            placeholder="Buscar plantas, ferramentas..." 
            value="${this.searchQuery}"
            autofocus
          />
          <button id="search-clear-btn" class="search-clear-btn visible" title="Limpar busca">
            <i data-lucide="x"></i>
          </button>
        </div>
        <div class="search-stats">
          <span>${resultados.length} resultado(s) encontrado(s)</span>
          <button id="btn-cancel-search" style="background:none; border:none; color:var(--verde-floresta-700); cursor:pointer; font-weight:600; font-size:0.8rem; display:flex; align-items:center; gap:4px;">
            <i data-lucide="arrow-left" style="width:14px; height:14px;"></i> Voltar ao início
          </button>
        </div>
      </section>

      <section class="items-list" style="margin-top: 10px;">
        ${resultados.length > 0 
          ? resultados.map(item => this.renderItemCardHtml(item)).join('')
          : `
            <div class="empty-state">
              <div class="empty-icon-wrap">
                <i data-lucide="search-x" class="empty-icon-svg"></i>
              </div>
              <h3 class="empty-title">Nenhum item encontrado</h3>
              <p class="empty-desc">Não encontramos nada para "<strong>${this.searchQuery}</strong>". Tente buscar por termos como "tesoura", "samambaia" ou "adubo".</p>
              <button id="btn-empty-clear" class="btn-primary-action">Limpar busca</button>
            </div>
          `}
      </section>
    `;

    const searchInput = document.getElementById('global-search-input');
    const clearBtn = document.getElementById('search-clear-btn');
    const cancelBtn = document.getElementById('btn-cancel-search');
    const emptyClearBtn = document.getElementById('btn-empty-clear');

    if (searchInput) {
      searchInput.focus();
      searchInput.setSelectionRange(this.searchQuery.length, this.searchQuery.length);
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        if (this.searchQuery.trim().length === 0) {
          this.render();
        } else {
          this.renderBusca();
        }
      });
    }

    const resetBusca = () => {
      this.searchQuery = '';
      this.render();
    };

    if (clearBtn) clearBtn.addEventListener('click', resetBusca);
    if (cancelBtn) cancelBtn.addEventListener('click', resetBusca);
    if (emptyClearBtn) emptyClearBtn.addEventListener('click', resetBusca);

    this.attachItemCardEvents();
  }

  // ==========================================
  // TELA 3: LISTA DO MÓDULO (COM FILTRO POR NÍVEL)
  // ==========================================
  openModule(modId) {
    this.currentModule = modId;
    this.activeItem = null;
    this.currentFilter = this.userLevel;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  renderModulo(modId) {
    const modulo = MODULOS.find(m => m.id === modId);
    if (!modulo) return this.renderInicio();

    const itensDoModulo = ITENS.filter(i => i.modulo === modId);
    const itensFiltrados = itensDoModulo.filter(item => {
      if (this.currentFilter === 'todos') return true;
      return item.nivel === Number(this.currentFilter);
    });

    this.dom.content.innerHTML = `
      <div class="nav-back-bar">
        <button id="btn-back-to-inicio" class="btn-back" title="Voltar ao Início" aria-label="Voltar">
          <svg class="btn-back-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </button>
        <div>
          <h2 class="nav-back-title" style="display: flex; align-items: center; gap: 8px;">
            <i data-lucide="${modulo.icone}"></i> ${modulo.nome}
          </h2>
          <p style="font-size: 0.78rem; color: var(--texto-secundario);">${modulo.descricao}</p>
        </div>
      </div>

      <!-- Barra de Chips de Filtro por Nível -->
      <section>
        <div class="filter-bar" role="tablist" aria-label="Filtro por nível">
          <button class="filter-chip ${this.currentFilter === 'todos' ? 'active' : ''}" data-filter="todos">
            Todos (${itensDoModulo.length})
          </button>
          <button class="filter-chip ${this.currentFilter === 1 ? 'active' : ''}" data-filter="1">
            Iniciante (${itensDoModulo.filter(i => i.nivel === 1).length})
          </button>
          <button class="filter-chip ${this.currentFilter === 2 ? 'active' : ''}" data-filter="2">
            Avançado (${itensDoModulo.filter(i => i.nivel === 2).length})
          </button>
          <button class="filter-chip ${this.currentFilter === 3 ? 'active' : ''}" data-filter="3">
            Pro (${itensDoModulo.filter(i => i.nivel === 3).length})
          </button>
        </div>
      </section>

      <!-- Lista de Itens -->
      <section class="items-list">
        ${itensFiltrados.length > 0
          ? itensFiltrados.map(item => this.renderItemCardHtml(item)).join('')
          : `
            <div class="empty-state" style="padding: 30px 10px;">
              <div class="empty-icon-wrap">
                <i data-lucide="filter" class="empty-icon-svg"></i>
              </div>
              <h3 class="empty-title">Nenhum item neste nível</h3>
              <p class="empty-desc">Experimente selecionar "Todos" para ver todos os itens cadastrados neste módulo.</p>
              <button id="btn-filter-all" class="btn-primary-action" style="padding: 8px 16px;">Ver todos os itens</button>
            </div>
          `}
      </section>
    `;

    document.getElementById('btn-back-to-inicio')?.addEventListener('click', () => {
      this.currentModule = null;
      this.render();
    });

    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const f = chip.dataset.filter;
        this.currentFilter = f === 'todos' ? 'todos' : parseInt(f, 10);
        this.render();
      });
    });

    document.getElementById('btn-filter-all')?.addEventListener('click', () => {
      this.currentFilter = 'todos';
      this.render();
    });

    this.attachItemCardEvents();
  }

  // ==========================================
  // TELA 4: DETALHE DO ITEM
  // ==========================================
  openDetail(item, origem) {
    this.activeItem = item;
    this.previousView = origem || (this.currentModule ? 'modulo' : (this.searchQuery ? 'busca' : 'inicio'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  renderDetalhe(item) {
    const nivelObj = NIVEIS[item.nivel] || NIVEIS[1];
    const isSaved = this.favorites.has(item.id);
    const moduloObj = MODULOS.find(m => m.id === item.modulo);

    this.dom.content.innerHTML = `
      <div class="nav-back-bar">
        <button id="btn-back-detail" class="btn-back" title="Voltar" aria-label="Voltar">
          <svg class="btn-back-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </button>
        <span style="font-size: 0.85rem; font-weight: 600; color: var(--texto-secundario); display: flex; align-items: center; gap: 6px;">
          <i data-lucide="${moduloObj?.icone || 'sprout'}"></i> ${moduloObj ? moduloObj.nome : 'Voltar'}
        </span>
      </div>

      <div class="detail-view">
        <!-- Banner Fotográfico em Alta Resolução -->
        <div class="detail-hero-banner ${item.modulo !== 'servicos' ? 'bg-white-contain' : ''}" data-modulo="${item.modulo}">
          <img src="${item.imagem}" alt="${item.nome}" class="detail-hero-img" loading="eager" onerror="this.src='icon.svg'" />
        </div>

        <!-- Cabeçalho do Detalhe -->
        <article class="detail-header-card">
          <div class="detail-top-meta">
            <span class="badge-nivel ${nivelObj.slug}">
              Nível ${nivelObj.nome}
            </span>
            <span style="font-size: 0.8rem; font-weight: 500; color: var(--texto-mutado); display: flex; align-items: center; gap: 5px;">
              <i data-lucide="${moduloObj?.icone || 'sprout'}"></i> ${moduloObj?.nome || ''}
            </span>
          </div>

          <h1 class="detail-title">${item.nome}</h1>
          <p class="detail-desc">${item.descricao}</p>

          <!-- Botão de Favoritar -->
          <button id="btn-fav-${item.id}" class="btn-save-jardim ${isSaved ? 'saved' : ''}">
            <i data-lucide="${isSaved ? 'bookmark-check' : 'bookmark'}"></i>
            <span>${isSaved ? 'Salvo no Meu Jardim' : 'Salvar no Meu Jardim'}</span>
          </button>
        </article>

        <!-- Espaço de Vídeo 16:9 com Embed Real do YouTube -->
        ${item.temVideo && item.youtubeId ? `
          <section>
            <div id="video-preview-box" class="video-placeholder-container" style="padding:0; overflow:hidden;" title="Assistir aula no YouTube">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube-nocookie.com/embed/${item.youtubeId}" 
                title="${item.nome}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                loading="lazy"
                style="width: 100%; height: 100%; aspect-ratio: 16/9; border: none; display: block;"
              ></iframe>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 6px; padding: 0 4px;">
              <span style="font-size: 0.78rem; color: var(--texto-secundario); display: flex; align-items: center; gap: 4px;">
                <i data-lucide="video" style="width: 13px; height: 13px;"></i> ${item.videoTitulo || 'Vídeo Explicativo'}
              </span>
              <a href="https://www.youtube.com/watch?v=${item.youtubeId}" target="_blank" rel="noopener noreferrer" style="font-size: 0.78rem; font-weight: 600; color: var(--verde-floresta-700); text-decoration: underline; display: flex; align-items: center; gap: 3px;">
                Abrir no YouTube <i data-lucide="external-link" style="width: 12px; height: 12px;"></i>
              </a>
            </div>
          </section>
        ` : ''}

        <!-- Ficha Técnica (Pares Rótulo / Valor) -->
        ${item.ficha && item.ficha.length > 0 ? `
          <section class="ficha-tecnica-card">
            <h3 class="ficha-title" style="display: flex; align-items: center; gap: 8px;">
              <i data-lucide="clipboard-list"></i> Ficha Técnica
            </h3>
            <div class="ficha-grid">
              ${item.ficha.map(f => `
                <div class="ficha-item">
                  <span class="ficha-rotulo">${f.rotulo}</span>
                  <span class="ficha-valor">${f.valor}</span>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}

        <!-- Passo a Passo (Exclusivo de Serviços com 4 Etapas) -->
        ${item.passos && item.passos.length > 0 ? `
          <section>
            <h3 class="section-title" style="margin-bottom: 14px; display: flex; align-items: center; gap: 8px;">
              <i data-lucide="list-ordered"></i> Passo a Passo de Execução
            </h3>
            <div class="steps-container">
              ${item.passos.map(p => `
                <div class="step-card">
                  <div class="step-badge">${p.numero}</div>
                  <div class="step-info">
                    <h4>${p.titulo}</h4>
                    <p>${p.texto}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}
      </div>
    `;

    // Eventos do Detalhe
    document.getElementById('btn-back-detail')?.addEventListener('click', () => {
      this.activeItem = null;
      if (this.previousView === 'meujardim') {
        this.currentTab = 'meujardim';
      }
      this.render();
    });

    document.getElementById(`btn-fav-${item.id}`)?.addEventListener('click', () => {
      this.toggleFavorite(item.id);
    });

    document.getElementById('video-preview-box')?.addEventListener('click', () => {
      this.openModal(
        `Vídeo: ${item.nome}`,
        `
        <div style="text-align: center; display: flex; flex-direction: column; gap: 14px; align-items: center;">
          <div style="width: 100%; aspect-ratio: 16/9; background: #000; border-radius: 12px; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#fff; font-size:1rem; font-weight:600; padding:10px; gap:8px;">
            <i data-lucide="youtube" style="width: 38px; height: 38px; color: #ff0000;"></i>
            <span>Player de Vídeo Demonstrativo</span>
          </div>
          <p style="font-size: 0.9rem; color: var(--texto-secundario); line-height: 1.5;">
            <strong>${item.videoPlaceholder}</strong><br>
            Na versão de produção final este espaço reproduzirá o vídeo prático gravado diretamente pelo especialista.
          </p>
          <button class="btn-primary-action" onclick="window.appInstance.closeModal()">Fechar</button>
        </div>
        `
      );
    });
  }

  // ==========================================
  // TELA 5: MEU JARDIM (ITENS SALVOS)
  // ==========================================
  renderMeuJardim() {
    const itensSalvos = ITENS.filter(i => this.favorites.has(i.id));

    this.dom.content.innerHTML = `
      <div class="section-title">
        <div>
          <h2>Meu Jardim</h2>
          <p style="font-size: 0.8rem; font-weight: 500; color: var(--texto-secundario);">
            ${itensSalvos.length} item(ns) salvo(s) para consulta rápida
          </p>
        </div>
      </div>

      ${!this.currentUser ? `
        <div class="auth-sync-banner" id="banner-auth-sync">
          <div class="auth-sync-banner-content">
            <div class="auth-sync-banner-icon">
              <i data-lucide="cloud"></i>
            </div>
            <div class="auth-sync-banner-text">
              <strong>Sincronize em qualquer aparelho</strong>
              <p>Entre ou crie sua conta para manter seus itens salvos protegidos na nuvem.</p>
            </div>
          </div>
          <button id="btn-banner-login" class="btn-banner-login">Conectar</button>
        </div>
      ` : ''}

      <section class="items-list">
        ${itensSalvos.length > 0
          ? itensSalvos.map(item => this.renderItemCardHtml(item, true)).join('')
          : `
            <div class="empty-state">
              <div class="empty-icon-wrap">
                <i data-lucide="bookmark" class="empty-icon-svg"></i>
              </div>
              <h3 class="empty-title">Seu jardim ainda está vazio</h3>
              <p class="empty-desc">
                Salve ferramentas, plantas, adubos ou serviços para ter acesso rápido sem precisar procurar toda vez.
              </p>
              <button id="btn-go-explore" class="btn-primary-action">Explorar Módulos</button>
            </div>
          `}
      </section>
    `;

    document.getElementById('btn-banner-login')?.addEventListener('click', () => {
      this.openAuthModal('login');
    });

    document.getElementById('btn-go-explore')?.addEventListener('click', () => {
      this.switchTab('inicio');
    });

    this.attachItemCardEvents('meujardim');
  }

  // ==========================================
  // TELA 6: NÍVEL (CONFIGURAÇÃO DO PERFIL)
  // ==========================================
  renderNivel() {
    this.dom.content.innerHTML = `
      <div class="section-title">
        <div>
          <h2>Nível de Experiência</h2>
          <p style="font-size: 0.82rem; font-weight: 500; color: var(--texto-secundario);">
            Define o filtro automático que aparece ao abrir as listas
          </p>
        </div>
      </div>

      <section class="level-selector-list">
        <div class="level-option-card ${this.userLevel === 1 ? 'selected' : ''}" data-level="1">
          <input type="radio" name="level-choice" class="level-radio" ${this.userLevel === 1 ? 'checked' : ''} />
          <div class="level-option-info">
            <h3>
              Iniciante 
              <span class="badge-nivel iniciante">Básico</span>
            </h3>
            <p>Quem está começando a cuidar de plantas em casa ou apartamento. Foco em espécies resistentes e ferramentas fundamentais.</p>
          </div>
        </div>

        <div class="level-option-card ${this.userLevel === 2 ? 'selected' : ''}" data-level="2">
          <input type="radio" name="level-choice" class="level-radio" ${this.userLevel === 2 ? 'checked' : ''} />
          <div class="level-option-info">
            <h3>
              Avançado 
              <span class="badge-nivel avancado">Intermediário</span>
            </h3>
            <p>Para quem já domina as rotinas básicas e quer se aprofundar em adubações minerais, podas de condução e espécies mais exigentes.</p>
          </div>
        </div>

        <div class="level-option-card ${this.userLevel === 3 ? 'selected' : ''}" data-level="3">
          <input type="radio" name="level-choice" class="level-radio" ${this.userLevel === 3 ? 'checked' : ''} />
          <div class="level-option-info">
            <h3>
              Pro 
              <span class="badge-nivel pro">Profissional</span>
            </h3>
            <p>Para quem atua ou deseja trabalhar com paisagismo, correção técnica de solos, automação de irrigação e obras de jardim.</p>
          </div>
        </div>
      </section>

      <!-- Informações sobre o Aplicativo -->
      <article class="about-notes-card">
        <div style="text-align: center; margin-bottom: 14px;">
          <img src="./logo.svg" alt="Jardim Perene" style="max-width: 140px; height: auto; display: inline-block;" />
        </div>
        <h4 style="display: flex; align-items: center; gap: 6px;">
          <i data-lucide="info" style="width: 16px; height: 16px;"></i> Sobre o Jardim Perene
        </h4>
        <p>
          O Jardim Perene é um guia prático e completo de jardinagem e paisagismo direto ao ponto. Ele funciona totalmente sem login, 
          com favoritos e nível sincronizados com segurança na nuvem para o seu dispositivo, sem nunca se perderem ao atualizar a página.
        </p>
        <p style="margin-top: 8px;">
          • Total: 60 itens completos (15 por categoria) cadastrados.<br>
          • 4 módulos essenciais: Ferramentas, Plantas, Adubação e Serviços.<br>
          • Fotos reais em alta definição e vídeos integrados do YouTube.<br>
          • 100% responsivo para celulares e desktops.
        </p>
      </article>
    `;

    document.querySelectorAll('.level-option-card').forEach(card => {
      card.addEventListener('click', () => {
        const lvl = parseInt(card.dataset.level, 10);
        this.saveUserLevel(lvl);
        this.showToast(`Nível alterado para ${NIVEIS[lvl].nome}`, 'check-circle-2');
        this.render();
      });
    });
  }

  // ==========================================
  // HELPERS DE HTML DE CARDS
  // ==========================================
  renderItemCardHtml(item, isFromFavorites = false) {
    const nivelObj = NIVEIS[item.nivel] || NIVEIS[1];
    const isSaved = this.favorites.has(item.id);
    const moduloObj = MODULOS.find(m => m.id === item.modulo);
    const isWhiteBg = item.modulo !== 'servicos';

    return `
      <article class="item-card" data-item-id="${item.id}" data-modulo="${item.modulo}" role="button" tabindex="0" aria-label="${item.nome}">
        <div class="item-card-media ${isWhiteBg ? 'bg-white-contain' : ''}">
          <img src="${item.imagem}" alt="${item.nome}" class="item-card-img" loading="lazy" onerror="this.src='icon.svg'" />
        </div>
        <div class="item-card-body">
          <div class="item-card-header">
            <div>
              <h4 class="item-card-title">${item.nome}</h4>
              <span style="font-size: 0.72rem; color: var(--texto-mutado); display: flex; align-items: center; gap: 4px; margin-top: 2px;">
                <i data-lucide="${moduloObj?.icone || 'sprout'}" style="width: 12px; height: 12px;"></i> ${moduloObj?.nome || ''}
              </span>
            </div>
            <span class="badge-nivel ${nivelObj.slug}">
              Nível ${nivelObj.nome}
            </span>
          </div>

          <p class="item-card-desc">${item.resumo}</p>

          <div class="item-card-footer">
            <span style="display: flex; align-items: center; gap: 5px;">
              <i data-lucide="${item.temVideo ? 'video' : 'file-text'}" style="width: 14px; height: 14px;"></i>
              ${item.temVideo ? 'Vídeo disponível' : 'Ficha completa'}
            </span>
            <span style="display: flex; align-items: center; gap: 4px; font-weight: 600;">
              ${isSaved ? '<i data-lucide="bookmark-check" style="width:14px; height:14px; color:var(--ambar-500);"></i> Salvo' : 'Ver detalhes <i data-lucide="chevron-right" style="width:14px; height:14px;"></i>'}
            </span>
          </div>
        </div>
      </article>
    `;
  }

  attachItemCardEvents(origem = null) {
    this.dom.content.querySelectorAll('.item-card').forEach(card => {
      const open = () => {
        const id = card.dataset.itemId;
        const item = ITENS.find(i => i.id === id);
        if (item) this.openDetail(item, origem);
      };

      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });
  }
}

// Inicializa a aplicação
window.addEventListener('DOMContentLoaded', () => {
  window.appInstance = new JardimApp();
});

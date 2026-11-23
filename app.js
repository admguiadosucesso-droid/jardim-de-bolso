// Jardim de Bolso - Controlador do App (SPA)
import { MODULOS, NIVEIS, DICAS_DO_DIA, ITENS } from './data.js';

class JardimApp {
  constructor() {
    this.userLevel = this.loadUserLevel();
    this.favorites = this.loadFavorites();
    this.currentTab = 'inicio'; // 'inicio', 'meujardim', 'nivel'
    this.currentModule = null;  // 'ferramentas', 'plantas', 'adubacao', 'servicos'
    this.currentFilter = this.userLevel; // abre filtrado pelo nível do perfil conforme especificação
    this.activeItem = null;
    this.previousView = null; // para o botão Voltar retornar à tela de origem
    this.searchQuery = '';
    this.toastTimer = null;

    this.dom = {
      content: document.getElementById('main-content'),
      tabBtns: document.querySelectorAll('.nav-tab-btn'),
      userLevelHeaderPill: document.getElementById('user-level-pill'),
      userLevelHeaderText: document.getElementById('user-level-header-text'),
      favCountBadge: document.getElementById('fav-count-badge'),
      toast: document.getElementById('toast-notice'),
      toastText: document.getElementById('toast-text'),
      modalOverlay: document.getElementById('modal-overlay'),
      modalTitle: document.getElementById('modal-title'),
      modalBody: document.getElementById('modal-body'),
      modalCloseBtn: document.getElementById('modal-close-btn')
    };

    this.init();
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
  }

  loadFavorites() {
    try {
      const saved = localStorage.getItem('jardim_favoritos');
      return saved ? new Set(JSON.parse(saved)) : new Set();
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

  init() {
    this.bindEvents();
    this.updateHeaderBadge();
    this.updateFavBadge();
    this.render();
  }

  bindEvents() {
    // Navegação pelas abas inferiores
    this.dom.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });

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

    // Tecla ESC fecha modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  }

  updateHeaderBadge() {
    const nivelObj = NIVEIS[this.userLevel] || NIVEIS[1];
    if (this.dom.userLevelHeaderText) {
      this.dom.userLevelHeaderText.textContent = nivelObj.nome;
    }
  }

  updateFavBadge() {
    const count = this.favorites.size;
    if (this.dom.favCountBadge) {
      if (count > 0) {
        this.dom.favCountBadge.textContent = count;
        this.dom.favCountBadge.style.display = 'inline-block';
      } else {
        this.dom.favCountBadge.style.display = 'none';
      }
    }
  }

  switchTab(tab) {
    this.currentTab = tab;
    this.currentModule = null;
    this.activeItem = null;
    this.searchQuery = '';
    this.currentFilter = this.userLevel; // reseta filtro para o nível do usuário

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

  showToast(message, icone = '✅') {
    if (!this.dom.toast) return;
    this.dom.toastText.textContent = `${icone} ${message}`;
    this.dom.toast.classList.add('visible');

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
  }

  closeModal() {
    if (!this.dom.modalOverlay) return;
    this.dom.modalOverlay.classList.remove('open');
    this.dom.modalOverlay.setAttribute('aria-hidden', 'true');
  }

  toggleFavorite(itemId) {
    const item = ITENS.find(i => i.id === itemId);
    const itemName = item ? item.nome : 'Item';

    if (this.favorites.has(itemId)) {
      this.favorites.delete(itemId);
      this.showToast(`"${itemName}" removido do Meu Jardim`, '🗑️');
    } else {
      this.favorites.add(itemId);
      this.showToast(`"${itemName}" salvo no Meu Jardim!`, '⭐');
    }
    this.saveFavorites();

    // Re-renderiza detalhe se estiver aberto para atualizar botão
    if (this.activeItem && this.activeItem.id === itemId) {
      const btn = document.getElementById(`btn-fav-${itemId}`);
      if (btn) {
        const isSaved = this.favorites.has(itemId);
        btn.className = `btn-save-jardim ${isSaved ? 'saved' : ''}`;
        btn.innerHTML = isSaved
          ? `⭐ Salvo no Meu Jardim`
          : `🤍 Salvar no Meu Jardim`;
      }
    }
  }

  getDicaDoDia() {
    // Dica baseada no dia do mês (1 a 31)
    const dia = new Date().getDate(); // 1 - 31
    const index = (dia - 1) % DICAS_DO_DIA.length;
    return {
      dia: dia,
      texto: DICAS_DO_DIA[index]
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
          <span class="search-icon">🔍</span>
          <input 
            type="search" 
            id="global-search-input" 
            class="search-input" 
            placeholder="Buscar plantas, ferramentas, adubos..." 
            value="${this.searchQuery}"
            autocomplete="off"
            aria-label="Buscar no Jardim de Bolso"
          />
          <button id="search-clear-btn" class="search-clear-btn ${this.searchQuery ? 'visible' : ''}" title="Limpar busca">✕</button>
        </div>
      </section>

      <!-- Dica do Dia -->
      <article class="daily-tip-card">
        <div class="tip-header">
          <span class="tip-label">💡 Dica do Dia</span>
          <span class="tip-date">Dia ${dica.dia}</span>
        </div>
        <p class="tip-content">${dica.texto}</p>
      </article>

      <!-- Cartões dos 4 Módulos -->
      <section>
        <div class="section-title">
          <span>Explorar Módulos</span>
          <span style="font-size: 0.8rem; font-weight: 500; color: var(--texto-secundario);">23 itens de exemplo</span>
        </div>
        <div class="modules-grid">
          ${MODULOS.map(mod => `
            <button class="module-card" data-module-id="${mod.id}" aria-label="Módulo ${mod.nome}">
              <div class="module-icon-wrap">${mod.emoji}</div>
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
          <span class="badge-nivel ${NIVEIS[this.userLevel].slug}">Nível ${NIVEIS[this.userLevel].nome}</span>
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
    const resultados = ITENS.filter(item => 
      item.nome.toLowerCase().includes(q) ||
      item.resumo.toLowerCase().includes(q) ||
      item.descricao.toLowerCase().includes(q)
    );

    this.dom.content.innerHTML = `
      <section class="search-container">
        <div class="search-input-wrapper">
          <span class="search-icon">🔍</span>
          <input 
            type="search" 
            id="global-search-input" 
            class="search-input" 
            placeholder="Buscar plantas, ferramentas..." 
            value="${this.searchQuery}"
            autofocus
          />
          <button id="search-clear-btn" class="search-clear-btn visible" title="Limpar busca">✕</button>
        </div>
        <div class="search-stats">
          <span>${resultados.length} resultado(s) encontrado(s)</span>
          <button id="btn-cancel-search" style="background:none; border:none; color:var(--verde-floresta-700); cursor:pointer; font-weight:600; font-size:0.8rem;">Voltar ao início</button>
        </div>
      </section>

      <section class="items-list" style="margin-top: 10px;">
        ${resultados.length > 0 
          ? resultados.map(item => this.renderItemCardHtml(item)).join('')
          : `
            <div class="empty-state">
              <div class="empty-icon">🍃</div>
              <h3 class="empty-title">Nenhum item encontrado</h3>
              <p class="empty-desc">Não encontramos nada para "<strong>${this.searchQuery}</strong>". Tente buscar por termos mais genéricos como "tesoura", "samambaia" ou "adubo".</p>
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
      // Coloca o cursor no final do texto
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
    // Abre já filtrada pelo nível do perfil (conforme item 3 da especificação)
    this.currentFilter = this.userLevel;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.render();
  }

  renderModulo(modId) {
    const modulo = MODULOS.find(m => m.id === modId);
    if (!modulo) return this.renderInicio();

    // Filtra itens do módulo
    const itensDoModulo = ITENS.filter(i => i.modulo === modId);

    // Aplica filtro por nível
    const itensFiltrados = itensDoModulo.filter(item => {
      if (this.currentFilter === 'todos') return true;
      return item.nivel === Number(this.currentFilter);
    });

    this.dom.content.innerHTML = `
      <div class="nav-back-bar">
        <button id="btn-back-to-inicio" class="btn-back" title="Voltar ao Início" aria-label="Voltar">←</button>
        <div>
          <h2 class="nav-back-title">${modulo.emoji} ${modulo.nome}</h2>
          <p style="font-size: 0.78rem; color: var(--texto-secundario);">${modulo.descricao}</p>
        </div>
      </div>

      <!-- Barra de Chips de Filtro por Nível -->
      <section>
        <div class="filter-bar" role="tablist" aria-label="Filtro por nível">
          <button class="filter-chip ${this.currentFilter === 'todos' ? 'active' : ''}" data-filter="todos">Todos (${itensDoModulo.length})</button>
          <button class="filter-chip ${this.currentFilter === 1 ? 'active' : ''}" data-filter="1">Iniciante (${itensDoModulo.filter(i => i.nivel === 1).length})</button>
          <button class="filter-chip ${this.currentFilter === 2 ? 'active' : ''}" data-filter="2">Avançado (${itensDoModulo.filter(i => i.nivel === 2).length})</button>
          <button class="filter-chip ${this.currentFilter === 3 ? 'active' : ''}" data-filter="3">Pro (${itensDoModulo.filter(i => i.nivel === 3).length})</button>
        </div>
      </section>

      <!-- Lista de Itens -->
      <section class="items-list">
        ${itensFiltrados.length > 0
          ? itensFiltrados.map(item => this.renderItemCardHtml(item)).join('')
          : `
            <div class="empty-state" style="padding: 30px 10px;">
              <div class="empty-icon">🌱</div>
              <h3 class="empty-title">Nenhum item neste nível</h3>
              <p class="empty-desc">Experimente selecionar "Todos" para ver todos os itens disponíveis neste módulo.</p>
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
        this.renderModulo(this.currentModule);
      });
    });

    document.getElementById('btn-filter-all')?.addEventListener('click', () => {
      this.currentFilter = 'todos';
      this.renderModulo(this.currentModule);
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
        <button id="btn-back-detail" class="btn-back" title="Voltar" aria-label="Voltar">←</button>
        <span style="font-size: 0.85rem; font-weight: 600; color: var(--texto-secundario);">
          ${moduloObj ? moduloObj.nome : 'Voltar'}
        </span>
      </div>

      <div class="detail-view">
        <!-- Cabeçalho do Detalhe -->
        <article class="detail-header-card">
          <div class="detail-top-meta">
            <span class="badge-nivel ${nivelObj.slug}">Nível ${nivelObj.nome}</span>
            <span style="font-size: 0.8rem; font-weight: 500; color: var(--texto-mutado);">${moduloObj?.emoji || '🌿'} ${moduloObj?.nome || ''}</span>
          </div>

          <h1 class="detail-title">${item.nome}</h1>
          <p class="detail-desc">${item.descricao}</p>

          <!-- Botão de Favoritar -->
          <button id="btn-fav-${item.id}" class="btn-save-jardim ${isSaved ? 'saved' : ''}">
            ${isSaved ? '⭐ Salvo no Meu Jardim' : '🤍 Salvar no Meu Jardim'}
          </button>
        </article>

        <!-- Espaço de Vídeo 16:9 (para Ferramentas e Serviços) -->
        ${item.temVideo ? `
          <section>
            <div id="video-preview-box" class="video-placeholder-container" title="Assistir vídeo demonstrativo">
              <div class="video-play-btn">▶</div>
              <span class="video-tag">Vídeo Demonstrativo (16:9)</span>
              <p class="video-note">${item.videoPlaceholder || 'Demonstração prática e dicas de execução com especialista.'}</p>
            </div>
          </section>
        ` : ''}

        <!-- Ficha Técnica (Pares Rótulo / Valor) -->
        ${item.ficha && item.ficha.length > 0 ? `
          <section class="ficha-tecnica-card">
            <h3 class="ficha-title">📋 Ficha Técnica</h3>
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
            <h3 class="section-title" style="margin-bottom: 14px;">👣 Passo a Passo de Execução</h3>
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
          <div style="width: 100%; aspect-ratio: 16/9; background: #000; border-radius: 12px; display:flex; align-items:center; justify-content:center; color:#fff; font-size:1.1rem; font-weight:600; padding:10px;">
            🎬 [Player do YouTube Não Listado]
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

      <section class="items-list">
        ${itensSalvos.length > 0
          ? itensSalvos.map(item => this.renderItemCardHtml(item, true)).join('')
          : `
            <div class="empty-state">
              <div class="empty-icon">🪴</div>
              <h3 class="empty-title">Seu jardim ainda está vazio</h3>
              <p class="empty-desc">
                Salve ferramentas, plantas, adubos ou serviços para ter acesso rápido sem precisar procurar toda vez.
              </p>
              <button id="btn-go-explore" class="btn-primary-action">Explorar Módulos</button>
            </div>
          `}
      </section>
    `;

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
            <h3>🌱 Iniciante <span class="badge-nivel iniciante">Básico</span></h3>
            <p>Quem está começando a cuidar de plantas em casa ou apartamento. Foco em espécies resistentes e ferramentas fundamentais.</p>
          </div>
        </div>

        <div class="level-option-card ${this.userLevel === 2 ? 'selected' : ''}" data-level="2">
          <input type="radio" name="level-choice" class="level-radio" ${this.userLevel === 2 ? 'checked' : ''} />
          <div class="level-option-info">
            <h3>🌿 Avançado <span class="badge-nivel avancado">Intermediário</span></h3>
            <p>Para quem já domina as rotinas básicas e quer se aprofundar em adubações minerais, podas de condução e espécies mais exigentes.</p>
          </div>
        </div>

        <div class="level-option-card ${this.userLevel === 3 ? 'selected' : ''}" data-level="3">
          <input type="radio" name="level-choice" class="level-radio" ${this.userLevel === 3 ? 'checked' : ''} />
          <div class="level-option-info">
            <h3>🌳 Pro <span class="badge-nivel pro">Profissional</span></h3>
            <p>Para quem atua ou deseja trabalhar com paisagismo, correção técnica de solos, automação de irrigação e obras de jardim.</p>
          </div>
        </div>
      </section>

      <!-- Nota Oficial sobre o MVP -->
      <article class="mvp-notes-card">
        <h4>ℹ️ Sobre o MVP Jardim de Bolso (v0.1)</h4>
        <p>
          O Jardim de Bolso é um guia de bolso direto ao ponto. Ele funciona totalmente sem login, 
          com favoritos e nível salvos diretamente no seu dispositivo.
        </p>
        <p style="margin-top: 8px;">
          • Total: 23 itens de referência cadastrados.<br>
          • 4 módulos essenciais: Ferramentas, Plantas, Adubação e Serviços.<br>
          • 100% responsivo para celulares e desktops.
        </p>
      </article>
    `;

    document.querySelectorAll('.level-option-card').forEach(card => {
      card.addEventListener('click', () => {
        const lvl = parseInt(card.dataset.level, 10);
        this.saveUserLevel(lvl);
        this.showToast(`Nível alterado para ${NIVEIS[lvl].nome}`, '⭐');
        this.renderNivel();
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

    return `
      <article class="item-card" data-item-id="${item.id}" role="button" tabindex="0" aria-label="${item.nome}">
        <div class="item-card-header">
          <div>
            <h4 class="item-card-title">${item.nome}</h4>
            <span style="font-size: 0.72rem; color: var(--texto-mutado);">${moduloObj?.emoji || '🌿'} ${moduloObj?.nome || ''}</span>
          </div>
          <span class="badge-nivel ${nivelObj.slug}">Nível ${nivelObj.nome}</span>
        </div>

        <p class="item-card-desc">${item.resumo}</p>

        <div class="item-card-footer">
          <span>${item.temVideo ? '🎬 Vídeo disponível' : '📖 Ficha completa'}</span>
          <span style="font-size: 0.95rem;">${isSaved ? '⭐ Salvo' : 'Ver detalhes →'}</span>
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

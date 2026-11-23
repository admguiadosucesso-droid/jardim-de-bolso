# Jardim de Bolso 🌿

> **Documentação do MVP clicável · Versão 0.1**  
> Guia prático de bolso de jardinagem e paisagismo em formato de aplicação web mobile-first e PWA.

---

## 🔗 Links Oficiais

- 🌐 **Aplicação no Ar (Produção):** [jardim-de-bolso-nu.vercel.app](https://jardim-de-bolso-nu.vercel.app)
- 🐙 **Repositório GitHub:** [github.com/admguiadosucesso-droid/jardim-de-bolso](https://github.com/admguiadosucesso-droid/jardim-de-bolso)

---

## 📌 Visão Geral

O **Jardim de Bolso** foi concebido para entregar consulta rápida, prática e confiável sobre ferramentas, plantas, adubação e serviços de jardinagem. O conteúdo é organizado de forma inteligente por nível de experiência do usuário: **Iniciante**, **Avançado** e **Pro**.

---

## 📱 Telas e Recursos Implementados

1. **Início**:
   - Barra de busca global em tempo real (procura em títulos e descrições com contador de resultados e correspondência estrita por nome).
   - **Dica do Dia**: Calendário dinâmico com 31 dicas práticas de jardinagem (uma dica para cada dia do mês sincronizada automaticamente).
   - 4 Cartões de módulos com contadores de itens (15 itens em cada categoria, totalizando 60 itens).
   - Itens recomendados com base no nível configurado no perfil.

2. **Lista do Módulo**:
   - Módulos disponíveis: **Ferramentas (15)**, **Plantas (15)**, **Adubação (15)** e **Serviços (15)**. Totalizando **60 itens completos** de referência com fotos em alta resolução e vídeos integrados do YouTube.
   - Chips de filtro por nível (`Todos`, `Iniciante`, `Avançado` e `Pro`). Abre automaticamente filtrado pelo nível do perfil.
   - Botão "Voltar" navegável.

3. **Detalhes do Item**:
   - Informações completas do item, badge de nível e descrição aprofundada.
   - **Hero Banner com foto real em alta resolução** de cada item.
   - **Player de Vídeo do YouTube integrado** (proporção 16:9) e link direto para assistir no YouTube.
   - **Ficha Técnica**: Rótulos e valores de cultivo (ex.: Luz, Rega, Tamanho, Cuidados, Doses, Capacidade de corte).
   - **Passo a Passo com 4 Etapas** (exclusivo para Serviços).
   - Botão **Salvar no Meu Jardim** com feedback visual imediato (toast).

4. **Meu Jardim (Favoritos)**:
   - Lista rápida de itens salvos pelo usuário para consulta sem internet.
   - Estado vazio orientativo caso ainda não existam itens salvos.

5. **Nível do Usuário & Perfil**:
   - Seleção intuitiva de nível: *Iniciante*, *Avançado* ou *Pro*.
   - Define o comportamento padrão dos filtros em todas as listas.
   - Informações institucionais sobre o MVP v0.1.

6. **Ícones Premium & PWA Offline**:
   - **Ícones Vetoriais Lucide**: Visual moderno, limpo e profissional sem emojis crus.
   - **Progressive Web App (PWA)**: Arquivo `manifest.json` e `sw.js` com cache-first permitindo instalação como aplicativo na tela inicial do celular ou desktop e funcionamento 100% offline.
   - **Persistência**: Favoritos e nível salvos no dispositivo via `localStorage` (sem necessidade de cadastro ou login).

---

## 🎨 Design & Estilo

- **Mobile-first**: Largura máxima de 480px, centralizado na visualização em desktop.
- **Paleta Botânica**: Verde-floresta (`#1b4332`), Verde-folha claro (`#d8f3dc`, `#74c69d`), Âmbar (`#e9a63a`) e fundo pálido orgânico (`#f3f6f3`).
- **Alto Contraste WCAG**: Textos em caixas e cartões brancos utilizam preto botânico (`#101c15`) e verde floresta escuro (`#1b4332`), garantindo máxima legibilidade.
- **Tipografia**: Bricolage Grotesque & Plus Jakarta Sans.
- **Modo Escuro**: Detecção e transição automática com base na preferência do sistema.

---

## 🚀 Publicação na Vercel

Aplicação estática ultra leve, sem dependências de compilação pesadas, integrada ao GitHub e com deploy contínuo na Vercel.
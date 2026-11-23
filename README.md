# Jardim de Bolso 🌿

> **Documentação do MVP clicável · Versão 0.1**  
> Guia prático de bolso de jardinagem e paisagismo em formato de aplicação web mobile-first.

---

## 📌 Visão Geral

O **Jardim de Bolso** foi concebido para entregar consulta rápida, prática e confiável sobre ferramentas, plantas, adubação e serviços de jardinagem. O conteúdo é organizado de forma inteligente por nível de experiência do usuário: **Iniciante**, **Avançado** e **Pro**.

---

## 📱 Telas e Recursos Implementados

1. **Início**:
   - Barra de busca global em tempo real (procura em títulos e descrições com contador de resultados).
   - **Dica do Dia**: Calendário dinâmico com 31 dicas práticas de jardinagem (uma dica para cada dia do mês).
   - 4 Cartões de módulos com contadores de itens.
   - Itens recomendados com base no nível configurado no perfil.

2. **Lista do Módulo**:
   - Módulos disponíveis: **Ferramentas (6)**, **Plantas (6)**, **Adubação (5)** e **Serviços (6)**. Totalizando 23 itens de referência.
   - Chips de filtro por nível (`Todos`, `Iniciante`, `Avançado` e `Pro`). Abre automaticamente filtrado pelo nível do perfil.
   - Botão "Voltar" navegável.

3. **Detalhes do Item**:
   - Informações completas do item, badge de nível e descrição aprofundada.
   - **Espaço de vídeo 16:9** (para Ferramentas e Serviços) com player e modal informativo.
   - **Ficha Técnica**: Rótulos e valores de cultivo (ex.: Luz, Rega, Tamanho, Cuidados, Doses).
   - **Passo a Passo com 4 Etapas** (exclusivo para Serviços).
   - Botão **Salvar no Meu Jardim** com feedback visual imediato (toast).

4. **Meu Jardim (Favoritos)**:
   - Lista rápida de itens salvos pelo usuário para consulta sem internet.
   - Estado vazio orientativo caso ainda não existam itens salvos.

5. **Nível do Usuário & Perfil**:
   - Seleção intuitiva de nível: *Iniciante*, *Avançado* ou *Pro*.
   - Define o comportamento padrão dos filtros em todas as listas.
   - Informações institucionais sobre o MVP v0.1.

6. **Persistência Offline**:
   - Favoritos e nível salvos no dispositivo via `localStorage` (sem necessidade de cadastro ou login).

---

## 🎨 Design & Estilo

- **Mobile-first**: Largura máxima de 480px, centralizado na visualização em desktop.
- **Paleta Botânica**: Verde-floresta (`#1b4332`), Verde-folha claro (`#d8f3dc`, `#74c69d`), Âmbar (`#e9a63a`) e fundo pálido orgânico (`#f3f6f3`).
- **Tipografia**: Bricolage Grotesque & Plus Jakarta Sans.
- **Modo Escuro**: Detecção e transição automática com base na preferência do sistema.

---

## 🚀 Publicação na Vercel

Aplicação estática ultra leve, sem dependências de compilação pesadas, pronta para deploy contínuo integrado ao GitHub.

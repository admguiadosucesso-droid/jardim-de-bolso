// Jardim de Bolso - Banco de Dados Oficial
// 60 Itens completos (15 por categoria) em 4 módulos e 3 níveis de experiência
// Fotos reais em alta resolução e vídeos integrados do YouTube
// Ícones Premium via Lucide

export const MODULOS = [
  {
    "id": "ferramentas",
    "nome": "Ferramentas",
    "icone": "wrench",
    "total": 15,
    "descricao": "Equipamentos essenciais, cuidados, afiação e técnicas de manuseio seguro."
  },
  {
    "id": "plantas",
    "nome": "Plantas",
    "icone": "leaf",
    "total": 15,
    "descricao": "Guia de cultivo com iluminação, rega, dimensões e particularidades de cada espécie."
  },
  {
    "id": "adubacao",
    "nome": "Adubação",
    "icone": "flask-conical",
    "total": 15,
    "descricao": "Nutrientes, fertilizantes orgânicos e químicos, dosagens e épocas de aplicação."
  },
  {
    "id": "servicos",
    "nome": "Serviços",
    "icone": "clipboard-list",
    "total": 15,
    "descricao": "Passo a passo detalhado para reformas, plantios, podas e projetos de jardinagem."
  }
];

export const NIVEIS = {
  "1": { "id": 1, "slug": "iniciante", "nome": "Iniciante", "badge": "Iniciante", "cor": "verde", "icone": "seedling" },
  "2": { "id": 2, "slug": "avancado", "nome": "Avançado", "badge": "Avançado", "cor": "azul", "icone": "sprout" },
  "3": { "id": 3, "slug": "pro", "nome": "Pro", "badge": "Pro", "cor": "ouro", "icone": "tree-pine" }
};

export const DICAS_DO_DIA = [
  "Cheque a umidade da terra com a ponta do dedo antes de regar: se sair sujo, o solo ainda tem água.",
  "Regue as plantas preferencialmente nas primeiras horas da manhã para evitar a proliferação de fungos.",
  "Vasos de cerâmica ou barro evaporam água mais rápido que vasos de plástico: ajuste a frequência da rega.",
  "Limpe as folhas das suas folhagens tropicais com um pano macio úmido para melhorar a fotossíntese.",
  "Nunca adube uma planta com a terra totalmente seca; faça uma rega leve antes para não queimar raízes.",
  "Água parada no pratinho sufoca as raízes e atrai mosquitos; descarte o excesso 20 minutos após regar.",
  "Flores e folhas secas consomem energia da planta; retire-as regularmente com uma tesoura afiada.",
  "Use cobertura morta (casca de pinus ou palha) nos vasos para economizar até 50% de água de irrigação.",
  "Esterilize sua tesoura de poda com álcool 70% entre uma planta e outra para não espalhar doenças.",
  "Gemas apicais podadas estimulam o crescimento de novos galhos laterais, tornando a planta mais cheia.",
  "Suculentas com folhas amareladas e translúcidas geralmente indicam excesso de água, não falta.",
  "Folhas com pontas secas e marrons em ambientes internos costumam ser sinal de ar condicionado ou baixa umidade.",
  "Ao preparar vasos, garanta uma camada de argila expandida ou brita no fundo protegida por manta bidim.",
  "Plantas recém-transplantadas precisam de alguns dias na sombra clara antes de voltar ao sol pleno.",
  "O calcário demora de 60 a 90 dias para reagir com o solo; planeje sua correção com antecedência.",
  "O húmus de minhoca é neutro e suave: pode ser usado sem medo de queimar as raízes mesmo para iniciantes.",
  "Evite molhar flores ao regar; a água direta pode manchar e fazer as pétalas caírem precocemente.",
  "Monitore a parte inferior das folhas semanalmente: é onde cochonilhas e pulgões costumam se esconder.",
  "Ao podar cercas vivas, corte a base ligeiramente mais larga que o topo para a luz solar bater por igual.",
  "Plantas em locais de meia-sombra precisam de 3 a 4 horas de sol direto suave (manhã ou fim de tarde).",
  "A borra de café deve ser sempre compostada antes de ir aos vasos; pura ela compacta o solo e fermenta.",
  "Substrato leve com perlita ou casca de arroz carbonizada é o segredo para orquídeas e samambaias respirarem.",
  "Adubos de liberação lenta (tipo Osmocote) liberam nutrientes gradualmente e evitam excessos nas raízes.",
  "Evite regar plantas ao meio-dia sob sol forte: o choque térmico e o efeito lupa prejudicam os tecidos.",
  "Ao retirar uma muda do torrão, aperte as laterais do vaso plástico com carinho para não romper as raízes.",
  "Para saber se uma planta precisa de troca de vaso, veja se raízes estão saindo pelos furos de drenagem.",
  "A calêndula e o manjericão plantados perto de hortas funcionam como repelentes naturais de insetos.",
  "Plantas suculentas e cactos dispensam adubação durante o inverno, período em que entram em dormência.",
  "Seque e limpe suas ferramentas de corte após o uso e passe uma gota de óleo mineral para não oxidar.",
  "Folhas novas nascendo pequenas e pálidas geralmente indicam falta de luz ou deficiência de nitrogênio.",
  "Cultivar plantas reduz o estresse e melhora a qualidade do ar da sua casa: aproveite seu momento verde!"
];

export const ITENS = [
  // =========================================================================
  // CATEGORIA 1: FERRAMENTAS (15 ITENS)
  // =========================================================================
  {
    "id": "ferramenta-1",
    "modulo": "ferramentas",
    "nome": "Tesoura de poda bypass",
    "tags": ["tesoura", "poda", "corte", "bypass", "galho"],
    "nivel": 1,
    "icone": "scissors",
    "imagem": "./images/ferramentas/tesoura-de-poda.webp",
    "resumo": "Cortes limpos e precisos em ramos verdes, desbaste de flores e colheitas sem mastigar os caules.",
    "descricao": "A tesoura bypass possui duas lâminas curvas que deslizam uma sobre a outra como uma tesoura comum. É a ferramenta indispensável para todo jardineiro, permitindo cicatrização rápida sem esmagar as fibras vegetais.",
    "temVideo": true,
    "youtubeId": "3FhZ-7V3Xh0",
    "videoTitulo": "Como Usar, Regular e Amolar sua Tesoura de Poda",
    "ficha": [
      { "rotulo": "Capacidade de corte", "valor": "Ramos vivos de até 15 mm a 20 mm de diâmetro." },
      { "rotulo": "Tipo de lâmina", "valor": "Aço carbono temperado com revestimento antiaderente." },
      { "rotulo": "Manutenção", "valor": "Limpeza com álcool 70% e lubrificação da mola após o uso." },
      { "rotulo": "Recomendação", "valor": "Corte sempre em ângulo de 45° a 5 mm acima de uma gema viva." }
    ]
  },
  {
    "id": "ferramenta-2",
    "modulo": "ferramentas",
    "nome": "Tesoura de cerca viva",
    "tags": ["tesoura", "cerca viva", "poda", "sebes", "topiaria"],
    "nivel": 2,
    "icone": "scissors",
    "imagem": "./images/ferramentas/tesoura-de-cerca-viva.webp",
    "resumo": "Lâminas longas para nivelamento retilíneo, alinhamento de sebes e acabamento de topiaria.",
    "descricao": "Projetada com lâminas retas de 20 a 30 cm para cortar múltiplos brotos de uma só vez, criando planos uniformes e geométricos em murais verdes como murta, pingo-de-ouro e buxinho.",
    "temVideo": true,
    "youtubeId": "q_6zWlM_k0M",
    "videoTitulo": "Técnicas de Alinhamento com Tesoura de Cerca Viva",
    "ficha": [
      { "rotulo": "Comprimento das lâminas", "valor": "Aço forjado de 25 cm a 30 cm de corte útil." },
      { "rotulo": "Amortecedores", "valor": "Batentes de borracha para absorção de impacto nos pulsos." },
      { "rotulo": "Uso principal", "valor": "Podas de formação e nivelamento de arbustos densos." },
      { "rotulo": "Cuidados", "valor": "Ajuste periódica da porca central para evitar folga entre lâminas." }
    ]
  },
  {
    "id": "ferramenta-3",
    "modulo": "ferramentas",
    "nome": "Pá de mão (transplantador)",
    "tags": ["pa", "transplantador", "vaso", "muda", "plantio"],
    "nivel": 1,
    "icone": "shovel",
    "imagem": "./images/ferramentas/pa-de-mao.webp",
    "resumo": "Pá estreita graduada para abertura de covas perfeitas e transplante seguro de mudas.",
    "descricao": "Com régua gravada em centímetros no corpo da lâmina, permite medir a profundidade exata da cova conforme a necessidade de cada muda, preservando a integridade do torrão e das raízes.",
    "temVideo": true,
    "youtubeId": "r-P0fCqMh_w",
    "videoTitulo": "Como Transplantar Mudas Usando a Pá de Mão",
    "ficha": [
      { "rotulo": "Material", "valor": "Aço inoxidável com cabo emborrachado ergonômico." },
      { "rotulo": "Graduação", "valor": "Escala de profundidade gravada de 0 a 10 cm." },
      { "rotulo": "Indicação", "valor": "Vasos, jardineiras, floreiras e canteiros delicados." },
      { "rotulo": "Limpeza", "valor": "Lavar com água corrente e secar bem antes de guardar." }
    ]
  },
  {
    "id": "ferramenta-4",
    "modulo": "ferramentas",
    "nome": "Ancinho / Rastelo de mão",
    "tags": ["ancinho", "rastelo", "aeracao", "terra", "solo"],
    "nivel": 1,
    "icone": "git-fork",
    "imagem": "./images/ferramentas/ancinho.webp",
    "resumo": "Descompactação superficial, aeração das raízes e incorporação uniforme de adubos.",
    "descricao": "Dotado de 3 dentes de aço robustos, é ideal para romper a crosta dura que se forma na superfície dos vasos após regas contínuas, facilitando a penetração de oxigênio e nutrientes.",
    "temVideo": true,
    "youtubeId": "eR6E7_75w2w",
    "videoTitulo": "Aeração de Solo e Uso Correto do Rastelo de Mão",
    "ficha": [
      { "rotulo": "Número de dentes", "valor": "3 garras curvas em aço carbono pintado eletrostaticamente." },
      { "rotulo": "Profundidade de ação", "valor": "3 a 5 cm sem ferir o sistema radicular profundo." },
      { "rotulo": "Aplicação", "valor": "Afofar terra, nivelar canteiros e incorporar húmus." },
      { "rotulo": "Cabo", "valor": "Empunhadura anatômica anti-deslizante." }
    ]
  },
  {
    "id": "ferramenta-5",
    "modulo": "ferramentas",
    "nome": "Pulverizador de pressão prévia",
    "tags": ["pulverizador", "borrifador", "adubo foliar", "calda", "inseticida"],
    "nivel": 1,
    "icone": "droplet",
    "imagem": "./images/ferramentas/pulverizador.webp",
    "resumo": "Névoa ultrafina contínua para aplicação de biofertilizantes foliares e controle de pragas.",
    "descricao": "O êmbolo de compressão acumula pressão no reservatório, permitindo pulverizar sem cansar a mão. O bico de latão ajustável vai de névoa microscópica a jato concentrado de alcance pontual.",
    "temVideo": true,
    "youtubeId": "H5zD7t8vMSo",
    "videoTitulo": "Regulagem e Limpeza do Pulverizador de Pressão",
    "ficha": [
      { "rotulo": "Capacidade útil", "valor": "1,5 a 2,0 Litros com medidor translúcido." },
      { "rotulo": "Bico dosador", "valor": "Latão maciço com regulagem de abertura de jato." },
      { "rotulo": "Válvula", "valor": "Válvula de alívio de pressão manual para despressurização." },
      { "rotulo": "Cuidados", "valor": "Nunca armazenar com calda pressurizada; enxaguar após o uso." }
    ]
  },
  {
    "id": "ferramenta-6",
    "modulo": "ferramentas",
    "nome": "Regador de bico fino longo",
    "tags": ["regador", "rega", "agua", "bico fino", "vaso"],
    "nivel": 1,
    "icone": "droplets",
    "imagem": "./images/ferramentas/regador.webp",
    "resumo": "Alcance cirúrgico na base das plantas evitando molhar folhas sensíveis e flores.",
    "descricao": "Seu tubo alongado e estreito permite aplicar água com precisão milimétrica direto no colo da planta, sendo indispensável para suculentas, violetas e vasos densos que não toleram água acumulada na coroa.",
    "temVideo": true,
    "youtubeId": "m2T9u0U6N_0",
    "videoTitulo": "Como Regar Corretamente sem Molhar as Folhas",
    "ficha": [
      { "rotulo": "Capacidade", "valor": "1,0 a 1,5 Litros (equilíbrio ideal para peso na mão)." },
      { "rotulo": "Comprimento do bico", "valor": "Tubo curvo de 20 cm em inox ou polímero rígido." },
      { "rotulo": "Fluxo", "valor": "Contínuo, suave e sem respingos para fora da borda do vaso." },
      { "rotulo": "Benefício", "valor": "Previne manchas foliares e fungos causados por umidade na copa." }
    ]
  },
  {
    "id": "ferramenta-7",
    "modulo": "ferramentas",
    "nome": "Serrote de poda curvo",
    "tags": ["serrote", "serra", "poda", "galho grosso", "arboricultura"],
    "nivel": 3,
    "icone": "hammer",
    "imagem": "./images/ferramentas/serrote-de-poda-curvo.webp",
    "resumo": "Corte de galhos grossos e lenhosos com dentes travados em aço japonês que cortam na tração.",
    "descricao": "Diferente de serras de marcenaria que cortam empurrando, o serrote de poda corta ao puxar. O formato curvado engata no galho com menos esforço, realizando cortes limpos onde a tesoura não alcança.",
    "temVideo": true,
    "youtubeId": "x3uQ5v3A9mU",
    "videoTitulo": "Técnica de 3 Cortes em Galhos Pesados com Serrote",
    "ficha": [
      { "rotulo": "Comprimento da lâmina", "valor": "30 a 35 cm com dentes temperados por indução." },
      { "rotulo": "Diâmetro de corte", "valor": "Galhos vivos e lenhosos de 4 a 12 cm de espessura." },
      { "rotulo": "Segurança", "valor": "Bainha rígida com presilha de cinto para porte seguro." },
      { "rotulo": "Técnica recomendada", "valor": "Sempre fazer o corte de alívio por baixo antes do corte final." }
    ]
  },
  {
    "id": "ferramenta-8",
    "modulo": "ferramentas",
    "nome": "Podão telescópico de galhos altos",
    "tags": ["podao", "telescopico", "galho alto", "arvore", "copa"],
    "nivel": 3,
    "icone": "crosshair",
    "imagem": "./images/ferramentas/podao-telescopico.webp",
    "resumo": "Poda de condução e remoção de ramos secos em copas de árvores sem necessidade de escadas.",
    "descricao": "Combina cabo extensível de até 4 metros com sistema de roldanas multiplicadoras de força e serrote de ponta. Permite podar galhos aéreos mantendo o operador em posição estável no chão.",
    "temVideo": true,
    "youtubeId": "W9o7k9z8nMo",
    "videoTitulo": "Como Operar Podão Telescópico com Total Segurança",
    "ficha": [
      { "rotulo": "Alcance útil", "valor": "Cabo extensível de alumínio ajustável de 1,8 m até 4,0 m." },
      { "rotulo": "Mecanismo", "valor": "Corda de alta tenacidade e conjunto de 3 roldanas de torque." },
      { "rotulo": "Capacidade tesoura", "valor": "Até 30 mm na mandíbula de corte." },
      { "rotulo": "EPI obrigatório", "valor": "Capacete com viseira e óculos de proteção contra serragem." }
    ]
  },
  {
    "id": "ferramenta-9",
    "modulo": "ferramentas",
    "nome": "Tesoura de colheita e desbaste (ponta fina)",
    "tags": ["tesoura", "colheita", "desbaste", "bonsai", "ervas"],
    "nivel": 1,
    "icone": "scissors",
    "imagem": "./images/ferramentas/tesoura-de-colheita.webp",
    "resumo": "Ponta reta e afilada para acessar o miolo de folhagens densas, desbaste de brotos e colheita de temperos.",
    "descricao": "Projetada com bico longo e fino, alcança brotos internos sem esbarrar nas folhas vizinhas. É a preferida para colheita diária em hortas de temperos, bonsai, orquídeas e limpeza de violetas.",
    "temVideo": true,
    "youtubeId": "kQ2mE1yR7_g",
    "videoTitulo": "Como Usar a Tesoura de Desbaste em Hortas e Bonsai",
    "ficha": [
      { "rotulo": "Tipo de ponta", "valor": "Micro-ponta reta ultra afiada em inox cirúrgico." },
      { "rotulo": "Abertura", "valor": "Mola de retorno suave para trabalhos prolongados sem fadiga." },
      { "rotulo": "Indicação", "valor": "Temperos, violetas, samambaias e colheita de flores." },
      { "rotulo": "Afiação", "valor": "Pedra d'água de granulação 1000/3000." }
    ]
  },
  {
    "id": "ferramenta-10",
    "modulo": "ferramentas",
    "nome": "Sacho de duas pontas (coração e garfo)",
    "tags": ["sacho", "enxadinha", "capina", "raiz", "canteiro"],
    "nivel": 1,
    "icone": "wrench",
    "imagem": "./images/ferramentas/sacho-de-duas-pontas.webp",
    "resumo": "Lâmina em coração de um lado para capina profunda e dois dentes do outro para afofar a terra.",
    "descricao": "Versatilidade 2 em 1: de um lado arranca ervas daninhas com raiz inteira através de alavanca, e virando o sacho você descompacta o solo e remove pedregulhos com os dentes forjados.",
    "temVideo": true,
    "youtubeId": "v8p6f0K7m_0",
    "videoTitulo": "Eliminando Ervas Daninhas pela Raiz com Sacho",
    "ficha": [
      { "rotulo": "Construção", "valor": "Aço forjado inteiriço de alta resistência a torção." },
      { "rotulo": "Cabo", "valor": "Madeira tratada ou fibra sintética de 30 a 40 cm." },
      { "rotulo": "Aplicação", "valor": "Capina manual, abertura de valetas e aeração." },
      { "rotulo": "Manutenção", "valor": "Remover torrões secos após o trabalho para evitar corrosão." }
    ]
  },
  {
    "id": "ferramenta-11",
    "modulo": "ferramentas",
    "nome": "Carrinho de mão reforçado",
    "tags": ["carrinho de mao", "transporte", "terra", "composto", "substrato"],
    "nivel": 2,
    "icone": "truck",
    "imagem": "./images/ferramentas/carrinho-de-mao.webp",
    "resumo": "Transporte ergonômico de substratos, composto orgânico, pedras e vasos pesados.",
    "descricao": "Item vital para projetos paisagísticos e manutenções maiores. Sua caçamba estampada de alta capacidade distribui o peso sobre a roda com pneu pneumático, aliviando o esforço na lombar do operador.",
    "temVideo": true,
    "youtubeId": "n8y4v2m1_Xw",
    "videoTitulo": "Como Escolher e Operar Carrinho de Mão sem Lesões",
    "ficha": [
      { "rotulo": "Capacidade de carga", "valor": "50 a 65 Litros (até 120 kg de material sólido)." },
      { "rotulo": "Pneu", "valor": "Pneumático 3.25-8 com câmara de ar ou borracha maciça." },
      { "rotulo": "Acabamento", "valor": "Pintura eletrostática a pó anticorrosiva." },
      { "rotulo": "Postura", "valor": "Levantar a carga usando a força das pernas e não da coluna." }
    ]
  },
  {
    "id": "ferramenta-12",
    "modulo": "ferramentas",
    "nome": "Medidor de pH e umidade 3 em 1",
    "tags": ["medidor", "ph", "umidade", "sensor", "analise"],
    "nivel": 2,
    "icone": "gauge",
    "imagem": "./images/ferramentas/medidor-de-ph-e-umidade.webp",
    "resumo": "Hastes de precisão para leitura instantânea de pH, umidade interna e nível de luz.",
    "descricao": "Funciona por princípios eletroquímicos sem pilhas ou baterias. Basta inserir as duas hastes metálicas a 10 cm no substrato para saber instantaneamente se a planta necessita de rega ou se o solo está ácido.",
    "temVideo": true,
    "youtubeId": "b7y2n9x1_Po",
    "videoTitulo": "Calibração e Uso do Medidor de Solo 3 em 1",
    "ficha": [
      { "rotulo": "Faixa de pH", "valor": "3,5 a 8,0 (Ácido a Alcalino)." },
      { "rotulo": "Escala de umidade", "valor": "1 a 10 (Dry / Moist / Wet)." },
      { "rotulo": "Alimentação", "valor": "Sem pilhas (alimentado por reações de contato com o solo)." },
      { "rotulo": "Cuidados", "valor": "Limpar e secar as pontas das hastes com lixa fina suave." }
    ]
  },
  {
    "id": "ferramenta-13",
    "modulo": "ferramentas",
    "nome": "Vassoura metálica regulável para gramado",
    "tags": ["vassoura", "rastelo", "gramado", "limpeza", "folhas"],
    "nivel": 1,
    "icone": "brush",
    "imagem": "./images/ferramentas/vassoura-metalica.webp",
    "resumo": "Dentes de aço flexíveis para varrição rápida de folhas secas sem arrancar as raízes da grama.",
    "descricao": "Com alavanca central que expande ou recolhe a abertura dos 15 a 22 dentes de arame, adapta-se tanto a áreas abertas quanto a canteiros estreitos, recolhendo matéria seca sem danificar o gramado.",
    "temVideo": true,
    "youtubeId": "c5t7m0u3_Qw",
    "videoTitulo": "Como Varrer o Gramado Corretamente sem Rasgar o Tapete",
    "ficha": [
      { "rotulo": "Ajuste de abertura", "valor": "Abertura do leque regulável de 20 cm a 55 cm." },
      { "rotulo": "Dentes", "valor": "Arame de aço mola temperado flexível de alto retorno." },
      { "rotulo": "Benefício ecológico", "valor": "Recolhe folhas para compostagem sem queimar o solo." },
      { "rotulo": "Cabo", "valor": "Alumínio tubular leve de 1,20 m." }
    ]
  },
  {
    "id": "ferramenta-14",
    "modulo": "ferramentas",
    "nome": "Luvas de jardinagem com reforço e nitrila",
    "tags": ["luva", "seguranca", "epi", "espinhos", "protecao"],
    "nivel": 1,
    "icone": "shield-check",
    "imagem": "./images/ferramentas/luvas-de-jardinagem.webp",
    "resumo": "Proteção indispensável contra espinhos, terra úmida, insetos e calos nas mãos.",
    "descricao": "Confeccionadas em algodão respirável com banho de nitrila impermeável nas palmas e dedos. Protege a pele de fungos e bactérias do solo enquanto garante aderência firme em cabos molhados.",
    "temVideo": true,
    "youtubeId": "f4r6n8u2_Km",
    "videoTitulo": "EPIs no Jardim: Luvas Certas para Espinhos e Poda",
    "ficha": [
      { "rotulo": "Revestimento", "valor": "Borracha nitrílica de alta elasticidade e proteção táctil." },
      { "rotulo": "Dorso", "valor": "Tecido em malha ventilada para evitar suor excessivo." },
      { "rotulo": "Lavagem", "valor": "Lavar à mão com sabão neutro e secar à sombra." },
      { "rotulo": "Indicação", "valor": "Poda de roseiras, manipulação de cactos e preparo de terra." }
    ]
  },
  {
    "id": "ferramenta-15",
    "modulo": "ferramentas",
    "nome": "Cortador de grama helicoidal manual",
    "tags": ["cortador", "grama", "helicoidal", "corte", "tesoura"],
    "nivel": 3,
    "icone": "disc",
    "imagem": "./images/ferramentas/cortador-de-grama-helicoidal.webp",
    "resumo": "Corte de precisão em tesoura cilíndrica sem queimar as pontas da grama, totalmente silencioso e ecológico.",
    "descricao": "Diferente dos cortadores de lâmina rotativa que 'rasgam' a grama por impacto, o sistema helicoidal corta como uma tesoura afiada. O resultado é um gramado sem pontas secas e com aparência de campo de golfe.",
    "temVideo": true,
    "youtubeId": "d3e5w7q9_Lo",
    "videoTitulo": "Como Usar Cortador Helicoidal Manual para Gramado Perfeito",
    "ficha": [
      { "rotulo": "Sistema de corte", "valor": "5 lâminas curvas de aço carbono em cilindro giratório." },
      { "rotulo": "Largura de trabalho", "valor": "Faixa útil de 38 cm a 40 cm por passada." },
      { "rotulo": "Ajuste de altura", "valor": "4 posições milimétricas de 15 mm a 45 mm." },
      { "rotulo": "Vantagem ecológica", "valor": "Zero emissão de poluentes, zero ruído de motor e sem cabos." }
    ]
  },

  // =========================================================================
  // CATEGORIA 2: PLANTAS (15 ITENS)
  // =========================================================================
  {
    "id": "planta-1",
    "modulo": "plantas",
    "nome": "Espada-de-São-Jorge (Sansevieria trifasciata)",
    "tags": ["espada de sao jorge", "sansevieria", "planta", "sombra", "resistente"],
    "nivel": 1,
    "icone": "leaf",
    "imagem": "./images/plantas/espada-de-sao-jorge.webp",
    "resumo": "Extremamente resistente, tolera pouca rega, purifica o ar e adapta-se de meia-sombra a sol pleno.",
    "descricao": "Uma das plantas mais fáceis de cultivar no mundo. Suas folhas verticais com bordas amarelas acumulam água e resistem a longos períodos de estiagem, sendo recomendada pela NASA por filtrar poluentes do ar.",
    "temVideo": true,
    "youtubeId": "a7s9d1f3_Gh",
    "videoTitulo": "Como Cuidar e Multiplicar Espada-de-São-Jorge",
    "ficha": [
      { "rotulo": "Iluminação", "valor": "Sol pleno, meia-sombra ou luz difusa em interiores." },
      { "rotulo": "Frequência de rega", "valor": "A cada 15 a 20 dias (deixar o solo secar totalmente)." },
      { "rotulo": "Substrato", "valor": "Terra vegetal misturada com 40% de areia grossa drenante." },
      { "rotulo": "Porte adulto", "valor": "60 cm a 100 cm de altura." }
    ]
  },
  {
    "id": "planta-2",
    "modulo": "plantas",
    "nome": "Jiboia verde (Epipremnum aureum)",
    "tags": ["jiboia", "pendente", "trepadeira", "folhagem", "interior"],
    "nivel": 1,
    "icone": "leaf",
    "imagem": "./images/plantas/jiboia-verde.webp",
    "resumo": "Folhagem pendente vigorosa em formato de coração, de crescimento rápido e fácil propagação em água.",
    "descricao": "Se adapta incrivelmente bem em prateleiras altas e vasos suspensos ou tutorada em estacas de fibra de coco. Suas folhas em formato de coração verde-brilhante avisam quando têm sede ficando levemente caídas.",
    "temVideo": true,
    "youtubeId": "k3j5h7g9_Fd",
    "videoTitulo": "Segredos para a Jiboia Crescer Rápido e Cheia de Folhas",
    "ficha": [
      { "rotulo": "Luz ideal", "valor": "Luz difusa abundante a meia-sombra (nunca sol direto nas folhas)." },
      { "rotulo": "Rega", "valor": "1 a 2 vezes por semana quando o solo superficial estiver seco." },
      { "rotulo": "Propagação", "valor": "Corte de nós mergulhados em copo com água pura." },
      { "rotulo": "Toxicidade", "valor": "Tóxica para pets se mastigada (manter em locais altos)." }
    ]
  },
  {
    "id": "planta-3",
    "modulo": "plantas",
    "nome": "Zamioculca (Zamioculcas zamiifolia)",
    "tags": ["zamioculca", "sombra", "interior", "decorativa", "resistente"],
    "nivel": 1,
    "icone": "leaf",
    "imagem": "./images/plantas/zamioculca.webp",
    "resumo": "Folhas grossas com brilho envernizado natural, sobrevive com pouca luz e pouquíssima rega.",
    "descricao": "Possui rizomas subterrâneos em formato de batata que armazenam água e nutrientes por meses. Perfeita para escritórios, corredores e salas com pouca ventilação natural. O único erro fatal é o excesso de rega.",
    "temVideo": true,
    "youtubeId": "z1x3c5v7_Bn",
    "videoTitulo": "Como Cuidar da Zamioculca sem Podridão nas Raízes",
    "ficha": [
      { "rotulo": "Luz", "valor": "Sombra e luz indireta (nunca sol direto que queima o verniz foliar)." },
      { "rotulo": "Rega", "valor": "A cada 15 a 25 dias no verão; 1 vez ao mês no inverno." },
      { "rotulo": "Drenagem", "valor": "Obrigatório vaso com furos amplos e camada de argila expandida." },
      { "rotulo": "Crescimento", "valor": "Lento a moderado, atingindo até 80 cm de altura." }
    ]
  },
  {
    "id": "planta-4",
    "modulo": "plantas",
    "nome": "Monstera Deliciosa (Costela-de-Adão)",
    "tags": ["monstera", "costela de adao", "tropical", "grande", "urban jungle"],
    "nivel": 2,
    "icone": "leaf",
    "imagem": "./images/plantas/monstera-deliciosa.webp",
    "resumo": "Ícone do urban jungle com folhas monumentais recortadas e raízes aéreas esculturais.",
    "descricao": "Planta nativa das florestas tropicais da América Central, suas fenestrações (recortes) naturais permitem que o vento e a luz passem sem rasgar a folha. Adora ambientes bem iluminados e umidade ambiente.",
    "temVideo": true,
    "youtubeId": "q9w8e7r6_Ty",
    "videoTitulo": "Guia Completo de Cultivo da Costela-de-Adão",
    "ficha": [
      { "rotulo": "Luz", "valor": "Muita luz indireta / Sol suave do início da manhã." },
      { "rotulo": "Rega", "valor": "2 vezes por semana com solo aerado e rico em matéria orgânica." },
      { "rotulo": "Raízes aéreas", "valor": "Não corte! Direcione-as para dentro da terra do vaso." },
      { "rotulo": "Limpeza", "valor": "Passar pano umedecido com água nas folhas quinzenalmente." }
    ]
  },
  {
    "id": "planta-5",
    "modulo": "plantas",
    "nome": "Samambaia Americana (Nephrolepis exaltata)",
    "tags": ["samambaia", "pendente", "umidade", "sombra", "folhagem"],
    "nivel": 2,
    "icone": "sprout",
    "imagem": "./images/plantas/samambaia-americana.webp",
    "resumo": "Cascata de folíolos verde-claros exuberantes que exigem solo sempre úmido e ambiente sem vento encanado.",
    "descricao": "Uma das folhagens suspensas mais queridas nos lares brasileiros. Exige regas frequentes e borrifação de água na folhagem durante dias secos, além de ficar longe de correntes de ar frio que queimam as pontas.",
    "temVideo": true,
    "youtubeId": "u5i7o9p1_As",
    "videoTitulo": "Como Deixar a Samambaia Cheia e sem Folhas Secas",
    "ficha": [
      { "rotulo": "Exposição solar", "valor": "Sombra clara e luz filtrada (vento forte desidrata a planta)." },
      { "rotulo": "Rega", "valor": "Frequente: a cada 2 dias (solo úmido como esponja espremida)." },
      { "rotulo": "Substrato", "valor": "Casca de pinus triturada, fibra de coco e húmus de minhoca." },
      { "rotulo": "Adubação", "valor": "Torta de mamona e farinha de ossos a cada 60 dias." }
    ]
  },
  {
    "id": "planta-6",
    "modulo": "plantas",
    "nome": "Orquídea Phalaenopsis",
    "tags": ["orquidea", "flor", "epifita", "phalaenopsis", "vaso"],
    "nivel": 3,
    "icone": "flower-2",
    "imagem": "./images/plantas/orquidea-phalaenopsis.webp",
    "resumo": "Floração duradoura de até 3 meses em hastes arqueadas; planta epífita que vive presa em cascas.",
    "descricao": "As Phalaenopsis não toleram terra comum: suas raízes precisam de ar e luz para fazer fotossíntese. São plantadas em casca de pinus e esfagno em vasos transparentes, regadas apenas quando as raízes ficarem esbranquiçadas.",
    "temVideo": true,
    "youtubeId": "d4f6g8h0_Jk",
    "videoTitulo": "Segredos para a Orquídea Phalaenopsis Florir Todo Ano",
    "ficha": [
      { "rotulo": "Habitat", "valor": "Epífita (nunca plantar em terra comum de jardim)." },
      { "rotulo": "Substrato", "valor": "Casca de pinus, carvão vegetal e musgo esfagno estéril." },
      { "rotulo": "Regra de ouro de rega", "valor": "Raízes verdes = não regar. Raízes prateadas = regar por imersão." },
      { "rotulo": "Floração", "valor": "Outono e inverno, com flores que duram até 90 dias na haste." }
    ]
  },
  {
    "id": "planta-7",
    "modulo": "plantas",
    "nome": "Lírio-da-paz (Spathiphyllum wallisii)",
    "tags": ["lirio da paz", "flor branca", "sombra", "filtro", "interior"],
    "nivel": 1,
    "icone": "flower",
    "imagem": "./images/plantas/lirio-da-paz.webp",
    "resumo": "Flores brancas elegantes e folhagem verde escura brilhante que sinaliza sede murchando suavemente.",
    "descricao": "Excelente purificadora do ar e uma das poucas plantas de sombra que florescem dentro de casa. Se as folhas murcharem, basta uma rega generosa para ela voltar a ficar ereta e viva em poucas horas.",
    "temVideo": true,
    "youtubeId": "l2k4j6h8_Gf",
    "videoTitulo": "Como Recuperar e Fazer o Lírio-da-Paz Florir",
    "ficha": [
      { "rotulo": "Iluminação", "valor": "Sombra fresca com boa luminosidade indireta." },
      { "rotulo": "Rega", "valor": "2 a 3 vezes por semana (manter o solo levemente úmido)." },
      { "rotulo": "Adubação", "valor": "NPK 10-10-10 diluído a cada 30 dias na primavera." },
      { "rotulo": "Curiosidade", "valor": "A 'flor' branca é na verdade uma bráctea (folha modificada)." }
    ]
  },
  {
    "id": "planta-8",
    "modulo": "plantas",
    "nome": "Suculenta Echeveria Elegans",
    "tags": ["suculenta", "echeveria", "roseta", "sol", "vaso"],
    "nivel": 1,
    "icone": "sun",
    "imagem": "./images/plantas/suculenta-echeveria.webp",
    "resumo": "Roseta perfeita em tons verde-azulados que adora sol pleno e solo extremamente seco entre regas.",
    "descricao": "Conhecida como Rosa-de-Pedra, suas folhas carnosas formam uma roseta geométrica hipnotizante. O segredo do sucesso é garantir drenagem máxima com areia e nunca deixar água acumulada no centro da roseta.",
    "temVideo": true,
    "youtubeId": "m1n3b5v7_Cx",
    "videoTitulo": "Como Cuidar de Suculentas Echeveria sem Apodrecer",
    "ficha": [
      { "rotulo": "Luz", "valor": "Sol direto pelo menos 4 a 6 horas por dia." },
      { "rotulo": "Rega", "valor": "A cada 10 a 15 dias direto na terra, apenas quando 100% seca." },
      { "rotulo": "Substrato", "valor": "1 parte terra vegetal, 2 partes areia grossa e 1 perlita." },
      { "rotulo": "Multiplicação", "valor": "Brotamento fácil pelas folhas destacadas sobre a terra." }
    ]
  },
  {
    "id": "planta-9",
    "modulo": "plantas",
    "nome": "Cacto Mandacaru (Cereus jamacaru)",
    "tags": ["cacto", "mandacaru", "sol pleno", "escultural", "deserto"],
    "nivel": 1,
    "icone": "sun-medium",
    "imagem": "./images/plantas/cacto-mandacaru.webp",
    "resumo": "Cacto brasileiro colunar de imponência arquitetônica, capaz de suportar o sol mais tórrido.",
    "descricao": "Símbolo de resistência do semiárido brasileiro, o Mandacaru pode ser cultivado em vasos fundos na varanda ou em jardins rochosos. Floresce à noite com flores brancas gigantescas e efêmeras.",
    "temVideo": true,
    "youtubeId": "p0o9i8u7_Yt",
    "videoTitulo": "Cultivo de Cactos Mandacaru em Vasos e Jardins",
    "ficha": [
      { "rotulo": "Insolação", "valor": "Sol pleno o dia todo (mínimo de 6 horas de sol direto)." },
      { "rotulo": "Rega", "valor": "Mensal ou a cada 20 dias (suporta seca extrema)." },
      { "rotulo": "Substrato", "valor": "Totalmente mineral com brita, carvão e areia grossa." },
      { "rotulo": "Porte", "valor": "Até 2 metros em vasos grandes; mais de 5 metros no solo." }
    ]
  },
  {
    "id": "planta-10",
    "modulo": "plantas",
    "nome": "Palmeira Raphis (Rhapis excelsa)",
    "tags": ["palmeira", "raphis", "interior", "paisagismo", "verde"],
    "nivel": 2,
    "icone": "palmtree",
    "imagem": "./images/plantas/palmeira-raphis.webp",
    "resumo": "Palmeira de múltiplos caules finos revestidos por fibras escuras e folhas plissadas em leque.",
    "descricao": "A palmeira mais tradicional para halls de entrada, salas de estar e varandas cobertas. Cresce em touceiras elegantes e tolera ar condicionado melhor que a maioria das plantas tropicais.",
    "temVideo": true,
    "youtubeId": "r5t7y9u1_Io",
    "videoTitulo": "Como Cuidar da Palmeira Raphis e Evitar Pontas Queimadas",
    "ficha": [
      { "rotulo": "Luz", "valor": "Meia-sombra e luz difusa (sol pleno queima suas folhas)." },
      { "rotulo": "Rega", "valor": "1 a 2 vezes na semana no calor; 1 vez na semana no frio." },
      { "rotulo": "Crescimento", "valor": "Lento, mantendo a forma bonita por muitos anos." },
      { "rotulo": "Umidade", "valor": "Borrifar água nas folhas se a umidade do ar estiver baixa." }
    ]
  },
  {
    "id": "planta-11",
    "modulo": "plantas",
    "nome": "Ficus Lyrata (Figueira-lira)",
    "tags": ["ficus", "ficus lyrata", "arvorete", "urban jungle", "sala"],
    "nivel": 3,
    "icone": "tree-deciduous",
    "imagem": "./images/plantas/ficus-lyrata.webp",
    "resumo": "Folhas largas e onduladas em formato de violino que conferem sofisticação imediata ao ambiente.",
    "descricao": "A queridinha do design de interiores contemporâneo. Exige ambiente estável com sol filtrado abundante e odeia mudanças de lugar ou correntes de vento que a façam derrubar folhas.",
    "temVideo": true,
    "youtubeId": "e3r5t7y9_Uo",
    "videoTitulo": "Ficus Lyrata: Como Evitar Queda e Manchas nas Folhas",
    "ficha": [
      { "rotulo": "Luz", "valor": "Muita luz indireta próxima a janelas grandes e ensolaradas." },
      { "rotulo": "Rega", "valor": "Apenas quando o solo secar até a metade da profundidade do vaso." },
      { "rotulo": "Dica de ouro", "valor": "Gire o vaso 90° mensalmente para a copa crescer reta." },
      { "rotulo": "Sensibilidade", "valor": "Não mudar de lugar após ela se adaptar ao espaço." }
    ]
  },
  {
    "id": "planta-12",
    "modulo": "plantas",
    "nome": "Antúrio Clássico (Anthurium andreanum)",
    "tags": ["anturio", "flor", "vermelho", "meia-sombra", "tropical"],
    "nivel": 2,
    "icone": "flower",
    "imagem": "./images/plantas/anturio-classico.webp",
    "resumo": "Flores vermelhas cerosas com espádice amarela que permanecem viçosas por muitas semanas.",
    "descricao": "Planta tropical perene com folhas em formato de coração verde-escuro e inflorescências exuberantes. Prefere solo fofo com matéria orgânica e excelente circulação de ar nas raízes.",
    "temVideo": true,
    "youtubeId": "w1e3r5t7_Yu",
    "videoTitulo": "Como Manter o Antúrio Florido o Ano Inteiro",
    "ficha": [
      { "rotulo": "Luz", "valor": "Meia-sombra clara com iluminação difusa (sem sol das 10h às 16h)." },
      { "rotulo": "Rega", "valor": "2 vezes por semana sem encharcar o pratinho." },
      { "rotulo": "Adubação", "valor": "Adubação rica em fósforo (NPK 04-14-08) estimula novas flores." },
      { "rotulo": "Durabilidade", "valor": "Cada flor dura de 45 a 60 dias aberta no vaso." }
    ]
  },
  {
    "id": "planta-13",
    "modulo": "plantas",
    "nome": "Calathea Orbifolia (Maranta)",
    "tags": ["calathea", "maranta", "orbifolia", "listras", "umidade"],
    "nivel": 3,
    "icone": "sparkles",
    "imagem": "./images/plantas/calathea-orbifolia.webp",
    "resumo": "Folhas redondas gigantescas com padrão listrado prateado e verde de tirar o fôlego.",
    "descricao": "Uma das marantas mais cobiçadas do mundo botânico. Planta sensível que exige umidade relativa do ar acima de 60% e água sem cloro para não ficar com as bordas secas e encaracoladas.",
    "temVideo": true,
    "youtubeId": "q0w2e4r6_Ty",
    "videoTitulo": "Como Cuidar de Calathea Orbifolia sem Pontas Queimadas",
    "ficha": [
      { "rotulo": "Luz", "valor": "Luz difusa suave (o sol queima suas listras prateadas)." },
      { "rotulo": "Água", "valor": "Preferencialmente água filtrada ou descansada 24h para evaporar cloro." },
      { "rotulo": "Umidade ambiente", "valor": "Alta (usar umidificador ou prato com argila expandida úmida)." },
      { "rotulo": "Movimento", "valor": "Folhas se erguem à noite em oração e abrem de dia." }
    ]
  },
  {
    "id": "planta-14",
    "modulo": "plantas",
    "nome": "Alecrim aromático (Salvia rosmarinus)",
    "tags": ["alecrim", "horta", "erva", "tempero", "sol pleno"],
    "nivel": 1,
    "icone": "utensils",
    "imagem": "./images/plantas/alecrim-aromatico.webp",
    "resumo": "Arbusto mediterrâneo aromático e culinário, ama sol abundante e solo arenoso bem seco.",
    "descricao": "O alecrim é uma planta rústica originária do Mediterrâneo rochoso. O maior segredo é nunca deixá-lo na sombra nem com a terra encharcada, pois o excesso de umidade apodrece seu caule rapidamente.",
    "temVideo": true,
    "youtubeId": "t9y1u3i5_Op",
    "videoTitulo": "Como Ter Alecrim Lindo em Vaso sem Deixar Secar",
    "ficha": [
      { "rotulo": "Insolação", "valor": "Sol pleno absoluto (mínimo de 5 a 6 horas diárias)." },
      { "rotulo": "Rega", "valor": "Moderada a escassa: deixe secar bem entre uma rega e outra." },
      { "rotulo": "Solo", "valor": "Arenoso, leve e calcário (misturar areia e terra comum)." },
      { "rotulo": "Uso", "valor": "Culinária, aromaterapia, repelente de pragas e chás." }
    ]
  },
  {
    "id": "planta-15",
    "modulo": "plantas",
    "nome": "Lavanda Francesa (Lavandula dentata)",
    "tags": ["lavanda", "flor roxa", "perfume", "sol pleno", "mediterranea"],
    "nivel": 2,
    "icone": "sun",
    "imagem": "./images/plantas/lavanda-francesa.webp",
    "resumo": "Folhagem denteada perfumada com espigas florais roxas que atraem polinizadores e repelem mosquitos.",
    "descricao": "A Lavandula dentata é a variedade de lavanda que melhor se adapta ao clima subtropical do Brasil, aguentando o calor melhor que a lavanda inglesa. Exige sol direto e solo drenante.",
    "temVideo": true,
    "youtubeId": "y7u9i1o3_Pa",
    "videoTitulo": "Como Cultivar Lavanda no Brasil com Muito Sucesso",
    "ficha": [
      { "rotulo": "Luz", "valor": "Sol pleno obrigatório (não sobrevive em ambientes internos)." },
      { "rotulo": "Rega", "valor": "1 a 2 vezes por semana apenas na raiz, nunca molhando a folhagem." },
      { "rotulo": "Poda", "valor": "Poda leve após as floradas para manter o arbusto denso." },
      { "rotulo": "Aroma", "valor": "Calmante natural rica em óleos essenciais relaxantes." }
    ]
  },

  // =========================================================================
  // CATEGORIA 3: ADUBAÇÃO (15 ITENS)
  // =========================================================================
  {
    "id": "adubo-1",
    "modulo": "adubacao",
    "nome": "Húmus de minhoca puro",
    "tags": ["humus", "minhoca", "organico", "adubo", "terra"],
    "nivel": 1,
    "icone": "flask-conical",
    "imagem": "./images/adubos/humus-de-minhoca.webp",
    "resumo": "Adubo orgânico completo, suave e neutro, impossível de queimar as raízes mesmo para iniciantes.",
    "descricao": "Produzido pela digestão de minhocas californianas, é riquíssimo em ácidos fúlvicos e húmicos e microrganismos benéficos. Melhora a retenção de água e a textura física do solo sem alterar o pH.",
    "temVideo": true,
    "youtubeId": "s1d3f5g7_Hj",
    "videoTitulo": "Como Usar Húmus de Minhoca em Vasos e Canteiros",
    "ficha": [
      { "rotulo": "Composição", "valor": "100% matéria orgânica digerida com flora microbiana ativa." },
      { "rotulo": "Dosagem vaso pequeno", "valor": "2 a 3 colheres de sopa sobre a terra a cada 30 dias." },
      { "rotulo": "Dosagem canteiro", "valor": "1 a 2 kg por metro quadrado na preparação do solo." },
      { "rotulo": "Risco de queima", "valor": "Zero! É um condicionador seguro para qualquer espécie." }
    ]
  },
  {
    "id": "adubo-2",
    "modulo": "adubacao",
    "nome": "NPK 10-10-10 balanceado",
    "tags": ["npk", "npk 10 10 10", "adubo quimico", "manutencao", "graos"],
    "nivel": 1,
    "icone": "activity",
    "imagem": "./images/adubos/npk-10-10-10.webp",
    "resumo": "Fertilizante mineral equilibrado para manutenção geral de folhagens, gramados e brotações.",
    "descricao": "Fornece partes iguais de Nitrogênio (N) para folhas verdes, Fósforo (P) para raízes fortes e Potássio (K) para resistência contra pragas e seca. Deve ser aplicado sempre na borda do vaso, longe do caule.",
    "temVideo": true,
    "youtubeId": "k9j7h5g3_Fd",
    "videoTitulo": "Como Usar NPK 10-10-10 sem Queimar suas Plantas",
    "ficha": [
      { "rotulo": "Fórmula", "valor": "10% Nitrogênio, 10% Fósforo, 10% Potássio solúvel." },
      { "rotulo": "Dosagem vaso médio (20cm)", "valor": "1 colher de chá rasa espalhada perto da borda." },
      { "rotulo": "Frequência", "valor": "A cada 45 a 60 dias durante a primavera e verão." },
      { "rotulo": "Atenção crucial", "valor": "Regar abundantemente logo após aplicar os grânulos." }
    ]
  },
  {
    "id": "adubo-3",
    "modulo": "adubacao",
    "nome": "Farinha de ossos com torta de mamona",
    "tags": ["farinha de ossos", "torta de mamona", "organico", "raiz", "flores"],
    "nivel": 2,
    "icone": "bone",
    "imagem": "./images/adubos/farinha-de-ossos-com-torta-de-mamona.webp",
    "resumo": "Combinação orgânica clássica de liberação lenta: nitrogênio potente e fósforo natural.",
    "descricao": "A torta de mamona fornece nitrogênio orgânico de liberação contínua e repele nematoides, enquanto a farinha de ossos é a maior fonte natural de fósforo e cálcio para raízes fortes e florações duradouras.",
    "temVideo": true,
    "youtubeId": "x1c3v5b7_Nm",
    "videoTitulo": "Como e Onde Aplicar Torta de Mamona e Farinha de Ossos",
    "ficha": [
      { "rotulo": "Nutrientes principais", "valor": "Fósforo (P), Nitrogênio (N) e Cálcio (Ca) de liberação lenta." },
      { "rotulo": "Dose em vasos", "valor": "1 colher de sopa bem incorporada e enterrada no substrato." },
      { "rotulo": "Alerta pet", "valor": "A torta de mamona crua é tóxica para cães; compre sempre formulação desativada ou enterre bem." },
      { "rotulo": "Periodicidade", "valor": "A cada 60 a 90 dias." }
    ]
  },
  {
    "id": "adubo-4",
    "modulo": "adubacao",
    "nome": "Biofertilizante foliar líquido concentrado",
    "tags": ["biofertilizante", "foliar", "liquido", "absorcao rapida", "spray"],
    "nivel": 1,
    "icone": "droplet",
    "imagem": "./images/adubos/biofertilizante-foliar.webp",
    "resumo": "Nutrição líquida de absorção imediata pelos estômatos das folhas com micronutrientes quelatados.",
    "descricao": "Diluído em água e aplicado via pulverizador, atua de forma muito mais rápida que adubos sólidos no solo. Corrige carências nutricionais urgentes e devolve o brilho verde às folhas em poucos dias.",
    "temVideo": true,
    "youtubeId": "m0n2b4v6_Cx",
    "videoTitulo": "Como Diluir e Aplicar Adubo Foliar sem Manchar Folhas",
    "ficha": [
      { "rotulo": "Diluição", "valor": "5 ml (1 tampa) para cada 1 Litro de água limpa sem cloro." },
      { "rotulo": "Aplicação", "valor": "Pulverizar nas primeiras horas da manhã ou após as 17h." },
      { "rotulo": "Ação", "valor": "Absorção em menos de 4 horas diretamente pelos poros foliares." },
      { "rotulo": "Frequência", "valor": "A cada 15 dias durante as estações de crescimento ativo." }
    ]
  },
  {
    "id": "adubo-5",
    "modulo": "adubacao",
    "nome": "Calcário dolomítico agrícola",
    "tags": ["calcario", "ph", "acidez", "calcio", "magnesio"],
    "nivel": 3,
    "icone": "layers",
    "imagem": "./images/adubos/calcario-dolomitico.webp",
    "resumo": "Corrige a acidez do solo (eleva o pH) e disponibiliza cálcio e magnésio para absorção dos outros adubos.",
    "descricao": "Em solos ácidos (pH abaixo de 5,5), as plantas não conseguem absorver adubo por mais que você aplique. O calcário neutraliza o alumínio tóxico e reequilibra o solo. Deve ser aplicado de 60 a 90 dias antes do plantio.",
    "temVideo": true,
    "youtubeId": "l1k3j5h7_Gf",
    "videoTitulo": "Como Corrigir o pH do Solo com Calcário Dolomítico",
    "ficha": [
      { "rotulo": "Composição", "valor": "Carbonato de Cálcio e Magnésio de alta pureza (PRNT > 80%)." },
      { "rotulo": "Tempo de reação", "valor": "60 a 90 dias em solo úmido para agir plenamente." },
      { "rotulo": "Dosagem média", "valor": "150 a 250 g por metro quadrado (conforme teste de pH prévio)." },
      { "rotulo": "Importância", "valor": "Aumenta a eficiência dos adubos NPK em até 300%." }
    ]
  },
  {
    "id": "adubo-6",
    "modulo": "adubacao",
    "nome": "NPK 04-14-08 (estimulador de floração e frutos)",
    "tags": ["npk", "npk 04 14 08", "floracao", "frutificacao", "fosforo"],
    "nivel": 2,
    "icone": "sparkles",
    "imagem": "./images/adubos/npk-4-14-8.webp",
    "resumo": "Altíssimo teor de Fósforo (P) para induzir novas florações exuberantes e fixação de frutos.",
    "descricao": "Ideal para aplicar 30 dias antes do período natural de floração em rosas, jasmins, orquídeas, jabuticabeiras e árvores frutíferas em vaso. O baixo teor de nitrogênio evita que a planta foque apenas em produzir folhas.",
    "temVideo": true,
    "youtubeId": "p9o8i7u6_Yt",
    "videoTitulo": "NPK 04-14-08: Segredo da Floração Farta",
    "ficha": [
      { "rotulo": "Proporção", "valor": "4% Nitrogênio, 14% Fósforo solúvel e 8% Potássio." },
      { "rotulo": "Melhor época", "valor": "Final do inverno e início da primavera antes dos botões abrirem." },
      { "rotulo": "Dosagem vaso grande", "valor": "1 colher de sopa ao redor da borda a cada 40 dias." },
      { "rotulo": "Efeito prático", "valor": "Mais botões florais e flores mais duradouras e coloridas." }
    ]
  },
  {
    "id": "adubo-7",
    "modulo": "adubacao",
    "nome": "Bokashi fermentado tradicional japonês",
    "tags": ["bokashi", "fermentado", "japones", "microorganismos", "solo vivo"],
    "nivel": 2,
    "icone": "leaf",
    "imagem": "./images/adubos/bokashi-fermentado.webp",
    "resumo": "Composto fermentado milenar com microrganismos eficientes (EM) que regeneram terras esgotadas.",
    "descricao": "Produzido pela fermentação anaeróbica de farelos nobres, sementes e leveduras benéficas. Além de fornecer nutrientes completos, ele inocula vida bacteriana no solo, suprimindo fungos patogênicos e ativando as raízes.",
    "temVideo": true,
    "youtubeId": "e1r3t5y7_Uo",
    "videoTitulo": "O que é Bokashi e Como Usar no Seu Jardim",
    "ficha": [
      { "rotulo": "Ação biológica", "valor": "Inoculação de leveduras e bactérias lácticas probióticas." },
      { "rotulo": "Dosagem vaso médio", "valor": "1 colher de sopa enterrada superficialmente a cada 30 dias." },
      { "rotulo": "Aroma", "valor": "Aroma característico de fermentação saudável (não fede)." },
      { "rotulo": "Efeito", "valor": "Estimula novas brotações viçosas e fortalece a imunidade da planta." }
    ]
  },
  {
    "id": "adubo-8",
    "modulo": "adubacao",
    "nome": "Esterco bovino 100% curtido",
    "tags": ["esterco", "bovino", "curtido", "organico", "canteiro"],
    "nivel": 1,
    "icone": "archive",
    "imagem": "./images/adubos/esterco-bovino.webp",
    "resumo": "Adubo natural tradicional enriquecido em nitrogênio e carbono para formação de canteiros e gramados.",
    "descricao": "Totalmente maturado por 90 a 120 dias, livre de sementes invasoras e sem cheiro forte. É excelente para misturar em grandes canteiros e no fundo de covas de plantio de árvores e arbustos ornamentais.",
    "temVideo": true,
    "youtubeId": "w0e2r4t6_Yu",
    "videoTitulo": "Diferença do Esterco Fresco para o Esterco Curtido",
    "ficha": [
      { "rotulo": "Estado", "valor": "Totalmente decomposto, seco e peneirado (sem calor de fermentação)." },
      { "rotulo": "Dose em canteiro", "valor": "3 a 5 kg por metro quadrado incorporados na terra." },
      { "rotulo": "Dose em cova de árvore", "valor": "5 a 10 kg misturados à terra retirada do buraco." },
      { "rotulo": "Importante", "valor": "Nunca usar esterco fresco (ele queima raízes e tem excesso de amônia)." }
    ]
  },
  {
    "id": "adubo-9",
    "modulo": "adubacao",
    "nome": "Sulfato de ferro e magnésio (anti-amarelecimento)",
    "tags": ["sulfato de ferro", "magnesio", "clorose", "folha amarela", "verde"],
    "nivel": 3,
    "icone": "shield-alert",
    "imagem": "./images/adubos/sulfato-de-ferro.webp",
    "resumo": "Tratamento de choque contra a clorose férrica (folhas amareladas com nervuras ainda verdes).",
    "descricao": "A falta de ferro e magnésio impede a síntese correta de clorofila em plantas acidófilas como azaleias, gardênias, jabuticabas e cítricos. Este sal mineral devolve o verde escuro radiante em menos de duas semanas.",
    "temVideo": true,
    "youtubeId": "q9w7e5r3_Ty",
    "videoTitulo": "Como Recuperar Folhas Amarelas com Sulfato de Ferro",
    "ficha": [
      { "rotulo": "Sintoma alvo", "valor": "Clorose intervenal: folha fica amarela e nervuras continuam verdes." },
      { "rotulo": "Diluição", "valor": "3 gramas por Litro de água aplicado diretamente no solo." },
      { "rotulo": "Plantas mais sensíveis", "valor": "Gardênia, Azaleia, Hortênsia, Limoeiro e Jabuticabeira." },
      { "rotulo": "Cuidado", "valor": "Pode manchar pisos cerâmicos e calçadas se respingar." }
    ]
  },
  {
    "id": "adubo-10",
    "modulo": "adubacao",
    "nome": "Cinzas de madeira limpa (rica em potássio)",
    "tags": ["cinzas", "potassio", "lareira", "fogao a lenha", "organico"],
    "nivel": 2,
    "icone": "flame",
    "imagem": "./images/adubos/cinzas-de-madeira.webp",
    "resumo": "Fonte mineral gratuita e orgânica de potássio, fósforo, cálcio e dezenas de micronutrientes.",
    "descricao": "Restos de lareira ou fogão a lenha que queimaram apenas madeira pura (nunca usar cinzas de churrasqueira com sal e gordura nem madeira tratada/pintada). Fortalece caules e estimula florescimento intenso.",
    "temVideo": true,
    "youtubeId": "a1s3d5f7_Gh",
    "videoTitulo": "Como Usar Cinzas de Madeira sem Errar na Dose",
    "ficha": [
      { "rotulo": "Nutriente dominante", "valor": "Potássio (K) solúvel, além de cálcio e magnésio." },
      { "rotulo": "Dosagem", "valor": "Apenas 1 colher de sopa rasa por vaso médio a cada 60 dias." },
      { "rotulo": "Efeito no solo", "valor": "Eleva o pH (alcalinizante natural)." },
      { "rotulo": "Atenção", "valor": "Não use em plantas que gostam de solo ácido (como azaleias e mirtilos)." }
    ]
  },
  {
    "id": "adubo-11",
    "modulo": "adubacao",
    "nome": "Adubo de liberação lenta inteligente (Osmocote / Basacote)",
    "tags": ["osmocote", "liberacao lenta", "adubo inteligente", "perolas", "pro"],
    "nivel": 3,
    "icone": "clock",
    "imagem": "./images/adubos/adubo-liberacao-lenta.webp",
    "resumo": "Pérolas poliméricas que liberam nutrientes calibrados de acordo com a temperatura e umidade.",
    "descricao": "O padrão ouro de viveiros profissionais e produtores de orquídeas e mudas nobres. A cápsula de resina especial libera pequenas doses diárias de macro e micronutrientes por 3, 6 ou até 9 meses contínuos.",
    "temVideo": true,
    "youtubeId": "z0x2c4v6_Bn",
    "videoTitulo": "Como Funciona o Osmocote e Como Usar em Vasos",
    "ficha": [
      { "rotulo": "Duração no vaso", "valor": "Disponível em formulações de 3 meses, 6 meses ou 9 meses." },
      { "rotulo": "Mecanismo", "valor": "Liberação osmótica proporcional ao calor ambiente." },
      { "rotulo": "Dosagem", "valor": "3 a 5 gramas por litro de substrato misturados no plantio." },
      { "rotulo": "Vantagem máxima", "valor": "Zero risco de salinização ou queima de raízes sensíveis." }
    ]
  },
  {
    "id": "adubo-12",
    "modulo": "adubacao",
    "nome": "Biofertilizante de composteira doméstica (chorume líquido diluído)",
    "tags": ["composteira", "chorume", "minhocario", "reciclagem", "adubo caseiro"],
    "nivel": 1,
    "icone": "recycle",
    "imagem": "./images/adubos/biofertilizante-composteira.webp",
    "resumo": "Líquido escuro orgânico extraído da gaveta inferior do minhocário, com altíssima carga biológica.",
    "descricao": "Resultado da reciclagem de cascas e restos vegetais caseiros pelas minhocas. É um ouro líquido para o jardim, mas exige a regra sagrada da diluição de 1 parte de líquido para 10 partes de água antes da rega.",
    "temVideo": true,
    "youtubeId": "m9n7b5v3_Cx",
    "videoTitulo": "Como Diluir e Usar o Chorume do Minhocário",
    "ficha": [
      { "rotulo": "Regra de ouro", "valor": "DILUIR SEMPRE: 1 copo de biofertilizante para 10 copos de água." },
      { "rotulo": "Odor", "valor": "Líquido maduro tem cheiro agradável de terra molhada da floresta." },
      { "rotulo": "Frequência de rega", "valor": "Aplicar a solução diluída a cada 15 dias direto no solo." },
      { "rotulo": "Origem", "valor": "Reciclagem sustentável de resíduos orgânicos domésticos." }
    ]
  },
  {
    "id": "adubo-13",
    "modulo": "adubacao",
    "nome": "Farinha de casca de ovo calcinada (Cálcio puro)",
    "tags": ["casca de ovo", "calcio", "caseiro", "adubo organico", "tomate"],
    "nivel": 1,
    "icone": "egg",
    "imagem": "./images/adubos/farinha-de-casca-de-ovo.webp",
    "resumo": "Cálcio biodisponível para prevenir podridão apical em tomates e fortalecer paredes celulares.",
    "descricao": "As cascas de ovos lavadas, secas ao sol ou tostadas levemente no forno e depois trituradas em pó fino no liquidificador geram carbonato de cálcio de rápida assimilação, evitando que os frutos apodreçam no fundo.",
    "temVideo": true,
    "youtubeId": "l0k2j4h6_Gf",
    "videoTitulo": "Como Fazer e Usar Farinha de Casca de Ovo nas Plantas",
    "ficha": [
      { "rotulo": "Preparo correto", "valor": "Lavar, tostar levemente e bater até virar pó ultrafino como talco." },
      { "rotulo": "Principal benefício", "valor": "Previne o 'fundo preto' (podridão apical) em hortaliças e flores." },
      { "rotulo": "Dose", "valor": "1 colher de sopa espalhada na superfície de cada vaso a cada 30 dias." },
      { "rotulo": "Curiosidade", "valor": "Pedaços grandes não funcionam: levam anos para decompor no solo." }
    ]
  },
  {
    "id": "adubo-14",
    "modulo": "adubacao",
    "nome": "Extrato concentrado de algas marinhas (Ascophyllum nodosum)",
    "tags": ["algas marinhas", "bioestimulante", "enraizamento", "estresse", "vigor"],
    "nivel": 3,
    "icone": "waves",
    "imagem": "./images/adubos/extrato-algas-marinhas.webp",
    "resumo": "Bioestimulante marinho riquíssimo em citocinas, auxinas e minerais para enraizamento explosivo.",
    "descricao": "Extraído das algas do Atlântico Norte, atua diretamente no sistema hormonal vegetal. É o adubo mais eficiente para recuperar plantas que sofreram estresse pós-transplante, frio extremo ou ataque de pragas.",
    "temVideo": true,
    "youtubeId": "p8o7i6u5_Yt",
    "videoTitulo": "Extrato de Algas: O Segredo de Enraizamento e Vigor",
    "ficha": [
      { "rotulo": "Hormônios naturais", "valor": "Auxinas, giberelinas e citocininas vegetais ativas." },
      { "rotulo": "Aplicação", "valor": "Rega de raízes logo após o transplante ou pulverização foliar." },
      { "rotulo": "Dose", "valor": "2 a 3 ml por litro de água a cada 20 a 30 dias." },
      { "rotulo": "Efeito", "valor": "Crescimento de radicelas e tolerância a secas e geadas." }
    ]
  },
  {
    "id": "adubo-15",
    "modulo": "adubacao",
    "nome": "Ureia agrícola granulada (46% Nitrogênio)",
    "tags": ["ureia", "nitrogenio", "crescimento", "adubo forte", "verde"],
    "nivel": 3,
    "icone": "zap",
    "imagem": "./images/adubos/ureia-agricola.webp",
    "resumo": "A mais alta concentração de nitrogênio disponível no mercado para arranque vigoroso de gramados.",
    "descricao": "Grânulos brancos de altíssima solubilidade. Excelente para gramados amarelados após o inverno ou formação rápida de arbustos. Exige dosagem milimétrica, pois o excesso queima imediatamente a folhagem.",
    "temVideo": true,
    "youtubeId": "e0r2t4y6_Uo",
    "videoTitulo": "Cuidados e Aplicação Segura de Ureia no Gramado",
    "ficha": [
      { "rotulo": "Concentração", "valor": "46% de Nitrogênio puro na forma amídica." },
      { "rotulo": "Uso em gramados", "valor": "10 a 15 gramas por metro quadrado antes de chuva ou rega forte." },
      { "rotulo": "Perigo de queima", "valor": "Alto: NUNCA aplicar sob sol quente e NUNCA deixar grânulos sobre folhas secas." },
      { "rotulo": "Rega obrigatória", "valor": "Molhar abundantemente até dissolver 100% dos grânulos no solo." }
    ]
  },

  // =========================================================================
  // CATEGORIA 4: SERVIÇOS (15 ITENS COM 4 ETAPAS CADA)
  // =========================================================================
  {
    "id": "servico-1",
    "modulo": "servicos",
    "nome": "Plantio e transplante de mudas em vasos",
    "tags": ["plantio", "transplante", "muda", "vaso", "drenagem"],
    "nivel": 1,
    "icone": "sprout",
    "imagem": "./images/servicos/plantio-e-transplante-de-mudas.webp",
    "resumo": "Técnica completa de acomodação do torrão e montagem de camadas de drenagem sem quebrar raízes.",
    "descricao": "O transplante correto é a chave para o vigor de qualquer planta. Aprenda a preparar o vaso novo, garantir drenagem perfeita contra podridão e acomodar a muda na profundidade ideal.",
    "temVideo": true,
    "youtubeId": "r4t6y8u0_Io",
    "videoTitulo": "Passo a Passo: Como Transplantar Mudas em Vaso",
    "ficha": [
      { "rotulo": "Tempo estimado", "valor": "20 a 30 minutos por vaso." },
      { "rotulo": "Materiais necessários", "valor": "Vaso com furos, argila expandida, manta bidim e substrato novo." },
      { "rotulo": "Melhor horário", "valor": "Finais de tarde ou dias nublados para evitar choque térmico." },
      { "rotulo": "Pós-plantio", "valor": "Manter na sombra clara por 4 a 5 dias antes de sol pleno." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Camada de Drenagem", "texto": "Cubra o fundo do vaso com 3 a 5 cm de argila expandida ou brita e posicione a manta de drenagem (bidim) por cima para a terra não entupir os furos." },
      { "numero": 2, "titulo": "Cama de Substrato", "texto": "Adicione uma camada do substrato novo enriquecido com húmus de minhoca até atingir a altura que acomode o torrão da muda alinhado a 2 cm abaixo da borda do vaso." },
      { "numero": 3, "titulo": "Acomodação do Torrão", "texto": "Aperte com carinho as laterais do vaso antigo para soltar o torrão inteiro sem quebrar raízes. Centralize a planta no vaso novo e complete as laterais com terra firme sem socar demais." },
      { "numero": 4, "titulo": "Rega de Assentamento", "texto": "Regue lentamente até a água começar a fluir pelos furos de drenagem inferiores, garantindo que o substrato novo entre em contato íntimo com o torrão original." }
    ]
  },
  {
    "id": "servico-2",
    "modulo": "servicos",
    "nome": "Poda de limpeza e retirada de folhas secas",
    "tags": ["poda", "limpeza", "folhas secas", "tesoura", "manutencao"],
    "nivel": 1,
    "icone": "scissors",
    "imagem": "./images/servicos/poda-de-limpeza.webp",
    "resumo": "Elimine folhas amareladas, galhos mortos e flores murchas para direcionar a energia da planta para novos brotos.",
    "descricao": "Folhas velhas e doentes continuam drenando água e seiva preciosa da planta, além de servirem de abrigo para ácaros e fungos. A poda de limpeza regular mantém seu jardim jovem, ventilado e saudável.",
    "temVideo": true,
    "youtubeId": "w9e7r5t3_Yu",
    "videoTitulo": "Como Fazer Poda de Limpeza sem Prejudicar a Planta",
    "ficha": [
      { "rotulo": "Frequência", "valor": "Quinzenal ou sempre que houver material vegetal seco." },
      { "rotulo": "Ferramenta", "valor": "Tesoura de poda ou desbaste limpa e afiada." },
      { "rotulo": "Benefício imediato", "valor": "Maior aeração interna e estímulo de novos brotos." },
      { "rotulo": "Descarte", "valor": "Folhas saudáveis vão para compostagem; folhas com pragas vão para o lixo comum." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Higienização da Lâmina", "texto": "Passe algodão embebido em álcool 70% na lâmina da tesoura antes de iniciar e entre plantas diferentes para não transmitir vírus e fungos." },
      { "numero": 2, "titulo": "Identificação dos Ramos", "texto": "Localize folhas murchas, secas, galhos quebrados ou ramos 'ladrões' que crescem verticalmente sem florescer no meio da copa." },
      { "numero": 3, "titulo": "Corte em Chanfro (45°)", "texto": "Corte o pecíolo rente à base principal ou a 5 mm acima de um nó vivo, sempre em ângulo de 45° para que a água da rega escorra sem acumular na cicatriz." },
      { "numero": 4, "titulo": "Cicatrização Natural", "texto": "Em cortes maiores que 1 cm de espessura, aplique uma pitada de canela em pó ou pasta cicatrizante para proteger o corte contra infecções fúngicas." }
    ]
  },
  {
    "id": "servico-3",
    "modulo": "servicos",
    "nome": "Preparo e correção de canteiro do zero",
    "tags": ["preparo de canteiro", "canteiro", "solo", "adubacao", "horta"],
    "nivel": 2,
    "icone": "layout-grid",
    "imagem": "./images/servicos/preparo-e-correcao-de-canteiro.webp",
    "resumo": "Descompactação profunda, correção de acidez e enriquecimento orgânico para plantio de flores e hortas.",
    "descricao": "Um canteiro produtivo e bonito começa 30 cm abaixo da superfície. Aprenda a transformar terra dura e compactada em uma estrutura esponjosa, rica e arejada pronta para receber mudas exigentes.",
    "temVideo": true,
    "youtubeId": "q8w6e4r2_Ty",
    "videoTitulo": "Passo a Passo: Como Preparar um Canteiro Fértil",
    "ficha": [
      { "rotulo": "Profundidade de trabalho", "valor": "25 a 35 cm de descompactação." },
      { "rotulo": "Tempo de descanso pré-plantio", "valor": "7 a 15 dias após incorporar a matéria orgânica." },
      { "rotulo": "Insumos", "valor": "Esterco curtido, húmus de minhoca e calcário dolomítico." },
      { "rotulo": "Resultado esperado", "valor": "Terra fofa onde a mão entra sem esforço." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Limpeza da Superfície", "texto": "Remova todas as ervas daninhas, entulhos e pedras com enxada ou pá reta, retirando touceiras de capim com a raiz inteira." },
      { "numero": 2, "titulo": "Aração e Descompactação", "texto": "Cave a terra a 30 cm de profundidade quebrando os torrões compactados com auxílio de enxadão ou sacho até o solo ficar totalmente solto." },
      { "numero": 3, "titulo": "Incorporação dos Insumos", "texto": "Espalhe 5 kg de esterco curtido ou composto orgânico e 150 g de calcário por metro quadrado, misturando homogeneamente em toda a profundidade." },
      { "numero": 4, "titulo": "Nivelamento e Rega", "texto": "Passe o rastelo para nivelar a superfície criando uma elevação de 10 cm acima do nível do chão para evitar poças, e regue bem para ativar os microrganismos." }
    ]
  },
  {
    "id": "servico-4",
    "modulo": "servicos",
    "nome": "Plantio e alinhamento de cerca viva",
    "tags": ["cerca viva", "plantio", "sebe", "mural verde", "privacidade"],
    "nivel": 2,
    "icone": "git-commit",
    "imagem": "./images/servicos/plantio-cerca-viva.webp",
    "resumo": "Marcação por linha de prumo, abertura de vala contínua e espaçamento correto para fechamento rápido.",
    "descricao": "Seja com murta, sansão-do-campo ou podocarpo, o segredo de uma cerca viva fechada e sem buracos é o alinhamento impecável com linha esticada e adubação de fundo para crescimento acelerado.",
    "temVideo": true,
    "youtubeId": "a0s2d4f6_Gh",
    "videoTitulo": "Como Plantar Cerca Viva Reta e Fechar Rápido",
    "ficha": [
      { "rotulo": "Espaçamento entre mudas", "valor": "30 a 50 cm de distância entre plantas (conforme a espécie)." },
      { "rotulo": "Largura da vala", "valor": "40 cm de largura por 40 cm de profundidade contínua." },
      { "rotulo": "Espécies recomendadas", "valor": "Murta, Podocarpo, Tumbérgia arbustiva e Buxinho." },
      { "rotulo": "Tempo de fechamento", "valor": "8 a 14 meses com irrigação regular." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Alinhamento com Linha Guia", "texto": "Fixe dois piquetes de madeira nas pontas e estique uma linha de pedreiro bem tensionada a 20 cm do chão para orientar a escavação perfeitamente reta." },
      { "numero": 2, "titulo": "Escavação da Valeta Contínua", "texto": "Em vez de covas isoladas, abra uma vala contínua de 40 cm de largura e profundidade ao longo de toda a extensão da cerca para as raízes se conectarem." },
      { "numero": 3, "titulo": "Adubação de Fundo", "texto": "Misture ao solo do fundo da vala esterco bovino curtido, farinha de ossos e torta de mamona, cobrindo com 5 cm de terra pura antes de apoiar as mudas." },
      { "numero": 4, "titulo": "Plantio e Estaqueamento", "texto": "Posicione as mudas encostadas na linha guia no espaçamento escolhido, feche a vala compactando os lados com os pés e faça uma rega abundante." }
    ]
  },
  {
    "id": "servico-5",
    "modulo": "servicos",
    "nome": "Recuperação completa de gramado falhado e amarelado",
    "tags": ["gramado", "recuperacao", "grama", "aereacao", "poda baixa"],
    "nivel": 3,
    "icone": "refresh-cw",
    "imagem": "./images/servicos/recuperacao-de-gramado.webp",
    "resumo": "Rejuvenescimento de grama compactada com poda de limpeza, aeração perfurante e cobertura orgânica fértil.",
    "descricao": "Gramados velhos acumulam uma camada de palha morta que sufoca as raízes e impede a entrada de água. Este serviço profissional remove o feltro sufocante e devolve o tapete verde espesso.",
    "temVideo": true,
    "youtubeId": "z9x7c5v3_Bn",
    "videoTitulo": "Como Recuperar Gramado Feio, Amarelado e com Falhas",
    "ficha": [
      { "rotulo": "Melhor época", "valor": "Início da primavera (setembro/outubro) com retorno do calor." },
      { "rotulo": "Tempo de resposta", "valor": "20 a 30 dias para rebrotar com verde intenso." },
      { "rotulo": "Materiais", "valor": "Cortador de grama, garfo de aeração, terra vegetal e adubo de cobertura." },
      { "rotulo": "Irrigação", "valor": "Diária nos primeiros 15 dias após a reforma." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Poda Baixa e Retirada da Palha", "texto": "Regule o cortador na posição mais baixa para tosar a grama velha e passe a vassoura metálica vigorosamente recolhendo toda a palha seca acumulada." },
      { "numero": 2, "titulo": "Aeração Perfurante", "texto": "Com um garfo de jardim resistente ou aerador mecânico, perfure o solo a cada 15 cm criando furos de 10 cm de profundidade para o oxigênio e a água entrarem." },
      { "numero": 3, "titulo": "Cobertura Nutritiva (Top Dressing)", "texto": "Espalhe uma camada fina de 1 a 2 cm de terra preta peneirada misturada com composto orgânico e ureia agrícola ou NPK 10-10-10, nivelando com o verso do rastelo." },
      { "numero": 4, "titulo": "Irrigação Profunda Diária", "texto": "Molhe o gramado todos os dias no início da manhã durante 2 semanas sem formar poças até que as brotações novas cubram completamente o solo." }
    ]
  },
  {
    "id": "servico-6",
    "modulo": "servicos",
    "nome": "Instalação de sistema de irrigação por gotejamento",
    "tags": ["irrigacao", "gotejamento", "agua", "timer", "automacao"],
    "nivel": 3,
    "icone": "droplets",
    "imagem": "./images/servicos/instalacao-irrigacao-gotejamento.webp",
    "resumo": "Economize até 70% de água e garanta que suas plantas nunca sofram sede com automação por timer.",
    "descricao": "O gotejamento direciona a gota d'água exatamente na raiz da planta sem molhar as folhas nem desperdiçar água por evaporação. Uma vez instalado com timer de torneira, o jardim se rega sozinho.",
    "temVideo": true,
    "youtubeId": "m8n6b4v2_Cx",
    "videoTitulo": "Como Montar Irrigação por Gotejamento Passo a Passo",
    "ficha": [
      { "rotulo": "Economia de água", "valor": "Até 70% comparado a mangueiras tradicionais." },
      { "rotulo": "Componentes", "valor": "Timer de torneira, mangueira cega 16 mm, microtubos e gotejadores ajustáveis." },
      { "rotulo": "Pressão necessária", "valor": "Pressão de rede doméstica comum (1,5 a 3 bar) com filtro de linha." },
      { "rotulo": "Autonomia", "valor": "Total: viaje tranquilo enquanto o jardim é irrigado nos horários programados." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Conexão e Filtro na Torneira", "texto": "Rosqueie o timer digital automático na torneira do jardim e conecte logo abaixo um filtro de tela para evitar que areia entupa os gotejadores." },
      { "numero": 2, "titulo": "Distribuição da Linha Principal", "texto": "Desenrole a mangueira flexível preta de polietileno (16 mm) passando discretamente pela base dos vasos ou por trás dos canteiros." },
      { "numero": 3, "titulo": "Inserção dos Gotejadores", "texto": "Com o furador próprio, faça pequenos furos na mangueira principal e conecte os microtubos com gotejadores reguláveis posicionados na raiz de cada planta." },
      { "numero": 4, "titulo": "Calibração e Teste do Timer", "texto": "Ligue o sistema manualmente por 5 minutos, ajuste o fluxo de gotas girando a cabeça dos gotejadores e programe o timer para ligar 10 minutos às 6h da manhã." }
    ]
  },
  {
    "id": "servico-7",
    "modulo": "servicos",
    "nome": "Poda drástica de renovação em arbustos lenhosos",
    "tags": ["poda drastica", "renovacao", "arbusto", "inverno", "arvorete"],
    "nivel": 3,
    "icone": "axe",
    "imagem": "./images/servicos/poda-drastica-renovacao.webp",
    "resumo": "Rejuvenescimento de arbustos velhos e desgalhados cortando ramos lenhosos no período de dormência.",
    "descricao": "Arbustos com mais de 5 anos como hibiscos, primaveras (buganvílias) e gardênias tendem a ficar compridos e vazios por baixo. A poda drástica na época certa reinicia a planta com ramos vigorosos e floridos.",
    "temVideo": true,
    "youtubeId": "l9k7j5h3_Gf",
    "videoTitulo": "Como Fazer Poda Drástica sem Matar a Planta",
    "ficha": [
      { "rotulo": "Época correta", "valor": "Fim do inverno (julho a agosto), antes da brotação da primavera." },
      { "rotulo": "Ferramenta", "valor": "Serrote de poda curvo e podão de dois braços bem amolados." },
      { "rotulo": "Plantas indicadas", "valor": "Hibisco, Buganvília, Roseira, Fícus e Hortênsia." },
      { "rotulo": "Cuidados pós-corte", "valor": "Pasta cicatrizante com fungicida em todas as feridas lenhosas." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Escolha da Janela Climática", "texto": "Nunca faça poda drástica em dias de calor escaldante ou geada forte; aguarde dias amenos no final do inverno." },
      { "numero": 2, "titulo": "Corte de Rebaixamento", "texto": "Corte os galhos principais rebaixando a copa entre 1/3 e metade da sua altura total, preservando gemas laterais dormentes voltadas para fora." },
      { "numero": 3, "titulo": "Selagem das Feridas", "texto": "Pincele imediatamente pasta cicatrizante, própolis ou canela em pó com cola branca em todos os cortes maiores que 1 cm de diâmetro." },
      { "numero": 4, "titulo": "Adubação de Arrancada", "texto": "Incorpore húmus de minhoca e NPK 10-10-10 ao redor do tronco e regue bem para impulsionar a explosão de brotos novos na primavera." }
    ]
  },
  {
    "id": "servico-8",
    "modulo": "servicos",
    "nome": "Propagação por estaquia de galho na água e substrato",
    "tags": ["estaquia", "mudas", "propagacao", "galho", "enraizamento"],
    "nivel": 1,
    "icone": "copy",
    "imagem": "./images/servicos/propagacao-por-estaquia.webp",
    "resumo": "Multiplique suas plantas favoritas de graça através de cortes estratégicos de ponteiros semi-lenhosos.",
    "descricao": "A estaquia é a técnica mais acessível e mágica da jardinagem. Um ramo saudável de 15 cm pode se transformar em uma nova planta idêntica à planta-mãe em apenas 3 a 4 semanas.",
    "temVideo": true,
    "youtubeId": "p7o6i5u4_Yt",
    "videoTitulo": "Como Fazer Mudas Infinitas por Estaquia de Galho",
    "ficha": [
      { "rotulo": "Espécies fáceis", "valor": "Jiboia, Singônio, Alecrim, Hortelã, Ficus e Suculentas." },
      { "rotulo": "Tempo de enraizamento", "valor": "15 a 30 dias para surgirem as primeiras radicelas brancas." },
      { "rotulo": "Tamanho ideal do galho", "valor": "10 a 15 cm com pelo menos 2 a 3 nós." },
      { "rotulo": "Recipiente", "valor": "Frasco de vidro com água filtrada ou pote com perlita e vermiculita." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Seleção do Ramo Ideal", "texto": "Escolha um galho vigoroso, sem flores ou botões, que não esteja nem verde demais nem muito duro (estágio semi-lenhoso)." },
      { "numero": 2, "titulo": "Corte Chanfrado Abaixo do Nó", "texto": "Com tesoura afiada e desinfetada, faça um corte limpo em ângulo de 45° exatamente 5 mm abaixo de um nó (onde ficam os hormônios de enraizamento)." },
      { "numero": 3, "titulo": "Desfolha da Base", "texto": "Remova todas as folhas dos 2 nós inferiores para não apodrecerem na água, mantendo apenas 2 ou 3 folhas no topo para fazer fotossíntese." },
      { "numero": 4, "titulo": "Enraizamento em Luz Indireta", "texto": "Coloque a estaca em água limpa trocada a cada 4 dias ou espete em substrato leve e úmido, deixando em local bem iluminado sem sol direto." }
    ]
  },
  {
    "id": "servico-9",
    "modulo": "servicos",
    "nome": "Aplicação preventiva de óleo de neem contra pragas",
    "tags": ["oleo de neem", "pragas", "pulgacao", "cochonilha", "organico"],
    "nivel": 1,
    "icone": "shield",
    "imagem": "./images/servicos/aplicacao-oleo-de-neem.webp",
    "resumo": "Controle biológico 100% natural que interrompe a reprodução de cochonilhas, pulgões e lagartas.",
    "descricao": "O óleo de neem prensado a frio contém azadiractina, um composto natural que desregula os hormônios dos insetos mastigadores e sugadores sem contaminar polinizadores, pets ou humanos.",
    "temVideo": true,
    "youtubeId": "e9r7t5y3_Uo",
    "videoTitulo": "Como Usar Óleo de Neem sem Queimar as Folhas",
    "ficha": [
      { "rotulo": "Pragas combatidas", "valor": "Cochonilha branca, pulgão, mosca-branca, ácaros e tripes." },
      { "rotulo": "Diluição padrão", "valor": "5 ml de óleo de neem + 2 ml de detergente neutro para 1L de água." },
      { "rotulo": "Horário crítico", "valor": "SEMPRE no fim da tarde (o sol direto queima folhas com óleo)." },
      { "rotulo": "Segurança", "valor": "Biodegradável e permitido em agricultura orgânica certificada." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Inspeção Minuciosa", "texto": "Vire as folhas e inspecione a face inferior e as axilas dos galhos para identificar a presença de pontos brancos ou grudentos." },
      { "numero": 2, "titulo": "Emulsão Correta", "texto": "Como óleo não se mistura com água puro, misture o neem primeiro com algumas gotas de sabão neutro ou coco e só depois adicione a água no pulverizador." },
      { "numero": 3, "titulo": "Pulverização no Fim de Tarde", "texto": "Borrife a calda cobrindo frente e verso das folhas e os caules no final da tarde, quando os raios solares já não incidem mais sobre a planta." },
      { "numero": 4, "titulo": "Ciclo de Repetição", "texto": "Para infestação ativa, repita a aplicação a cada 5 a 7 dias durante 3 semanas até eliminar ovos e ninfas recém-eclodidas." }
    ]
  },
  {
    "id": "servico-10",
    "modulo": "servicos",
    "nome": "Replantio e toalete de orquídeas em vaso transparente",
    "tags": ["replantio", "orquidea", "substrato", "raizes", "toalete"],
    "nivel": 2,
    "icone": "flower-2",
    "imagem": "./images/servicos/replantio-de-orquideas.webp",
    "resumo": "Higienização de raízes velhas, remoção de substrato decomposto e acomodação com cascas novas e carvão.",
    "descricao": "A cada 2 anos o substrato de casca de pinus se degrada e vira terra ácida que sufoca as raízes da orquídea. Este procedimento restaura a capacidade respiratória e estimula novas hastes florais.",
    "temVideo": true,
    "youtubeId": "w8e6r4t2_Yu",
    "videoTitulo": "Como Trocar Orquídea de Vaso e Limpar Raízes Podres",
    "ficha": [
      { "rotulo": "Momento ideal", "valor": "Logo após a queda da última flor da haste (nunca com botões fechados)." },
      { "rotulo": "Substrato novo", "valor": "Casca de pinus lavada, carvão vegetal e um chumaço de esfagno." },
      { "rotulo": "Tipo de vaso", "valor": "Plástico transparente furado (permite fotossíntese radicular)." },
      { "rotulo": "Fixação", "valor": "A orquídea deve ficar firme sem balançar (orquídea solta não enraíza)." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Desenvase e Lavagem Radicular", "texto": "Retire a planta do vaso apertando o plástico com cuidado e lave as raízes em água corrente morna retirando todo o substrato velho grudado." },
      { "numero": 2, "titulo": "Poda de Raízes Mortas", "texto": "Com tesoura esterilizada, corte todas as raízes ocas, escuras ou moles, preservando intactas as raízes firmes verdes ou esbranquiçadas." },
      { "numero": 3, "titulo": "Acomodação no Vaso Transparente", "texto": "Posicione a orquídea com a base encostada na borda interna e preencha os espaços vazios com lascas de casca de pinus e carvão sem cobrir o caule central." },
      { "numero": 4, "titulo": "Tutoramento e Repouso", "texto": "Fixe uma estaca de bambu com presilha para a planta não se mexer e deixe sem regar por 48 horas para as feridas das raízes cicatrizarem." }
    ]
  },
  {
    "id": "servico-11",
    "modulo": "servicos",
    "nome": "Montagem de floreira de temperos para varandas",
    "tags": ["floreira", "temperos", "horta", "varanda", "apartamento"],
    "nivel": 1,
    "icone": "utensils",
    "imagem": "./images/servicos/montagem-floreira-de-temperos.webp",
    "resumo": "Horta compacta com manjericão, alecrim, cebolinha e salsinha combinados por exigência hídrica.",
    "descricao": "Cultivar temperos frescos em pequenos espaços é prático e terapêutico. O grande segredo desta montagem é não misturar plantas que bebem muita água (cebolinha e hortelã) com plantas de terra seca (alecrim e tomilho).",
    "temVideo": true,
    "youtubeId": "q7w5e3r1_Ty",
    "videoTitulo": "Como Montar Horta em Floreira no Apartamento",
    "ficha": [
      { "rotulo": "Luz necessária", "valor": "Mínimo de 4 horas de sol direto na varanda por dia." },
      { "rotulo": "Espécies compatíveis", "valor": "Manjericão + Cebolinha + Salsinha OU Alecrim + Tomilho + Orégano." },
      { "rotulo": "Drenagem", "valor": "Argila expandida e manta bidim indispensáveis no fundo." },
      { "rotulo": "Colheita", "valor": "Semanal, sempre cortando os ponteiros para estimular ramificações." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Preparação dos Furos e Drenagem", "texto": "Verifique se a floreira tem furos no fundo, adicione 3 cm de argila expandida e cubra com manta de poliéster para a terra não escapar." },
      { "numero": 2, "titulo": "Substrato Fértil e Aerado", "texto": "Preencha até a metade com mistura de terra vegetal, húmus de minhoca e um punhado de farinha de casca de ovo." },
      { "numero": 3, "titulo": "Disposição das Mudas", "texto": "Retire as mudas dos saquinhos e posicione-as com 15 a 20 cm de distância entre si, acomodando o torrão e preenchendo os vãos com terra leve." },
      { "numero": 4, "titulo": "Primeira Rega e Adaptação", "texto": "Regue suavemente com regador de bico fino e posicione a floreira no local mais ensolarado da varanda ou janela." }
    ]
  },
  {
    "id": "servico-12",
    "modulo": "servicos",
    "nome": "Construção de drenagem profunda com dreno francês",
    "tags": ["drenagem", "dreno frances", "alagamento", "brita", "geotextil"],
    "nivel": 3,
    "icone": "waves",
    "imagem": "./images/servicos/construcao-dreno-frances.webp",
    "resumo": "Elimine poças persistentes e alagamentos no jardim através de valetas com tubos perfurados e brita.",
    "descricao": "Jardins com solo argiloso sofrem com barro e poças que apodrecem as raízes das plantas. O dreno francês coleta a água subterrânea por gravidade e a descarrega na rede pluvial sem precisar de bombas.",
    "temVideo": true,
    "youtubeId": "a9s7d5f3_Gh",
    "videoTitulo": "Como Fazer Dreno Francês para Eliminar Alagamento",
    "ficha": [
      { "rotulo": "Declive mínimo", "valor": "1% de caimento por metro linear em direção ao ponto de saída." },
      { "rotulo": "Materiais", "valor": "Tubo dreno corrugado perfurado 100 mm, manta geotêxtil e brita nº 1." },
      { "rotulo": "Dimensões da vala", "valor": "30 cm de largura por 40 a 60 cm de profundidade." },
      { "rotulo": "Durabilidade", "valor": "Superior a 20 anos sem entupimento quando bem envelopado." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Escavação com Inclinação", "texto": "Abra a valeta no ponto mais baixo do terreno mantendo inclinação contínua de 1 cm a cada metro em direção ao descarte pluvial." },
      { "numero": 2, "titulo": "Envelopamento com Manta Geotêxtil", "texto": "Forre o fundo e as paredes da vala com manta geotêxtil (bidim) deixando sobras generosas nas laterais para fechar depois como um envelope." },
      { "numero": 3, "titulo": "Berço de Brita e Tubo Perfurado", "texto": "Coloque 5 cm de brita nº 1 no fundo, deite o tubo corrugado perfurado com as fendas viradas para baixo e cubra com mais 20 cm de brita limpa." },
      { "numero": 4, "titulo": "Fechamento do Envelope e Recomposição", "texto": "Dobre as abas da manta por cima da brita para a terra nunca se misturar com as pedras e recomponha o topo com terra e grama." }
    ]
  },
  {
    "id": "servico-13",
    "modulo": "servicos",
    "nome": "Aplicação de cobertura morta (Mulching) com casca de pinus",
    "tags": ["mulching", "cobertura morta", "casca de pinus", "umidade", "ervas daninhas"],
    "nivel": 1,
    "icone": "layers",
    "imagem": "./images/servicos/aplicacao-cobertura-morta.webp",
    "resumo": "Proteja a terra contra o calor excessivo, impeça ervas daninhas e economize metade da água da rega.",
    "descricao": "O mulching imita o chão da floresta. Ao cobrir o solo exposto com cascas de pinus tratadas ou palha, a terra não esquenta com o sol, as minhocas trabalham protegidas e a evaporação da água é drasticamente reduzida.",
    "temVideo": true,
    "youtubeId": "z8x6c4v2_Bn",
    "videoTitulo": "Benefícios Incríveis do Mulching com Casca de Pinus",
    "ficha": [
      { "rotulo": "Espessura da camada", "valor": "3 a 5 cm de cobertura uniforme sobre a terra." },
      { "rotulo": "Economia de irrigação", "valor": "Redução comprovada de 40% a 60% na evaporação da água." },
      { "rotulo": "Controle de mato", "valor": "Bloqueia a luz impedindo sementes invasoras de germinarem." },
      { "rotulo": "Acabamento estético", "valor": "Visual requintado de canteiro profissional de revista." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Limpeza Prévia do Canteiro", "texto": "Remova todas as ervas daninhas existentes pela raiz e passe o rastelo deixando a superfície plana e desobstruída." },
      { "numero": 2, "titulo": "Adubação e Rega Prévia", "texto": "Faça a adubação de manutenção planejada e regue a terra abundantemente antes de colocar a cobertura." },
      { "numero": 3, "titulo": "Espalhamento da Casca de Pinus", "texto": "Distribua a casca de pinus selecionada (tamanho médio) formando um tapete homogêneo de 4 a 5 cm de altura sobre toda a área." },
      { "numero": 4, "titulo": "Afastamento do Colo da Planta", "texto": "Afaste as cascas a cerca de 3 a 5 cm de distância do caule ou tronco de cada planta para não acumular umidade excessiva na casca do caule." }
    ]
  },
  {
    "id": "servico-14",
    "modulo": "servicos",
    "nome": "Combate biológico intensivo contra cochonilha branca",
    "tags": ["cochonilha", "praga", "sabao de coco", "limpeza", "resgate"],
    "nivel": 2,
    "icone": "bug",
    "imagem": "./images/servicos/combate-cochonilha-branca.webp",
    "resumo": "Elimine focos de algodão branco com limpeza mecânica de precisão e calda de sabão de coco neutro.",
    "descricao": "A cochonilha de carapaça ou farinhenta suga a seiva e secreta um líquido doce que atrai formigas e o fungo fuligem (fumagina). Aprenda o protocolo profissional para erradicar o foco sem intoxicar a casa.",
    "temVideo": true,
    "youtubeId": "m7n5b3v1_Cx",
    "videoTitulo": "Como Eliminar Cochonilhas Brancas Rapidamente",
    "ficha": [
      { "rotulo": "Receita caseira", "valor": "50g de sabão de coco ralado e dissolvido em 1 Litro de água morna." },
      { "rotulo": "Ação mecânica", "valor": "Algodão ou escova de dentes macia para remover os ninhos visíveis." },
      { "rotulo": "Isolamento", "valor": "Afastar o vaso infectado de outras plantas durante o tratamento." },
      { "rotulo": "Repetição", "valor": "Inspeção e reaplicação a cada 4 dias por duas semanas." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Quarentena da Planta", "texto": "Leve a planta infestada para uma área isolada bem ventilada para os insetos não migrarem para os vasos vizinhos." },
      { "numero": 2, "titulo": "Remoção Manual com Algodão", "texto": "Embeba um pedaço de algodão em álcool 70% ou calda de sabão e passe diretamente sobre os aglomerados brancos esmagando os insetos adultos." },
      { "numero": 3, "titulo": "Banho de Calda de Sabão de Coco", "texto": "Coloque a calda de sabão no borrifador e molhe todas as frestas, pecíolos e debaixo das folhas no final da tarde." },
      { "numero": 4, "titulo": "Enxágue e Monitoramento", "texto": "Na manhã seguinte, faça uma rega suave lavando as folhas e repita o processo a cada 4 dias até não restar nenhum ponto branco." }
    ]
  },
  {
    "id": "servico-15",
    "modulo": "servicos",
    "nome": "Divisão de touceiras para multiplicação de folhagens",
    "tags": ["divisao de touceira", "multiplicacao", "lirio da paz", "samambaia", "mudas"],
    "nivel": 2,
    "icone": "split",
    "imagem": "./images/servicos/divisao-de-touceiras.webp",
    "resumo": "Transforme um único vaso lotado em 3 ou 4 vasos novos completos com raízes e brotos ativos.",
    "descricao": "Plantas que crescem em touceiras densas como lírio-da-paz, marantas, sansevierias e samambaias acabam sufocando no próprio vaso. A divisão rejuvenesce a planta-mãe e gera mudas adultas de desenvolvimento imediato.",
    "temVideo": true,
    "youtubeId": "l8k6j4h2_Gf",
    "videoTitulo": "Como Dividir Touceira de Plantas Passo a Passo",
    "ficha": [
      { "rotulo": "Espécies ideais", "valor": "Lírio-da-paz, Samambaia, Espada-de-são-jorge, Maranta e Clorofito." },
      { "rotulo": "Melhor época", "valor": "Início da primavera ou outono em dias amenos." },
      { "rotulo": "Rendimento", "valor": "1 vaso grande costuma render de 2 a 4 novos vasos bem formados." },
      { "rotulo": "Ferramenta", "valor": "Faca longa de serrilha limpa e esterilizada." }
    ],
    "passos": [
      { "numero": 1, "titulo": "Desenvase e Desembaraço do Torrão", "texto": "Retire o torrão do vaso antigo e aperte suavemente a terra com as mãos para afrouxar as raízes entrelaçadas." },
      { "numero": 2, "titulo": "Identificação dos Pontos de Divisão", "texto": "Localize os núcleos individuais da touceira garantindo que cada futura muda contenha folhas saudáveis e um sistema de raízes próprio." },
      { "numero": 3, "titulo": "Separação Cuidadosa", "texto": "Puxe com as duas mãos em sentidos opostos desemaranhando as raízes ou use uma faca afiada esterilizada para cortar o rizoma de conexão." },
      { "numero": 4, "titulo": "Replantio Imediato dos Novos Vasos", "texto": "Plante cada nova muda em vaso preparado com substrato fresco, aperte a terra na base e regue imediatamente deixando na sombra por 7 dias." }
    ]
  }
];

// Jardim de Bolso - Banco de Dados do MVP v0.1
// 23 Itens completos distribuídos em 4 módulos e 3 níveis de experiência
// + 31 Dicas do dia (uma para cada dia do mês)

export const MODULOS = [
  {
    id: 'ferramentas',
    nome: 'Ferramentas',
    icone: 'wrench',
    emoji: '🛠️',
    total: 6,
    descricao: 'Equipamentos essenciais, cuidados, afiação e técnicas de manuseio seguro.'
  },
  {
    id: 'plantas',
    nome: 'Plantas',
    icone: 'leaf',
    emoji: '🪴',
    total: 6,
    descricao: 'Guia de cultivo com iluminação, rega, dimensões e particularidades de cada espécie.'
  },
  {
    id: 'adubacao',
    nome: 'Adubação',
    icone: 'sparkles',
    emoji: '🧪',
    total: 5,
    descricao: 'Nutrientes, fertilizantes orgânicos e químicos, dosagens e épocas de aplicação.'
  },
  {
    id: 'servicos',
    nome: 'Serviços',
    icone: 'clipboard-list',
    emoji: '📋',
    total: 6,
    descricao: 'Passo a passo detalhado para reformas, plantios, podas e projetos de jardinagem.'
  }
];

export const NIVEIS = {
  1: { id: 1, slug: 'iniciante', nome: 'Iniciante', badge: 'Iniciante', cor: 'verde' },
  2: { id: 2, slug: 'avancado', nome: 'Avançado', badge: 'Avançado', cor: 'azul' },
  3: { id: 3, slug: 'pro', nome: 'Pro', badge: 'Pro', cor: 'ouro' }
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
  "Folhagens rajadas e variegadas precisam de mais luz indireta do que espécies totalmente verdes.",
  "Corte galhos sempre a 45 graus para a água da chuva escorrer e não acumular no ponto de poda.",
  "A água da chuva é a melhor água para suas plantas: sempre que puder, coloque vasos sob chuva suave.",
  "Gramados recém-plantados necessitam de rega diária durante os primeiros 15 a 20 dias de enraizamento.",
  "Adubos ricos em fósforo estimulam a floração e o enraizamento; ricos em nitrogênio favorecem folhas.",
  "Gotejamento economiza água e previne doenças foliares ao irrigar pontualmente a zona de raízes.",
  "Em dias muito quentes, borrife água ao redor das samambaias para elevar a umidade relativa do ar.",
  "Composto caseiro só deve ser utilizado quando estiver com cor escura e cheiro agradável de terra de floresta.",
  "Ao transplantar mudas, mantenha a mesma altura do colo da planta para não sufocar o caule.",
  "A lavanda exige solo levemente arenoso e drenante; evite misturas argilosas que acumulem umidade.",
  "Vasos suspensos secam mais rápido porque recebem vento por todos os lados; monitore a rega com atenção.",
  "Plantas que estiolam (ficam compridas e fracas) estão esticando em busca de mais claridade.",
  "Finalize o mês revisando suas ferramentas: lubrifique e afie suas lâminas para os próximos cultivos."
];

export const ITENS = [
  // ==========================================
  // FERRAMENTAS (6 ITENS)
  // ==========================================
  {
    id: 'ferr-1',
    modulo: 'ferramentas',
    nome: 'Tesoura de poda',
    nivel: 1,
    resumo: 'Cortes limpos em ramos finos, desbaste e colheita sem mastigar os caules.',
    descricao: 'A ferramenta mais indispensável do jardineiro. Possui lâmina curva tipo bypass que funciona como uma tesoura comum, proporcionando cortes precisos e lisos que cicatrizam rapidamente sem estressar a planta.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Como empunhar, cortar em ângulo de 45° e afiar sua tesoura de poda.',
    ficha: [
      { rotulo: 'Para que serve', valor: 'Poda de limpeza, flores secas, colheita e ramos verdes de até 15 mm.' },
      { rotulo: 'Cuidados essenciais', valor: 'Lavar e secar após o uso; aplicar óleo vegetal leve nas lâminas e mola.' },
      { rotulo: 'Dicas de uso', valor: 'Corte sempre em ângulo de 45° a cerca de 5 mm acima de um nó ou gema saudável.' },
      { rotulo: 'Higienização', valor: 'Passe álcool 70% na lâmina entre plantas para evitar transmissão de viroses e fungos.' }
    ]
  },
  {
    id: 'ferr-2',
    modulo: 'ferramentas',
    nome: 'Pá de jardinagem',
    nivel: 1,
    resumo: 'Abertura de covas, transplante de mudas e mistura uniforme de substratos.',
    descricao: 'Pá de mão estreita e ergonômica, fabricada em aço ou alumínio de alta resistência. Essencial tanto para trabalhos delicados em vasos quanto para preparar pequenos canteiros de flores e ervas.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Alavancagem correta e técnicas de transplante sem romper o torrão.',
    ficha: [
      { rotulo: 'Para que serve', valor: 'Cavar berços de plantio, transladar terra, dosar adubos e aerar substrato.' },
      { rotulo: 'Cuidados essenciais', valor: 'Remover terra aderida após o uso; guardar em local seco para prevenir oxidação.' },
      { rotulo: 'Dicas de uso', valor: 'Apoie o polegar na parte superior da lâmina para obter torque sem forçar as articulações do pulso.' },
      { rotulo: 'Tamanho recomendado', valor: 'Lâmina de 15 a 20 cm com escala graduada de profundidade gravada no metal.' }
    ]
  },
  {
    id: 'ferr-3',
    modulo: 'ferramentas',
    nome: 'Regador de bico fino',
    nivel: 1,
    resumo: 'Irrigação milimétrica direto na raiz sem respingar terra nas folhas.',
    descricao: 'Projetado especialmente para jardinagem residencial e plantas de interior. O bico longo e estreito permite direcionar a água exatamente onde é necessária, evitando que gotas fiquem retidas nas folhas ou flores.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Dosagem de rega lenta para hidratação homogênea do substrato.',
    ficha: [
      { rotulo: 'Para que serve', valor: 'Regar plantas de pequeno e médio porte em vasos densos, prateleiras e cachepôs.' },
      { rotulo: 'Cuidados essenciais', valor: 'Não deixar água parada no fundo após a rega para evitar limo e mosquitos.' },
      { rotulo: 'Dicas de uso', valor: 'Aproxime o bico da base do substrato e despeje em espiral para molhar o torrão por igual.' },
      { rotulo: 'Capacidade ideal', valor: 'Modelos de 1 a 1,8 litros equilibram peso confortável e autonomia.' }
    ]
  },
  {
    id: 'ferr-4',
    modulo: 'ferramentas',
    nome: 'Rastelo de jardim',
    nivel: 2,
    resumo: 'Nivelamento de canteiros, descompactação da camada superficial e limpeza.',
    descricao: 'Ferramenta com dentes de aço curvados para trabalhar a superfície da terra. Permite recolher folhas secas, incorporar adubos orgânicos na camada superficial e preparar a cama de sementeira perfeitamente plana.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Movimentos de arrasto para destorroamento e nivelamento de canteiros.',
    ficha: [
      { rotulo: 'Para que serve', valor: 'Limpar detritos, quebrar torrões superficiais e nivelar terra antes do plantio.' },
      { rotulo: 'Cuidados essenciais', valor: 'Armazenar pendurado na parede para proteger o alinhamento dos dentes de aço.' },
      { rotulo: 'Dicas de uso', valor: 'Trabalhe puxando o rastelo para trás em movimentos curtos e com pressão uniforme.' },
      { rotulo: 'Variações', valor: 'Modelos de mão (pequenos para vasos) e de cabo longo (para grandes canteiros).' }
    ]
  },
  {
    id: 'ferr-5',
    modulo: 'ferramentas',
    nome: 'Tesoura de cerca viva',
    nivel: 2,
    resumo: 'Poda de nivelamento, alinhamento de sebes e acabamento topiário.',
    descricao: 'Tesoura de duas mãos com lâminas compridas retas ou serrilhadas. Desenvolvida para cortar múltiplos raminhos ao mesmo tempo, permitindo desenhar formas geométricas e manter cercas vivas e arbustos impecáveis.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Alinhamento de cerca viva com gabarito de fio e corte ergonômico.',
    ficha: [
      { rotulo: 'Para que serve', valor: 'Aparar arbustos de sebe (como pingo-de-ouro, buxinho e sansão-do-campo).' },
      { rotulo: 'Cuidados essenciais', valor: 'Afiar as lâminas com pedra diamantada e lubrificar o parafuso articulador.' },
      { rotulo: 'Dicas de uso', valor: 'Estique um barbante nivelado como guia para manter o topo da cerca perfeitamente reto.' },
      { rotulo: 'Segurança', valor: 'Uso obrigatório de óculos de proteção e luvas de raspa de couro.' }
    ]
  },
  {
    id: 'ferr-6',
    modulo: 'ferramentas',
    nome: 'Serra de poda articulada',
    nivel: 3,
    resumo: 'Corte ágil de galhos grossos com dentes travados para madeira verde.',
    descricao: 'Projetada para arboricultura e paisagismo profissional. Os dentes afiados em corte japonês (cortam ao puxar) evitam que a serra trave na madeira verde e realizam cortes limpos em galhos onde a tesoura não alcança.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Técnica de 3 cortes para remoção de galhos pesados sem descascar o tronco.',
    ficha: [
      { rotulo: 'Para que serve', valor: 'Corte de ramos vivos e lenhosos de 3 a 10 cm de diâmetro.' },
      { rotulo: 'Cuidados essenciais', valor: 'Remover resina com removedor biodegradável e manter a lâmina com protetor.' },
      { rotulo: 'Dicas de uso', valor: 'Faça sempre o primeiro corte de alívio por baixo do galho antes do corte superior definitivo.' },
      { rotulo: 'Diferencial', valor: 'Lâmina curva de aço carbono com dentes temperados por indução.' }
    ]
  },

  // ==========================================
  // PLANTAS (6 ITENS)
  // ==========================================
  {
    id: 'planta-1',
    modulo: 'plantas',
    nome: 'Samambaia Americana',
    nivel: 1,
    resumo: 'Folhagem verde exuberante e pendente, ideal para varandas e interiores claros.',
    descricao: 'Uma das espécies mais clássicas e queridas no paisagismo brasileiro. Cria cascatas de folhas frondosas e tem excelente capacidade de purificar o ar e aumentar a umidade de ambientes residenciais.',
    temVideo: false,
    ficha: [
      { rotulo: 'Luz', valor: 'Meia-sombra ou luz difusa brilhante. Nunca sol direto nas horas quentes.' },
      { rotulo: 'Rega', valor: 'Frequente (3 a 4x/semana). O solo deve permanecer úmido, mas sem encharcamento.' },
      { rotulo: 'Tamanho', valor: 'Folhas de 50 a 100 cm de comprimento com formato arqueado pendente.' },
      { rotulo: 'Uso ideal', valor: 'Jardins verticais, prateleiras altas, varandas cobertas e vasos suspensos.' },
      { rotulo: 'Atenção especial', valor: 'Proteja de ventos fortes e ar-condicionado direto, que desidratam as frondes.' }
    ]
  },
  {
    id: 'planta-2',
    modulo: 'plantas',
    nome: 'Suculenta Echeveria',
    nivel: 1,
    resumo: 'Formato escultural de rosa de pedra, fácil manutenção e baixa exigência de água.',
    descricao: 'Planta de folhas carnosas que armazenam água em formato de roseta simétrica. Perfeita para quem tem pouco tempo mas quer beleza botânica em janelas ensolaradas ou varandas.',
    temVideo: false,
    ficha: [
      { rotulo: 'Luz', valor: 'Sol pleno ou meia-sombra com mínimo de 4 a 5 horas de sol direto ao dia.' },
      { rotulo: 'Rega', valor: 'Espaçada (a cada 7 a 15 dias). Só regue quando a terra estiver 100% seca.' },
      { rotulo: 'Tamanho', valor: 'Rosetas compactas de 8 a 18 cm de diâmetro.' },
      { rotulo: 'Uso ideal', valor: 'Vasos rasos de barro, jardineiras de janela, terrários abertos e canteiros rochosos.' },
      { rotulo: 'Atenção especial', valor: 'Nunca jogue água dentro do miolo da roseta; o acúmulo causa fungos e apodrecimento.' }
    ]
  },
  {
    id: 'planta-3',
    modulo: 'plantas',
    nome: 'Costela-de-adão (Monstera)',
    nivel: 1,
    resumo: 'Folhas gigantes com recortes ornamentais, ícone do design biofílico.',
    descricao: 'Planta escultural de origem tropical de beleza inconfundível. Suas folhas largas possuem fenestras (fendas naturais) adaptadas para suportar ventos e permitir a passagem de luz na mata densa.',
    temVideo: false,
    ficha: [
      { rotulo: 'Luz', valor: 'Luz indireta abundante ou sol suave da manhã. Não tolera sol forte do meio-dia.' },
      { rotulo: 'Rega', valor: 'Moderada (1 a 2x/semana). Aguarde os 3 cm superiores do solo secarem.' },
      { rotulo: 'Tamanho', valor: 'Pode atingir de 1,5 a 3 metros com tutor de fibra de coco.' },
      { rotulo: 'Uso ideal', valor: 'Canto de salas, halls de entrada, escritórios bem iluminados e jardins de inverno.' },
      { rotulo: 'Atenção especial', valor: 'Tóxica para pets se mastigada (possui oxalato de cálcio). Limpar o pó das folhas regularmente.' }
    ]
  },
  {
    id: 'planta-4',
    modulo: 'plantas',
    nome: 'Lavanda Francesa',
    nivel: 2,
    resumo: 'Aroma relaxante inconfundível, flores lilases e atrativo de polinizadores.',
    descricao: 'Arbusto perene de origem mediterrânea com folhagem prateada e espigas florais perfumadas. Exige drenagem impecável e bastante sol direto para florescer com intensidade.',
    temVideo: false,
    ficha: [
      { rotulo: 'Luz', valor: 'Sol pleno obrigatório (mínimo de 6 horas de insolação direta diária).' },
      { rotulo: 'Rega', valor: 'Moderada para baixa. O solo deve drenar a água instantaneamente.' },
      { rotulo: 'Tamanho', valor: 'Arbusto arredondado de 40 a 60 cm de altura.' },
      { rotulo: 'Uso ideal', valor: 'Bordaduras aromáticas de caminhos, maciços ensolarados e vasos de terracota.' },
      { rotulo: 'Atenção especial', valor: 'Detesta solos argilosos e encharcados; faça podas de limpeza após as floradas sem atingir a madeira velha.' }
    ]
  },
  {
    id: 'planta-5',
    modulo: 'plantas',
    nome: 'Hibisco Tropical',
    nivel: 2,
    resumo: 'Flores grandes e vibrantes que atraem beija-flores durante quase todo o ano.',
    descricao: 'Arbusto florífero vigoroso tradicional nos trópicos. Suas flores vistosas em tons de vermelho, rosa, laranja e amarelo abrem pela manhã e fecham ao entardecer, renovando-se continuamente.',
    temVideo: false,
    ficha: [
      { rotulo: 'Luz', valor: 'Sol pleno. Floresce muito pouco se cultivado à meia-sombra.' },
      { rotulo: 'Rega', valor: 'Regular. Manter solo fresco e úmido no verão, reduzindo levemente no inverno.' },
      { rotulo: 'Tamanho', valor: 'Arbusto de 1,5 a 3 metros, aceitando podas de condução.' },
      { rotulo: 'Uso ideal', valor: 'Cercas vivas floridas, maciços isolados no gramado e renques coloridos.' },
      { rotulo: 'Atenção especial', valor: 'Suscetível a pulgões e cochonilhas nos brotos novos; adube com fósforo e potássio para estimular floração.' }
    ]
  },
  {
    id: 'planta-6',
    modulo: 'plantas',
    nome: 'Agapanto (Lírio-do-nilo)',
    nivel: 2,
    resumo: 'Hastes com buquês esféricos de flores azuis ou brancas de grande elegância.',
    descricao: 'Planta herbácea rizomatosa muito resistente e duradoura. Suas folhas em fita verde-escura formam touceiras densas que explodem em inflorescências espetaculares na primavera e no verão.',
    temVideo: false,
    ficha: [
      { rotulo: 'Luz', valor: 'Sol pleno ou meia-sombra bem clara com pelo menos 4h de sol direto.' },
      { rotulo: 'Rega', valor: 'Moderada durante o crescimento e floração; altamente tolerante à seca após enraizada.' },
      { rotulo: 'Tamanho', valor: 'Hastes florais atingem de 60 cm a 1,20 m de altura.' },
      { rotulo: 'Uso ideal', valor: 'Bordaduras de canteiros, contorno de piscinas, taludes e grandes floreiras.' },
      { rotulo: 'Atenção especial', valor: 'Multiplicação por divisão de touceiras no inverno a cada 3 ou 4 anos para rejuvenescer o canteiro.' }
    ]
  },

  // ==========================================
  // ADUBAÇÃO (5 ITENS)
  // ==========================================
  {
    id: 'adub-1',
    modulo: 'adubacao',
    nome: 'Húmus de minhoca',
    nivel: 1,
    resumo: 'Condicionador biológico 100% orgânico, melhora a aeração e fertilidade do solo.',
    descricao: 'Subproduto nobre da digestão das minhocas, rico em microrganismos vivos, ácidos húmicos e fúlvicos. Atua como um condicionador suave que retém umidade, estrutura a terra e libera nutrientes de forma gradual.',
    temVideo: false,
    ficha: [
      { rotulo: 'Para que serve', valor: 'Revitalizar solos empobrecidos, plantio de mudas e manutenção de plantas de interior.' },
      { rotulo: 'Quando usar', valor: 'No preparo de vasos novos ou em cobertura superficial a cada 30 a 60 dias.' },
      { rotulo: 'Dose recomendada', valor: '1 a 2 colheres de sopa por vaso médio; até 30% da mistura total de substrato.' },
      { rotulo: 'Atenções especiais', valor: 'É um adubo frio e orgânico: praticamente sem risco de queimar raízes mesmo se exagerar na dose.' }
    ]
  },
  {
    id: 'adub-2',
    modulo: 'adubacao',
    nome: 'Composto orgânico caseiro',
    nivel: 1,
    resumo: 'Reciclagem sustentável de resíduos de cozinha e folhas secas do jardim.',
    descricao: 'Resultado da decomposição biológica de restos de frutas, verduras, cascas de ovos, borra de café e folhagens secas. Alimenta a vida microbiana do solo e devolve micronutrientes preciosos para o ciclo botânico.',
    temVideo: false,
    ficha: [
      { rotulo: 'Para que serve', valor: 'Fertilização integral de hortas caseiras, árvores frutíferas e canteiros ornamentais.' },
      { rotulo: 'Quando usar', valor: 'Na primavera e no outono, misturado aos primeiros 10 cm do solo.' },
      { rotulo: 'Dose recomendada', valor: 'Uma camada de 2 a 3 cm espalhada sobre a superfície do canteiro (cerca de 2 kg/m²).' },
      { rotulo: 'Atenções especiais', valor: 'Usar apenas quando estiver completamente curtido (frio, cor de café e cheiro de terra de floresta).' }
    ]
  },
  {
    id: 'adub-3',
    modulo: 'adubacao',
    nome: 'NPK 10-10-10 Mineral',
    nivel: 2,
    resumo: 'Fórmula balanceada clássica para crescimento harmônico de folhas, caules e raízes.',
    descricao: 'Fertilizante inorgânico com proporções iguais de Nitrogênio (N), Fósforo (P) e Potássio (K). Fornece nutrição mineral de rápida assimilação para plantas estabelecidas que necessitam de reposição imediata.',
    temVideo: false,
    ficha: [
      { rotulo: 'Para que serve', valor: 'Manutenção periódica de plantas adultas, folhagens, árvores e gramados.' },
      { rotulo: 'Quando usar', valor: 'A cada 30 a 45 dias durante os meses de desenvolvimento ativo (primavera e verão).' },
      { rotulo: 'Dose recomendada', valor: '1 colher de chá rasa (5g) para vasos de 5 a 10 litros; distribuir rente à borda externa.' },
      { rotulo: 'Atenções especiais', valor: 'NUNCA encostar os grânulos no caule ou raízes expostas; regar logo após aplicar para dissolver.' }
    ]
  },
  {
    id: 'adub-4',
    modulo: 'adubacao',
    nome: 'Farinha de ossos autoclavada',
    nivel: 2,
    resumo: 'Fonte orgânica nobre de fósforo e cálcio para raízes vigorosas e flores abundantes.',
    descricao: 'Adubo de origem natural rico em Fósforo (P) e Cálcio (Ca) de liberação lenta. Essencial para fixação de raízes novas no transplante e para estimular a formação vigorosa de flores e frutos.',
    temVideo: false,
    ficha: [
      { rotulo: 'Para que serve', valor: 'Indução de floração, desenvolvimento do sistema radicular e redução da queda de botões.' },
      { rotulo: 'Quando usar', valor: 'No berço de plantio de mudas e no início da formação de botões florais na primavera.' },
      { rotulo: 'Dose recomendada', valor: '1 colher de sopa por vaso médio ou 50g por m² de canteiro, bem incorporado à terra.' },
      { rotulo: 'Atenções especiais', valor: 'Possui odor que pode atrair animais de estimação; misture bem ao solo e cubra com terra limpa.' }
    ]
  },
  {
    id: 'adub-5',
    modulo: 'adubacao',
    nome: 'Calcário dolomítico',
    nivel: 3,
    resumo: 'Correção de acidez (elevação do pH) e fornecimento equilibrado de Cálcio e Magnésio.',
    descricao: 'Corretivo agrícola essencial para solos brasileiros, tipicamente ácidos. Corrige o pH do solo, destravando os nutrientes que ficariam indisponíveis para as raízes, além de suprir Cálcio e Magnésio.',
    temVideo: false,
    ficha: [
      { rotulo: 'Para que serve', valor: 'Neutralização do alumínio tóxico e elevação da saturação por bases (V%) do solo.' },
      { rotulo: 'Quando usar', valor: '60 a 90 dias antes do plantio definitivo ou implantação de gramados e pomares.' },
      { rotulo: 'Dose recomendada', valor: 'Determinada através de laudo laboratorial de análise química do solo.' },
      { rotulo: 'Atenções especiais', valor: 'A aplicação em excesso alcaliniza o solo e bloqueia micronutrientes vitais como Ferro, Zinco e Manganês.' }
    ]
  },

  // ==========================================
  // SERVIÇOS (6 ITENS COM PASSO A PASSO)
  // ==========================================
  {
    id: 'serv-1',
    modulo: 'servicos',
    nome: 'Plantio de mudas em vasos',
    nivel: 1,
    resumo: 'Procedimento correto para envasar mudas garantindo drenagem e desenvolvimento.',
    descricao: 'O transplante correto é a chave para o sucesso de qualquer planta. Seguir a sequência de camadas e cuidados previne apodrecimento radicular e o choque de transplante.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Montagem de vaso do zero, manta de drenagem e aclimatação da muda.',
    passos: [
      { numero: 1, titulo: 'Drenagem no fundo', texto: 'Coloque 2 a 3 cm de argila expandida ou cacos de telha no fundo do vaso com furo, cobrindo com um recorte de manta bidim ou TNT.' },
      { numero: 2, titulo: 'Camada base de substrato', texto: 'Adicione uma camada de substrato aerado com húmus até a altura em que a muda ficará nivelada cerca de 2 cm abaixo da borda do vaso.' },
      { numero: 3, titulo: 'Acomodação do torrão', texto: 'Retire a muda do saquinho com cuidado para não desmanchar as raízes. Centralize o torrão no vaso sem enterrar o colo da planta.' },
      { numero: 4, titulo: 'Preenchimento e rega', texto: 'Preencha as laterais com terra, aperte suavemente com as pontas dos dedos e regue generosamente até sair água pelo dreno.' }
    ]
  },
  {
    id: 'serv-2',
    modulo: 'servicos',
    nome: 'Canteiro de flores e ervas',
    nivel: 1,
    resumo: 'Estruturação do solo, aeração e disposição estética de espécies florais.',
    descricao: 'Como transformar um pedaço de terra compactada em um canteiro farto e colorido, garantindo profundidade de raízes e retenção ideal de umidade.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Preparo da terra, escalonamento por altura e acabamento estético.',
    passos: [
      { numero: 1, titulo: 'Limpeza e descompactação', texto: 'Retire ervas daninhas com raízes e pedras. Afofe o solo com enxada ou garfo de jardim até 25 cm de profundidade.' },
      { numero: 2, titulo: 'Enriquecimento orgânico', texto: 'Incorpore 5 a 10 kg de composto orgânico ou húmus de minhoca por m², misturando bem para criar uma terra leve e escura.' },
      { numero: 3, titulo: 'Disposição por altura', texto: 'Posicione as espécies mais altas no fundo do canteiro, as médias no centro e as rasteiras ou forrações na borda frontal.' },
      { numero: 4, titulo: 'Mulching e rega inaugural', texto: 'Cubra o solo exposto com casca de pinus ou folhas secas trituradas para evitar evaporação e regue suavemente.' }
    ]
  },
  {
    id: 'serv-3',
    modulo: 'servicos',
    nome: 'Poda de formação em arbustos',
    nivel: 2,
    resumo: 'Condução da arquitetura da planta para copa densa, arejada e equilibrada.',
    descricao: 'A poda de formação orienta os ramos da planta desde jovem, estimulando brotações laterais simétricas e prevenindo galhos fracos ou cruzados no interior da copa.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Identificação de ramos ladrões e técnicas de corte acima da gema.',
    passos: [
      { numero: 1, titulo: 'Esterilização da tesoura', texto: 'Limpe as lâminas com álcool 70% ou chama rápida para evitar transmissão de patógenos fúngicos e bacterianos.' },
      { numero: 2, titulo: 'Eliminação de ramos indesejados', texto: 'Corte rente ao tronco todos os ramos secos, doentes, lascados e os brotos ladrões que nascem na base radicular.' },
      { numero: 3, titulo: 'Abertura do centro da copa', texto: 'Remova os galhos que cruzam o interior da planta para permitir que a luz do sol e o ar circulem por dentro da folhagem.' },
      { numero: 4, titulo: 'Desponte e proteção', texto: 'Apare as pontas dos ramos mais longos para forçar novas brotações laterais e pincele pasta de canela nos cortes mais grossos.' }
    ]
  },
  {
    id: 'serv-4',
    modulo: 'servicos',
    nome: 'Implantação de gramado',
    nivel: 2,
    resumo: 'Nivelamento do solo, adubação de base e assentamento de tapetes de grama.',
    descricao: 'Técnica profissional para formação de gramados uniformes, sem buracos ou desníveis, garantindo pegamento rápido das raízes nas primeiras duas semanas.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Nivelamento com rastelo, amarração das placas e rolo compressor.',
    passos: [
      { numero: 1, titulo: 'Preparo e nivelamento', texto: 'Remova entulhos e nivele minuciosamente o terreno com rastelo, criando uma leve inclinação de 1% para escoar águas pluviais.' },
      { numero: 2, titulo: 'Adubação de arranque', texto: 'Espalhe superfosfato simples e adubo orgânico nos primeiros 10 cm do solo para estimular o enraizamento imediato das placas.' },
      { numero: 3, titulo: 'Assentamento desencontrado', texto: 'Assente as placas de grama bem encostadas umas nas outras no padrão de amarração de tijolos, batendo levemente para assentar.' },
      { numero: 4, titulo: 'Rejunte e irrigação diária', texto: 'Polvilhe terra vegetal fina nas frestas entre as placas e regue diariamente de manhã e ao entardecer pelos primeiros 15 dias.' }
    ]
  },
  {
    id: 'serv-5',
    modulo: 'servicos',
    nome: 'Instalação de gotejamento automático',
    nivel: 3,
    resumo: 'Dimensionamento e montagem de sistema automatizado de altíssima eficiência hídrica.',
    descricao: 'Sistema hidráulico que entrega água gota a gota direto na zona de absorção radicular das plantas, economizando até 70% de água e eliminando a rotina manual de rega.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Montagem de manifold, perfuração de tubulação e programação do timer.',
    passos: [
      { numero: 1, titulo: 'Ponto de água e automação', texto: 'Instale na torneira um filtro de linha de disco, regulador de pressão de 1,5 bar e o controlador/timer eletrônico de rega.' },
      { numero: 2, titulo: 'Instalação da linha principal', texto: 'Estenda a mangueira mestra de polietileno (16 mm) ao longo dos canteiros ou vasos, fixando-a com estacas de solo.' },
      { numero: 3, titulo: 'Perfuração e microtubos', texto: 'Fure a mangueira nos pontos desejados com furador padrão e engate os microtubos com gotejadores autocompensantes de 2 a 4 L/h.' },
      { numero: 4, titulo: 'Teste de pressão e fechamento', texto: 'Abra a água para purgar o ar e resíduos da linha antes de plugar os finais de curso com fechos tipo oito; calibre o timer.' }
    ]
  },
  {
    id: 'serv-6',
    modulo: 'servicos',
    nome: 'Projeto paisagístico residencial',
    nivel: 3,
    resumo: 'Metodologia de concepção espacial unindo estética botânica, circulação e insolação.',
    descricao: 'Do estudo preliminar à prancha executiva de implantação. Aprenda a analisar o microclima, definir pontos focais e compor espécies em harmonia com a arquitetura.',
    temVideo: true,
    videoPlaceholder: 'Vídeo: Leitura de mapa solar, memorial botânico e prancha de quantitativos.',
    passos: [
      { numero: 1, titulo: 'Estudo do sítio e insolação', texto: 'Mapeie as trajetórias de sol (verão/inverno), direção dos ventos dominantes, tipo de solo e canalização subterrânea existente.' },
      { numero: 2, titulo: 'Zoneamento funcional', texto: 'Defina as áreas de convívio, caminhos de circulação, pontos de contemplação, jardins sensoriais e telas visuais de privacidade.' },
      { numero: 3, titulo: 'Seleção da paleta botânica', texto: 'Escale espécies compatíveis com o bioma local, agrupando plantas por hidrozona (mesma exigência de rega e insolação).' },
      { numero: 4, titulo: 'Detalhamento executivo', texto: 'Elabore a planta baixa com escala, tabela quantitativa de mudas, especificações de substrato, iluminação e plano de manutenção.' }
    ]
  }
];

export interface MenuItem {
  name: string;
  description?: string;
  prices: { label: string; value: string }[];
  image?: string;
}

export type CropPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export interface MenuImage { src: string; position: CropPosition }

export interface MenuSection {
  id: string;
  title: string;
  intro?: string;
  categoryImage?: string;
  itemImages?: Record<string, MenuImage>;
  items: MenuItem[];
}

const unico = (value: string) => [{ label: "Único", value }];

// Imagens geradas para cada categoria
const imgPaes = "/menu/paes-fermentacao.jpg";
const imgFolhados = "/menu/folhados.jpg";
const imgChocolateLaranja = "/menu/pao-chocolate-laranja.jpg";
const imgQueijos = "/menu/queijos.jpg";
const imgDoces = "/menu/doces.jpg";
const imgDiversos = "/menu/diversos.jpg";
const imgCestas = "/menu/cestas.jpg";
const imgFarinhasCafe = "/menu/farinhas-cafe.jpg";
const imgSanduba = "/menu/sanduba.jpg";

export const menu: MenuSection[] = [
  {
    id: "cesta-especial",
    title: "Cesta Especial",
    intro: "Cestas montadas com os melhores produtos da casa, ideais para presentes.",
    categoryImage: imgCestas,
    items: [
      {
        name: "Cesta 01",
        description: "Pão de Chocolate com Laranja e Castanha do Pará, 2 Croissants, 1 Baguette Levain e mais itens selecionados.",
        prices: unico("R$ 285,00"),
        image: imgCestas,
      },
      {
        name: "Cesta Especial Média",
        description: "Selecionamos os produtos que têm mais saída para você escolher e incluir na sua cesta.",
        prices: unico("R$ 253,00"),
        image: imgCestas,
      },
      {
        name: "Cesta Especial Grande",
        description: "Selecionamos os produtos que têm mais saída para você escolher e incluir na sua cesta.",
        prices: unico("R$ 337,40"),
        image: imgCestas,
      },
      {
        name: "Cesta Especial (Montagem)",
        description: "Cesta de palha, com laço e celofane e montagem. Produtos a serem escolhidos.",
        prices: unico("R$ 51,75"),
        image: imgCestas,
      },
    ],
  },
  {
    id: "paes",
    title: "Pães",
    intro: "Todos os nossos pães são de fermentação natural, produzidos quase totalmente à mão, sem aditivos químicos excessivos.",
    categoryImage: imgPaes,
    items: [
      {
        name: "Chocolate, Laranja e Cast. do Pará",
        description: "O queridinho da casa! Lembra um panetone fora de época. Massa macia com adição de chocolate belga, laranja cristalizada e castanha do Pará.",
        prices: unico("R$ 26,80"),
        image: imgChocolateLaranja,
      },
      {
        name: "Bruto Sourdough",
        description: "Nosso sourdough em formato grande! Massa de longa fermentação onde procuramos desenvolver ao máximo os sabores e a estrutura do pão.",
        prices: unico("R$ 49,30"),
        image: imgPaes,
      },
      {
        name: "Einkorn",
        description: "Feito com farinha do grão einkorn, o mais ancestral que conhecemos, sem modificação genética. Sabor rico e textura especial.",
        prices: unico("R$ 39,50"),
        image: imgPaes,
      },
      {
        name: "Espelta",
        description: "Pão ancestral 100% farinha de espelta! Trigo antigo com baixo índice glicêmico, poucos carboidratos e mais proteínas.",
        prices: unico("R$ 26,80"),
        image: imgPaes,
      },
      {
        name: "KHORASAN",
        description: "Pão 100% farinha de Khorasan, integral, grão ancestral, plantado em Formosa, menos glúten e digestão facilitada.",
        prices: unico("R$ 32,00"),
        image: imgPaes,
      },
      {
        name: "Multigrãos",
        description: "Pão 100% farinha integral, super macio! Adicionamos aveia, linhaça, gergelim, sementes e muito mais.",
        prices: unico("R$ 26,20"),
        image: imgPaes,
      },
      {
        name: "Integral Puro",
        description: "Nosso 100% integral super macio! Ingredientes: farinha integral, levain, água, sal.",
        prices: unico("R$ 23,90"),
        image: imgPaes,
      },
      {
        name: "VollkornBrot (100% Centeio)",
        description: "Pão 100% centeio! Usamos nosso levain de centeio também. Sabor bastante rico e com a acidez característica do centeio.",
        prices: unico("R$ 12,70"),
        image: imgPaes,
      },
      {
        name: "Castanhas Brasileiras",
        description: "Nesse pão adicionamos castanha de caju, castanha de baru e castanha do Pará. Um blend especial de fermentação natural.",
        prices: unico("R$ 24,70"),
        image: imgPaes,
      },
      {
        name: "Figo Com Nozes e Cramberry",
        description: "Nosso pão agridoce com figo especial. Um blend de farinha integral, centeio e branca, com figos, nozes e cramberry.",
        prices: unico("R$ 26,80"),
        image: imgPaes,
      },
      {
        name: "Miracolo",
        description: "Blend de grãos ancestrais, saborizado com alecrim e azeite. Fermentação 100% natural.",
        prices: unico("R$ 26,80"),
        image: imgPaes,
      },
      {
        name: "Pão com Azeitonas",
        description: "Acompanhamento perfeito para aquele vinho delícia! Usamos azeitonas verdes e pretas.",
        prices: unico("R$ 23,90"),
        image: imgPaes,
      },
      {
        name: "Centeio com Semente de Girassol",
        description: "Pão de centeio com bastante semente de girassol e gergelim no interior. Fermentação natural.",
        prices: unico("R$ 25,30"),
        image: imgPaes,
      },
      {
        name: "Bordelais",
        description: "Nosso típico italiano com casquinha mais grossa e miolo bem alveolado. Um blend de farinhas especiais.",
        prices: unico("R$ 23,90"),
        image: imgPaes,
      },
      {
        name: "Brioche Tradicional",
        description: "Massa bem amanteigada, macia e saborosa. Excelente para o pão na chapa da primeira refeição.",
        prices: unico("R$ 25,30"),
        image: imgFolhados,
      },
      {
        name: "Sarraceno",
        description: "Usamos uma mistura de trigo comum ao sarraceno. Adicionamos aveia e sementes para enriquecer ainda mais.",
        prices: unico("R$ 9,90"),
        image: imgPaes,
      },
      {
        name: "Pão de tâmara e gorgonzola",
        description: "Pão com farinha integral, tâmaras e queijo gorgonzola.",
        prices: unico("R$ 18,00"),
        image: imgPaes,
      },
      {
        name: "Baguette Levain (2un)",
        description: "Tradicional receita da baguette francesa, fermentação natural. Toda furadinha para você colocar o que quiser.",
        prices: unico("R$ 18,60"),
        image: imgPaes,
      },
      {
        name: "Baguette Integral (2un)",
        description: "Tradicional receita da baguette francesa com acréscimo de farinha integral, fermentação natural.",
        prices: unico("R$ 22,40"),
        image: imgPaes,
      },
      {
        name: "Baguette Calabresa e Queijo (2un)",
        description: "Tradicional receita da baguette francesa, com fermentação natural e a massa com calabresa e queijo.",
        prices: unico("R$ 22,40"),
        image: imgPaes,
      },
      {
        name: "Ciabatta",
        description: "Tradicional ciabatta italiana, fermentação natural. Toda furadinha para você colocar o acompanhamento que preferir.",
        prices: unico("R$ 9,30"),
        image: imgPaes,
      },
      {
        name: "Hamburguer (6 Un)",
        description: "Nosso hambúrguer é um clássico. Adicionamos uma pitada de cebola e salsa para dar aquele sabor especial.",
        prices: unico("R$ 21,20"),
        image: imgPaes,
      },
      {
        name: "Torradas fininhas",
        description: "Torradas fininhas dos nossos pães diversos. São ótimos acompanhamentos para a sua tábua de queijos.",
        prices: unico("R$ 7,70"),
        image: imgPaes,
      },
      {
        name: "Pão de Queijo Congelado 500g",
        description: "Nossa receita mineiríssima! Usamos polvilho de Araxá, queijo de verdade e nenhuma essência artificial.",
        prices: unico("R$ 35,20"),
        image: imgPaes,
      },
      {
        name: "Cinnamon Roll",
        description: "Nossa massa folhada recheada de canela, açúcar e nozes. Derrete na boca e faz o melhor café da manhã.",
        prices: unico("R$ 9,70"),
        image: imgFolhados,
      },
      {
        name: "Croissant",
        description: "Nossa receita do típico croissant francês de fermentação natural. Camadas perfeitas e sabor inigualável.",
        prices: unico("R$ 9,70"),
        image: imgFolhados,
      },
      {
        name: "Croissant de Chocolate",
        description: "Nossa receita do típico croissant francês de fermentação natural, com chocolate belga no recheio.",
        prices: unico("R$ 10,90"),
        image: imgFolhados,
      },
      {
        name: "Panettone (verificar sabor da semana)",
        description: "Sabor semanal rotativo. Consulte a casa para o sabor disponível.",
        prices: unico("R$ 70,00"),
        image: imgFolhados,
      },
    ],
  },
  {
    id: "queijos",
    title: "Queijos",
    intro: "Seleção cuidadosa de queijos artesanais brasileiros e europeus, perfeitos com nossos pães.",
    categoryImage: imgQueijos,
    items: [
      { name: "Alpino (aprox. 250gr)", description: "Queijo de leite de vaca. Maturação média de dois meses. Casca fina amarelada. Massa semidura de textura firme.", prices: unico("R$ 47,25"), image: imgQueijos },
      { name: "Artesanal Alagoa (aprox. 320gr)", description: "Elaborado artesanalmente com leite cru a 1.522m de altitude. Sabor único e complexo.", prices: unico("R$ 51,33"), image: imgQueijos },
      { name: "Comté (aprox. 400gr)", description: "De origem francesa, o Comté é um queijo típico do maciço de Jura, produzido a partir de leite cru.", prices: unico("R$ 86,80"), image: imgQueijos },
      { name: "Fontina (aprox. 350gr)", description: "De origem italiana, o Fontina é um queijo clássico do Vale de Aosta, produzido a partir de leite cru.", prices: unico("R$ 77,77"), image: imgQueijos },
      { name: "Gorgonzola Dolce (aprox. 310gr)", description: "De origem italiana, o Gorgonzola Dolce é um queijo de leite de vaca das regiões de Piemonte e Lombardia.", prices: unico("R$ 60,45"), image: imgQueijos },
      { name: "Gorgonzola De Colher (aprox. 400gr)", description: "O Gorgonzola originário da Itália é um queijo de mofo azul feito de leite de vaca.", prices: unico("R$ 81,20"), image: imgQueijos },
      { name: "Queijo dos Mendes (aprox. 150gr)", description: "Queijo semiduro, pouco prensado, com o objetivo de reter umidade. Sabor suave e versátil.", prices: unico("R$ 31,50"), image: imgQueijos },
      { name: "Queijo Minas (meia lua aprox. 800gr)", description: "Um dos queijos mais populares do Brasil. Original de Minas Gerais.", prices: unico("R$ 69,60"), image: imgQueijos },
      { name: "Pote De Creme De Queijo Gouda 100g", description: "Queijo de gosto adocicado que lembra nozes, derretido a alta temperatura para uma pasta cremosa.", prices: unico("R$ 35,60"), image: imgQueijos },
      { name: "Morro Azul 125g", description: "Criado em Pomerode. Nome homenageia um dos símbolos da cidade.", prices: unico("R$ 44,00"), image: imgQueijos },
      { name: "Tomme Vaudoise 125g", description: "Queijo macio de origem suíça, do cantão de Vaud. Casca fina e interior cremoso.", prices: unico("R$ 31,00"), image: imgQueijos },
      { name: "Vale do Testo 150gr", description: "Nome homenageia o Rio do Testo, que corta o território de Pomerode.", prices: unico("R$ 48,93"), image: imgQueijos },
      { name: "Mozzarella de Búfala Bolinha 250g", description: "Queijo produzido com 100% leite de Búfala. Textura macia e sabor fresco inigualável.", prices: unico("R$ 39,70"), image: imgQueijos },
      { name: "Burrata de Búfala 100g", description: "Capa de mussarela e recheio cremoso. A cereja do bolo da tábua de queijos.", prices: unico("R$ 33,00"), image: imgQueijos },
      { name: "Queijo Barbiche (Cabra) aprox. 100gr", description: "Queijo de cabra artesanal de sabor delicado e levemente ácido.", prices: unico("R$ 37,40"), image: imgQueijos },
      { name: "Parahyba (aprox. 225gr)", description: "Queijos de casca lavada são uma tradição europeia. Sabor marcante e complexo.", prices: unico("R$ 54,27"), image: imgQueijos },
      { name: "Marajó Queijo De Búfala (aprox. 270gr)", description: "Queijo artesanal da ilha do Marajó, feito com leite cru de Búfala desnatado.", prices: unico("R$ 50,22"), image: imgQueijos },
      { name: "Urucum (aprox. 250gr)", description: "Visual vibrante com casca lavada de coloração avermelhada/alaranjada decorrente do urucum.", prices: unico("R$ 47,25"), image: imgQueijos },
      { name: "Queijo Meia Cura (aprox. 175gr)", description: "O queijo meia cura é um velho conhecido da mesa do brasileiro. Sabor para todos os paladares.", prices: unico("R$ 32,20"), image: imgQueijos },
      { name: "Queijo com Alecrim (aprox. 250gr)", description: "As ervas são parceiras dos queijos há tempos. O alecrim confere perfume e sabor únicos.", prices: unico("R$ 44,95"), image: imgQueijos },
    ],
  },
  {
    id: "diversos",
    title: "Diversos",
    intro: "Geleias, patês, kombuchas, frios e acompanhamentos selecionados para completar sua mesa.",
    categoryImage: imgDiversos,
    items: [
      { name: "Geleia de Framboesa 250g", description: "Apenas framboesa, gotas de limão e um pouco de açúcar.", prices: unico("R$ 42,20"), image: imgDiversos },
      { name: "Tapenade de azeitonas 250g", description: "Azeitonas, azeite, alcaparras e alho.", prices: unico("R$ 42,20"), image: imgDiversos },
      { name: "Pesto 250g", description: "Pesto de manjericão, azeite, sal, alho e castanha do Pará e queijo parmesão (sem lactose).", prices: unico("R$ 42,20"), image: imgDiversos },
      { name: "Geleia de Frutas Vermelhas Pomerode 230g", description: "Uma geleia que alia os deliciosos sabores: morango, mirtilo, amora e outros.", prices: unico("R$ 32,80"), image: imgDiversos },
      { name: "Mel Cremoso Vermont 300g", description: "Um mel extremamente raro, de textura cremosa, atingida através de um tratamento térmico especial.", prices: unico("R$ 75,45"), image: imgDiversos },
      { name: "Geleia de Abacaxi Com Pimenta Pomerode 230g", description: "Combinações perfeitas com queijos de mais sabor e em especial os macios.", prices: unico("R$ 31,20"), image: imgDiversos },
      { name: "Geleia De Amora 230g", description: "Combinações perfeitas com queijos de mais sabor e em especial os macios.", prices: unico("R$ 31,20"), image: imgDiversos },
      { name: "Geleia de Pimenta 230g", description: "Acompanha carnes, queijos mais adocicados com leve frescor.", prices: unico("R$ 31,20"), image: imgDiversos },
      { name: "Iogurte Natural Integral Vermont 500g", description: "A essência do natural. Menos é mais. Feito com apenas dois ingredientes: leite integral e fermento.", prices: unico("R$ 17,50"), image: imgDiversos },
      { name: "Iogurte Proteico com Colágeno Vermont 500g", description: "Alimento funcional com alto teor de proteína, zero lactose e sem adição de açúcares.", prices: unico("R$ 21,00"), image: imgDiversos },
      { name: "Presunto Beinschinken Defumado (Berna) 150gr", description: "Beinschinken é um presunto defumado naturalmente, elaborado através do corte do pernil.", prices: unico("R$ 20,18"), image: imgDiversos },
      { name: "Pastrami (Berna) 150gr", description: "Carne bovina cozida temperada.", prices: unico("R$ 32,78"), image: imgDiversos },
      { name: "Patê de Fígado de Frango 100gr", description: "Patê artesanal de fígado de frango.", prices: unico("R$ 16,80"), image: imgDiversos },
      { name: "Patê de Vitela Berna 100gr", description: "Patê artesanal de vitela.", prices: unico("R$ 19,40"), image: imgDiversos },
      { name: "Kombucha Sucupira 300ml Limão e Hortelã", description: "Kombucha artesanal sabor limão e hortelã.", prices: unico("R$ 14,50"), image: imgDiversos },
      { name: "Kombucha Sucupira 300ml Gengibre", description: "Kombucha artesanal sabor gengibre.", prices: unico("R$ 14,50"), image: imgDiversos },
      { name: "Kombucha Sucupira 300ml Pink Lemonade", description: "Kombucha artesanal sabor pink lemonade.", prices: unico("R$ 14,50"), image: imgDiversos },
      { name: "Kombucha Sucupira 300ml Tangerina", description: "Kombucha artesanal sabor tangerina.", prices: unico("R$ 14,50"), image: imgDiversos },
      { name: "Água Sem Gás 500ml", description: "", prices: unico("R$ 5,75"), image: imgDiversos },
      { name: "Água Com Gás 500ml", description: "", prices: unico("R$ 5,75"), image: imgDiversos },
    ],
  },
  {
    id: "doces",
    title: "Doces e Chocolates",
    intro: "Puro cacau, zero adição de açúcar onde possível. Brownies, cookies, bolos e trufas artesanais.",
    categoryImage: imgDoces,
    items: [
      { name: "Bolo de Laranja, Tâmara e Nozes (zero lactose)", description: "Bolo artesanal sem lactose com laranja, tâmaras e nozes.", prices: unico("R$ 21,20"), image: imgDoces },
      { name: "Bolo de Banana com Castanhas do Pará (sem lactose)", description: "Bolo artesanal sem lactose com banana e castanhas do Pará.", prices: unico("R$ 21,20"), image: imgDoces },
      { name: "Cookie de Chocolate Amargo", description: "Cookie artesanal com chocolate amargo.", prices: unico("R$ 14,00"), image: imgDoces },
      { name: "Cookie Integral", description: "Nesse cookie usamos óleo de coco, açúcar mascavo, ovos, castanhas brasileiras e aveia.", prices: unico("R$ 10,00"), image: imgDoces },
      { name: "Brownie de Nozes", description: "Brownie artesanal com nozes selecionadas.", prices: unico("R$ 10,30"), image: imgDoces },
      { name: "Trufa Choconuts 20g", description: "Uma combinação incrível do chocolate dark milk com avelãs e castanha de caju.", prices: unico("R$ 8,50"), image: imgDoces },
      { name: "Chocolate 70% com Castanha de Caju 80g (Vegano, Sem Açúcar)", description: "Com teor de cacau 70%, proporciona uma experiência sensorial única. Vegano e sem açúcar.", prices: unico("R$ 33,85"), image: imgDoces },
      { name: "Chocolate Intenso 55% com Nibs 80g (Vegano, Sem Açúcar)", description: "Além da crocância incrível, proporciona um sabor rico e profundo com nibs de cacau.", prices: unico("R$ 27,50"), image: imgDoces },
    ],
  },
  {
    id: "farinhas",
    title: "Farinhas",
    intro: "Farinhas especiais para quem quer fazer pão em casa com a mesma qualidade da Varanda.",
    categoryImage: imgFarinhasCafe,
    items: [
      { name: "Farinha de Espelta - Kg", description: "Trigo Espelta: primo da farinha de trigo, trigo ancestral, alternativa mais nutritiva com menos glúten.", prices: unico("R$ 38,90"), image: imgFarinhasCafe },
      { name: "Farinha Integral T150 - Kg", description: "Farinha de trigo de alta qualidade, produzida sem aditivos e com seleção de grãos especiais.", prices: unico("R$ 26,70"), image: imgFarinhasCafe },
      { name: "Farinha Branca T65 - Kg", description: "Farinha de trigo de alta qualidade, produzida sem aditivos e com seleção de grãos especiais.", prices: unico("R$ 20,50"), image: imgFarinhasCafe },
      { name: "Levain Desidratado", description: "Desidratamos nosso levain para você usá-lo quando pretender fazer pão em casa.", prices: unico("R$ 12,80"), image: imgFarinhasCafe },
    ],
  },
  {
    id: "cafes",
    title: "Cafés",
    intro: "Blends e single origins selecionados, com acessórios para o preparo perfeito em casa.",
    categoryImage: imgFarinhasCafe,
    items: [
      { name: "Blend 209 225g", description: "Descubra o sabor excepcional desse blend de grãos Mokinha, um café de alta qualidade.", prices: unico("R$ 68,00"), image: imgFarinhasCafe },
      { name: "Noz De Minas 225g", description: "Café especial de Minas Gerais com notas de nozes.", prices: unico("R$ 63,40"), image: imgFarinhasCafe },
      { name: "Sta. Edwirges — Catuaí Amarelo 500g", description: "Café com notas doces, toque suave de amêndoas e acidez cítrica equilibrada.", prices: unico("R$ 95,40"), image: imgFarinhasCafe },
      { name: "Coador Hario V60 Tam. 01", description: "Cor vermelha. Ideal para preparar 1–2 xícaras com extração precisa.", prices: unico("R$ 79,50"), image: imgFarinhasCafe },
      { name: "Filtro de Papel Hario V60 Tam. 01", description: "Filtros de papel compatíveis com o coador V60 tamanho 01.", prices: unico("R$ 77,10"), image: imgFarinhasCafe },
      { name: "Filtro de Papel Hario V60 Tam. 02 (pack)", description: "Quarenta unidades. Filtros de papel compatíveis com o coador V60 tamanho 02.", prices: unico("R$ 34,00"), image: imgFarinhasCafe },
      { name: "Filtro de Papel Hario V60 Tam. 02 (unitário)", description: "Filtros de papel compatíveis com o coador V60 tamanho 02.", prices: unico("R$ 84,25"), image: imgFarinhasCafe },
    ],
  },
  {
    id: "sanduba",
    title: "Sanduba",
    intro: "Feito na hora, no pão que sai do forno.",
    categoryImage: imgSanduba,
    items: [
      {
        name: "Sanduba Estação",
        description: "Nosso sanduíche é feito em um pão de massa ciabatta bem azeitada, com alface, tomate, ingredientes da estação e muito sabor.",
        prices: unico("R$ 15,40"),
        image: imgSanduba,
      },
    ],
  },
];

export const contato = {
  nome: "Varanda Pães Artesanais",
  telefone: "(61) 3033-2002",
  telefoneLink: "tel:+556130332002",
  whatsapp: "https://wa.me/5561998223979",
  endereco: "CLN 215, Bloco D, Loja 39 — Asa Norte, Brasília – DF, 70874-540",
  horario: "Terça a sábado, das 9h às 19h",
  horarioDetalhe: "Fechado segunda-feira e domingo.",
  instagram: "https://www.instagram.com/varandapaesartesanais/",
  cardapioOnline: "https://varanda-paes-artesanais.goomer.app/menu",
  mapa: "https://www.google.com/maps/dir/?api=1&destination=Varanda+P%C3%A3es+Artesanais+CLN+215+Bras%C3%ADlia",
};

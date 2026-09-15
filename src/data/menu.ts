export interface MenuItem {
  name: string;
  description?: string;
  prices: { label: string; value: string }[];
  image?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  intro?: string;
  categoryImage?: string;
  items: MenuItem[];
}

const consulta = [{ label: "Preço", value: "Consulte" }];
const unico = (value: string) => [{ label: "Único", value }];

const imgCafe = "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkDr_mMOhyfaMQ54q6u973kytxPvK9ow2Lt0i2wu5ke6cp8hOVFhkTCQcKcK9dmbv0oO9gCjeeaJOEeQbXrTDiFP_1nDB6qgWPRtcTc1RmuLZsorXw5ZMslA8yOWuDilRR6uWjp=s900";
const imgChocolate = "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl3JSRRwOuuwBoD5df2GLzVvd3970LWsNQ8-_t4wforQ-ZPITnO8nkSHLYr6MN4z9AINp0JPB58Sr1_szi8mC1vc2STppX2jUQlHrT9zE5n5KWF5oBbKmotym6NmIRWG54w_Shk=s900";
const imgCalzone = "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkik8l1SknOhjt_DnOhtFnLNDhy-MTE7lNUYxE7DHmjEwnrZVyLRK8nGM9OhnJnNypFub01IMxqX6FSzvj2073DgZjnYoyHATUicYJ5k-C1vMeqrKHpwF_PFaqyRuhDNbX1-PUt=s900";

export const menu: MenuSection[] = [
  {
    id: "destaques",
    title: "Destaques da casa",
    intro: "Itens destacados no perfil da Pães e Vinhos no Google.",
    items: [
      { name: "Café da Manhã", description: "Um dos mais pedidos da casa.", prices: consulta, image: imgCafe },
      { name: "Chocolate Quente", description: "Um dos mais pedidos da casa.", prices: consulta, image: imgChocolate },
      { name: "Calzone", description: "Um dos mais pedidos da casa.", prices: consulta, image: imgCalzone },
      { name: "Mini Torta Naked", prices: consulta },
      { name: "Cappuccino Tradicional", prices: consulta },
      { name: "Café Expresso", prices: consulta },
      { name: "Quiche", prices: consulta },
      { name: "Sanduíche do Gilson", prices: consulta },
      { name: "Bruschetta de Marguerita Gourmet", prices: consulta },
      { name: "Bruschetta 4 Queijos", prices: consulta },
      { name: "Sopa de Abóbora com Carne", prices: consulta },
      { name: "Buffet Self-Service", prices: consulta },
      { name: "Macaron", prices: consulta },
    ],
  },
  {
    id: "crepes",
    title: "Crepes salgados",
    items: [
      { name: "Paris", description: "Presunto e mussarela.", prices: unico("R$ 34,99") },
      { name: "Napolitano", description: "Presunto, mussarela, tomate e orégano.", prices: unico("R$ 38,99") },
      { name: "Light", description: "Peito de peru e queijo minas.", prices: unico("R$ 38,99") },
      { name: "Italianíssimo", description: "Mussarela de búfala, tomate-cereja e manjericão.", prices: unico("R$ 41,99") },
      { name: "Marguerita", description: "Mussarela, tomate, parmesão e manjericão.", prices: unico("R$ 41,99") },
      { name: "Calabresa", description: "Calabresa, mussarela, cebola, azeitona preta e orégano.", prices: unico("R$ 41,99") },
      { name: "Três Queijos", description: "Mussarela, parmesão e gorgonzola.", prices: unico("R$ 43,99") },
      { name: "Frango", description: "Frango, mussarela e catupiry.", prices: unico("R$ 43,99") },
      { name: "Lagarto", description: "Lagarto ao vinagrete, mussarela e tomate.", prices: unico("R$ 43,99") },
      { name: "Carne Seca", description: "Carne seca, queijo e tomate.", prices: unico("R$ 43,99") },
    ],
  },
  {
    id: "caldos",
    title: "Caldos e sopas",
    intro: "Sabores sujeitos à disponibilidade do dia.",
    items: [
      { name: "Tradicionais · 500 ml", description: "Canja, frango com mandioca, feijão, caldo verde, carne moída com mandioca, frango com milho, legumes, lentilha, carne seca com abóbora ou vaca atolada.", prices: unico("R$ 25,99") },
      { name: "Especiais · 500 ml", description: "Parisiense, batata-baroa, minestrone ou yakissoba.", prices: unico("R$ 28,99") },
    ],
  },
  {
    id: "crepes-doces",
    title: "Crepes doces",
    items: [
      { name: "Banana Tradicional", description: "Banana, mussarela, açúcar e canela.", prices: unico("R$ 37,99") },
      { name: "Banana com Chocolate", description: "Banana e chocolate.", prices: unico("R$ 38,99") },
      { name: "Chocolate com Morango", description: "Chocolate e morango.", prices: unico("R$ 39,99") },
      { name: "Ricardo (Cartola)", description: "Banana, queijo coalho, canela e melado.", prices: unico("R$ 39,99") },
      { name: "Morango com Nutella", description: "Morango e Nutella.", prices: unico("R$ 46,99") },
      { name: "Da Francisca", description: "Banana, chocolate, sorvete de creme e castanha de caju.", prices: unico("R$ 46,99") },
      { name: "Doce de Leite com Sorvete", description: "Doce de leite argentino e uma bola de sorvete de creme.", prices: unico("R$ 46,99") },
      { name: "Ingredientes Extras", description: "Conforme o ingrediente escolhido.", prices: unico("R$ 46,99") },
    ],
  },
  {
    id: "pizzas-tradicionais",
    title: "Pizzas tradicionais",
    intro: "O Google não informa os preços destas pizzas; consulte a casa.",
    items: [
      { name: "Alho", description: "Pomodoro pelati, mussarela, rodelas de tomate, azeitona preta, alho torrado e orégano.", prices: consulta },
      { name: "Calabresa", description: "Pomodoro pelati, mussarela, calabresa, cebola, azeitona preta e orégano.", prices: consulta },
      { name: "Frango com Catupiry e Milho", description: "Pomodoro pelati, mussarela, catupiry, frango desfiado, milho e orégano.", prices: consulta },
      { name: "Frango com Catupiry", description: "Pomodoro pelati, mussarela, catupiry, frango desfiado e orégano.", prices: consulta },
      { name: "Marguerita", description: "Pomodoro pelati, mussarela, rodelas de tomate, parmesão e manjericão.", prices: consulta },
      { name: "Milho", description: "Pomodoro pelati, mussarela e milho.", prices: consulta },
      { name: "Mussarela", description: "Pomodoro pelati, mussarela e orégano.", prices: consulta },
      { name: "Napolitana", description: "Pomodoro pelati, mussarela, presunto, tomate, azeitona preta e orégano.", prices: consulta },
      { name: "Portuguesa", description: "Pomodoro pelati, mussarela, presunto, ovos, azeitona preta, cebola, pimentão e orégano.", prices: consulta },
      { name: "Presunto", description: "Pomodoro pelati, mussarela, presunto, cebola, azeitona preta e orégano.", prices: consulta },
    ],
  },
  {
    id: "pizzas-gourmet",
    title: "Pizzas gourmet",
    intro: "O Google não informa os preços destas pizzas; consulte a casa.",
    items: [
      { name: "Marguerita Gourmet", description: "Pomodoro pelati, mussarela de búfala, tomate-cereja, parmesão ralado e manjericão.", prices: consulta },
      { name: "Palmito", description: "Pomodoro pelati, mussarela, palmito e orégano.", prices: consulta },
      { name: "Parmegiana", description: "Pomodoro pelati, mussarela de búfala, berinjela, abobrinha, parmesão e orégano.", prices: consulta },
      { name: "Pepperoni", description: "Pomodoro pelati, mussarela, pepperoni, pimentão e orégano.", prices: consulta },
      { name: "À Italiana", description: "Pomodoro pelati, mussarela de búfala e manjericão.", prices: consulta },
      { name: "Portuguesa Light", description: "Pomodoro pelati, mussarela, peito de peru, ovos, azeitonas pretas, cebola, pimentão e orégano.", prices: consulta },
      { name: "Quatro Queijos", description: "Pomodoro pelati, mussarela, gorgonzola, parmesão, provolone e orégano.", prices: consulta },
      { name: "Tomate Seco com Rúcula", description: "Pomodoro pelati, mussarela, tomate seco e rúcula.", prices: consulta },
      { name: "Do Chef Paulo", description: "Pomodoro pelati, mussarela de búfala, mussarela, azeite e manjericão.", prices: consulta },
      { name: "Alcachofra", description: "Pomodoro pelati, mussarela, panceta italiana, coração de alcachofra temperado com ervas, mussarela de búfala e parmesão.", prices: consulta },
      { name: "Alicci", description: "Pomodoro pelati, mussarela, alicci, tomate em tiras, parmesão e orégano.", prices: consulta },
      { name: "Burrata com Parma", description: "Pomodoro pelati, mussarela, burrata, parma e raspas de limão-siciliano.", prices: consulta },
      { name: "Calabresa ao Vinho", description: "Pomodoro pelati, calabresa moída ao vinho do Porto, mussarela, mussarela de búfala e uvas-passas.", prices: consulta },
      { name: "Italianíssima", description: "Pomodoro pelati, mussarela, panceta italiana, abobrinha, mussarela de búfala, alho-poró, tomate-cereja e parmesão.", prices: consulta },
      { name: "Las Vegas (Chef Gino Contin)", description: "Eleita a 3ª melhor pizza do mundo. Pomodoro pelati, mussarela, provolone, catupiry, linguiça artesanal suína e pepperoni Ceratti.", prices: consulta },
      { name: "Parma", description: "Pomodoro pelati, mussarela de búfala, parma, rúcula e parmesão.", prices: consulta },
      { name: "Parma e Pomodoro", description: "Pomodoro pelati, mussarela, parma, parmesão salpicado e orégano.", prices: consulta },
      { name: "Queijo Brie com Parma", description: "Pomodoro pelati, mussarela de búfala, queijo brie e parma.", prices: consulta },
      { name: "Shimeji", description: "Pomodoro pelati, mussarela, mussarela de búfala e shimeji temperado.", prices: consulta },
    ],
  },
  {
    id: "pizzas-especiais",
    title: "Pizzas especiais",
    intro: "O Google não informa os preços destas pizzas; consulte a casa.",
    items: [
      { name: "Atum", description: "Pomodoro pelati, mussarela, atum, azeitona preta, cebola e orégano.", prices: consulta },
      { name: "Australiana", description: "Pomodoro pelati, mussarela, calabresa, frango desfiado, milho, catupiry e orégano.", prices: consulta },
      { name: "Bacon", description: "Pomodoro pelati, mussarela, bacon, ovo frito e orégano.", prices: consulta },
      { name: "Calabresa com Bacon", description: "Pomodoro pelati, mussarela, calabresa, bacon, cebola e orégano.", prices: consulta },
      { name: "Caprese", description: "Pomodoro pelati, mussarela, tomate caqui, mussarela de búfala, pesto de azeitona e manjericão.", prices: consulta },
      { name: "Carne Seca", description: "Pomodoro pelati, mussarela, carne seca, catupiry e cebola.", prices: consulta },
      { name: "Francesa", description: "Pomodoro pelati, mussarela, atum, champignon, catupiry, azeitona preta e cebola.", prices: consulta },
      { name: "Gorgonzola com Pera", description: "Pomodoro pelati, mussarela, gorgonzola e pera.", prices: consulta },
      { name: "Lombo", description: "Pomodoro pelati, mussarela, lombo canadense ou defumado, abacaxi e raspas de limão.", prices: consulta },
      { name: "Macariço", description: "Pomodoro pelati, mussarela, linguiça picante e cebola.", prices: consulta },
    ],
  },
];

export const contato = {
  nome: "Pães e Vinhos Padaria",
  telefone: "(61) 3961-9619",
  telefoneLink: "tel:+556139619619",
  endereco: "CLSW 103, Edifício Rhodes Center, Loja 32 — Sudoeste, Brasília - DF, 70670-522",
  horario: "Todos os dias, das 6h às 23h",
  instagram: "https://www.instagram.com/paesevinhospadaria/",
  cardapioOnline: "https://www.instagram.com/paesevinhospadaria/",
  mapa: "https://www.google.com/maps/dir/?api=1&destination=P%C3%A3es%20e%20Vinhos%20Padaria%20CLSW%20103%20Bras%C3%ADlia",
};

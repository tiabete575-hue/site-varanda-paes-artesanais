export type MenuItemPrice = {
  label: string;
  value: string;
};

export type MenuItem = {
  name: string;
  description?: string;
  prices: MenuItemPrice[];
  image?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  intro?: string;
  items: MenuItem[];
  categoryImage?: string;
};

export const menu: MenuSection[] = [
  // ───────────── JANTAR ─────────────
  {
    id: "massas",
    title: "Massas",
    categoryImage:
      "https://lh3.googleusercontent.com/s4zLDTzA9pUiTX_tgCYDdN4IOkiMgUoENYw1yGI9fNuTiA2MHZmeVIG4-EJWlwYkNZOGAT_9SlTzQzbnG-suiLvGg76vfsdU",
    items: [
      {
        name: "Espaguete ao molho pomodoro",
        description:
          "Massa grano duro cozida al dente, finalizado com molho pomodoro da casa, folhas de manjericão e queijo parmesão.",
        prices: [{ label: "Único", value: "R$ 38,00" }],
        image:
          "https://lh3.googleusercontent.com/tGfob2tAcHSKNyIyigFzQV-8op0WG1qKLaxmtc4kPLuBSCG09HY15rOlKZLHw9fjlrGtIAiQp_ufVqAHc_n4oPiXRNkrrdujCw",
      },
      {
        name: "Fettuccine com Ragu de carne",
        description:
          "Massa grano duro cozida al dente, salteada com carne de panela cozida lentamente com especiarias, finalizado com molho pomodoro, folhas de manjericão e queijo parmesão.",
        prices: [{ label: "Único", value: "R$ 46,00" }],
        image:
          "https://lh3.googleusercontent.com/PbjWKhzVw-MyOX8k_IA0oj_7BZuRLZUfdxMDvtaQYRjl-cGUipy1ZkJMlcvcHEUOYVVClz4A8bTuCpPEOy8mwTwAuzegcs3M",
      },
      {
        name: "Rigatoni com mix de cogumelos",
        description:
          "Massa grano duro cozida al dente, salteada com mix de cogumelos e creme de leite fresco. Finalizado com perfume de azeite de trufas negras.",
        prices: [{ label: "Único", value: "R$ 46,00" }],
        image:
          "https://lh3.googleusercontent.com/0PRoI76ZACseGU7aNx_m10SjeuAxdBSwhtDN5ERd-w224c08wW-QDp43FqB9fkGFDBxUPCwNm-FuFRW2ux5urwNkJiheaBrHwg",
      },
      {
        name: "Rigatoni Mediterrâneo",
        description:
          "Massa grano duro cozida al dente, molho pomodoro, berinjela e abobrinhas grelhadas, azeitonas, alcaparras e gengibre.",
        prices: [{ label: "Único", value: "R$ 44,00" }],
        image:
          "https://lh3.googleusercontent.com/_rmiKSG2BAcHVIsaht1MbeUXkNdnTcBCfFK2eeXcU4zEPtRijPfrep_7DB69OuJRXidREU8yliTgpeOqVLrj3hVvlBUXzVZxBLM",
      },
    ],
  },
  {
    id: "risottos",
    title: "Risottos",
    items: [
      {
        name: "Risotto com gorgonzola, pera assada e nozes",
        description:
          "Arroz arbóreo al dente com pedaços de gorgonzola, pera grelhada. Finalizado com nozes.",
        prices: [{ label: "Único", value: "R$ 52,00" }],
        image:
          "https://lh3.googleusercontent.com/fxyME7J1UHlNZqYaVwsU4VRplF-4XLY-8wSXvkCds_WGpWe9MEPTysN64gena5VWk4vXdyWCRRg3xhHqVjFF7Lqead1R7aNnsho",
      },
      {
        name: "Risotto de três cogumelos",
        description:
          "Arroz arbóreo cozido al dente com mix de cogumelos shitake, shimeji e Paris, salteados no azeite. Finalizado com manteiga gelada.",
        prices: [{ label: "Único", value: "R$ 55,00" }],
        image:
          "https://lh3.googleusercontent.com/nmpHN0trXWyqaqAKJ7s8J3eatlIuAvlWbS54pHDBGGENqn8Vd0kW7b2QjivQcaoWcC_6JbeIlRUZatue212cKAIpjxr1o0DJV88",
      },
      {
        name: "Risotto parmesão com tiras de filé",
        description:
          "Tiras de filé mignon grelhado, reduzido no molho demi glace. Acompanhado de risoto parmesão al dente, finalizado com manteiga gelada.",
        prices: [{ label: "Único", value: "R$ 55,00" }],
        image:
          "https://lh3.googleusercontent.com/sH3p9FmQ4YXVxOigKDsvHRqEnUbLUZcD9guy0G1xNwzaQBXLuCXdXhpV7Oh6qkfH8RV0JObz4fAIvItQXhDvHfvN2Xnqrp1oOA",
      },
      {
        name: "Filé ao molho de vinho com risotto de trufas negras",
        description:
          "Filé de mignon grelhado com redução de vinho tinto, acompanhado de risotto parmesão al dente, finalizado com azeite de trufas negras.",
        prices: [{ label: "Único", value: "R$ 70,00" }],
        image:
          "https://lh3.googleusercontent.com/29aPa2z6-lHYb5A8E6J9D6fUmjicHqmv6eamZDkoI8mNpc4yE_GP4wpWwu8cx5wICAEpCvmI_o928xIfOGOTghgTY5kshB82mYs",
      },
    ],
  },

  // ───────────── PRATOS EXECUTIVOS ─────────────
  {
    id: "executivos",
    title: "Executivos Parentela",
    intro: "De 2ª a 6ª, das 12h às 15h, exceto feriados.",
    categoryImage:
      "https://lh3.googleusercontent.com/yk90ky7oqcfHiqn3seH7KIyycV9HoedUp33enJlAZWEJOVAjcuugDLGsZK0YAadldpG3YZxW6g4eI9o9TUf1J-T25ZieST9WxQ",
    items: [
      {
        name: "Sobrecoxa de frango ao molho de mostarda",
        description:
          "Sobrecoxa de frango desossada ao molho de três mostardas, acompanhada de arroz de espinafre e batatas salteadas.",
        prices: [{ label: "Único", value: "R$ 44,90" }],
        image:
          "https://lh3.googleusercontent.com/s2Igq-FzHlYZLsy5klkJYrzavuDuEj3dB-BKG92RVjsnLVNSh79YwhF_RFMehG2DsM_YekeKrQ2Wl3ZnqqbyOVNS0ZX1VFaU",
      },
      {
        name: "Escalope de carne",
        description: "Escalope de carne com Spaghetti Alfredo.",
        prices: [{ label: "Único", value: "R$ 49,90" }],
      },
      {
        name: "Tilápia grelhada",
        description:
          "Tilápia grelhada com molho de coentro, acompanhada de arroz com castanhas e legumes grelhados.",
        prices: [{ label: "Único", value: "R$ 49,90" }],
        image:
          "https://lh3.googleusercontent.com/BYb47CW4sZIMtgpsGpR3uYrUZeAM79vjJJDESYMm8H3sSCUYLg5O_AyBJ8JgAo4KrK9kVHyoUqM01clHRfBu46FlRpj5s7It",
      },
      {
        name: "Strogonoff",
        description:
          "Strogonoff de frango, acompanhado de arroz branco e batata frita.",
        prices: [{ label: "Frango", value: "R$ 44,90" }],
        image:
          "https://lh3.googleusercontent.com/gRPFgKOJL6c4e_OKEsW-rsy2r58kLMZCQV0mqwv3KFbQgYbizhF22zdwBceTyVAYNmuta3YZ6x2zmpa7CRnlSBYQlB-5_n0sfw4",
      },
      {
        name: "Parmegiana",
        description:
          "Parmegiana de carne ou frango, acompanhada de arroz branco e fritas.",
        prices: [
          { label: "Frango", value: "R$ 44,90" },
          { label: "Carne", value: "R$ 54,90" },
        ],
        image:
          "https://lh3.googleusercontent.com/Nd_pPTNZIqNx91dPWZQ2OnEp0x9VW4LaltrJk695jk_glnjcudMiTJsoEPiBMyDBxkw0PL1LOAU-oG_BIl704yZbuq5_lIZHbIM",
      },
      {
        name: "Picadinho de filé ⭐ Campeão de vendas",
        description:
          "Picadinho de filé com molho demi glace, acompanhado de arroz branco, couve e farofa amarela de banana.",
        prices: [{ label: "Único", value: "R$ 44,90" }],
        image:
          "https://lh3.googleusercontent.com/WgcX9EYG3gBEFHl1RecesCBVdfelqsy4LdBgx_b6RaK6iWWQRjdq64qrCd7-lwUbuDOAuNvbqpjItRzKfKRjWkpxQXPrLwSHEw",
      },
      {
        name: "Ancho com Piamontese",
        description: "Bife de Ancho acompanhado de arroz à piamontese e fritas.",
        prices: [{ label: "Único", value: "R$ 54,90" }],
        image:
          "https://lh3.googleusercontent.com/pK7k5JlhViTQcg5pgcXyraYXhQnmF7xQ2JhvgqIOudR5Wbd28ZsQo8ZVKs9I1euY3tLOgMm72oV55zoB3xZl4Bh3GArW2zcXboA",
      },
      {
        name: "Tilápia com vinagrete de banana da terra e purê de batatas",
        prices: [{ label: "Único", value: "R$ 49,90" }],
        image:
          "https://lh3.googleusercontent.com/UH4pWnnohQ65zeW2cAf7PGAE7-vSWO-pVJxhbDJepzsjK2Fg506X3ZTFEjw47x8VAWNs_gEKfdRV7T-C_MRNj9jazFCWCynBuw",
      },
    ],
  },
  {
    id: "cortes-premium",
    title: "Cortes Premium Parentela",
    intro:
      "Pratos família ou individuais servidos todos os dias, das 12h às 15h. Escolha 1 carne + 2 acompanhamentos. Acompanhamentos: Arroz branco | Arroz com brócolis | Arroz à piamontese | Farofa de bacon | Feijão tropeiro | Batata frita | Vinagrete de Banana da Terra | Legumes Salteados. Molhos (R$ 6): Barbecue, Mostarda ou Limão.",
    items: [
      {
        name: "Corte Premium — Prato Individual / Família",
        description: "Prato família serve até 3 pessoas. Família: 500g | Individual: 180g.",
        prices: [
          { label: "Prato individual", value: "R$ 65,90" },
          { label: "Prato família", value: "R$ 139,90" },
        ],
        image:
          "https://lh3.googleusercontent.com/6uP42VFnaj63AWFYu36-pwWBfETGzb7cKE3ZkDKxjz8k7DuIErB9bpsitwz-rTUd9mHYGtiJURID99wTOhfHh9lW23T0r7c9",
      },
      {
        name: "Corte Premium — Opção 2",
        description: "Prato família serve até 3 pessoas. Família: 500g | Individual: 180g.",
        prices: [
          { label: "Prato individual", value: "R$ 62,50" },
          { label: "Prato família", value: "R$ 129,90" },
        ],
        image:
          "https://lh3.googleusercontent.com/XM9XcIsg8nxlh8jSR-DN0b3kBJlHx5-Gekk77ZBmX6a3-Ck3bruvqtcW4gdg140D10IHVr1glQk41_W8F9pabtUG6iYEjYpxS8c",
      },
    ],
  },
  {
    id: "parmegiana-familia",
    title: "Parmegiana Família",
    intro: "Servida sábados e domingos, das 12h às 15h.",
    items: [
      {
        name: "Parmegiana de carne",
        description:
          "Parmegiana de carne, acompanhada de arroz branco e fritas. Prato família serve até 3 pessoas.",
        prices: [
          { label: "Prato individual", value: "R$ 62,90" },
          { label: "Família", value: "R$ 129,90" },
        ],
        image:
          "https://lh3.googleusercontent.com/2kHKUWyRnhNXwA_0kua6WMkvDU8GgP7PNByhV-Om0FmMtsoxxc8oH15t8uR8_E357TwyhkKTnlbq0me6ZX2cjudZ2xR8uJg6Sg",
      },
      {
        name: "Parmegiana de frango",
        description:
          "Parmegiana de frango, acompanhada de arroz branco e fritas. Prato família serve até 3 pessoas.",
        prices: [
          { label: "Prato individual", value: "R$ 59,90" },
          { label: "Família", value: "R$ 119,90" },
        ],
        image:
          "https://lh3.googleusercontent.com/u6e5-SaKNzGvNWXz5Ggck-X5Tf6_uMTh4C-t4MDcCS4C0MSzTjbFNB7tSfKcDMh_YePJXFPbnLs6QPQg3EB4F6UEkt4fVdogQ5g",
      },
    ],
  },
  {
    id: "feijoada",
    title: "Feijoada Completa",
    intro: "Todos os sábados, das 12h às 15h.",
    items: [
      {
        name: "Buffet Individual",
        description: "Feijoada completa + acompanhamentos do Buffet.",
        prices: [{ label: "Único", value: "R$ 54,90" }],
        image:
          "https://lh3.googleusercontent.com/DAfLdRnY2m-LxwEalmHVBfoYtwtPRjR3i2pQnZI9fhryrJg4WlXde45oyP0RRDUswQgVCQ1sN2zeHg6UfBztJA4wrQf6BU86Ww",
      },
    ],
  },

  // ───────────── SALADAS & ENTRADAS ─────────────
  {
    id: "saladas",
    title: "Saladas",
    categoryImage:
      "https://lh3.googleusercontent.com/Z4-fKGgOF3Wn-OKm6sQIaowDzODkgAPTR3dDkIzVC0De7OcTb2tbWlW0tc4cnQd8hB88hhQifUh1wz5J5iGiWhpo5ibgYFa9",
    items: [
      {
        name: "Salada Caprese",
        description:
          "Mix de folhas, tomates italianos em rodelas, pesto de manjericão e creme de queijo.",
        prices: [{ label: "Único", value: "R$ 22,00" }],
        image:
          "https://lh3.googleusercontent.com/f9IJx9vCbE84XgjZFbmMBwWGBoz9p5yegCSzlWtSCuW4eTngftrTgEPIM4voH0mjUoQIJbK45h9_Y15zlqJAp7aX1nF_2cDvuog",
      },
      {
        name: "Salada Parentela",
        description:
          "Mix de folhas, tomates cereja, azeitona preta, cebola roxa, rabanetes fatiados, croutons e molho de limão siciliano.",
        prices: [{ label: "Único", value: "R$ 35,00" }],
        image:
          "https://lh3.googleusercontent.com/nKnT_wqb1P5okCliCjOZ6odh_pCAt7vm9y9MxMYjw03cEMSdNKusK68z6RdrisUwb07JprItlXVOY-Q7sURil7Nrm08J4HRf-A",
      },
      {
        name: "Salada Caesar",
        description:
          "Mix de folhas, molho Caesar, peito de frango grelhado em tiras.",
        prices: [{ label: "Único", value: "R$ 39,90" }],
        image:
          "https://lh3.googleusercontent.com/tN33GHBVnfy7oDbWGyt72wlVLBzLsM-H-DdTdubZtcK5LOuoom-tAT99C6boiSMgiglpXp5r24W9L8e-pb7HakWkL0ka5pvlFw",
      },
    ],
  },
  {
    id: "entradas",
    title: "Entradas",
    intro: "A melhor forma de começar uma refeição é com uma boa entrada.",
    categoryImage:
      "https://lh3.googleusercontent.com/r1Ky8mn7tF8OBs0NFH7V82sBLQ2H0FJoJFdGLhpubWd9wyd4pO2lnaz-1XihiPFQOvRVKPFIKBeVtodSOjaH4Fv8tuqAJVSTxw",
    items: [
      {
        name: "Queijo minas empanado com geleia de morango com pimenta",
        description: "Serve até 2 pessoas.",
        prices: [{ label: "Único", value: "R$ 19,90" }],
        image:
          "https://lh3.googleusercontent.com/iVsa1kIil-o7BY7fld2pAWd79LAh8l0bfbDB67WLbrMwgeI8PBaVePg0K-julPqgBAQhMQHyjffos-eCVplSw_FvQF8mErdS_A",
      },
      {
        name: "Polenta cremosa com fonduta de queijo gorgonzola",
        prices: [{ label: "Único", value: "R$ 19,90" }],
        image:
          "https://lh3.googleusercontent.com/N_jL1YW83zVb3VFkXxlyyW2Uphe_J5I3d7qrpjxaYUexZJRoKX83fmMSLYDzR9NhPcUjiJ1u-RnckigIluG8mMtH9DBPB6fh",
      },
      {
        name: "Bruschetta 3 sabores no pão de fermentação natural",
        description: "Mediterrâneo, Caprese e Aliche.",
        prices: [{ label: "Único", value: "R$ 21,90" }],
      },
    ],
  },

  // ───────────── PIZZAS ─────────────
  {
    id: "pizzas-salgadas",
    title: "Pizzas Salgadas",
    intro:
      "Nossas pizzas são servidas todos os dias, a partir das 18h. Massa de fermentação natural.",
    categoryImage:
      "https://lh3.googleusercontent.com/ZLnYKfVbRjKuVAXQBf9cNRXh42yj_VNQNF22-aXUOepJ9tR9khIuivmeYD-8wm_YhgwKNWyeB3S11shg8uYg8ZBg2nmiIlgobQ",
    items: [
      {
        name: "Pizza de Muçarela",
        description:
          "Pizza de fermentação natural, molho de tomate fresco e queijo muçarela.",
        prices: [{ label: "Único", value: "R$ 34,90" }],
        image:
          "https://lh3.googleusercontent.com/mNq6qUqjEaSVzd_HOLAdnKhUW8oeeDUQIYxhSmxPI9LCukAisraiViA0iLNTWPcgqy1KZ1I4aGVjAFqY71fBDUR6NOPWP8aEWQ",
      },
      {
        name: "Pizza 4 Queijos",
        description:
          "Pizza de fermentação natural, molho de tomate fresco e 4 queijos (gorgonzola, muçarela, minas e parmesão).",
        prices: [{ label: "Único", value: "R$ 39,90" }],
        image:
          "https://lh3.googleusercontent.com/C72_DpU2Xqmei3acHNkUDdfeTL4tn7nQTIVrOZR7LvdhNp8d-jYPft9SQBaxITJHhmCsx0IAxGsw-jZ1KMghnFIPn6s0fi_1Uw",
      },
      {
        name: "Pizza de Marguerita",
        description:
          "Pizza de fermentação natural, molho de tomate fresco, molho pesto, manjericão, tomate cereja e queijo muçarela.",
        prices: [{ label: "Único", value: "R$ 39,90" }],
        image:
          "https://lh3.googleusercontent.com/r7NoD1Rh1v255cazj4_j_DZGQiR06ftkD5YKu_20OOvXlmiUT4-Jj4ME7n5wNhQ18jidj4Zg3kTjy2GpEibdwbbxquzpY-pgB_8",
      },
      {
        name: "Pizza Caprese",
        description:
          "Pizza de fermentação natural com tomate fresco e pasta de azeitona preta.",
        prices: [{ label: "Único", value: "R$ 39,90" }],
        image:
          "https://lh3.googleusercontent.com/coP86kHKouz3HcS6RBqLnjMFTmRx-GkoOoOdoyuUENCJl8pdXSWsgS0A_u01QGuMUeCOnD0z9pp2g4QTw9R-8OF1a_qqpnMq",
      },
      {
        name: "Pizza de Aliche",
        description:
          "Pizza de muçarela, molho de tomate fresco e aliche.",
        prices: [{ label: "Único", value: "R$ 39,90" }],
        image:
          "https://lh3.googleusercontent.com/OFVciHf6ZmGRD_B9lTETO9dnRGFG_uVFhWsubK2E9bzOB9r4rYwO2Ukn85qegw4HmIcxaDsdBiWLZua6q0FsgAbeZVjFC89Z",
      },
      {
        name: "Pizza de Parma com Queijo Minas",
        description:
          "Pizza de fermentação natural, molho de tomate fresco, molho pesto, presunto parma, rúcula e queijo minas.",
        prices: [{ label: "Único", value: "R$ 44,90" }],
        image:
          "https://lh3.googleusercontent.com/sHK5qQXuOygR_wGW-LzKWBSl-2h5nWviynNe3kXjV86u-YMmGLyO0Y3nh3EzugwsK0OThF34INvG2Hbjg74JWS5PoqaEiybX",
      },
      {
        name: "Pizza de Frango",
        description:
          "Pizza de fermentação natural, molho de tomate fresco, frango desfiado e catupiry.",
        prices: [{ label: "Único", value: "R$ 39,90" }],
        image:
          "https://lh3.googleusercontent.com/w1swOlPPz0v1VCHbTmtaKAVgKmacu1heZTSTriJBO8kaucDtf8kckyKhH-MuJYH66ZwANN_y2r8a69mEUJXq6upTRW4jngMCcQ",
      },
      {
        name: "Pizza de Calabresa",
        description:
          "Pizza de fermentação natural, molho de tomate fresco, calabresa, queijo muçarela e cebola.",
        prices: [{ label: "Único", value: "R$ 39,90" }],
        image:
          "https://lh3.googleusercontent.com/KW7Riqqrl5H1Fn8zkU8DhCKWkm0yCZ0d0SVzv7M-Zn4rg3zzTTFUbn9zq_WusEuiRtEfw5uphp8zhszPztj8UAyGQWyuI5I7zLw",
      },
      {
        name: "Pizza de Pepperoni",
        description:
          "Pizza de fermentação natural, molho de tomate fresco, pepperoni e queijo muçarela.",
        prices: [{ label: "Único", value: "R$ 44,90" }],
        image:
          "https://lh3.googleusercontent.com/EIAU0IbijcLZ_9jk0uWMRNUGi0H83pbSY8vHmLYajn93Vc5jWir6dYTwfPBpjkWuxPU2tDLzV-KL3vDub3TL1Wd9fmmG5VsEVQ",
      },
      {
        name: "Pizza Portuguesa",
        description:
          "Pizza de fermentação natural, molho de tomate fresco, pimentão, ovo, presunto, queijo muçarela e cebola.",
        prices: [{ label: "Único", value: "R$ 39,90" }],
      },
      {
        name: "Pizza Bacon",
        description:
          "Pizza de fermentação natural, molho de tomate fresco, ovo, crispy de bacon, queijo muçarela e cebola.",
        prices: [{ label: "Único", value: "R$ 39,90" }],
      },
    ],
  },
  {
    id: "pizzas-doces",
    title: "Pizzas Doces",
    intro: "Servidas a partir das 18h.",
    items: [
      {
        name: "Pizza Banana com Canela",
        description:
          "Pizza de fermentação natural, queijo muçarela, banana e canela.",
        prices: [{ label: "Único", value: "R$ 39,90" }],
      },
      {
        name: "Pizza Chocolate com Banana",
        description:
          "Pizza de fermentação natural, queijo muçarela, chocolate e banana.",
        prices: [{ label: "Único", value: "R$ 44,90" }],
      },
      {
        name: "Pizza Chocolate com Morango",
        description:
          "Pizza de fermentação natural, chocolate e morangos.",
        prices: [{ label: "Único", value: "R$ 44,90" }],
      },
      {
        name: "Pizza Gorgonzola com Pera",
        description:
          "Pizza de fermentação natural, gorgonzola e pera reduzida no vinho.",
        prices: [{ label: "Único", value: "R$ 44,90" }],
      },
    ],
  },

  // ───────────── CALDOS ─────────────
  {
    id: "caldos",
    title: "Caldos",
    intro:
      "O nosso Casarão oferece, de segunda a sexta-feira, a partir das 17h, caldos deliciosos, feitos com ingredientes selecionados para você.",
    categoryImage:
      "https://lh3.googleusercontent.com/FjiwFrJa7HFZkF-0mY28R1MSqeOnIBXHQv_XzUjm0GA_Ai7pvV1OwhwuiUhZ9HXNFLdihQjU58wlhVD597B9o3EYS_w5cUZsIw",
    items: [
      {
        name: "Canja de galinha / Creme de salsão",
        prices: [
          { label: "Buffet", value: "R$ 29,90" },
          { label: "Para viagem", value: "R$ 30,90" },
        ],
      },
      {
        name: "Minestrone de legumes / Milho com frango",
        prices: [
          { label: "Buffet", value: "R$ 29,90" },
          { label: "Para viagem", value: "R$ 30,90" },
        ],
      },
      {
        name: "Abóbora com gorgonzola / Caldo verde",
        prices: [
          { label: "Buffet", value: "R$ 29,90" },
          { label: "Para viagem", value: "R$ 30,90" },
        ],
      },
      {
        name: "Vaca atolada / Cenoura com gengibre",
        prices: [
          { label: "Buffet", value: "R$ 29,90" },
          { label: "Para viagem", value: "R$ 30,90" },
        ],
      },
      {
        name: "Batata baroa com frango / Creme de alho-poró",
        prices: [
          { label: "Buffet", value: "R$ 29,90" },
          { label: "Para viagem", value: "R$ 30,90" },
        ],
      },
    ],
  },

  // ───────────── DRINKS ─────────────
  {
    id: "drinks",
    title: "Drinks",
    intro:
      "Uma seleção de drinks para acompanhar momentos de sabor e sofisticação. Todos os dias das 12h às 21h.",
    categoryImage:
      "https://lh3.googleusercontent.com/xzhxdw1GB7mQSX0kXkK25uktqDuAevxUdso7MtApHvYbvv2v-ZIqakyNQ9Q2GjzFDTOvBux3cLu_6T9KNxJtApHb4NOPWP8aEWQ",
    items: [
      {
        name: "Aperol Spritz",
        description: "Aperol, laranja e espumante.",
        prices: [{ label: "Único", value: "R$ 29,90" }],
        image:
          "https://lh3.googleusercontent.com/v-4b9SQXwcfYCRwb6vW54JNGDodtmrdKo8Hy2dEvxhR9bOBGo-4gw_ebDVezWYv707BuJxE9FykLdZR1qqiQ9fUttEa3xK1tag",
      },
      {
        name: "Caipirinha",
        description: "Cachaça com limão e gelo.",
        prices: [{ label: "Único", value: "R$ 22,00" }],
        image:
          "https://lh3.googleusercontent.com/iCtzEAoSvd4v0E3JNr3WNsUBFWnEi4LYoft_T5ef_HQHikey00evRDsRV17roGAqVaSVqomYbB3clRssqcepISLI79gArbhPdg",
      },
      {
        name: "Caipiroska",
        description:
          "Caipiroska de Absolut com limão, morango, kiwi ou abacaxi.",
        prices: [{ label: "Único", value: "R$ 26,90" }],
        image:
          "https://lh3.googleusercontent.com/dj_GYdxsEtvsQVuijU84BaloqZqaPCdk-5wJ5sBclQ3yJ6RL_ZONk56QSv_fRB8vIbh_TwCov56EK2FCEH5BnIXsZEGE3T8vlw",
      },
      {
        name: "Moscow Mule",
        description:
          "Vodca Absolut, xarope de gengibre, limão e espuma de gengibre com bastante gelo.",
        prices: [{ label: "Único", value: "R$ 34,90" }],
        image:
          "https://lh3.googleusercontent.com/ev4g-KnpYfhMnPuRwukFOoY24hEk3HEp1QOiJ-IYDW8Hxjxmgyj8lZLCa0hjQapHeH_BBngQmIzxJRlZQSHIvLg-k5R05bSMeuQ",
      },
      {
        name: "Gin Tônica",
        description: "Gim com água tônica.",
        prices: [{ label: "Único", value: "R$ 29,90" }],
        image:
          "https://lh3.googleusercontent.com/UjkGYxNpuA6jH-Q17hotmfP02lD8btmuUevrkIQ2sqPvu8Q276MMNd7xrjvjcJbinSeivgi0B-5wmp35m84gAmCeAlfaMJZp",
      },
      {
        name: "Espresso com Licor 43",
        description: "Café expresso com licor 43 e gelo.",
        prices: [{ label: "Único", value: "R$ 28,00" }],
        image:
          "https://lh3.googleusercontent.com/4IdKeoRCXh4uBDg7Bw3bR7YU9zFPh7OUfwr4jAMTfZDFDZbfipdw0BKr0XTMjX_IlBN1ONUl7kLYb-ThHLf0JFYBrm6AvKIj-Ww",
      },
      {
        name: "Michelada",
        description: "Cerveja, limão, sal e gelo.",
        prices: [{ label: "Único", value: "R$ 22,00" }],
        image:
          "https://lh3.googleusercontent.com/UcjFTLqx45j_qSTrHYw2omKWDGntxIgIl0Ble6uhE-xKhNEiNeXZ5fJ5BxWQmqf_BwJnfAUUhaB3OOSdD8mR6ezN7TbbAOVdRg",
      },
      {
        name: "Espumante",
        description: "Espumante Rosé ou Brut.",
        prices: [{ label: "Único", value: "R$ 30,00" }],
        image:
          "https://lh3.googleusercontent.com/V1f05NosaxD4nj7FXQJSivWFkSDzrsyLrpWR15X0nuSIQjKCyHzgdp_dRTljBdaRa3XGFZid4CuuV_PqWonEsWEZL_sbrThycmE",
      },
      {
        name: "Mimosa",
        description:
          "Espumante (Champagne) seco e suco (morango ou laranja).",
        prices: [{ label: "Único", value: "R$ 25,00" }],
        image:
          "https://lh3.googleusercontent.com/u0QHQHUjIYUDKNv0q778Z2v2NIkjUjbddvo3T_GAJUasDkjAOZx-IR8YfnpJw0RMY6SRm9XDxJBiE5yk7yJF0fL76t8b1wwZ9g",
      },
    ],
  },
];

export const contato = {
  nome: "Parentela Casa de Pães",
  telefone: "(61) 3273-0219",
  telefoneLink: "tel:+556132730219",
  endereco: "Asa Sul — Brasília, DF",
  horario: "Todos os dias, até às 22:00",
  instagram: "https://www.instagram.com/parentelapaes/",
  facebook: "https://www.facebook.com/paesparentela",
  cardapioOnline: "https://www.hubt.com.br/parentelapaes/",
};

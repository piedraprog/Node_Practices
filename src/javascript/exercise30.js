let entities = [
  {
    name: "envios",
    roles: [
      {
        id: "794593349021586",
        name: "envios",
      },
    ],
    lookups: ["free-text", "keywords"],
    keywords: [
      {
        keyword: "envios",
        synonyms: ["envios"],
      },
    ],
    id: "868982031479405",
  },
  {
    name: "interes",
    roles: [
      {
        id: "3499171313675941",
        name: "interes",
      },
    ],
    lookups: ["free-text", "keywords"],
    keywords: [
      {
        keyword: "compra",
        synonyms: ["compra"],
      },
      {
        keyword: "comprar",
        synonyms: ["comprar"],
      },
      {
        keyword: "quiero",
        synonyms: ["quiero"],
      },
    ],
    id: "708741311303668",
  },
  {
    name: "item_mayor",
    roles: [
      {
        id: "169318769585130",
        name: "item_mayor",
      },
    ],
    lookups: ["free-text", "keywords"],
    keywords: [
      {
        keyword: "bicicletas",
        synonyms: ["bicicletas"],
      },
    ],
    id: "993519128543364",
  },
  {
    name: "lugar",
    roles: [
      {
        id: "665585518899031",
        name: "lugar",
      },
    ],
    lookups: ["free-text", "keywords"],
    keywords: [
      {
        keyword: "barquisimeto",
        synonyms: ["barquisimeto"],
      },
      {
        keyword: "china",
        synonyms: ["china"],
      },
    ],
    id: "707326100935892",
  },
  {
    name: "prueba",
    roles: [
      {
        id: "865099361960265",
        name: "prueba",
      },
    ],
    lookups: ["free-text", "keywords"],
    keywords: [
      {
        keyword: "prueba",
        synonyms: ["prueba"],
      },
      {
        keyword: "pruebas",
        synonyms: ["pruebas"],
      },
    ],
    id: "297747496518652",
  },
];

let newArray = [];

for (let entity of entities) {
  if (entity.keywords && entity.keywords.length > 0) {
    for (let keyword of entity.keywords) {
      newArray.push({
        entityId: entity.id,
        keyword: keyword.keyword,
        id: keyword.keyword,
      });
    }
  }
}

console.log(newArray);

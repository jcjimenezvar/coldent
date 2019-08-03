const EMAIL_INFORMATION = {
  FROM: "contacto@coldent.com",
  SUBJECT: "Contacto Pagina Web",
  SEND: "coldentsas@gmail.com",
  TITLE: "Mensaje pagina contacto"
};

const principalProducts = [
  {
    imageUrl: "assets/images/index/1.jpg",
    nombre: "VITA Easyshade® V",
    description: "Determinación óptima del color, seguridad máxima"
  },
  {
    imageUrl: "assets/images/index/2.jpg",
    nombre: "VITA VIONIC® WAX",
    description: "Para el encerado CAD/CAM eficiente"
  },
  {
    imageUrl: "assets/images/index/3.jpg",
    nombre: "VITA VIONIC® BOND",
    description:
      "Para la unión segura de dientes protésicos VITA a la base VITA VIONIC"
  },
  {
    imageUrl: "assets/images/index/7.jpg",
    nombre: "VITAVM®13",
    description:
      "Para el recubrimiento total de estructuras metálicas con un CET convencional"
  },
  {
    imageUrl: "assets/images/index/8.jpg",
    nombre: "VITA VMK Master®",
    description:
      "Para el recubrimiento total de estructuras metálicas con un CET convencional"
  },
  {
    imageUrl: "assets/images/index/9.jpg",
    nombre: "VITA TITANKERAMIK",
    description: "Cerámica de recubrimiento para estructuras de titanio"
  }
];

const menuProducts = [
  {
    product: "Vita",
    categoria: [
      {
        producto: "dientes",
        label: "Dientes",
        ppalProduct: "vita"
      },
      {
        producto: "bloquesDiscos",
        label: "Bloques y Discos",
        ppalProduct: "vita"
      },
      {
        producto: "equipos",
        label: "Equipos",
        ppalProduct: "vita"
      },
      {
        producto: "varios",
        label: "Varios",
        ppalProduct: "vita"
      },
      {
        producto: "ceramicas",
        label: "Ceramicas",
        ppalProduct: "vita"
      }
    ]
  },
  {
    product: "Bego",
    categoria: [
      {
        producto: "ceras",
        label: "Ceras",
        ppalProduct: "bego"
      },
      {
        producto: "metales",
        label: "Metales",
        ppalProduct: "bego"
      },
      {
        producto: "revestimientos",
        label: "Revestimientos",
        ppalProduct: "bego"
      },
      {
        producto: "varios",
        label: "Varios",
        ppalProduct: "bego"
      }
    ]
  },
  {
    product: "Ivoclar",
    categoria: [
      {
        producto: "ceras",
        label: "Ceras",
        ppalProduct: "ivoclar"
      },
      {
        producto: "metales",
        label: "Metales",
        ppalProduct: "ivoclar"
      },
      {
        producto: "revestimientos",
        label: "Revestimientos",
        ppalProduct: "ivoclar"
      },
      {
        producto: "varios",
        label: "Varios",
        ppalProduct: "ivoclar"
      }
    ]
  },
  {
    product: "Zhermack",
    categoria: [
      {
        producto: "yesos",
        label: "Yesos",
        ppalProduct: "zhermack"
      },
      {
        producto: "desinfeccion",
        label: "Desinfección",
        ppalProduct: "zhermack"
      },
      {
        producto: "siliconaslab",
        label: "Siliconas para Laboratorio",
        ppalProduct: "zhermack"
      },
      {
        producto: "siliconascon",
        label: "Siliconas para Consultorio",
        ppalProduct: "zhermack"
      }
    ]
  },
  {
    product: "Yety",
    categoria: [
      {
        producto: "ceras",
        label: "Ceras",
        ppalProduct: "yety"
      },
      {
        producto: "metales",
        label: "Metales",
        ppalProduct: "yety"
      },
      {
        producto: "revestimientos",
        label: "Revestimientos",
        ppalProduct: "yety"
      },
      {
        producto: "varios",
        label: "Varios",
        ppalProduct: "yety"
      }
    ]
  },
  {
    product: "Dentona",
    categoria: [
      {
        producto: "ceras",
        label: "Ceras",
        ppalProduct: "dentona"
      },
      {
        producto: "metales",
        label: "Metales",
        ppalProduct: "dentona"
      },
      {
        producto: "revestimientos",
        label: "Revestimientos",
        ppalProduct: "dentona"
      },
      {
        producto: "varios",
        label: "Varios",
        ppalProduct: "dentona"
      }
    ]
  },
  /*{ product: "Keystone" },*/
  {
    product: "WyH",
    categoria: [
      {
        producto: "ceras",
        label: "Ceras",
        ppalProduct: "wyh"
      },
      {
        producto: "metales",
        label: "Metales",
        ppalProduct: "wyh"
      },
      {
        producto: "revestimientos",
        label: "Revestimientos",
        ppalProduct: "wyh"
      },
      {
        producto: "varios",
        label: "Varios",
        ppalProduct: "wyh"
      }
    ]
  },
  {
    product: "Renfert",
    categoria: [
      {
        producto: "ceras",
        label: "Ceras",
        ppalProduct: "renfert"
      },
      {
        producto: "metales",
        label: "Metales",
        ppalProduct: "renfert"
      },
      {
        producto: "revestimientos",
        label: "Revestimientos",
        ppalProduct: "renfert"
      },
      {
        producto: "varios",
        label: "Varios",
        ppalProduct: "renfert"
      }
    ]
  }
];

module.exports = {
  EMAIL_INFORMATION,
  principalProducts,
  menuProducts
};

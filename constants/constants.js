const EMAIL_INFORMATION = {
  FROM: "contacto@coldent.com",
  SUBJECT: "Contacto Pagina Web",
  SEND: "coldentsas@gmail.com",
  TITLE: "Mensaje pagina contacto"
};

const principalProducts = [
  {
    imageUrl: "assets/images/vita/1.jpg",
    nombre: "VITA Easyshade® V",
    description: "Determinación óptima del color, seguridad máxima"
  },
  {
    imageUrl: "assets/images/bego/1.jpg",
    nombre: "Bellavest © SH",
    description: ""
  },
  {
    imageUrl: "assets/images/bego/11.jpg",
    nombre: "Metal Wiron 99",
    description:""
  },
  {
    imageUrl: "assets/images/vita/42.jpg",
    nombre: " Ceramica VITAVM®13",
    description:
      "Para el recubrimiento total de estructuras metálicas con un CET convencional"
  },
  {
    imageUrl: "assets/images/zhermack/11.jpg",
    nombre: " Yeso Elite Base",
    description:
      "Para el recubrimiento total de estructuras metálicas con un CET convencional"
  },
  {
    imageUrl: "assets/images/bego/14.jpg",
    nombre: "Cera para Modelar",
    description: "Cerámica de recubrimiento para estructuras de titanio"
  }
];

const menuProducts = [
  {
    product: "Vita",
    categoria: [
      {
        producto: "ceramicas",
        label: "Ceramicas",
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
        producto: "dientes",
        label: "Dientes",
        ppalProduct: "vita"
      },
      {
        producto: "varios",
        label: "Varios",
        ppalProduct: "vita"
      },
      
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
    product: "Yety",
    categoria: [
      {
        producto: "revestimientos",
        label: "Revestimientos",
        ppalProduct: "yety"
      },
      {
        producto: "metales",
        label: "Metales",
        ppalProduct: "yety"
      },
      {
        producto: "ceras",
        label: "Ceras",
        ppalProduct: "yety"
      },
      {
        producto: "varios",
        label: "Accesorios",
        ppalProduct: "yety"
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
    product: "Dentona",
    categoria: [
      {
        producto: "ceras",
        label: "Yesos",
        ppalProduct: "dentona"
      },
      {
        producto: "metales",
        label: "Placas",
        ppalProduct: "dentona"
      },
    ]
  },
  /*{ product: "Keystone" },*/
  {
    product: "WyH",
    categoria: [
      {
        producto: "ceras",
        label: "Equipos",
        ppalProduct: "wyh"
      },
    ]
  },
  {
    product: "Renfert",
    categoria: [
      {
        producto: "ceras",
        label: "Equipamentos",
        ppalProduct: "renfert"
      },
    ]
  }
];

module.exports = {
  EMAIL_INFORMATION,
  principalProducts,
  menuProducts
};

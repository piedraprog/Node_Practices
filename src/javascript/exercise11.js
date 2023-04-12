import moment from "moment";

let fecha2 = moment()
let fecha1 = moment().subtract(0, 'days')

console.log(  moment(fecha2).isAfter(fecha1) )

let valores = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true
]

let valores2 = [
    false,
    true,
    false,
    
]

console.log(valores2.some(value => value === true))

let modules = [
    {
      name: 'Inbox',
      url: 'tikkets',
      icon: {
        type: 'font',
        name: 'envelope',
        setName: 'fas',
      },
      hasNotification: false,
    },
    {
      name: 'Embudos',
      url: 'funnels',
      icon: {
        type: 'font',
        setName: 'fas',
        name: 'columns',
      },
      hasNotification: false,
    },
    {
      name: 'Contactos',
      url: 'contacts',
      icon: {
        type: 'font',
        name: 'user-friends',
        setName: 'fas',
      },
      hasNotification: false,
    },
    {
      name: 'Métricas',
      url: 'statistics',
      icon: {
        type: 'font',
        name: 'chart-bar',
        setName: 'fas',
      },
      hasNotification: false,
    },
    {
      name: 'Campañas',
      url: 'campaigns',
      icon: {
        type: 'font',
        name: 'bullhorn',
        setName: 'fas',
      },
      hasNotification: false,
    },
    {
      name: 'NPS / Feedback / Encuesta de satisfacción',
      url: 'feedback',
      icon: {
        type: 'font',
        name: 'thumbs-up',
        setName: 'fas',
      },
      hasNotification: false,
    },
    {
      name: 'Centros de ayuda',
      url: 'help-centers',
      icon: {
        type: 'svg',
        name: 'tikket-icons:books',
      },
      hasNotification: false,
    },
    {
      name: 'Bot / Flujos automatizados de atención',
      icon: {
        type: 'font',
        name: 'robot',
        setName: 'fas',
      },
      url: 'ivr',
      hasNotification: false,
    },
    {
      name: 'Social Listening',
      url: 'social-listenings',
      icon: {
        type: 'svg',
        name: 'tikket-icons:comment-search',
      },
      hasNotification: false,
    },
    {
      name: 'Configuración',
      url: 'settings',
      icon: {
        type: 'font',
        name: 'cog',
        setName: 'fas',
      },
      hasNotification: false,
    },
  ];


let newModule = modules.find(module => module.name === 'Embudos')

newModule.hasNotification = true

// modules.map((modulo) => {
//     console.log(modulo)
// })

console.log(modules)
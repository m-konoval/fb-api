export const menu = [
  {
    name: 'Про мене',
    to: '/about-me'
  },
  {
    name: 'Контакти',
    to: '/contacts'
  },
];

export const categories = [
  {
    name: 'Тренінги',
    to: '/category/trainings'
  },
  {
    name: 'Консультації',
    to: '/category/consultation'
  },
  {
    name: 'Дифектологія',
    to: '/category/defectology'
  },
  {
    name: 'Творчість',
    to: '/category/art'
  }
]

export const fullNav = [
  ...categories, ...menu
]
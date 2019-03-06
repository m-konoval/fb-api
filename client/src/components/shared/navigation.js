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
    to: '/category/trainings',
    style: 'cat-1'
  },
  {
    name: 'Консультації',
    to: '/category/consultation',
    style: 'cat-2'
  },
  {
    name: 'Дифектологія',
    to: '/category/defectology',
    style: 'cat-3'
  },
  {
    name: 'Творчість',
    to: '/category/art',
    style: 'cat-4'
  }
]

export const fullNav = [
  ...categories, ...menu
]
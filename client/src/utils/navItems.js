export const navItemsAdmin = [
  { name: 'LOGIN', route: '/login', onclick: 'login' },
  { name: 'HOME', route: '/' },
  { name: 'RESULTADOS', route: 'results-by-admin' },
  { name: 'USUARIOS', route: 'users-by-admin' },
  { name: 'LOGOUT', route: '/logout' },

];

export const navItemsUser = [
  { name: 'LOGIN', route: '/login', onclick: 'login' },
  { name: 'INICIO', route: '/' },
  { name: 'MI APUESTA', route: '/bet' },
  { name: 'LOGOUT', route: '/logout', onclick: 'logout' },
];
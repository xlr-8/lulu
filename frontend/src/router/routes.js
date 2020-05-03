
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'game1', component: () => import('pages/Game1.vue') },
      { path: 'game2', component: () => import('pages/Game2.vue') },
      { path: 'tutorial', component: () => import('pages/Tutorial.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

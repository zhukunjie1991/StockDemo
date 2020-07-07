import Layout from '@/layout'

const stockRouter = {
  path: '/stock',
  component: Layout,
  redirect: '/stock/fisrst-stock',
  name: 'Stock',
  meta: {
    title: 'Stock',
    icon: 'table'
  },
  children: [
    {
      path: 'stockMain',
      component: () => import('@/views/stock/stock-table'),
      name: 'stock',
      meta: { title: 'stock' }
    }
  ]
}

export default stockRouter

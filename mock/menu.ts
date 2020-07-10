// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /api/menu': [
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'crown',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
        },
      ],
    },
    {
      name: 'list.table-list',
      icon: 'table',
      path: '/list',
    },
  ],
};

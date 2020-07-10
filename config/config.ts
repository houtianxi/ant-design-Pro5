// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  base: './',
  // publicPath: 'antjs/',
  history: {
    type: 'hash',
  },
  antd: {
    dark: true,
  },
  dva: {
    hmr: true,
  },
  layout: {
    name: 'Ant Design Pro',
    locale: true,
    siderWidth: 208,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
        {
          name: '注册结果页',
          icon: 'smile',
          path: '/userregisterresult',
          component: './UserRegisterResult',
        },
      ],
    },
    {
      path: '/loginex',
      layout: false,
      routes: [
        {
          name: 'loginex',
          path: '/loginex',
          component: './loginex',
        },
      ],
    },
    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
      component: './Welcome',
    },
    {
      path: '/admin',
      name: 'admin',
      icon: 'crown',
      access: 'canAdmin',
      component: './Admin',
      routes: [
        {
          path: '/admin/sub-page',
          name: 'sub-page',
          icon: 'smile',
          component: './Welcome',
        },
      ],
    },
    {
      path: '/orgmanager',
      name: '基础信息',
      icon: 'crown',
      access: 'canAdmin',
      routes: [
        {
          path: '/orgmanager/org',
          name: '组织架构',
          icon: 'smile',
          component: './TreeManagement',
        },
      ],
    },
    {
      name: '标准列表',
      icon: 'smile',
      path: '/listbasiclist',
      component: './ListBasicList',
    },
    {
      name: '搜索列表（文章）',
      icon: 'smile',
      path: '/listsearcharticles',
      component: './ListSearchArticles',
    },
    {
      name: '搜索列表（项目）',
      icon: 'smile',
      path: '/listsearchprojects',
      component: './ListSearchProjects',
    },
    {
      name: 'list.table-list',
      icon: 'table',
      path: '/list',
      component: './ListTableList',
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      name: '流程编辑器',
      icon: 'smile',
      path: '/editorflow',
      component: './EditorFlow',
    },
    {
      name: '脑图编辑器',
      icon: 'smile',
      path: '/editormind',
      component: './EditorMind',
    },
    {
      name: '高级表单',
      icon: 'smile',
      path: '/formadvancedform',
      component: './FormAdvancedForm',
    },
    {
      name: '高级详情页',
      icon: 'smile',
      path: '/profileadvanced',
      component: './ProfileAdvanced',
    },
    {
      name: '监控页',
      icon: 'smile',
      path: '/dashboardmonitor',
      component: './DashboardMonitor',
    },
    {
      name: '个人中心',
      icon: 'smile',
      path: '/accountcenter',
      component: './AccountCenter',
    },
    {
      name: '个人设置',
      icon: 'smile',
      path: '/accountsettings',
      component: './AccountSettings',
    },
    {
      name: '基础表单',
      icon: 'smile',
      path: '/formbasicform',
      component: './FormBasicForm',
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  // proxy: proxy['dev' || 'dev'],
  manifest: {
    basePath: './',
  },
});

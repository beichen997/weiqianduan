
const appConfig = [
  {
    id: "1",
    title: "wl-ui组件",
    icon: "el-icon-monitor",
    module: "subapp-ui",
    defaultRegister: true,//默认进入的页面路由地址
    devEntry: "//localhost:6651",
    depEntry: "http://localhost:3031",
    routerBase: "/ui",
    children: [
      {
        id: "1-1",
        title: "表格",
        url: "/ui"
      },
      {
        id: "1-2",
        title: "日历",
        url: "/ui/about"
      }
    ]
  },
  {
    id: "2",
    title: "博客",
    icon: "el-icon-date",
    module: "subapp-blog",
    defaultRegister: false,
    devEntry: "//localhost:6652",//本地调试地址
    depEntry: "http://localhost:3032",//线上调试地址
    routerBase: "/blog",
    children: [
      {
        id: "2-1",
        title: "报表",
        url: "/blog"
      },
      {
        id: "2-2",
        title: "穿梭框",
        url: "/blog/about"
      }
    ]
  }
]

export default [
  {
    url: '/Api/GetAppConfigs',
    type: 'post',
    response: () => {
      return {
        code: 200,
        data: appConfig
      }
    }
  },
]

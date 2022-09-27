module.exports = {
  "title": "最美不过青衫白发",
  "description": "",
  "dest": "public",
  "base": "/blog/",
  "locales": {
    '/': {
      lang: 'zh-CN'
    }
  },
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "https://hfxiang93.github.io/blog/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ["script", { src: "/assets/js/bodyClick.js" }]
  ],
  "theme": "jabinblog",
  "themeConfig": {
    "mode": 'dark',
    "noFoundPageByTencent": true,
    "logo": 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32fde3cb1777414fb992b56957ba3037~tplv-k3u1fbpfcp-watermark.image',
    "vssueConfig": {
      "platform": 'github',
      "owner": 'hfxiang93',
      "repo": 'blog',
      "clientId": 'c7239d518c6a16a559ba',
      "clientSecret": '6edcdf291558511c1fe1aa32f637a198781a3cd5',
    },
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "技术文章",
        "icon": "reco-document",
        "items": [
          {
            "text": "常用知识",
            "link": "/docs/jottings/mobile"
          },
          {
            "text": "Vue",
            "link": "/docs/vue/虚拟dom和diff算法"
          },
          {
            "text": "Nuxt",
            "link": "/docs/nuxt/introduction"
          },
          {
            "text": "运维",
            "link": "/docs/yunwei/前端CICD"
          }
        ]
      },
      {
        "text": "GitHub",
        "link": "https://github.com/hfxiang93",
        "icon": "reco-github"
      }
    ],
    "sidebar": {
      "/docs/jottings/": [
        // "vueBuild",
        "mobile",
        "Git",
        "HarmonyOS",
        "DOM",
        "BOM",
        "particles",
        // "genealogy",
        "carousel",
        "whirligig",
        "filter",
        "scrollTemp",
        "reset",
        "Nginx",
        "accordion",
        "loading",
        "shadow",
        "flexbox"
      ],
      "/docs/Vue/": [
        {
          "title": "Vue",
          "collapsable": true,
          "children": [
              '虚拟dom和diff算法',
              'VNode节点',
              '异步更新DOM策略及nextTick',
              'Vuex源码解析',
              'Vue事件机制',
              'Vue组件间通信',
              'Vue内部运行机制',
              '从源码角度再看数据绑定',
              '依赖收集',
              '响应式原理',
              '聊聊keep-alive组件的使用及其实现原理',
              '聊聊Vue的template编译',
              '说说element组件库broadcast与dispatch',
              'ref',
              'asyncComponent',
              'attribute',
              'directive',
              'v-is',
              'Data',
              'event',
              'filters',
              'template',
              'funComponent',
              'API',
              'renderFun',
              'slot',
              'animationClass',
              'v-model',
              'v-if&v-for',
              'v-bind'
          ]
        }
      ],
      "/docs/Nuxt/": [
        {
          "title": "Nuxt",
          "collapsable": false,
          "children": [
              'introduction',
              'asyncData',
              'context'
          ]
        }
      ]
    },
    "type": "blog",
    "blogConfig": {
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "掘金",
        "desc": "精诚所至，晶石为开",
        "email": "850442777@qq.com",
        "logo": "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32fde3cb1777414fb992b56957ba3037~tplv-k3u1fbpfcp-watermark.image",
        "link": "https://juejin.cn/user/4230576475219085"
      },
      {
        "title": "B站",
        "desc": "学习的好地方",
        "email": "无",
        "link": "https://bilibili.com/"
      }
    ],
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "xianghaifeng",
    "authorAvatar": "https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32fde3cb1777414fb992b56957ba3037~tplv-k3u1fbpfcp-watermark.image",
    "record": "",
    "startYear": "2018"
  },
  "configureWebpack": {
    "resolve": {
      "alias": {
        '@assets': '/assets'
      }
    }
  },
  "markdown": {
    "lineNumbers": true
  },
  "plugins": [
    ["sakura", {
      num: 10,  // 默认数量
      show: true,
      zIndex: 2,
      img: {
        replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: 'https://www.zpzpup.com/assets/image/sakura.png'     // 绝对路径
      }
    }],
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: 1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    }],
    ['go-top'],
    [
      "dynamic-title",
      {
        showIcon: "https://hfxiang93.github.io/blog/favicon.ico",
        showText: "欢迎回来",
        hideIcon: "https://hfxiang93.github.io/blog/favicon.ico",
        hideText: "休息一会",
        recoverTime: 2000
      }
    ],
    [
      'vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki / koharu)
          model: 'koharu',
          display: {
            position: "left", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 65, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 1 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ]
}

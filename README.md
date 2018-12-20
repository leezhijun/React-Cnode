###React-cnode

一个练手项目，通过cnode社区提供的API，用react做一个webApp

#### 1.create-react-app 创建 react-cnode项目

执行`create-react-app react-cnode`，如果没有安装create-react-app，先全局安装`npm install -g create-react-app`

#### 2.由于创建github仓库，所以先eject

执行`npm run eject`成功eject后会暴露webpack的配置,package.json增加了很多的依赖

#### 3.安装antd-mobile

执行 `npm install antd-mobile babel-plugin-import --save-dev` 修改安装index.html和`package.json`文件里的babel配置

```
  "babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      ["import", { "libraryName": "antd-mobile", "style": "css" }]
    ]
  },
```

#### 4.安装redux,react-redux,redux-devtools-extension,redux-saga

执行 `npm install redux react-redux redux-devtools-extension redux-saga --save-dev`配置store

#### 5.安装路由react-router-dom

执行 `npm install react-router-dom --save-dev` 根目录新建routeConfig.jsx作为路由

#### 6.安装node-sass

执行`npm install node-sass --save-dev` 

### 上传github查看demo效果

#### 1.安装 `npm install gh-pages --save-dev`

#### 2.修改package.json

添加属性

`"homepage": "https://leezhijun/github.io/React-Cnode",`

添加命令

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

### 问题和解决

1.文章列表，话题回复，针对某个人回复，取消回复后，编辑器无法卸载

解决方式：ReactDOM.unmountComponentAtNode(document.getElementById("myEditor"));

通过移出组件节点

2.文章返回首页列表重新渲染问题

解决方式：

初始化数据通过redux获取，渲染直接渲染redux所有数据，注意注释掉长列表下拉渲染的哈希比较，否则下拉事件无法刷新

3.文章返回首页，并且保持相同的滚动位置

解决方式：

首页列表进入文章页面时，保存当前滚动高度，页面返回首页时，初始化滚动位置
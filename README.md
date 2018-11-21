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

#### 4.
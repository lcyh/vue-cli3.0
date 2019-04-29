

##1.项目说明
1.本项目是 vue-cli3.0脚手架,配置都是集成的,vuex,axios,scss,elementUi
2.引用项目文件 用 @/文件名(@脚手架已经配置好了)
3.另外.env.development文件是运行开发环境时会自动执行,可以区分 调dev环境api
      .env.production 调生产环境 pro的api
      .env.stage      调qa环境的api
4.统一用 yarn命令安装依赖,yarn锁定版本
5.请使用 eslint校验,规范代码
##2.项目初始化&启动
```
yarn install
npm run dev  dev开发环境
npm run qa  qa环境
npm run run build生产环境
```
##3.拉取代码
git clone 

##4.分支管理
master               ---生产环境部署分支
develop              ---开发环境部署分支
feature/v1.0.0       ---表示在develop分支新建的分支
server/qa            ---qa环境部署分支

##5.其他
请使用 vscode

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

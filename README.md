# 
# 安装环境依赖

 1、全局环境安装node
 2、全局环境安装淘宝镜像：npm install -g cnpm --registry=https://registry.npm.taobao.org 


# 项目目录结构说明
 
 1、static: 项目总文件夹
 2、assets: 静态文件，包括全局css、fonts、images
 3、components: 组件文件夹，每个组件的html/js/less,应该放在同一文件夹在就近维护
 4、js: lib存放第三方库的js，其余js为自定义的js（包括全局接口文件、loading方法等）
 5、json: 前端的模拟数据


# 安装项目依赖，预览项目

 1、进入项目目录，执行语句： cnpm install 
 2、进入项目目录，执行语句： npm run dev
 3、预览项目html: http://localhost:8082/components/index/index.html

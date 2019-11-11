---
title: npm 运行过慢问题
tag: npm 
data: 2019-10-15
---

#### npm 安装过慢怎么解决

1. 在新建Vue项目或者React项目时，使用 npm安装后，需要等待过长的时间

	解决方法: 推荐使用国内镜像源
	```
	npm config set registry https://registry.npm.taobao.org
    npm config get registry  //查看修改后的源
	```
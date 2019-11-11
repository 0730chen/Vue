# 使用hugo部署网站步骤

1. 下载安装hugo
	* 通过链接下载hugo安装包
	* 解压安装hugo后生成hugo.exe文件
	* 将hugo.exe路径添加到系统的path路径中
	* 在命令行中输入hugo version 查看是否安装成功
2. 生成静态站点
	* 输入命令 hugo new site blog 建立文件夹名称
	* hugo new blog.md 命令生成页面
	* hugo new posts\first-post.md 添加页面
	* 启动 hugo server 启动服务
3. 在Github中新建一个your-github-name.github.io的仓库
	* 将根目录下config.toml中文件baseURL改变成[网址](https://your-github-name.github.io/)
	* 使用git将本地仓库与github云端仓库连接起来
	* git init 初始化
	* git remote add origin 链接
	* git add .
	* git commit -v
	* git push -u origin master 
	文件都储存在public文件中
4. 购买域名 购买soilname或者阿里云购买域名
	* 点击github.io仓库中的setting，填入你购买的域名
	* 在你的github.io仓库中出现一个CNAME文件
	* 解析域名，将域名指向你的github.io
5. 访问购买的域名，出现刚才搭建的博客
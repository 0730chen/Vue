# 浅析Url
1. url称为统一资源定位符
	* 协议 服务器地址 路径/文件名，参数
	1. 协议种类 http(80端口) https(443端口)  FTP文件传输协议 
	2. 主机名 IP地址 网页输入url后, DNS将网址域名解析成IP地址并访问
	3. 端口号 端口就是你是打开的是什么服务
	4. 路径：url的第三项为路径。它定义信息保存在 这台计算机上的什么地方，即哪个子目录中。 每个子目录的前面有 一条斜杠 。路径部分包含等级结构的路径定义，一般来说不同部分之间以斜线（/）分隔。询问部分一般用来传送对服务器上的数据库进行动态询问时所需要的参数。
	5. 主页名
	 例如 index.html .png .text等等文件
2. DNS 
	* DNS是域名系统，是将域名解析成为IP地址，能够更方便的访问互联网
	* nslookup 主要用于查询DNS的记录，查看域名是否正常，诊断网络故障
		1. nslookup domain [dns-server] 查询一个一个域名的A记录  nslookup baidu.com
		2. nslookup -qt=type domain [dns-server]  dns-server是一个IP地址
		3. nslookup –d [其他参数] domain [dns-server]
3. IP的是internet protocol 网络协议 是计算机网络中连接的桥梁
	* IP地址相当于一个门牌号
	* ping 是一个命令,属于一个通信协议是TCP/IP的一部分
		1. 利用ping检查网络是否连通 ping IP地址检查网络是否通顺
4. 域名 domain name
	1. 域名与IP地址是对应的 输入域名经过DNS解析找到对应的IP地址,进行访问
	2. 域名等级
		* 顶级域名：.cn
		* 二级域名：.com .top
		* 三级域名
		www.ncic.ac.cn    .cn是顶级域名   ac.cn是二级域名   ncic是ac.cn的子域名
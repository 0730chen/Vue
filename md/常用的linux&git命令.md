##### linux命令
  1. 查找命令
  
查
 命令 | 用法 | 语法 |
 -----|-----|------
 ls   | 查看文件路径 | ls 文件名
 cat  | 查看文件内容 | cat 文件路径及文件
 head | 查看文件内容的前10行 | head 文件路径
 tail | 查看文件的后10行内容 | tail 文件路径
 less | 查看文件内容| less文件路径
增
命令 | 用法 | 语法 |
-----| -----| -----|
touch | 创建一个文本内容 |touch 1.text|
echo | 创建一个文本 |echo 1.text|
mkdir | 创建文件夹 | mkdir 加文件路径|
cp | 拷贝一个目录 | cp 加文件名 |
删除
命令 | 用法 | 语法 |
-----| -----| ----|
rm | 删除文件或文件夹 | rm 路径
rm -r | 递归删除 | rm -r 递归删除一个文件夹
rm -rf | 强制递归删除 | rm -rf 文件路径
cd      |切换命令 | cd 目录名
其他命令
命令 | 用法 | 语法
----| -----| -----|
mv | 移动文件 | mv 源文件(路径) 目标文件(路径)
bash | 执行脚本路径 | bash 脚本文件 |

##### git命令

* git是一个版本控制管理工具

	1. 基本命令

	 命令 | 作用 | 语法 |
	 -----| -----| ----- |  
	 git clone | 克隆一个远程项目到本地 | git clone SSH(Https)
	 git remote add |添加一个远程仓库地址到git上 | Git remote add 项目地址 
	 git push | 将本地项目上传到远程仓库上 | git push origin master(仓库名)
	 git pull | 将远程仓库的更改重新同步到本地上 | git pull origin master 同步远程仓库到本地项目中
	 git add . | 添加本地仓库的更改 | git add . 会将本地仓库的文件全部上传(不要上传的文件可以添加到.gitigonre中，文件就不会被上传)
	 git reset -hard | 版本控制，每一次提交都会产生一个版本，git rsset命令可以在多个版本中来回切换 | git reset -hard 本地ID(5位)
	 git logs | 查看本地提交记录，是从当前所处的版本向前查看 | git logs
	 git reflog | 查看本地全部的提交记录, 是查看全部的提交记录 | Git reflog
	 git branch | 创建一个分支 可以用来双线开发，分支之间不会互相影响| Git branch -x 分支名
	 Git checkout | 切换分支，进行不同版本的开发| git checkout 分支名
	 git merge | 在前分支运行命令，将分支合并 | git merge -分支名
	 git diff | 查看不同 | 查看这次提交与之前提交的不同 +代表添加 -代表删除
	 git status | 查看当前git的状态| git status sb 查看是否存在冲突
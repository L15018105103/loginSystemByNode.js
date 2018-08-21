文件夹介绍

bin 		项目启动程序
node_modules	项目依赖模块
public		公开文件
router		路由文件夹
views		视图文件
app.js		项目主程序入口
package.js	on	项目依赖模块版本说明


名词解释：
路由：网络地址分发

node.js没有目录的概念，只有路由这个概念


render(渲染)：渲染后台模板引擎 =》 用户展示界面

过程：
（1）启动服务器
（2）当URL那里没有添加其他的话，默认就是访问根路由
（3）确定为根路由的时候，就去router文件下的index.js文件里面查找对应的根路由的渲染后台
模板引擎生成页面，将这个模板发送给前端，前端拿到这个模板之后，进行页面的渲染，并显示


登录：

1.登录界面的路由
2.登录界面
3.数据处理


前端知识点：

input标签的name属性作用：对该字段的命名，发送给后台，后台获取的使用的key；


数据库：

mongoDB  关系松散  不复杂  大数据量 高并发 非关系型 没有表的概念

开机：mongod --dbpath ./  (当前路径打开)
连接数据库：mongo 数据库地址（本地就直接CMD下mongo）
常用命令：
（1）show  dbs
（2）show  admin
（3）show  collections
（4）db.system.version.find()
（5）
数据：json格式


Node.js：
（1）语言的局限：安全问题，大型项目的适应性问题
（2）编译和运行一次性干完的，不像java和C++，要先编译后运行
（3）typescript  coffescript  基于javascript的语法超集
（4）一个线程就能够执行异步操作，非阻塞的I/O，天生异步









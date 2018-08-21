var express = require('express');
var router = express.Router();
var model = require('../model/mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/doLogin', function (req, res, next) {//next:中间件；req: 请求； res：回应；
  var arg = req.body,
    user = arg.user,
    pwd = arg.pwd;
  console.log(arg);
  console.log(user);
  console.log(pwd);
  /*res.send("数据接收成功" +  user + pwd);*/
  model.findOne({user: user}, function (err, doc) {
    if(err){
      return res.send('500');//服务器内部错误，不能发数字，只能发字符串
    }
    if(!doc){
      return res.send('该用户未注册');
    }
    if(pwd != doc.pwd){
      return res.send('密码错误');
    }
    return res.send('登录成功');
  });
});

router.post('/doRegister', function (req, res, next) {//next:中间件；req: 请求； res：回应；
  var arg = req.body,
    user = arg.user,
    pwd = arg.pwd;
  console.log(arg);
  console.log(user);
  console.log(pwd);
  /*res.send("数据接收成功" +  user + pwd);*/
  //往MongoDB数据库添加数据
  var Entity = new model({
    user: user,
    pwd: pwd
  });
  Entity.save(function (err) {//有错误一定要处理，单线程，
    if(err){
      return console.log(err.message);
    }
    return res.send("用户注册成功");
  });
});

module.exports = router;

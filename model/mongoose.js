var mongoose = require('mongoose');//引入mongoose

mongoose.connect('mongodb://localhost/test');//mongodb协议

var Schema = mongoose.Schema;//定义数据文档的模型

var model = new Schema({
  user: String,
  pwd: String,
});

var MyModule = mongoose.model('userODB', model);//集合名字, model

MyModule.findOne({user: 'Angelo'}, function (err, doc) {
  if(err){
    throw err;
  }
  //console.log(doc);
});

module.exports = MyModule;//引出模块
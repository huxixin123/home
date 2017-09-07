var gulp = require("gulp");
var server = require("gulp-webserver");
var urlPar = require("url");
var json = [
	{
		"name":["一说科技"],
		"content":[{"img":"./img/1.png","txt":"一说 智能机器人 S1 儿童陪伴机器人 玩具 早教故事机","dan":"898","odd":"$1230","sum":"x1"}]
	},
	{
		"name":["天猫超市"],
		"content":[{"img":"./img/2.png","txt":"[天猫超市] 达利园 瑞士卷蛋糕 （草莓味）240g、袋（12枚）","dan":"14.9","odd":"0.24kg","sum":"x1"},
		{"img":"./img/3.png","txt":"[天猫超市] 可比克薯片我任性 122g 休闲膨化办公室零食","dan":"10.9","odd":"0.24kg","sum":"x2"},
		{"img":"./img/4.png","txt":"[天猫超市] 达利园派巧克力味是蛋糕 20枚 休闲食品好享受","dan":"24.9","odd":"0.6kg","sum":"x1"},
		{"img":"./img/1.png","txt":"[天猫超市] 百味草莓多味花生210g 休闲零食炒货 香辣花生豆","dan":"30.00","odd":"3.00kg","sum":"x2"}]
	}
]
gulp.task("config",function(){
	gulp.src("gulp")
	.pipe(server({
		port:"8020",
		middleware:function(req,res,next){
			res.setHeader("Access-Control-Allow-Origin","*");
			var method = req.method;
			var pathname = urlPar.parse(req.url).pathname;
			if(method==="POST"){
				var str="";
				req.on("data",function(chunk){
					str+=chunk;
				})
				req.on("end",function(){
					res.setHeader("content-type","application/json;charset=utf-8;");
					res.write(JSON.stringify(json));
					res.end();
				})
			}
		}
	}))
})
gulp.task("default",["config"]);
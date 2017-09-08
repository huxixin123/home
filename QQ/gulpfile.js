var gulp = require("gulp");
var server = require("gulp-webserver");
var urlPar = require("url");
var json = [
	{"No1":"a1","img":"./img/1.jpg","icon":"iconfont icon-baocun","title":"QQ看点","txt":"[精选] LOL丝血金身被4名敌人围困，狗牌被杀","time":"下午10:08"},
	{"No1":"a2","img":"./img/2.jpg","icon":"","title":"群助手","txt":"[1个群有新消息]","time":"下午6:08"},
	{"No1":"a3","img":"./img/3.jpg","icon":"","title":"李娟","txt":"[图片]","time":"下午4:15"},
	{"No1":"a4","img":"./img/4.jpg","icon":"","title":"庞袁锋","txt":"回来没呢","time":"下午4:08"},
	{"No1":"a5","img":"./img/5.jpg","icon":"","title":"网站1506A","txt":"辅导员￥朱兆军 ： 白醋爱 11：49:28国庆节即将放假","time":"下午4:08"},
	{"No1":"a6","img":"./img/7.jpg","icon":"","title":"腾讯新闻","txt":"大妈卖鱼被咬手 嚎啕大哭","time":"下午3:08"},
	{"No1":"a7","img":"./img/6.jpg","icon":"","title":"杨月","txt":"去千里，念风波，小畦之外，稻粟犹香。白头青丝泪千行，暗光明日身九殤，难思量，再微恙","time":"下午2:08"},
	{"No1":"a8","img":"./img/13.jpg","icon":"","title":"韩盼","txt":"发一份","time":"上午12:08"},
	{"No1":"a9","img":"./img/9.jpg","icon":"","title":"杨幂","txt":"情人望月，一月寄相思。鸳鸯戏水，两水照彩虹","time":"上午9:48"},
	{"No1":"a10","img":"./img/10.jpg","icon":"","title":"王思聪","txt":"愿君平息千古恨，与子同仇万世情","time":"昨天"},
	{"No1":"a11","img":"./img/11.jpg","icon":"","title":"杨洋","txt":"一抹烟云拟诗书一笔勾勒史意书一意孤行得梦书","time":"昨天"}
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
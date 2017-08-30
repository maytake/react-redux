var app = require('koa')();
var router = require('koa-router')();

/*router.get('/', function *(next) {//function* 会定义一个生成器函数 (generator function)，它返回一个  Generator  对象。
    this.body = 'hello koa !'
});
*/

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead',function *(next){
	this.body = homeAdData;
})

var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page',function *(next){
	const params = this.params;
	const paramsCity = params.city;
	const paramsPage = params.page;
	this.body = homeListData
	console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)
})



app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);



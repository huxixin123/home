import Vue from "vue"
import Router from "vue-router"
import axiosy from "axios"
import vueAxios from "vue-axios"
Vue.use(Router)
Vue.use(vueAxios,axiosy)

var tab = resolve => require.ensure(['./components/page/tab.vue'], () => resolve(require('./components/page/tab.vue')))
var list = resolve => require.ensure(['./components/page/list.vue'], () => resolve(require('./components/page/list.vue')))
var listen = resolve => require.ensure(['./components/page/listen.vue'], () => resolve(require('./components/page/listen.vue')))
var add = resolve => require.ensure(['./components/page/add.vue'], () => resolve(require('./components/page/add.vue')))
var hot = resolve => require.ensure(['./components/page/hot.vue'], () => resolve(require('./components/page/hot.vue')))
var fen = resolve => require.ensure(['./components/page/fen.vue'], () => resolve(require('./components/page/fen.vue')))
var zhi = resolve => require.ensure(['./components/page/zhi.vue'], () => resolve(require('./components/page/zhi.vue')))
var jing = resolve => require.ensure(['./components/page/jing.vue'], () => resolve(require('./components/page/jing.vue')))
var guang = resolve => require.ensure(['./components/page/guang.vue'], () => resolve(require('./components/page/guang.vue')))
var opt = resolve => require.ensure(['./components/page/opt.vue'], () => resolve(require('./components/page/opt.vue')))

let router = new Router({
	
linkActiveClass:"active",
	routes:[{
		name:"list",
		path:"/list",
		component:list
	},
	{
		name:"tab",
		path:"/tab",
		component:tab,
		children:[
		{ 
			name:"hot",
			path:"/hot",
			component:hot
			
		},
		{
			name:"fen",
			path:"fen",
			component:fen
		},
		{
			name:"jing",
			path:"jing",
			component:jing
		},
		{
			name:"zhi",
			path:"zhi",
			component:zhi
		},
		{
			name:"guang",
			path:"guang",
			component:guang
		},
		{
			path:"/tab",
			redirect:"/hot"
		}
		]
	},
	{
		name:"listen",
		path:"/listen",
		component:listen
	},
	{
		name:"add",
		path:"/add",
		component:add
	},
	{
		name:"opt",
		path:"/opt",
		component:opt
	},
	{
		path:"/",
		redirect:"/tab"
	}]
})

new Vue({
    el:"#app",
    router,
    data:{
    	lists:'lists'
    }
})

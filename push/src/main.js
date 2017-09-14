import Vue from "vue"
import Router from "vue-router"
// import Index from "./components/Index.vue"
import tab from "./components/page/tab.vue"
import list from "./components/page/list.vue"
import listen from "./components/page/listen.vue"
import add from "./components/page/add.vue"
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
		component:tab 
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
	}
	]
})
Vue.use(Router)
new Vue({
    el:"#app",
    router,
    data:{
    	lists:'lists'
    }
})

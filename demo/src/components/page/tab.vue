<template>
	<div>
		  <ul class="nav">
       <router-link :to="{name:'hot'}" tag="li">热门</router-link>
       <router-link :to="{name:'fen'}" tag="li">分类</router-link>
       <router-link :to="{name:'jing'}" tag="li">精品</router-link>
       <router-link :to="{name:'zhi'}" tag="li">直播</router-link>
       <router-link :to="{name:'guang'}" tag="li">广播</router-link>
      </ul>
      <div>
          <router-view></router-view>
      </div>
      
    </div>
</template>
<script>
    export default{
    name:"tab",
       data(){
           return {
               tab:"我是tab"
           }
       }
    }
</script>
<style>

ul{
  list-style: none;
}
  .nav{
    display: flex;
    background: #eee;
  }
  .nav li{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  }
  .nav a{
    color:#000;
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  .ico{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .ico li{
    box-sizing: border-box;
    background: #fff;
    display: flex;
    border:1px solid #eee;
    width: 25%;
    font-size: 12px;
    padding: .5rem 0;
    justify-content: center;
    align-items: center;
  }
  .active{
    border-bottom: 1px solid red;
    color:red;
  }
</style>
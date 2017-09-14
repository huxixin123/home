<template>
	<div>
		  <ul class="nav">
       <router-link to="/hot"><li>热门</li></router-link>
       <router-link to="/fen"><li>分类</li></router-link>
       <router-link to="/jing"><li>精品</li></router-link>
       <router-link to="/zhi"><li>直播</li></router-link>
       <router-link to="/guang"><li>广播</li></router-link>
      </ul>
      <ul class="ico">
          <li>音乐</li>
          <li>历史</li>
          <li>情感生活</li>
          <li>人文</li>
          <li>付费精品</li>
          <li>脱口秀</li>
          <li>娱乐</li>
          <li>英语</li>
          <li>音乐</li>
          <li>历史</li>
          <li>情感生活</li>
          <li>人文</li>
          <li>付费精品</li>
          <li>脱口秀</li>
          <li>娱乐</li>
          <li>英语</li>
          <li>人文</li>
          <li>付费精品</li>
          <li>脱口秀</li>
          <li>娱乐</li>
      </ul>
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
    padding: 10px 0;
    background: #eee;
  }
  .nav li{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>
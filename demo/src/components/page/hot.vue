<template>
  <div>

        <ul class="ico">
            <router-link :to="{name:'opt',params:{id:item.src}}" v-for="(item,index) in data" :key="index" tag="span">{{item.tex}}</router-link>
        </ul> 
      <router-view></router-view>
  </div>

</template>

<script>
    // var data = ;
    export default{
       name:"hot",
       data(){
           return {
               data:""
           }
       },
        beforeRouteEnter(to,from,next){
          // setTimeout(function(){
              next((vm)=>{
                  vm.axios.get("/some/path").then(function(datay){
                     // vm.list=datay.data;
                     vm.data=datay.data;  
                  })
              })
          // },2000)
           
        }
    }
</script>
<style>
   .ico{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
  .ico span{
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
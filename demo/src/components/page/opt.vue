<template>
	<div>

	   这是{{src}}页
	</div>
</template>

<script>
    export default{
    name:"tab",
       data(){
           return {
               tab:"我是opt",
               src:""
           }
       },
       created(){
          console.log(this.$route.params.id)
          this.$data.src = this.$route.params.id;
       }
    }
</script>

<style></style>
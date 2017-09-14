<template>
	<div>
		{{tab}}
	</div>
</template>

<script>
    export default{
    name:"tab",
       data(){
           return {
               tab:"我是list"
           }
       },
       created(){
          console.log(this)
       }
    }
</script>

<style></style>
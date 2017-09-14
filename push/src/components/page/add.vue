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
               tab:"我是add"
           }
       },
       created(){
          console.log(this)
       }
    }
</script>

<style></style>
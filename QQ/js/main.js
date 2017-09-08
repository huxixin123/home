var app = new Vue({
    el: "#app",
    data:{
        qq:{
            qqTxt:null
        }
    },
    created: function() {
       $.ajax({
           url:"http://localhost:8020",
           type:"post",
           success:function(result){
                // var str = JSON.parse(result)
                app.$set(app.$data.qq,"qqTxt",result);
           },
           error:function(error){
               console.log(error)
           }
       })
    },
    updated(){
        myScroll.refresh();
    }
})
var myScroll = new IScroll("#box");
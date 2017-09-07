var json ="";

$.ajax({
    url:"http://localhost:8020",
    type:"post",
    success:function(result){
       demo( result )
    },
    error:function(err){
        console.log(err)
    }
})
function demo(add){
    var str="";
    str+=`
        <p class="txt">
                <i class="iconfont icon-snapchat lingLeft"></i>
                <span>我的天猫超市可用余额：78.8元,在天猫APP可使用超市卡结算哦</span>
                <i class="iconfont icon-guanbi-01 error"></i>
        </p>
    `
    add.forEach(function(val,i){
       str+=` <div class="shopNav">
                <div class="titleShop">
                    <span class="ok"><input type="checkbox" class="changeGet"></span>
                    <i class="iconfont icon-meiyoudingdan-01"></i>
                    <span class="shopWood">${val.name[0]}</span>
                    <i class="iconfont icon-youjiantou-01"></i>
                </div>`
        $.each(val.content,function(i,vs){
            
                str+=`<dl class="mainNav">
                    <dt>
                         <span class="ok"><input type="checkbox" class="changeGet"></span>
                         <img src=${vs.img} class="img">
                    </dt>
                    <dd>
                        <p class="textMessage">
                            <span class="ttx">${vs.txt}</span>
                            <span class="kl"><span class="or">${vs.dan}</span><span class="ee${i}">${vs.odd}</span></span>
                        </p>
                        <p class="textIcon">
                            <i class="iconfont icon-bianji1 con"></i>
                            <span>${vs.sum}</span>
                        </p>
                    </dd>
                </dl>
            </div>
            `
        })
   })
   $(".box").html(str)
}
var opp = new Vue({
    el:"#app",
    data:{
        num: "102",
        money:"78.8",
        name1:"一说科技",
        sum:"x1",
        count:"0",
        sumGet:"0",
        message:"",
        datas:{
            shop:null
        }
    }
    // created: function() {
    //     $.ajax({
    //     url:"http://localhost:8020",
    //     type:"post",
    //         success:function(dataF){
    //             parseF = JSON.parse(dataF);
    //             // console.log(parse);
    //             // console.log(opp.$data)
    //             opp.$set(opp.$data.datas,"shop", parseF);
    //         }
    //     })
	// }   
})
// console.log(opp.$data.datas)


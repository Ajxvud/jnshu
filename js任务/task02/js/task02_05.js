//获取前几个页面传递过来的数据
var ss = JSON.parse(sessionStorage.getItem("key"));
console.log(ss)

var liTop = $(".liTop");
var liBottom = $(".liBottom");


//点击关闭
$("#off").click(function(){
    var close = confirm("确定要退出游戏？");
    if(close == true){
        location.href = "../task02/task02_01.html";
    }else{
        alert("你已取消退出！")
    }
});


//点击事件
liTop.click(function(){
    let a = liTop.attr("data-html");
    if(Number(a) == 1){
        var speak = confirm("请玩家们依次发言讨论");
        if(speak == true){
            $(".stpeOne").css('border-right','29px solid #FF6600');
            liTop.css('background-color', '#FF6600');
            //将html自定义属性的值变为0
            liTop.attr("data-html","0")
        }
    }else{
        alert("请进行下一环节!")
    }
   
});

liBottom.click(function(){
    let a = liTop.attr("data-html");
    if(Number(a) == 1){
        alert("请按照游戏流程来！");
    }
    else{
         //点击跳转到另外一个页面
    location.href = "../task02/task02_06.html";
    }
   
})

//法官日志按钮：
$(".btn2").click(function(){
    location.href = "../task02/task02_04.html"
})
//结束游戏：
$(".btn1").click(function(){
    var gameOver = confirm("你确定要结束游戏？")
    if(gameOver == true){
        location.href = "../task02/task02_01.html"
    }else{
        alert("请继续游戏")
    }
    
})
//右上角点击退出
$("#off").click(function(){
    var close = confirm("是否要退出游戏？")
    if(close == true){
        location.href = "../task02/task02_01.html";
    }else{
        alert("你已取消退出！")
    }
})

//读取session storage里传递的参数
var SS = JSON.parse(sessionStorage.getItem("key"))
console.log(SS);

//用jq找到对应元素节点
var careerElement = $("#career");
var numberElement = $("#number");
var mainBoxElement = $("mainBox");


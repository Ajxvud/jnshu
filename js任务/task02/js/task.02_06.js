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

for(var i=0; i<SS.length;i++){
    var num = i+1;
    //var个变量存储写进文档的标签代码，记住要转义字符
    var inBox = '<div class=\"mainBox\">\n'+
                '<div class=\"career\">\n'+ SS[i] +
                '</div>\n'+
                '<div class=\"number\">\n'+ num + "号" +
                '</div>\n'+
                '</div>\n'+
                '</div>';

    //通过append将盒子一个一个的往文档里面装           
    $('.main').append(inBox);
}

//底部按钮跳转到下一个页面
$(".foot-button").click(function(){
    location.href = "../task02/task02_05.html";
})

var myArray = new Array()


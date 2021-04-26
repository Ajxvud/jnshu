// 输入框输入数字的情况和滑轮的关系
var playerElement = $("#nm"); //玩家总人数节点
var killerElement = $("#killer"); //获取杀手输入框元素节点
var civilianElement = $("#civilian"); //获取平民元素节点

//控制输入类型
playerElement.bind('input propertychange', function () {
    var x = /\D/g; //定义正则，非数字规则
    var aa = playerElement.val();
    playerElement.val(aa.replace(x, "")); // 符合正则规则替换为空值
    matching();
})
// 减号控制滑轮
$("#btnLess").click(function(){
    $("#btnMiddle").val(  Number($("#btnMiddle").val())-1)
    playerElement.val(  Number(playerElement.val())-1)
    if(playerElement.val()<4){
        alert("不能小于4人")
    }
    playerElement.val($("#btnMiddle").val());
    matching();
})
// 加号控制滑轮
$("#btnPlus").click(function(){
    $("#btnMiddle").val( Number($("#btnMiddle").val())+1)
    playerElement.val( Number(playerElement.val())+1)
    if(playerElement.val()>18){
        alert("不能大于18")
    }
    playerElement.val($("#btnMiddle").val());
    matching();
})
// 滑轮与输入框的关系
$("#btnMiddle").bind('input propertychange',function(){
    playerElement.val($("#btnMiddle").val());
    matching();
})
playerElement.bind('input propertychange',function(){
    $("#btnMiddle").val(playerElement.val());
    matching();
})

document.getElementsByClassName

//主要判断函数
function matching() {
    
    
    if (playerElement.val() >= 0) {
        if (playerElement.val() <= 7) {
            killerElement.html(1);
            civilianElement.html(playerElement.val() - killerElement.html());
        } else if (playerElement.val() <= 11) {
            killerElement.html(2);
            civilianElement.html(playerElement.val() - killerElement.html());

        } else if (playerElement.val() <= 13) {
            killerElement.html(3);
            civilianElement.html(playerElement.val() - killerElement.html());

        } else if (playerElement.val() <= 15) {
            killerElement.html(4);
            civilianElement.html(playerElement.val() - killerElement.html());

        } else if (playerElement.val() <= 18) {
            killerElement.html(5);
            civilianElement.html(playerElement.val() - killerElement.html());
        } else {
            alert("请输入正确的玩家人数！");
        }
    } else {
        alert("玩家不能为负数！")
    }
}
// 洗牌算法,将数据传递到下一个页面
function brand(){
    var civilianvalue = playerElement.val()-$("#killer").html();
    var killvalue =playerElement.val()-$("#civilian").html();
    var killer =new Array(killvalue).fill("杀手");
    var civilianer =new Array(civilianvalue).fill("平民");
    var array = killer.concat(civilianer);
    console.log(array)
    for(i = array.length;i--;){
        var j = Math.floor(Math.random()*array.length);
        var b =array[i];
        array[i] = array[j];
        array[j] =b;
    }
    console.log(array);
    return array;
}
$("#footButton").click(function(){
    brand()
    sessionStorage.setItem("key",JSON.stringify(brand()));
    　  window.location.href = "./task02_03.html"
});


var footButton = $("#footButton");
footButton.click(function () {
       location.href = "./task02_03.html";
});


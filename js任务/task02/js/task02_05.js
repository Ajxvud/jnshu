//点击关闭
$("#off").click(function(){
    var close = confirm("确定要退出游戏？");
    if(close == true){
        location.href = "../task02/task02_01.html";
    }else{
        alert("你已取消退出！")
    }
});



var name = 'window'; 

var A = {
   name: 'A',
   sayHello: function(){
      var s = () => console.log(this.name)
      return s//返回箭头函数s
   }
}

var sayHello = A.sayHello();
sayHello();// 输出A 

var B = {
   name: 'B',
}

sayHello.call(B); //还是A
sayHello.call(); //还是A

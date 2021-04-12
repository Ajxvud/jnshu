//控制右边菜单栏
$(document).ready(function(){
  $("#btnTest").click(function(){
    $("#menu").toggle();
  })
})

//点击下面第2个圆圈，显示第2个页面
$("#right").on('click',function(){
  console.log(1221)
$(".mobileBox").slideToggle();
})
//点击下面第1个圆圈，显示第一个页面
$("#left").on('click',function(){
  console.log(1221)
$(".mobileBox").slideToggle();
})
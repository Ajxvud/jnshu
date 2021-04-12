
function doHide(){
    var oDiv = document.getElementById("menu");
    if (oDiv.style.display == "none"){
      oDiv.style.display = "block";
    }else {
      oDiv.style.display = "none";
    }
}
//点击下面第二个，显示第一个页面
$("#right").on('click',function(){
  console.log(1221)
$(".mobileBox").slideToggle();
})
//点击下面第1个，显示第2个页面
$("#left").on('click',function(){
  console.log(1221)
$(".mobileBox").slideToggle();
})

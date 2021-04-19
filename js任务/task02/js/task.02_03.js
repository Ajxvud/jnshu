
var SS = JSON.parse(sessionStorage.getItem('key'));
console.log(SS);

//获取身份号元素节点
var IdentityNumberElement = $("#IdentityNumber");
//获取身份照片元素节点
var IdentityAvatarElement = $("#IdentityAvatar");
//获取描述身份元素节点
var IdentityStatementElement = $("#IdentityStatement");
//获取按钮元素节点
var FootButtonElement = $(".foot-button");
var IdentityAvatar = 1;


//初始化
IdentityNumberElement.text(IdentityAvatar);
FootButtonElement.text("查看" + IdentityAvatar + "号身份");

//查看信息
function ViewIdentity(){
    IdentityNumberElement.text(IdentityAvatar);
    FootButtonElement.text("查看" + IdentityAvatar + "号身份");
    IdentityAvatarElement.attr("src","../task02/images/block.png");
    IdentityStatementElement.text("");
}
//隐藏信息
function HiddenIdentity() {
    IdentityAvatarElement.attr("src", "../task02/images/none.png");
    FootButtonElement.text("隐藏并传递" + (IdentityAvatar + 1) + "号");
    IdentityStatementElement.text((SS[IdentityAvatar - 1]))
    IdentityAvatar++;
    if (IdentityAvatar > SS.length) {
        FootButtonElement.text("法官查看");
        FootButtonElement.click(function () {
            //跳转到下个任务的网址
            location.href = "../task02/task02_04.html";
        })
    }
}

//点击事件
FootButtonElement.click(function(){
    var imgSrc = IdentityAvatarElement.attr("src");
    if(imgSrc == "../task02/images/block.png"){
        HiddenIdentity();
    }
    if(imgSrc == "../task02/images/none.png"){
        ViewIdentity();
    }

})

//判断是否退出
var close = $(".close");
close.click(function(){
    var quit = confirm("是否要退出游戏？")
    if(quit == true){
       location.href = "../task02/task02_01.html"
    }else{
        alert("您已取消退出！")
    }
    
})

var list = document.getElementsByTagName('li');
var run = document.getElementById('btn1');
var stop = document.getElementById('btn2');
var time;
//选3个li标签，保证3个数不相同
function begin(one, two, three) {
    if (one == two || two == three || one == three) {
        if (one == two) {
            one = Math.floor(Math.random() * list.length);
        } else if (two == three) {
            two = Math.floor(Math.random() * list.length);
        } else if (one == three) {
            three = Math.floor(Math.random() * list.length);
        }
        begin(one, two, three);
    } else {
        //调用colors函数，函数color返回值为rgb
        list[one].style.background = 'rgb' + colors();
        list[two].style.background = 'rgb' + colors();
        list[three].style.background = 'rgb' + colors();
    }
    // console.log() 
} 

//生成随机颜色
function colors() {
    var rgb;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    //引入变量作为字符串形式："+变量+",原理是 在引号中 引号的内容为引用，单双引号不能混用
    rgb = '('+r+','+g+','+b+')';
    return rgb;
}

run.onclick = function () {
    clearInterval(time);
    time = setInterval(function () {
        //先将所有背景色变为原色（#FFA600），再上色
        for (var i = 0; i < list.length; i++) {
            list[i].style.background = '';
        }
        var one = Math.floor(Math.random() * list.length);
        var two = Math.floor(Math.random() * list.length);
        var three = Math.floor(Math.random() * list.length);
        begin(one, two, three);
    }, 1000)
}
stop.onclick = function () {
    clearInterval(time);
    //循环i从0开始到9，依次将li标签的背景颜色去掉，也就是=为''要表达的意思
    for (var i = 0; i < list.length; i++) {
        list[i].style.background = '';
    }
}


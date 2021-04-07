
var list = document.getElementsByTagName('li');
var run = document.getElementById('btn1');
var stop = document.getElementById('btn2');
var time;
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
        list[one].style.background = 'rgb' + colors();
        list[two].style.background = 'rgb' + colors();
        list[three].style.background = 'rgb' + colors();
    }
    console.log()
}

//生成随机颜色
function colors() {
    var rgb;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    rgb = '('+r+','+g+','+b+')';
    return rgb;
}

run.onclick = function () {
    //停止定时操作
    clearInterval(time);
    time = setInterval(function () {
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
    for (var i = 0; i < list.length; i++) {
        list[i].style.background = '';
    }
}


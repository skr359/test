var tel = sessionStorage.getItem("phont");

if (tel !="" && tel != null) {
    $('.phont').text("+86 " + tel);
}

var time = null;
//封装函数，启动一个定时器
function timerstart() {
    var tim = 60;
    //只要运行，按钮就不可点击
    $(".congxbut").css("pointer-events","none")
    time=setInterval(function () {
        tim--;
        var str = `重新发送(${tim})`;
        $(".congxbut").text(str);
        if (tim<=0) {
            clearInterval(time);//清楚计时器
            $(".congxbut").text("重新发送");
            $(".congxbut").css("pointer-events","all")
            $(".congxbut").css("cursor","pointer")
        }
    } ,1000);
}
//进入页面启动一次
timerstart();
//点击重新发送时重新启动定时器
$(".congxbut").click(function(){
    timerstart();
})

function go() {
    /*
        sessionStorage是一种HTML5的数据存储基础
        存入sessionStorage.setItem("键"，数据);
        输出sessionStorage.getItem("键");
        */
    sessionStorage.setItem("phont",tel);
    //js跳转页面
    window.location.href="register03.html";
}
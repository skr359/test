// 中间菜单栏
$(".pm,.ptbutton").mouseenter(function () { //鼠标移入事件
    $(".ptbutton").css("height", "230px");
    $(".ptbutton").css("transition", "all 0.3s ease-in-out");
    $(".ptdet>input").blur();
});

$(".pm,.ptbutton").mouseleave(function () { //鼠标移出事件
    $(".ptbutton").css("height", "0px");
});

$(".pm>li").mouseenter(function () { //鼠标移入事件
    var tap = $(".pm>li").index(this);
    $(".ptbutton>div").eq(tap).show().siblings().hide();
});


// 右边搜索框
// 焦点聚焦时事件
$(".ptdet>input").focus(function () { 
    $(".ptdet").addClass("ptAten");
    $(".ptdet").removeClass("ptdetx");
    $(".dowbox").show();
});
//失去焦点时事件
$(".ptdet>input").blur(function () { 
    $(".ptdet").removeClass("ptAten");
    $(".ptdet").addClass("ptdetx");
    $(".dowbox").hide();
});

var arr=["王一博同款手机","空调","卡丁车","RedmiK30por","出行","耳机","全部商品"]
setInterval(function() {
     var num = (Math.random()*arr.length);
     var miid = parseInt(num);
    //  console.log(miid);
     $(".ptdet>input").attr("placeholder",arr[miid]);
}, 3000);


// 轮播图
function bander(){
    var index=0;//显示图片，默认显示第0张
    var time = null;
    statTimer();//调用定时器

    function gointo(){
        $(".imgtad").eq(index).css("opacity","1");
        $(".imgtad").eq(index).siblings(".imgtad").css("opacity","0");
        $(".banderadfnt>li").eq(index).addClass("defon").siblings().removeClass("defon");
    }
    // 移入停止计时器
    $(".bannderbox").mouseenter(function(){
        clearInterval(time);
    })
     // 移出启动计时器
    $(".bannderbox").mouseleave(function(){
        statTimer();
    })


    // 自动轮播
   function statTimer(){
    clearInterval(time);
    time = setInterval(function(){
        if (index>=4) {
            index=0;
        } else {
            index++;
        }
        gointo();
    }, 4000);
   }
    // 点击左右切换图片
    $(".btn-left").click( function(){ 
        if (index>=4) {
            index=0;
        } else {
            index++;
        }
        gointo();
    });
    $(".btn-rite").click( function(){ 
        if (index<=0) {
            index=4;
        } else {
            index--;
        }
        gointo();
    });

    // 点击小圆点切换图片
    $(".banderadfnt>li").click(function(){
        index = $(".banderadfnt>li").index(this);
        gointo();
    })
}

bander();

// 框随着内容的大小而改变宽度
function sidebar_ul(){
    $(".btlebo>ul>li").mouseenter(function(){
        var num=$(this).find("ul").length;
        // console.log(num);
        var wid=num*250+'px';
        $(".bletabt").css("width",wid)
    })
}
sidebar_ul();

//小米闪购轮播/点击效果
function misg(){
    var index=0;
    var time=null;
    //计算并设置ul的宽度
    var maxulbox = ($(".misg-right>ul>li").length*248)+248;
    console.log(maxulbox);
    $(".misg-right>ul").css("width",maxulbox+"px");

    var maxlens = $(".misg-right>ul>li").length-4;
    //轮播
    time = setInterval(function() {
        if (index==maxlens) {
                index=0;
                goin();
        }else{
            index+=4;
            if (index>=maxlens) {
                index=maxlens;
            }
            goin();
        }
    },7000);   

    function goin(){
        var min = -248*index+"px";
        $(".misg-right>ul").css("margin-left",min);

        if (index>0) {
            $(".dtlt-left").removeClass("cunter");
        } else {
            $(".dtlt-left").addClass("cunter");
        }
        if (index<maxlens) {
            $(".dtlt-right").removeClass("cunter");
        } else {
            $(".dtlt-right").addClass("cunter");
        }
    }

    //右点击事件
    $(".dtlt-right").click( function(){
        clearInterval(time);//点击取消轮播
        index+=4;
        if (index>=maxlens) {
            index=maxlens;
        }
        goin();
    });
    //左点击事件
    $(".dtlt-left").click( function(){
        clearInterval(time);//点击取消轮播
        index-=4
        if (index<=0) {
            index=0;
        }
        goin();
    });

}
misg();

//小米闪购，倒计时效果
function xmsgdjs() {
    var time = new Date("2020/12/2 20:00");
    function djs(){
        var t = time-new Date();
        var h = parseInt(t/1000/60/60);
        var m = parseInt(t/1000/60-h*60);
        var s = parseInt(t/1000-h*60*60-m*60);

        if (h<10) {
            h = `0${h}`;
        }
        if (m<10) {
            m = `0${m}`;
        }
        if (s<10) {
            s = `0${s}`;
        }
        $("#h").text(h);
        $("#m").text(m);
        $("#s").text(s);
        
       
    }
    djs();
    var timer = setInterval(djs,1000)
    if (h<0) {
        clearInterval(timer);
     }
}
xmsgdjs();

//商品切换
function qiehu(){
    $(".phone-top-right1>ul>li").mouseenter(function () { //鼠标移入事件
        var tap = $(".phone-top-right1>ul>li").index(this);
        console.log(tap);
        $(".qiehuan>.tobox").eq(tap).show().siblings().hide();
        $(".phone-top-right1>ul>li").eq(tap).addClass("textclor").siblings().removeClass("textclor");
    });
    
    $(".phone-top-right2>ul>li").mouseenter(function () { //鼠标移入事件
        var tap = $(".phone-top-right2>ul>li").index(this);
        console.log(tap);
        $(".qiehuan>.tobox").eq(tap).show().siblings().hide();
        $(".phone-top-right2>ul>li").eq(tap).addClass("textclor").siblings().removeClass("textclor");
    });
}
qiehu();


// 视频
function mv(){
    var indexmv = null;
    $(".mv-down>ul>li").click(function(){
        var index = $(".mv-down>ul>li").index(this);

        $(".mvmodel").fadeIn(300);

        $(".mvmodel-body").eq(index).show().siblings().hide();

        indexmv = $(".mvmodel-body").eq(index).find("video")[0];

        indexmv.play();//播放视频
    })

    $(".closebtn").click(function () { 
        $(".mvmodel").fadeOut(300);
        $(".mvmodel-body").hide();
        //关闭播放的视频
        indexmv.load();
    });
}
mv();

//固定栏
function gdl(){
    window.onresize=function(){
        var wid = window.innerWidth;
        if (wid<1450) {
            $(".finder").addClass("tsertw");
        } else {
            $(".finder").removeClass("tsertw");
        }
    }
    window.onscroll = function(){
        if ( document.documentElement.scrollTop>800) {
            $(".fanhui").show();
        } else {
            $(".fanhui").hide();
        }
    }
    $(".fanhui").click(function () { 
        document.documentElement.scrollTop=0;
    });
}

gdl();



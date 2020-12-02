$(".logintxt>div").click(function(){
    // 删除class属性
    $(".logintxt>div").removeClass("color-left");
    // 为当前元素添加class属性
    //在.click点击事件里this表示当前被点击的元素
    $(this).addClass("color-left");
    
    //.index显示当前元素的下标
    var subscript = $(".logintxt>div").index(this);

    // console.log(subscript);在浏览器后台显示

    //隐藏
    $(".logincont>div").hide();
    //显示对应下标的div
    $(".logincont>div").eq(subscript).show();
})

$(".but>input").click(function () { 
    window.location.href="index.html"
    
});
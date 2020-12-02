var tel = sessionStorage.getItem("phont");
if (tel !="" && tel != null) {
    $('.phont').text(" "+tel);
}

function get() {
    var tetde = /^.{8,16}$/;//正则表达式，表示8到16位
    var fon = $(".txt").val();
    var fon1 = $(".txt1").val();

    if (fon!=fon1) {
        alert("两次密码不相同");
        return;
    }

    if (tetde.test(fon)) {
        var sun = 0;
        var texnaber = /\b/;//正则表达式，表示数字
        var tex = /[a-zA-Z]/;//正则表达式，表示大小写字母
        var zifu = /\W/;//正则表达式，表示字符

        if (texnaber.test(fon)) sun++;
        if (tex.test(fon)) sun++;
        if (zifu.test(fon)) sun++;

        if (sun<2) {
            $(".pwd").css("color","#FF6700");
        } else {
            window.location.href="register04.html";
        }
    }else{
        $(".pwd").css("color","#FF6700");
    }
}

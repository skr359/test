// 鼠标点击显示/隐藏地区
var isshou = false;
function shouc2() {
    if (isshou) {
        document.getElementsByClassName("chekbox01")[0].style.display = "none";
    } else {
        document.getElementsByClassName("chekbox01")[0].style.display = "block";
    }
   
    isshou=!isshou;
}

function reg() {
    var tel = $(".phoninput").val();
    if (tel=="") {
        $(".phoneMsgBox").show();//显示选中的元素
        return;//跳出函数
    }

    var tlst = /^\d{11}$/;//正则表达式，意思就是数字只能有11位
    
    if (tlst.test(tel)) {
        $(".phoneMsgBox").hide();//如果tel符合正则表达式，则隐藏
        /*
        sessionStorage是一种HTML5的数据存储基础
        存入sessionStorage.setItem("键"，数据);
        输出sessionStorage.getItem("键");
        */
        sessionStorage.setItem("phont",tel);
        //js跳转页面
        window.location.href="register02.html";
    } else {
        $(".phoneMsgBox").show();
        $(".phoneMsg").text("手机号码不符合规范");
    }
}
window.onload = function(){
    var num = (Math.random()*9)+1;
    var intmiid = num*100000000;
    var miid = parseInt(intmiid);
    $(".suiji").text(miid);
    
    $(".butreg").click(function () { 
        window.location.href="login.html";
    });
}

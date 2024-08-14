function SetCookie(name, value, age) {
   // var d = new Date();
   // d.setTime(d.getTime() + (exday * 24 * 60 * 60 * 1000));
   // var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + ";" +"max-age=" + age + ";path=/";
}

function getCookie(name) {
    var name = name + "=";
    var decodeCookie = decodeURIComponent(document.cookie);
    var cook = decodeCookie.split(';');
    for (var i = 0; i < cook.length; i++) {
        var c = cook[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }

    }
    return "";
}

function CheckCookie() {
    var user = getCookie("username");
    if (user == "Sajy") {
    }
    else if (user=="") {
        user=prompt("Please Enter Your Name","");
        if(user !="" && user!=null)
            {
                SetCookie('username',user,300);
            }
    }
    else{
        document.body.style.opacity="0";
    }
}
CheckCookie()

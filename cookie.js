function SetCookie(name, value, age) {
    // var d = new Date();
    // d.setTime(d.getTime() + (exday * 24 * 60 * 60 * 1000));
    // var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=" + value + ";" + "max-age=" + age + ";path=/";
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
    if (user == "Sajy1384") {
    }
    // else if (user == "BUG") {
    //     newWindow();
    // }
    else if (user == "") {
        user = prompt("Please Enter password", "");
        if (user == "BUG") {
            SetCookie('username', "BUG", 300);
            window.location.reload();
        }
        else if (user == "") {
            SetCookie('username', "block", 300);
            window.location.reload();

        }
        else {
            SetCookie('username', "block", 300);
            window.location.reload();
        }
    }
    else {
        newWindow()
    }
}
function newWindow() {
    var array = [];
    for (i = 0; i <= 90; i++) {
        if (i < 15) {
            array[i] = window.open("", "", "width=50,height=50,left=" + (i * 100) + ",top=0");
        }
        else if (i >= 15 && i < 30) {
            array[i] = window.open("", "", "width=50,height=50,left=" + ((i - 15) * 100) + ",top=150");
        }
        else if (i >= 30 && i < 45) {
            array[i] = window.open("", "", "width=50,height=50,left=" + ((i - 30) * 100) + ",top=300");
        }
        else if (i >= 45 && i < 60) {
            array[i] = window.open("", "", "width=50,height=50,left=" + ((i - 45) * 100) + ",top=450");
        } else if (i >= 60 && i < 75) {
            array[i] = window.open("", "", "width=50,height=50,left=" + ((i - 60) * 100) + ",top=600");
        }
        else if (i >= 75 && i < 90) {
            array[i] = window.open("", "", "width=50,height=50,left=" + ((i - 75) * 100) + ",top=750");
        }
        array[i].document.write("BUG...");
    }
}

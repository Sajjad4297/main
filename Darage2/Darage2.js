
function sajy() {
    debugger;
    var a, b, c, delta;
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    c = parseFloat(document.getElementById("c").value);
    delta = Math.pow(b, 2) - (4 * a * c);
    var x1 = ((-b) + Math.sqrt(delta)) / (2 * a);
    var x2 = ((-b) - Math.sqrt(delta)) / (2 * a);
    if (delta >= 0) {
        document.getElementById("x1").innerHTML = x1;
        document.getElementById("x2").innerHTML = x2;
    }
    else {
        document.getElementById("x1").style.color = "red";
        document.getElementById("x2").style.color = "red";
        document.getElementById("x1").innerHTML = "!ریشه ای وجود ندارد";
        document.getElementById("x2").innerHTML = "!ریشه ای وجود ندارد";

    }
}

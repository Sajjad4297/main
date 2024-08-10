capcha();
function capcha() {
    var random = Math.floor(Math.random() * 10);
    document.getElementById('img').src = "../images/code" + random + ".png"
}
function check() {
    var inputCode = document.forms['form']['code'].value;
    var code;
    switch (loop()) {
        case 0: code = 860205
            break;
        case 1: code = 220530
            break;
        case 2: code = 502176
            break;
        case 3: code = 454495
            break;
        case 4: code = 925636
            break;
        case 5: code = 666297
            break;
        case 6: code = 197869
            break;
        case 7: code = 604980
            break;
        case 8: code = 938719
            break;
        case 9: code = 630871
            break;
    }
    if (inputCode != code) {
        document.getElementById('code-error').style.color = "red";
        document.getElementById('code-error').innerHTML = "کد امنیتی اشتباه است";
    } else {
        document.getElementById('code-error').style.color = "green";
        document.getElementById('code-error').innerHTML = "کد امنیتی صحیح است";
    }
}
function Submit() {
    return false;
}
function loop() {
    var src = document.getElementById("img").src;
    for (i = 0; i <= 10; i++) {
        var codeInSRC = src.search("code" + i);
        if (codeInSRC != -1) {
            return i;
        }
    }
}
function dark() {
    document.body.style.backgroundColor="#121212";
    document.getElementsByClassName('btn2')[0].style.backgroundColor="#161618";
    document.getElementsByClassName('btn2')[0].style.color="white";
    document.querySelector('label[for="remmember-me"]').style.color="white";
    document.getElementsByTagName('span')[0].style.color="white";
    document.getElementById('svg1').style.display="none";
    document.getElementById('svg2').style.display="inline";
}
function light() {
    document.body.style.backgroundColor="white";
    document.getElementsByClassName('btn2')[0].style.backgroundColor="white";
    document.getElementsByClassName('btn2')[0].style.color="rgb(0, 68, 255)";
    document.querySelector('label[for="remmember-me"]').style.color="black";
    document.getElementsByTagName('span')[0].style.color="rgb(25, 0, 255)";
    document.getElementById('svg1').style.display="inline";
    document.getElementById('svg2').style.display="none";
}

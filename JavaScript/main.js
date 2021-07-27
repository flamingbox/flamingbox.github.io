var btn = document.getElementById("btn");
var pic = document.getElementById("tp");
var num = 1;
btn.onclick = function () {
    if (num === 1) {
        pic.src = "img/firefox2.png";
        num = 2;
    }
    else {
        pic.src = "img/1.png";
        num = 1;
    }
}

// document.querySelector('html').onclick = function() {
//     alert('点你大爷，不点会死啊');
// }

let myButton = document.getElementById('study');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = '你牛逼大发了，' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '你牛逼大发了,' + storedName;
}
myButton.onclick = function () {
    setUserName();
}
window.onresize = function () {
    console.log('可视宽' + document.documentElement.clientWidth);

    console.log('可视高' + document.documentElement.clientHeight);

    var msg = document.getElementById("message");
    msg.style.height=document.documentElement.clientHeight-285+"px";
    console.log('字框高' + msg.style.height);
    var menu = document.getElementById("menu");
    menu.style.height=document.documentElement.clientHeight-270+"px";
    console.log('菜单高' + menu.style.height);
    var mainblock = document.getElementById("mainblock");
    mainblock.style.width=document.documentElement.clientWidth-548+"px";
    console.log('主体宽' + mainblock.style.width);
}

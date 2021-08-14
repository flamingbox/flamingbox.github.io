var nta = document.getElementById("NightAnimation");
var suna = document.getElementById("SunAnimation");
nta.style.width = document.documentElement.clientWidth + "px";
nta.style.height = document.documentElement.clientHeight + "px";
console.log('遮罩宽' + nta.style.width);
console.log('遮罩高' + nta.style.height);

window.onresize = function () {
    console.log('可视宽' + document.documentElement.clientWidth);
    console.log('可视高' + document.documentElement.clientHeight);
    var menu = document.getElementById("menu");
    menu.style.height = document.documentElement.clientHeight - 270 + "px";
    console.log('菜单高' + menu.style.height);
    var mainblock = document.getElementById("mainblock");
    mainblock.style.width = document.documentElement.clientWidth - 548 + "px";
    console.log('主体宽' + mainblock.style.width);
    var mainpic = document.getElementsByClassName("mainpic");
    for (var i = 0; i < mainpic.length; i++) {
        mainpic[i].style.width = mainblock.style.width;
    }


    nta.style.width = document.documentElement.clientWidth + "px";
    nta.style.height = document.documentElement.clientHeight + "px";
}

var nightbuttom = document.getElementById("nightbuttom");
nightbuttom.onclick = function () {
    if (document.getElementById("nightbuttomtext").innerText === "夜间模式") {
        nta.style.display = "flex"
        setTimeout(function () { nta.style.display = "none" }, 2000)
        document.getElementById("nightbuttomtext").innerText = "白昼模式"
        document.getElementById("nightbuttomicon").style.display="none"
        document.getElementById("sunbuttomicon").style.display="inline-block"
        
    }
    else {
        suna.style.display = "flex"
        setTimeout(function () { suna.style.display = "none" }, 2000)
        document.getElementById("nightbuttomtext").innerText = "夜间模式"
        document.getElementById("sunbuttomicon").style.display="none"
        document.getElementById("nightbuttomicon").style.display="inline-block"
        
    }
}


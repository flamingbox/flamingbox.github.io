
window.onresize = function () {
    console.log('可视宽' + document.documentElement.clientWidth);

    console.log('可视高' + document.documentElement.clientHeight);

    var menu = document.getElementById("menu");
    menu.style.height=document.documentElement.clientHeight-270+"px";
    console.log('菜单高' + menu.style.height);
    var mainblock = document.getElementById("mainblock");
    mainblock.style.width=document.documentElement.clientWidth-548+"px";
    console.log('主体宽' + mainblock.style.width);
    var mainpic = document.getElementsByClassName("mainpic");
    for (var i = 0; i < mainpic.length; i++) {
        mainpic[i].style.width=mainblock.style.width;
    }
    console.log('照片宽' + mainpic[0,1].style.width);
}

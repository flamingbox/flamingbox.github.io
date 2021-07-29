
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
    var fox = document.getElementById("fox");
    fox.style.width=mainblock.style.width;
    console.log('照片宽' + fox.style.width);
}

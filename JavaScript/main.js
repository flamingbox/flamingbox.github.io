var btn=document.getElementById("btn");
var pic=document.getElementById("tp");
var num=1;
btn.onclick = function() {
    if(num===1) {
      pic.src="img/firefox2.png";
      num=2;
    } 
    else {
      pic.src="img/1.png";
      num=1;
    }
}

// document.querySelector('html').onclick = function() {
//     alert('点你大爷，不点会死啊');
// }
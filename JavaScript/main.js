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

let myButton = document.getElementById('study');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = '你牛逼大发了，' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '你牛逼大发了,' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }
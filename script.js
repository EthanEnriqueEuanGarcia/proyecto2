function bodyload(){
    document.getElementById("btn").style.fontSize="15px";
    document.getElementById("btn").style.backgroundColor="darkred";
    document.getElementById("btn").style.borderRadius="20px";
    document.getElementById("btn").style.color="white";
    document.getElementById("btn").style.padding="10px";
    document.getElementById("btn").style.borderStyle="dotted";
}
function changeTheme(){
document.getElementById("body").style.backgroundcolor="white";
document.getElementById("nameheading").style.backgroundColor="color";
document.getElementById("anchorTag").style.color="darkblue";
document.getElementById("anchorTag").style.borderWidth="0px";
}
function resesive(){
const body=document.getElementById("body");
  body.classList.toggle("resevibe");
}

function changeImageOver(){
document.getElementById("cartoon_img").src ="https://raw.githubusercontent.com/ShravantiHable/C49-C51/main/myCartoon1.png";
}

function changeImageLeave(){
 document.getElementById("cartoon_img").src ="https://raw.githubusercontent.com/ShravantiHable/C49-C51/main/myCartoon.png";

}
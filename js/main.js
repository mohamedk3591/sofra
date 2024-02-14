const word =document.getElementById("word");
const wtext = word.textContent;
const text = wtext.split("");
word.textContent="";
for(let x = 0 ; x <text.length ; x++){
    word.innerHTML += "<span>"+text[x]+"</span>";  
}
let char =0;
let timer = setInterval(onclick,40);
function onclick(){
    const span= word.querySelectorAll('span')[char];
    span.classList.add('fade')
    char++
    if(char === text.length){
        complete();
        return;
    }
}
function complete(){
    clearInterval(timer);
    timer=null;
}
//let btn1=document.getElementById('bttn')
//btn1.onclick=function(){
  //  btn1.classList.add("btn");
//}



let sro =document.getElementById('sro');

window.onscroll=function(){
    scroll()
};

function scroll(){
    if(document.body.scrollTop > 519 || document.documentElement.scrollTop > 519 ){
        sro.style.display="block";
    }else{
        sro.style.display="none";
    }
}
sro.onclick =function stop(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}







  
   
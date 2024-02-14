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


let h =document.getElementById('h');
let m =document.getElementById('m');
let n =document.getElementById('n');
let q =document.getElementById('q');
let s =document.getElementById('s');
let w =document.getElementById('w');


h.onmouseover=function(){
  h.classList.add("co")
  h.classList.remove("cl")
}
h.onmouseleave=function(){
  h.classList.remove("co")
  h.classList.add("cl")
}

m.onmouseover=function(){
  m.classList.add("co")
  m.classList.remove("cl")
}
m.onmouseleave=function(){
  m.classList.remove("co")
  m.classList.add("cl")
}

n.onmouseover=function(){
  n.classList.add("co")
  n.classList.remove("cl")
}
n.onmouseleave=function(){
  n.classList.remove("co")
  n.classList.add("cl")
}

q.onmouseover=function(){
  q.classList.add("co")
  q.classList.remove("cl")
}
q.onmouseleave=function(){
  q.classList.remove("co")
  q.classList.add("cl")
  
}

s.onmouseover=function(){
  s.classList.add("co")
  s.classList.remove("cl")
}
s.onmouseleave=function(){
  s.classList.remove("co")
  s.classList.add("cl")
}

w.onmouseover=function(){
  w.classList.add("co")
  w.classList.remove("cl")
}
w.onmouseleave=function(){
  w.classList.remove("co")
  w.classList.add("cl")
}



  
   
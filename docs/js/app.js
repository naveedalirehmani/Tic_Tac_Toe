"use strict"
// <i class="fas fa-circle-notch">
// <i class="fas fa-check">

let a,s,d,f,g,h,j,k,l,end1,end2,end3,end4,end5,end6,end7,end8,end9,tik;
tik = 1;

function resulttest(){
  end1 = a+s+d;
  end2 = f+g+h;
  end3 = j+k+l;
  end4 = a+f+j;
  end5 = s+g+k;
  end6 = d+h+l;
  end7 = a+g+l;
  end8 = d+g+j;
  end9 = a+s+d+f+g+h+j+k+l;
}
function resultoutstyle(){
      let p = document.querySelector(`p`)
      p.style.fontFamily="sans-serif"
      p.style.fontSize="40px"
      p.style.transition="400ms"
      // p.style.transform="rotateY(360deg)"
}

function resultout(){

  // player one#################

  if((end1 == 3) || (end2==3) || (end3==3) || (end4==3) || (end5==3) || (end6==3) || (end7==3) || (end8==3) || (end9==3)){
    let p = document.querySelector(`p`)
    p.innerHTML="player 1 is the winner"
    resultoutstyle()
  }

   // player2##################

  else if((end1 == 6) || (end2==6) || (end3==6) || (end4==6) || (end5==6) || (end6==6) || (end7==6) || (end8==6) || (end9==6)){ 
    let p = document.querySelector(`p`)
    p.innerHTML="player 2 is the winner"
    resultoutstyle()
  }
  }



let la = document.querySelector('.a')
la.onclick = function(){
  if(tik==1){
    a = 1;
  }else{
    a=2;
  }
    if(tik==1){
      la.style.color="rgb(45, 190, 146)"
      la.innerHTML="X"
      tik = 2;
    }else{
      la.style.color="rgb(45, 190, 146)"
      la.innerHTML="O"
      tik = 1 ;
    }
   resulttest()
   resultout()

}

let ls = document.querySelector('.s')
ls.onclick = function(){
  if(tik==1){
    s = 1;
  }else{
    s =2;
  }
    if(tik==1){
      ls.style.color="rgb(45, 190, 146)"
      ls.innerHTML="X"
      tik = 2;
    }else{
      ls.style.color="rgb(45, 190, 146)"
      ls.innerHTML="O"
      tik = 1 ;
    }
   resulttest()
   resultout()
}

let ld = document.querySelector('.d')
ld.onclick = function(){
  if(tik==1){
    d = 1;
  }else{
    d =2;
  }
    if(tik==1){
      ld.style.color="rgb(45, 190, 146)"
      ld.innerHTML="X"
      tik = 2;
    }else{
      ld.style.color="rgb(45, 190, 146)"
      ld.innerHTML="O"
      tik = 1 ;
    }
   resulttest()
   resultout()
}

let lf = document.querySelector('.f')
lf.onclick = function(){
  if(tik==1){
    f = 1;
  }else{
    f =2;
  }
    if(tik==1){
      lf.style.color="rgb(45, 190, 146)"
      lf.innerHTML="X"
      tik = 2;
    }else{
      lf.style.color="rgb(45, 190, 146)"
      lf.innerHTML="O"
      tik = 1 ;
    }
   resulttest()
   resultout()
}

let lg = document.querySelector('.g')
lg.onclick = function(){
  if(tik==1){
    g = 1;
  }else{
    g =2;
  }
    if(tik==1){
      lg.style.color="rgb(45, 190, 146)"
      lg.innerHTML="X"
      tik = 2;
    }else{
      lg.style.color="rgb(45, 190, 146)"
      lg.innerHTML="O"
      tik = 1 ;
    }
   resulttest()
   resultout()
}

let lh = document.querySelector('.h')
lh.onclick = function(){
  if(tik==1){
    h = 1;
  }else{
    h =2;
  }
    if(tik==1){
      lh.style.color="rgb(45, 190, 146)"
      lh.innerHTML="X"
      tik = 2;
    }else{
      lh.style.color="rgb(45, 190, 146)"
      lh.innerHTML="O"
      tik = 1 ;
    }
   resulttest()
   resultout()
}

let lj = document.querySelector('.j')
lj.onclick = function(){
  if(tik==1){
    j = 1;
  }else{
    j =2;
  }
    if(tik==1){
      lj.style.color="rgb(45, 190, 146)"
      lj.innerHTML="X"
      tik = 2;
    }else{
      lj.style.color="rgb(45, 190, 146)"
      lj.innerHTML="O"
      tik = 1 ;
    }
   resulttest()
   resultout()
}

let lk = document.querySelector('.k')
lk.onclick = function(){
  if(tik==1){
    k = 1;
  }else{
    k =2;
  }
    if(tik==1){
      lk.style.color="rgb(45, 190, 146)"
      lk.innerHTML="X"
      tik = 2;
    }else{
      lk.style.color="rgb(45, 190, 146)"
      lk.innerHTML="O"
      tik = 1 ;
    }
   resulttest()
   resultout()
}

let ll = document.querySelector('.l')
ll.onclick = function(){
  if(tik==1){
    l = 1;
  }else{
    l =2;
  }
    if(tik==1){
      ll.style.color="rgb(45, 190, 146)"
      ll.innerHTML="X"
      tik = 2;
    }else{
      ll.style.color="rgb(45, 190, 146)"
      ll.innerHTML="O"
      tik = 1 ;
    }
   resulttest()
   resultout()
}















//
// let ls = document.querySelector('.s')
// ls.onclick = function(){
//     s = 1;
//    ls.innerHTML="i"
//    resulttest()
//    if(end==3){
//      let p = document.querySelector(`p`)
//      p.innerHTML="winner"
//    }
// }
//
// let ld = document.querySelector('.d')
// ld.onclick = function(){
//     d = 1;
//    ld.innerHTML="i"
//    resulttest()
//    if(end==3){
//      let p = document.querySelector(`p`)
//      p.innerHTML="winner"
//    }
// }
//
// let lf = document.querySelector('.f')
// lf.onclick = function(){
//     f = 1;
//    lf.innerHTML="i"
//    resulttest()
//    if(end==3){
//      let p = document.querySelector(`p`)
//      p.innerHTML="winner"
//    }
// }
//
// let lg = document.querySelector('.g')
// lg.onclick = function(){
//     g = 1;
//    lg.innerHTML="i"
//    resulttest()
//    if(end==3){
//      let p = document.querySelector(`p`)
//      p.innerHTML="winner"
//    }
// }
//
// let lh = document.querySelector('.h')
// lh.onclick = function(){
//     h = 1;
//    lh.innerHTML="i"
//    resulttest()
//    if(end==3){
//      let p = document.querySelector(`p`)
//      p.innerHTML="winner"
//    }
// }
//
// let lj = document.querySelector('.j')
// lj.onclick = function(){
//     j = 1;
//    lj.innerHTML="i"
//    resulttest()
//    if(end==3){
//      let p = document.querySelector(`p`)
//      p.innerHTML="winner"
//    }
// }
//
// let lk = document.querySelector('.k')
// lk.onclick = function(){
//     k = 1;
//    lk.innerHTML="i"
//    resulttest()
//    if(end==3){
//      let p = document.querySelector(`p`)
//      p.innerHTML="winner"
//    }
// }
//
// let ll = document.querySelector('.l')
// ll.onclick = function(){
//     l = 1;
//    ll.innerHTML="i"
//    resulttest()
//    if(end==3){
//      let p = document.querySelector(`p`)
//      p.innerHTML="winner"
//    }
// }

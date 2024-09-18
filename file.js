 let rock=document.getElementById("rock");
 let paper=document.getElementById("paper");
 let scissor =document.getElementById("scissor");
 let computer_choise;
 let list=[`  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="100" width="100"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#FFD43B" d="M144 0C117.5 0 96 21.5 96 48V96v28.5V176c0 8.8-7.2 16-16 16s-16-7.2-16-16V149.3l-9 7.5C40.4 169 32 187 32 206V244c0 38 16.9 74 46.1 98.3L128 384v96c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V374.7c46.9-19 80-65 80-118.7V176 160 144c0-26.5-21.5-48-48-48c-12.4 0-23.6 4.7-32.1 12.3C350 83.5 329.3 64 304 64c-12.4 0-23.6 4.7-32.1 12.3C270 51.5 249.3 32 224 32c-12.4 0-23.6 4.7-32.1 12.3C190 19.5 169.3 0 144 0z"/></svg>` ,
 `<svg width:50px; font-size:70px; xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="100" width="100"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#FFD43B" d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V336c0 1.5 0 3.1 .1 4.6L67.6 283c-16-15.2-41.3-14.6-56.6 1.4s-14.6 41.3 1.4 56.6L124.8 448c43.1 41.1 100.4 64 160 64H304c97.2 0 176-78.8 176-176V128c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V64c0-17.7-14.3-32-32-32s-32 14.3-32 32V240c0 8.8-7.2 16-16 16s-16-7.2-16-16V32z"/></svg>`,
 ` <svg width:50px; font-size:70px; xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="100" width="100"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#FFD43B" d="M40 208c-22.1 0-40 17.9-40 40s17.9 40 40 40l180.2 0c-7.6 8.5-12.2 19.7-12.2 32c0 25.3 19.5 46 44.3 47.9c-7.7 8.5-12.3 19.8-12.3 32.1c0 26.5 21.5 48 48 48l32 0 64 0c70.7 0 128-57.3 128-128l0-113.1c0-40.2-16-78.8-44.4-107.3C444.8 76.8 413.9 64 381.7 64L336 64c-21.3 0-39.3 13.9-45.6 33.1l74.5 23.7c8.4 2.7 13.1 11.7 10.4 20.1s-11.7 13.1-20.1 10.4L288 129.9l0 .1L84 65.8C62.9 59.2 40.5 70.9 33.8 92s5.1 43.5 26.2 50.2L269.5 208 40 208z"/></svg>`]
  
 let my_choise;
 rock.onclick=function(){
    my_choise= 0
    computer_choise= Math.floor(Math.random() * 3);
    result()
 };
 paper.onclick=function(){
    my_choise= 1;
    computer_choise= Math.floor(Math.random() * 3);
    result()
 };
 /*scissor.onclick=function(){
    my_choise= 2;
    result()
 };*/
 scissor.addEventListener("click",function(){
   my_choise= 2;
   computer_choise= Math.floor(Math.random() * 3);
   result()
});
function result(){
    if (computer_choise==my_choise){
        document.getElementById("result").innerHTML=`your choise is ${list[my_choise] } and comp choise ${list[computer_choise] } you are equal`;
    }
     else if((computer_choise==0&&my_choise==2)||(computer_choise==1&&my_choise==0)||(computer_choise==2&&my_choise==1)){
        document.getElementById("result").innerHTML=`your choise is ${list[my_choise] } and comp choise ${list[computer_choise] } computer win`;
    }
     else {
        document.getElementById("result").innerHTML=`your choise is ${list[my_choise] } and comp choise ${list[computer_choise] } you win`;
    }

}


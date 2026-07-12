/*======================================================
Es-Libro Official Website
Premium Experience JavaScript
Artist Logo Edition
======================================================*/


document.addEventListener("DOMContentLoaded",()=>{


/*==========================
Opening + BGM
==========================*/


const loading =
document.getElementById("loading");

const enterBtn =
document.getElementById("enterBtn");

const bgm =
document.getElementById("bgm");


let entered=false;



function startExperience(){


if(entered) return;


entered=true;



/*
Opening Flash
*/


if(loading){

loading.classList.add("exit");

}



/*
BGM Start
*/


if(bgm){


bgm.volume=0;


const playPromise =
bgm.play();



if(playPromise !== undefined){


playPromise.then(()=>{


let volume=0;



const fade =
setInterval(()=>{


volume+=0.02;



if(volume>=0.35){


volume=0.35;


clearInterval(fade);


}



bgm.volume=volume;



},200);



})

.catch(error=>{


console.log(
"BGM blocked:",
error
);


});


}


}




/*
Remove Loading
*/


setTimeout(()=>{


if(loading){


loading.classList.add("hide");


}


},1200);




setTimeout(()=>{


if(loading){


loading.remove();


}


},2600);





/*
Artist Logo Start
*/


setTimeout(()=>{


const logo =
document.querySelector(".artist-logo");



if(logo){


logo.classList.add("active");


}



},1500);



}




if(enterBtn){


enterBtn.addEventListener(
"click",
startExperience
);


}






/*==========================
Emergency Loading Fix
==========================*/


window.addEventListener(
"load",
()=>{


if(!enterBtn){


setTimeout(()=>{


if(loading){

loading.classList.add("hide");

}


},2500);


}



});







/*==========================
Scroll Fade
==========================*/


const fadeElements =
document.querySelectorAll(
".fade,.fade-up"
);



function fadeInOnScroll(){


fadeElements.forEach(el=>{


const top =
el.getBoundingClientRect().top;


const trigger =
window.innerHeight * .85;



if(top<trigger){


el.classList.add("show");

el.classList.add("active");


}



});


}



window.addEventListener(
"scroll",
fadeInOnScroll
);


fadeInOnScroll();









/*==========================
Header Blur
==========================*/


const header =
document.querySelector("header");



if(header){


window.addEventListener(
"scroll",
()=>{


if(window.scrollY>60){


header.style.background =
"rgba(5,10,20,.90)";


header.style.boxShadow =
"0 10px 40px rgba(0,0,0,.45)";


}

else{


header.style.background =
"rgba(6,10,20,.72)";


header.style.boxShadow =
"none";


}



}

);


}









/*==========================
Top Button
==========================*/


const topBtn =
document.getElementById("topBtn");



if(topBtn){


window.addEventListener(
"scroll",
()=>{


if(window.scrollY>500){


topBtn.style.display="block";


}

else{


topBtn.style.display="none";


}


}

);



topBtn.addEventListener(
"click",
()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}









/*==========================
Mouse Light
==========================*/


const cursor =
document.querySelector(".cursor-light");



if(cursor){


document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left =
e.clientX+"px";


cursor.style.top =
e.clientY+"px";



}

);


}









/*==========================
Music Card Hover
==========================*/


const cards =
document.querySelectorAll(".music-card");



cards.forEach(card=>{


card.addEventListener(
"mouseenter",
()=>{


card.style.transform =
"translateY(-10px)";


});


card.addEventListener(
"mouseleave",
()=>{


card.style.transform =
"translateY(0)";


});


});









/*==========================
Button Ripple
==========================*/


const buttons =
document.querySelectorAll(".btn");



buttons.forEach(btn=>{


btn.addEventListener(
"click",
(e)=>{


const circle =
document.createElement("span");



const size =
Math.max(
btn.clientWidth,
btn.clientHeight
);



circle.style.width =
size+"px";


circle.style.height =
size+"px";


circle.style.left =
(e.offsetX-size/2)+"px";


circle.style.top =
(e.offsetY-size/2)+"px";



circle.classList.add(
"ripple"
);



btn.appendChild(circle);



setTimeout(()=>{


circle.remove();


},600);



});


});









/*==========================
Typing Effect
==========================*/


const heroText =
document.querySelector(
".hero-label"
);



if(heroText){


const original =
heroText.textContent;



heroText.textContent="";



let i=0;



function typing(){


if(i<original.length){


heroText.textContent +=
original.charAt(i);



i++;


setTimeout(
typing,
50
);


}


}



typing();


}









/*==========================
Star Parallax
==========================*/


const stars =
document.querySelector(".stars");



if(stars){


window.addEventListener(
"scroll",
()=>{


stars.style.transform =

`translateY(${window.scrollY*0.15}px)`;


});


}









/*==========================
Navbar Active
==========================*/


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll("nav a");



window.addEventListener(
"scroll",
()=>{


let current="";



sections.forEach(section=>{


const top =
section.offsetTop-150;



if(pageYOffset>=top){


current=
section.id;


}


});



navLinks.forEach(link=>{


link.classList.remove("active");



if(
link.getAttribute("href")
===
"#"+current
){


link.classList.add("active");


}


});


});









/*==========================
Console
==========================*/


console.log(
"%cWelcome to Es-Libro Official",
"color:#4ebdff;font-size:22px;font-weight:bold;"
);


console.log(
"%cPremium Artist Experience Loaded",
"color:white;font-size:14px;"
);



});
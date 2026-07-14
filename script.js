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
/*==============================
  BGM BUTTON
==============================*/

const bgm = document.getElementById("bgm");
const musicToggle = document.getElementById("musicToggle");

musicToggle.addEventListener("click", () => {

    if (bgm.paused){

        bgm.play();

        musicToggle.textContent = "🔊";

        musicToggle.classList.remove("muted");

    }else{

        bgm.pause();

        musicToggle.textContent = "🔇";

        musicToggle.classList.add("muted");

    }

});
/*==============================
TODAY'S MESSAGE
==============================*/

const messages = [

"今日もここへ来てくれてありがとう。",

"君が聴いてくれるから、音楽は今日も生まれる。",

"この場所は、いつでも君の帰る場所です。",

"画面の向こうにいる君へ。今日もありがとう。",

"どんな一日でも、ここでは君を歓迎します。",

"また会いに来てくれて、本当にありがとう。",

"君がいるから、この物語は続いていく。",

"今日もEs-Libroを選んでくれてありがとう。",

"焦らなくていい。進む速さは人それぞれだから。",

"今日できる小さな一歩は、未来では大きな一歩になる。",

"立ち止まることも、前へ進むための時間。",

"昨日より少し笑えたなら、それだけで十分。",

"答えは急がなくてもいい。歩き続けることが大切だから。",

"君には君だけの景色が待っている。",

"何度転んでも、また立ち上がれば物語は続く。",

"今日という日は、一度しか訪れない。",

"今日も一日、お疲れさま。",

"無理をしすぎないことも、大切な頑張りです。",

"君は思っている以上によく頑張っている。",

"少し休んでも、夢は逃げていかない。",

"誰にも気付かれない努力も、ちゃんと意味がある。",

"今日を乗り越えた君は、昨日の君より強い。",

"疲れた日は、音楽に少しだけ預けてみよう。",

"今日も最後まで生き抜いた。それだけで十分すごい。",

"音楽は、言葉にならない想いを届けてくれる。",

"今日も君の心に、一つでも音が残りますように。",

"一曲が、人生を変える日もある。",

"今日という景色に、音楽を添えて。",

"また新しい音で会おう。",

"君の今日が、少しでも優しいメロディになりますように。",

"Signal Received... 今日も君と繋がれた。",

"Connection Established. ようこそ、Es-Libroへ。",

"System Online. 今日も音楽を届けます。",

"今日という物語を、一緒に始めよう。",

"このページを開いた君へ。今日も会えて嬉しい。",

"どんな夜にも、終わらない音がある。",

"君の未来に、この音が寄り添えますように。",

"この世界のどこかで、今日も誰かが君の幸せを願っている。",

"今日という一日が、君にとって少しでも優しい一日になりますように。",

"今日もここへ来てくれて、本当にありがとう。",

"君がこの場所を見つけてくれたことが嬉しい。",

"何度でも会いに来てくれてありがとう。",

"君の存在が、この音楽に意味をくれる。",

"この場所で君と繋がれていることに感謝しています。",

"君の応援が、次の一歩を踏み出す力になります。",

"どんな日でも、ここへ来てくれてありがとう。",

"画面の向こうにいる君へ。今日も感謝を込めて。",

"音楽を受け取ってくれる君がいるから、今日も歌える。",

"君が笑ってくれる瞬間を思い浮かべながら音楽を作っています。",

"君と過ごすこの時間は、かけがえのない宝物です。",

"今日もEs-Libroを訪れてくれてありがとう。",

"一人ひとりとの出会いが、この物語を作っています。",

"君がいるから、この景色を見ることができます。",

"ここまで歩いて来られたのは、君のおかげです。",

"応援してくれる気持ちは、ちゃんと届いています。",

"離れていても、音楽で繋がっていられることが嬉しい。",

"今日という日に、また会えたことにありがとう。",

"君の一回の再生が、大きな勇気になります。",

"君の『好き』が、次の作品を生み出しています。",

"忙しい毎日の中で、この場所を選んでくれてありがとう。",

"このページを開いてくれた、その一瞬に感謝しています。",

"君がいてくれるから、Es-Libroは前へ進めます。",

"これからも、一緒に新しい景色を見に行こう。",

"今日も同じ空の下で、音楽を届けられることが幸せです。",

"君と出会えたことは、何よりの奇跡です。",

"どんなに時間が経っても、この感謝は変わりません。",

"また今日も、君に会えたことが嬉しい。",

"君の毎日が少しでも笑顔になりますように。",

"これからも、君の心に寄り添える音楽を届け続けます。",

"今日もここまで頑張ってきた自分を、少しだけ褒めてあげよう。",

"焦らなくても大丈夫。君のペースで進めばいい。",

"今日という一日は、未来の君へ繋がる大切な一日。",

"一歩でも前に進めたなら、それは立派な前進だ。",

"頑張りすぎる日があってもいい。休む日があってもいい。",

"君が積み重ねた努力は、きっと未来で花を咲かせる。",

"完璧じゃなくても、今日を生きたことに価値がある。",

"誰かと比べなくていい。昨日の自分より少し前へ。",

"今日の小さな挑戦が、明日の大きな自信になる。",

"迷いながら進むことも、立派な前進の形。",

"大丈夫。その一歩は決して無駄にはならない。",

"うまくいかない日も、未来から見れば必要な一日になる。",

"君は思っているより、ずっと強くなっている。",

"今日も最後まで諦めなかった君は、本当にすごい。",

"少し立ち止まっても、夢はそこで終わらない。",

"笑えない日があっても、明日はきっと違う景色が待っている。",

"努力はすぐに報われなくても、決して消えることはない。",

"疲れたときは、無理をせず心にも休憩をあげよう。",

"今日を乗り越えた君には、また新しい景色が待っている。",

"どんなに小さな一歩でも、その一歩が未来を変えていく。",

"君が今日流した汗も涙も、未来の君を支える力になる。",

"今できることを一つずつ。それだけで十分なんだ。",

"頑張った日も、頑張れなかった日も、君には価値がある。",

"今日の君は、昨日の君より少しだけ成長している。",

"目の前の一歩を大切にすれば、きっと目的地へ辿り着ける。",

"自分を信じることは、小さな勇気の積み重ねから始まる。",

"今日は今日のベストで十分。完璧を目指さなくていい。",

"君の頑張りは、ちゃんと誰かの心を動かしている。",

"明日が少しでも笑顔で始まるように、今日はゆっくり休もう。",

"どんな一日だったとしても、今日を生き抜いた君は誇っていい。"

];

// 今日の日付から毎日違うメッセージを表示
const today = new Date();

const seed =
today.getFullYear() * 10000 +
(today.getMonth() + 1) * 100 +
today.getDate();

const index = seed % messages.length;

document.getElementById("dailyMessage").textContent = messages[index];
/*==============================
SYSTEM CLOCK
==============================*/

const clock = document.getElementById("clock");

function updateClock(){

    const now = new Date();

    const h = String(now.getHours()).padStart(2,"0");

    const m = String(now.getMinutes()).padStart(2,"0");

    const s = String(now.getSeconds()).padStart(2,"0");

    clock.textContent = `${h}:${m}:${s} JST`;

    clock.classList.add("flash");

    setTimeout(()=>{

        clock.classList.remove("flash");

    },180);

}

updateClock();

setInterval(updateClock,1000);
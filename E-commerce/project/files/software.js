window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const body = document.body;

    // Fade out loader
    loader.classList.add("fade-out");

    // Activate body animation
    body.classList.add("loaded");

    // Optional: remove loader after animation
    setTimeout(() => {
        loader.style.display = "none";
    }, 2000);
});





//trial video function
function left_trial_animation(){
let trial=document.querySelector(".trial");         //main trial btn
let trial_box=document.getElementById("trial-ani");
let trial_close=document.getElementById("cr-svg");
let trial_cont=document.querySelector(".trial-video-cont");
let trial_manCont=document.querySelector(".trial-video-cont");
trial.addEventListener("click",()=>{

setTimeout(()=>{
// console.log("yes i clicked")
trial_box.setAttribute("id", "trial_la-ani");
trial_manCont.style.width="100vw";
trial_manCont.style.height="100vh";

});
    trial_close.addEventListener("click",()=>{
 // console.log(trial_cont)
 trial_cont.style.height="0";
 trial_cont.style.width="0";

    });
},1000);

}
left_trial_animation()

// selecting category funciton

function selecting_cata(cata){
if(cata==1){
let block1=document.querySelector(".main-cont-block1");
let block2=document.querySelector(".main-cont-block2");
Open_close_section(block1,block2);
}
else if(cata==2){
    let block1=document.querySelector(".main-cont-block1");
let block2=document.querySelector(".main-cont-block2");
Open_close_section(block2,block1);
}


}//function close

function contact(){
    // .cont-ani
let box=document.getElementsByClassName("st-social-lnk")[1];
ani_insert(box)
}
function scl(){
let box=document.getElementsByClassName("st-social-lnk")[0];
ani_insert(box)
}

function ani_insert(e){
e.classList.add('cont-ani');
// console.log("animation running")

setTimeout(()=>{
    e.classList.remove("cont-ani");
},4200);
}

function Open_close_section(open,close){

//open
open=open.style;
open.height="100%";
open.width="90%";
open.overflow="auto";
open.padding="20px 10px";
open.opacity="1";
open.margin="40px auto";
open.position="relative";
open.top="0";
console.log(open)
//close
close=close.style;
close.height="0px";
close.width="0px";
close.padding="0px";
close.opacity="0";
close.position="fixed";
close.top="0";
// close.="";
close.overflow="hidden";
console.log(close)
}




//button buy animation

function buying(){

    // arrays 
    let selectedIDs = [];
    let selectedTitles = [];
    let selectedPrices = [];

    // buy buttons selects
    let buttons = document.querySelectorAll('.buy-btn');

    // loop
    buttons.forEach(function(btn){

        btn.addEventListener('click', function(){

            // closest product container
            let product = this.parentElement;

            // id
            let id = this.id;

            // title
            let title = product.querySelector('.pd-title').innerText;

            // price
            let price = product.querySelector('.prc1').innerText;

            // arrays me push karo
            selectedIDs.push(id);
            selectedTitles.push(title);
            selectedPrices.push(price);

            let pd_id="Selected ID:"+selectedIDs+"\n";
            let pd_title="Selected Title:"+selectedTitles+"\n";
            let pd_price="Selected Price:"+selectedPrices+"\n";
            let chahe_p1=Math.random()*120;
            chahe_p1=Math.floor(chahe_p1);
            let chahe_p2=Math.random()*225;
            chahe_p2=Math.floor(chahe_p2);
            let chahe="Chache:"+chahe_p1+".02."+chahe_p2;
            // console.log(chahe)
            // console.log(pd_title)
            // console.log(pd_price)
            let whatsappNumber = "923157666732";
let data="New order:\n"+pd_id+chahe+"\n"+pd_title+pd_price;
    let url = "https://wa.me/" + whatsappNumber + "?text=" +encodeURIComponent(data); 

window.open(url, "_blank");

setTimeout(function(){
    location.reload();
}, 1000);

        });

    });

}

buying();
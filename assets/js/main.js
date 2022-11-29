

const showMenu = document.querySelectorAll(".has-sub");
const numbers = document.querySelectorAll(".div-number");
const hamberIcon = document.querySelector(".hambergermenu");
const hamberMenu = document.querySelector(".hamber");



hamberIcon.addEventListener("click" , hamber);
hamberMenu.addEventListener("click" , closee);


for (let item of showMenu){

    item.addEventListener("mouseenter" , showM) ;
    item.addEventListener("mouseleave" , hideM) ;
}


function hamber(e) {

    hamberMenu.style.display = "block" ;
    hamberMenu.children[1].style.animation = "fadeInLeft 0.3s" ;
         
}

function closee() {

    hamberMenu.children[1].style.animation = "fadeOutLeft 0.3s" ;
    setTimeout(()=>{
        hamberMenu.style.display = "none" ;
    },200) ;
}

function showM(e) {

    const ele = e.target.children[1];

    ele.style.display = "flex";

}

function hideM(e) {
    
    const ele = e.target.children[1];
    ele.style.display = "none" ;
}




document.addEventListener("DOMContentLoaded" , function() {

    for (let item of numbers) {

        const num = Number(item.children[0].innerText);
        
        let i = 0 ;
        const go = setInterval(()=> {

            item.children[0].innerText = i ;
            i ++ ;
            if (i > num) clearInterval(go);

        } , 20) ;
    }
})







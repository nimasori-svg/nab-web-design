const menu = document.querySelector(".menu");
const sideMenu = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

menu.onclick = () => {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
}

closeBtn.onclick = () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
}

overlay.onclick = () => {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
}

// انیمیشن ظاهر شدن کارت‌ها

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(60px)";
    card.style.transition=".7s";

    observer.observe(card);

});

document.getElementById("chatButton").onclick = function(e){
e.preventDefault();
alert("بعداً اینجا چت Tawk.to باز می‌شود.");
};
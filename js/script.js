const menus = document.querySelector("nav ul");
const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menus.classList.add("display");
});

closeBtn.addEventListener("click", () => {
    menus.classList.remove("display");
});


//scroll sticky navbar
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// static numbers
const countersEL = document.querySelectorAll (".numbers");
countersEL.forEach((counters) => {
    counters.textContent = 0;

    incrementCounters();

    function incrementCounters(){
        let currentNum = +counters.textContent;
        const dataCeil = counters.getAttribute("data-ceil");

        const increment = dataCeil / 25;

        currentNum = Math.ceil(currentNum + increment);

        if(currentNum < dataCeil) {
            counters.textContent = currentNum;
            setTimeout(incrementCounters, 70);
        }else{
            counters.textContent = dataCeil;
        }
    }
});

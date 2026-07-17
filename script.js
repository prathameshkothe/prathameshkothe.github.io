/*=========================================
            DOM ELEMENTS
=========================================*/

const header = document.querySelector("header");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

/*=========================================
            MOBILE MENU
=========================================*/

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.innerHTML = navLinks.classList.contains("active")
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';

});

/*=========================================
        CLOSE MENU AFTER CLICK
=========================================*/

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fas fa-bars"></i>';

    });

});

/*=========================================
            STICKY HEADER
=========================================*/

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 10px 30px rgba(0,0,0,.08)";

    }

    else{

        header.style.boxShadow = "none";

    }

});

/*=========================================
        ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

/*=========================================
            SCROLL REVEAL
=========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(

".section,.activity-card,.vision-card,.timeline-item"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});

/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.classList.add("active");

    }

    else{

        topBtn.classList.remove("active");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
// ==========================================
// TIMELINE SCROLL ANIMATION
// ==========================================

const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    reveals.forEach((item, index) => {

        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            setTimeout(() => {

                item.classList.add("active");

            }, index * 180);

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);

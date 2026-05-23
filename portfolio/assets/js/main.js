
// =========================
// LOADER
// =========================

window.addEventListener("load", function () {

    let loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {
            loader.classList.add("open");
        }, 1000);

        setTimeout(() => {
            loader.classList.add("hide");
        }, 2000);

    }

});



// =========================
// NAVIGATION + PAGE SWITCH
// =========================

const navItems = document.querySelectorAll(
".desktop-nav-element, .mobile-nav-element"
);

const pages =
document.querySelectorAll(".page-hide");


// TRANSITIONS
const blackTransition =
document.querySelector(".transition-black");

const yellowTransition =
document.querySelector(".transition-yellow");



navItems.forEach(item => {

    item.addEventListener("click", () => {

        // =========================
        // START TRANSITION
        // =========================

        if(blackTransition){
            blackTransition.classList.add("active");
        }

        setTimeout(() => {

            if(yellowTransition){
                yellowTransition.classList.add("active");
            }

        }, 150);




        // =========================
        // PAGE CHANGE
        // =========================

        setTimeout(() => {

            // REMOVE ACTIVE
            navItems.forEach(el => {
                el.classList.remove("active");
            });

            // ADD ACTIVE
            item.classList.add("active");


            // HIDE ALL PAGE
            pages.forEach(page => {
                page.classList.remove("show-page");
            });


            // TARGET PAGE
            const target =
            item.getAttribute("data-page");

            const targetPage =
            document.getElementById(target);

            if(targetPage){
                targetPage.classList.add("show-page");
            }


            // CLOSE MOBILE MENU
            if(mobileNav){
                mobileNav.classList.remove("hide-list");
            }

        }, 400);




        // =========================
        // REMOVE TRANSITION
        // =========================

        setTimeout(() => {

            if(blackTransition){
                blackTransition.classList.remove("active");
            }

            if(yellowTransition){
                yellowTransition.classList.remove("active");
            }

        }, 1200);

    });

});



// =========================
// TYPING EFFECT
// =========================

const textArray = [
    "Web Developer",
    "UI/UX Designer",
    "Frontend Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingEffect(){

    const typing =
    document.getElementById("typing");

    if(!typing) return;

    let currentText =
    textArray[textIndex];



    // TYPING
    if(!isDeleting){

        typing.innerHTML =
        currentText.substring(0, charIndex);

        charIndex++;

        if(charIndex > currentText.length){

            isDeleting = true;

            setTimeout(typingEffect, 1200);

            return;

        }

    }

    // DELETING
    else{

        typing.innerHTML =
        currentText.substring(0, charIndex);

        charIndex--;

        if(charIndex < 0){

            isDeleting = false;

            textIndex++;

            if(textIndex >= textArray.length){
                textIndex = 0;
            }

        }

    }

    setTimeout(
        typingEffect,
        isDeleting ? 50 : 100
    );

}

typingEffect();



// =========================
// MOBILE MENU
// =========================

const trigger =
document.getElementById("trigger-mobile");

const mobileNav =
document.getElementById("mobile-nav");

const mobileClose =
document.getElementById("mobile-close");



// OPEN MENU

if(trigger){

    trigger.addEventListener("click", () => {

        mobileNav.classList.add("hide-list");

    });

}



// CLOSE MENU

if(mobileClose){

    mobileClose.addEventListener("click", () => {

        mobileNav.classList.remove("hide-list");

    });

}



// =========================
// RESUME TABS
// =========================

const resumeTabs =
document.querySelectorAll(".resume-tab");

const resumeContents =
document.querySelectorAll(".resume-content");


resumeTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        // REMOVE ACTIVE
        resumeTabs.forEach(btn => {
            btn.classList.remove("active");
        });

        resumeContents.forEach(content => {
            content.classList.remove("active");
        });


        // ADD ACTIVE
        tab.classList.add("active");


        // TARGET CONTENT
        const target =
        tab.getAttribute("data-tab");

        document
        .getElementById(target)
        .classList.add("active");

    });

});




const contactForm =
document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        this
    )

    .then(() => {

        alert("Message Sent Successfully!");

        contactForm.reset();

    })

    .catch((error) => {

        alert("Failed To Send Message");

        console.log(error);

    });

});


// =========================
// AOS
// =========================

AOS.init({
    duration: 1200,
    easing: "ease-in-out",
    once: false,
    offset: 100
});

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen? "ri-close-line" :"ri-menu-line")
});

navLinks.addEventListener("click",(e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

const scrollRevealOption  = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

scrollReveal().reveal(".header_image img",{
    ...scrollRevealOption,
    origin: "right",
});

scrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:500,
});

scrollReveal().reveal(".header_content .section_decription",{
    ...scrollRevealOption,
    delay:1000,
});

scrollReveal().reveal(".header_content .header_btn",{
    ...scrollRevealOption,
    delay:1500,
});


scrollReveal().reveal(".explore_image img",{
    ...scrollRevealOption,
    origin: "left",
});

scrollReveal().reveal(".explore_content section_header",{
    ...scrollRevealOption,
    delay:500,
});

scrollReveal().reveal(".explore_content .section_decription",{
    ...scrollRevealOption,
    delay:1000,
});

scrollReveal().reveal(".explore_content .header_btn",{
    ...scrollRevealOption,
    delay:1500,
});


scrollReveal().reveal(".banner_card",{
    ...scrollRevealOption,
    interval: 500,
});


scrollReveal().reveal(".chef_image img",{
    ...scrollRevealOption,
    origin: "right",
});

scrollReveal().reveal(".chef_content .section_header",{
    ...scrollRevealOption,
    delay:500,
});

scrollReveal().reveal(".chef_content .section_decription",{
    ...scrollRevealOption,
    delay:1000,
});

scrollReveal().reveal(".chef_list li",{
    ...scrollRevealOption,
    delay:1500,
    interval:500,
});


const swiper = new Swiper(".swiper", {
    loop:true,

    pagination: {
        el: ".swiper-pagination",
    },
});
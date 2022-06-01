const toggle = document.getElementsByClassName("toggle-button")[0];
const navbarlinks = document.getElementsByClassName("navbar-links")[0];
const bar_1 = document.getElementsByClassName("bar-1")[0];
const bar_2 = document.getElementsByClassName("bar-2")[0];
const bar_3 = document.getElementsByClassName("bar-3")[0];
let test = true;
toggle.addEventListener("click",() => {
    navbarlinks.classList.toggle("active")
    bar_1.style.transform = test? "rotate(180deg)":'';
    bar_3.style.transform = test? "rotate(180deg)":'';
    bar_2.style.transform = test ? 'rotate(45deg)':'';
    console.log(test);
    test = !test
    console.log(test);
})
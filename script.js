let idForProduct = 0;

function changeBg(){
    var navbar = document.getElementById("navbar");
    var navbarText = document.getElementById("navbarText");
    var scrollValue = window.scrollY;


    if(scrollValue < 450)
    {
        navbar.classList.remove("bgColor1");
        navbar.classList.add("bgColor2");

        navbarText.classList.remove("navbarTextColor1");
        navbarText.classList.add("navbarTextColor2");
    }
    else
    {
        navbar.classList.remove("bgColor2");
        navbar.classList.add("bgColor1");

        navbarText.classList.remove("navbarTextColor2");
        navbarText.classList.add("navbarTextColor1");
    }
}

window.addEventListener("scroll", changeBg);



window.onload = getParameter();

function getParameter(parameter){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameter);
}
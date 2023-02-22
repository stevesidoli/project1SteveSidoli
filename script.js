



// Here is where I save the variables in my mobile-sized menu using the querySelector document method to return my CSS elements.

const mobileMenu = document.querySelector (".mobileMenu");
const toggleButton = document.querySelector (".toggleButton");
const closeX = document.querySelector (".closeX");
const hamburgBox = document.querySelector (".hamburgBox");

// the querySelectorAll document method is used here to return all four of the LI elements

const mobileLinks = document.querySelectorAll (".mobileLink");



// Here is the function which toggles the mobile-sized icons and shows/hides the mobile-sized menu (raised/lowered using the transform property) which is hidden above the viewport by default.



function menuChange () {

if (mobileMenu.classList.contains("menuDrop")) {
    mobileMenu.classList.remove("menuDrop");
    closeX.style.display = "none";
    hamburgBox.style.display = "block";
} else {
    mobileMenu.classList.add("menuDrop");
    closeX.style.display = "block";
    hamburgBox.style.display = "none";
}

}

// The addEventListener method sets up the menuChange function when the user clicks the toggleButton button.

toggleButton.addEventListener('click', menuChange);


// The forEach method calls a function for each of the links in my mobileLinks variable. This also sets up the menuChange function when these links are clicked.

mobileLinks.forEach(
    function(mobileLink) {
        mobileLink.addEventListener('click', menuChange);
    }
)



const slideInProfile = document.querySelector(".hidden-profile-card")
const slideInHiddenMenu = document.querySelectorAll(".hidden-menu")



// show or hide slidein profile card 
// ----------------------------------
slideInProfile.classList.add("slide-out");
function openProfile() {
    if(slideInProfile.classList.contains("slide-out")) {
        slideInMenu(slideInProfile)

    }else if(slideInProfile.classList.contains("slide-in")) {
        slideOutMenu(slideInProfile)
    }
}

// -----------------------------------------



// show or hide hidden menu at max-width of 1024px
// -----------------------------------------------

slideInHiddenMenu.forEach((item)=> {
    item.classList.add("slide-out")
})

function openHiddenMenu() {
    slideInHiddenMenu.forEach((item) => {
        if(item.classList.contains("slide-out")){
            slideInMenu(item)
        }
    })
}
function closeHiddenMenu() {
    slideInHiddenMenu.forEach((item) => {
        if(item.classList.contains("slide-in")){
            slideOutMenu(item)
        }
    })
}

// ---------------------------------------------






// global function to handle slides 
// ----------------------------------
// slide in function 
function slideInMenu(slideContainer) {
    slideContainer.classList.remove("slide-out");
    slideContainer.classList.add("slide-in");
}

// slide out function 
function slideOutMenu(slideContainer) {
    slideContainer.classList.remove("slide-in");
    slideContainer.classList.add("slide-out");
}

// -----------------------------------------



const jobItem = document.querySelectorAll(".job-item");

jobItem.forEach((item) => {
    item.classList.add("hide-extension")
})

function extensionHandle() {
    jobItem.forEach((item) => {
        if(item.classList.contains("hide-extension")){
            useExtension(item)
        }else if(item.classList.contains("show-extension")){
            removeExtension(item)
        }
    })
}

function useExtension(extendItem) {
    extendItem.classList.remove("hide-extension");
    extendItem.classList.add("show-extension")
}

function removeExtension(extendItem) {
    extendItem.classList.remove("show-extension");
    extendItem.classList.add("hide-extension");
}
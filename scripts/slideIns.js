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


// slide in my jobs 
// ................................................ 

const slideInMyJobs = document.querySelectorAll(".my-jobs")

slideInMyJobs.forEach((item) => {
    item.classList.add("slide-out")
})


function openMyJobs() {
    
    slideInMyJobs.forEach((item) => {
        if(item.classList.contains("slide-out")){
            slideInMenu(item)
        }else if(item.classList.contains("slide-in")){
            slideOutMenu(item)
        }
    })
}





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
let extensionHandle = document.querySelectorAll(".extension-handle")

jobItem.forEach((item) => {
    item.classList.add("hide-extension")
})

extensionHandle.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.parentElement.parentElement.classList.contains("hide-extension")){
            useExtension(item)
        }else if(item.parentElement.parentElement.classList.contains("show-extension")){
            removeExtension(item)
        }
    })
})


function useExtension(extendItem) {
    extendItem.parentElement.parentElement.classList.remove("hide-extension");
    extendItem.parentElement.parentElement.classList.add("show-extension")
}

function removeExtension(extendItem) {
    extendItem.parentElement.parentElement.classList.remove("show-extension");
    extendItem.parentElement.parentElement.classList.add("hide-extension");
}
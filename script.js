const shortbarDOM = document.getElementById("shortbar")
const topbarDOM = document.getElementById("topbar")
const dropdownbarDOM = document.getElementById("dropdownbar")
const closebarDOM = document.getElementById("closebar")

const homeBt = document.querySelectorAll(".goto-home")
const aboutBt = document.querySelectorAll(".goto-about")
const portBt = document.querySelectorAll(".goto-port")
const contactBt = document.querySelectorAll(".goto-contact")

const bt_coding_option = document.getElementById("coding-option")
const bt_artwork_option = document.getElementById("artwork-option")
const show_work = document.getElementsByClassName("show-work")
const bt_exit = document.getElementsByClassName("exitbt")

shortbarDOM.addEventListener("click",()=>{
    dropdownbarDOM.style.display = "flex"
    topbarDOM.style.display = "none"
    dropdownbarDOM.style.animation = "dropdown-appear 2s ease"
   
})

closebarDOM.addEventListener("click",()=>{
    dropdownbarDOM.style.display = "none"
    topbarDOM.style.display = "flex"
})

window.addEventListener("resize",()=>{
    if(window.innerWidth > 807){
        dropdownbarDOM.style.display = "none"
        topbarDOM.style.display = "flex"
    }
})

homeBt.forEach(i=>{
    i.addEventListener("click",()=>{
        document.getElementById("home-sec").scrollIntoView({ behavior:"smooth"})
    })
})

aboutBt.forEach(i=>{
    i.addEventListener("click",()=>{
        document.getElementById("about-sec").scrollIntoView({behavior:"smooth"})
    })
})

portBt.forEach(i=>{
    i.addEventListener("click",()=>{
        document.getElementById("portfolio-sec").scrollIntoView({behavior:"smooth"})
    })
})

contactBt.forEach(i=>{
    i.addEventListener("click",()=>{
        document.getElementById("contact-sec").scrollIntoView({behavior:"smooth"})
    })
})

bt_coding_option.addEventListener("click",()=>{
    show_work[0].style.display = "flex"
    show_work[0].style.alignItems = "center"
    show_work[0].style.animation = "openwork 500ms"
})

bt_artwork_option.addEventListener("click",()=>{
    show_work[1].style.display = "flex"
    show_work[1].style.alignItems = "center"
    show_work[1].style.animation = "openwork 500ms"
})

bt_exit[0].addEventListener("click",()=>{
    show_work[0].style.animation = "closework 500ms"

    setTimeout(() => {
        show_work[0].style.display = "none";
    }, 500)
    
})

bt_exit[1].addEventListener("click",()=>{
    show_work[1].style.animation = "closework 500ms"
    setTimeout(() => {
        show_work[1].style.display = "none";
    }, 500)
})
const shortbarDOM = document.getElementById("shortbar")
const topbarDOM = document.getElementById("topbar")
const dropdownbarDOM = document.getElementById("dropdownbar")
const closebarDOM = document.getElementById("closebar")

const homeBt = document.querySelectorAll(".goto-home")
const aboutBt = document.querySelectorAll(".goto-about")
const portBt = document.querySelectorAll(".goto-port")
const contactBt = document.querySelectorAll(".goto-contact")

function smoothScroll(elementId) {
    const element = document.getElementById(elementId)
    const targetPosition = element.offsetTop
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 200
    let start = null

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp
        const progress = timestamp - start
        const percentage = Math.min(progress / duration, 1)
        window.scrollTo(0, startPosition + distance * percentage)
        
        if (progress < duration) {
            window.requestAnimationFrame(step)
        }
    })
}

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
        smoothScroll("home-sec")
    })
})

aboutBt.forEach(i=>{
    i.addEventListener("click",()=>{
        smoothScroll("about-sec")
    })
})

portBt.forEach(i=>{
    i.addEventListener("click",()=>{
       smoothScroll("portfolio-sec")
    })
})

contactBt.forEach(i=>{
    i.addEventListener("click",()=>{
        smoothScroll("contact-sec")
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
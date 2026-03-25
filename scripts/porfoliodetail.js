const display = document.getElementById("display")


async function addProjects() {
    try {
        const response = await fetch("scripts/data.json")
        const data = await response.json()

        display.innerHTML = ""
        Object.entries(data).forEach(([key, value]) => {
            display.innerHTML += `
            <div class="project" id=${key}>
                <h2>${value.name}</h2>
                <p>${value.description}</p>
            </div>
            `
        })

        // Add event listeners AFTER elements are created
        const projects = document.querySelectorAll(".project")
        projects.forEach(project => {
            project.addEventListener("click", () => addProjectListener(project.id))
        })

    } catch (error) {
        console.error(error)
    }
}


async function addProjectListener(projectId) {
    const response = await fetch("scripts/data.json")
    const data = await response.json()

    const projectdetails = document.createElement("div")
    projectdetails.className = "project-details"
    projectdetails.id = projectId
    projectdetails.innerHTML = `
        <button onclick="addProjects()"><i class="fa-solid fa-x"></i></button>
        <h1>${data[projectId].name}</h1>
        <p>${data[projectId].detail}</p>
        <a href="${data[projectId].link}" target="_blank"><i class="fa-brands fa-github"></i><p>ดู Project</p></a>
        
    `

    if(Object.hasOwn(data[projectId], "picture")) {
        projectdetails.innerHTML += 
        `
        <div class="project-pictures">
            <button id="left-bt"><i class="fa-solid fa-chevron-left"></i></button>
            <button id="right-bt"><i class="fa-solid fa-chevron-right"></i></button>
            <div class="project-border">
                <div class ="project-images">
                    ${data[projectId].picture.map(pic => `<img src="${pic}" alt="Project Image">`).join("")}
                </div>
            </div>
            
        </div>
        `
        console.log("Picture found")
    }

    display.innerHTML = ""
    display.appendChild(projectdetails)
    
}   

addProjects()


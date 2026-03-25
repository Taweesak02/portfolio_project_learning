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
        <button onclick="addProjects()">ย้อนกลับ</button>
        <h2>${data[projectId].name}</h2>
        <p>${data[projectId].description}</p>
        <a href="${data[projectId].link}" target="_blank"><i class="fa-brands fa-github"></i></a>
        
    `

    if(Object.hasOwn(data[projectId], "picture")) {
        projectdetails.innerHTML += 
        `<div class ="project-images">
            ${data[projectId].picture.map(pic => `<img src="${pic}" alt="Project Image">`).join("")}
        </div>`
        console.log("Picture found")
    }

    display.innerHTML = ""
    display.appendChild(projectdetails)
    
}   

addProjects()


const projects = document.querySelectorAll(".project")
const display = document.getElementById("display")

projects.forEach(project => {
    project.addEventListener("click", () => addProjectListener(project.id))
});

function addProjectListener(project) {
    console.log(`hello ${project}`)
}

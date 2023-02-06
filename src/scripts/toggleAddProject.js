import { Project } from "./createNewProject"

let project_list = []

function toggleProjectForm() {
    const projectButtonDisplay = document.querySelector(".collapse")
    if (projectButtonDisplay.classList.contains('show')) {
        projectButtonDisplay.classList.remove('show')
    } else {
        projectButtonDisplay.classList.add('show')
    }
}


function addProject(projectObject) {
    project_list.push(projectObject)
}

function deleteProject(projectObject) {
    
}

function displayProject(projectName) {
    const navbar = document.querySelector(".navbar")
    const project = document.createElement("div")
    project.classList.add("container-md", "p-3", "mt-3", "text-bg-dark")
    navbar.after(project)
    const projectTitle = document.createElement("h1")
    project.appendChild(projectTitle)
    const text = document.createTextNode(projectName);
    projectTitle.appendChild(text)
}

function addEventListeners() {
    const addProjectButton = document.querySelector('#add-project')
    console.log(addProjectButton)
    const projectForm = document.querySelector('.new-project-form')
    addProjectButton.addEventListener("click", toggleProjectForm)
    projectForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        const newProjectForm = e.target;
        const newProjectName = newProjectForm.name.value;
        const newProject = new Project(newProjectName)
        addProject(newProject)
        console.log(project_list)
        toggleProjectForm()
        displayProject(newProjectName)
        newProjectForm.reset()

    })
}

export {addEventListeners, toggleProjectForm, project_list};
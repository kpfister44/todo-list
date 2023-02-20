import { Project } from "./createNewProject"
import { displayTaskForm } from "./addTaskstoProject"

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

/*function deleteProject(projectObject) {
    
}
*/

function displayProject(projectName) {
    /** 
     * Takes no arguments and displays the projects on the main screen once the submit button is 
     * clicked on the project form. This function also calls the displayTaskForm function to create a
     * collapsed taskForm and adds an EventListener on the Add New Task Button.
    */

    const projectContainer = document.createElement("div")
    const navbar = document.querySelector(".navbar")
    projectContainer.classList.add("container-md", "p-3", "mt-3", "new-project")
    navbar.after(projectContainer)
    const project = document.createElement("div")
    project.classList.add("container-md", "p-3", "mt-3", "text-bg-dark")
    projectContainer.appendChild(project)
    const projectTitle = document.createElement("h1")
    project.appendChild(projectTitle)
    const text = document.createTextNode(projectName);
    projectTitle.appendChild(text)

    // Need to attach the collapsed task form div before the button div so we need to call the 
    // displayTaskForm function first

    const taskContainer = displayTaskForm()

    const newTaskButtonContainer = document.createElement("div")
    newTaskButtonContainer.classList.add("container-md", "p-3")
    projectContainer.appendChild(newTaskButtonContainer)
    const newTaskButton = document.createElement("button")
    newTaskButton.classList.add("btn", "btn-secondary", "btn-lg", "btn-block")
    newTaskButton.type = "button"
    newTaskButton.setAttribute("id", "add-new-task-button")
    newTaskButtonContainer.appendChild(newTaskButton)
    const buttonText = document.createTextNode("Add New Task");
    newTaskButton.appendChild(buttonText)
    // add an EventListener for the Add New Task button
    newTaskButton.addEventListener("click", (e)=> {
        /* 
        This EventListener function toggles the taskForm display and changes the text and 
        color of the Add New Task Button
        */
        const addNewTaskButton = document.querySelector("#add-new-task-button")
        if (taskContainer.classList.contains('show')) {
            taskContainer.classList.remove('show')
            newTaskButton.classList.remove("btn-danger")
            newTaskButton.classList.add("btn-secondary")
            newTaskButton.textContent = "Add New Task"
        } else {
            taskContainer.classList.add('show')
            newTaskButton.classList.remove("btn-secondary")
            newTaskButton.classList.add("btn-danger")
            newTaskButton.textContent = "Cancel New Task"
        }
    })
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
        toggleProjectForm()
        displayProject(newProjectName)
        newProjectForm.reset()
    })
}

export {addEventListeners, toggleProjectForm, project_list};
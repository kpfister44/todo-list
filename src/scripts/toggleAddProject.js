import { Project } from "./createNewProject"
import { displayTaskForm } from "./addTaskstoProject"

let project_list = []
let projectCreationNum = 1

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

function createNewTaskButton() {
    const newTaskButtonContainer = document.createElement("div")
    newTaskButtonContainer.classList.add("container-md", "p-3")
    const newTaskButton = document.createElement("button")
    newTaskButton.classList.add("btn", "btn-secondary", "btn-lg", "btn-block")
    newTaskButton.type = "button"
    newTaskButton.setAttribute("id", "add-new-task-button")
    newTaskButtonContainer.appendChild(newTaskButton)
    const buttonText = document.createTextNode("Add New Task");
    newTaskButton.appendChild(buttonText)

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
    return newTaskButtonContainer
}
function displayProject(projectName) {
    /** 
     * Takes no arguments and displays the projects on the main screen once the submit button is 
     * clicked on the project form. This function also calls the displayTaskForm function to create a
     * collapsed taskForm and adds an EventListener on the Add New Task Button.
    */
  // display the correct Project object's DOM element onto the webpage
  const projectContainer = document.querySelector(".new-project")
  if (projectContainer.children.length === 1) {
    const child = projectContainer.children[0]
    projectContainer.removeChild(child)
  }
  // check to see if a project is already being displayed
  // iterate through the master project list to find the correct project to be displayed
  project_list.forEach((project) => {
    if (project.getName === projectName) {
        const displayedProjectElement = project.getProjectElement
        projectContainer.appendChild(displayedProjectElement)
    }
  });
} 

function createNavProjectButton(projectName) {
    const navProjectsHeader = document.querySelector(".navbar-projects-header")
    const navProjectListItem = document.createElement("li")
    navProjectListItem.classList.add("mt-3", "d-grid", "gap-2", "col-6")
    navProjectsHeader.after(navProjectListItem)
    const navProjectButton = document.createElement("buton")
    navProjectButton.classList.add("btn", "btn-outline-light", "btn-sm")
    navProjectButton.setAttribute("type", "button")
    navProjectButton.setAttribute("value", `${projectName}`)
    navProjectListItem.appendChild(navProjectButton)
    const navProjectButtonText = document.createTextNode(projectName)
    navProjectButton.appendChild(navProjectButtonText)

    navProjectButton.addEventListener("click", (e)=> {
        displayProject(projectName)
    })
}

function createProject(projectName) {
    const projectElement = document.createElement("div")
    projectElement.classList.add("container-md", "p-3", "mt-3")
    const projectTitleContainer = document.createElement("div")
    projectTitleContainer.classList.add("container-md", "p-3", "mt-3", "text-bg-dark")
    projectElement.appendChild(projectTitleContainer)
    const projectTitle = document.createElement("h1")
    projectTitleContainer.appendChild(projectTitle)
    const text = document.createTextNode(projectName);
    projectTitle.appendChild(text)

    // add a new task button element as a child of the project element
    const newTaskButtonContainer = createNewTaskButton()
    projectElement.appendChild(newTaskButtonContainer)

    // create a project button on the navbar
    createNavProjectButton(projectName)

    //create a Project object and add it to the master project list
    const newProject = new Project(projectName, projectElement, projectCreationNum)
    addProject(newProject)
    projectCreationNum += 1
}


function addEventListeners() {
    const addProjectButton = document.querySelector('#add-project')
    const projectForm = document.querySelector('.new-project-form')
    addProjectButton.addEventListener("click", toggleProjectForm)
    projectForm.addEventListener("submit", (e)=> {
        e.preventDefault();

        const newProjectForm = e.target;
        const newProjectName = newProjectForm.name.value;
        toggleProjectForm()
        createProject(newProjectName)
        displayProject(newProjectName)
        newProjectForm.reset()
    })
}

export {addEventListeners, toggleProjectForm, project_list};
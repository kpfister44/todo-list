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

/*function deleteProject(projectObject) {
    
}
*/

function displayTaskForm() {
    // create the title component of the form
    const taskContainer = document.createElement("div")
    const projectContainer = document.querySelector("#new-project")
    taskContainer.classList.add("container-md", "shadow", "p-3", "mt-3", "bg-light")
    projectContainer.appendChild(taskContainer)
    const taskForm = document.createElement("form")
    taskForm.classList.add("new-project-form")
    taskContainer.append(taskForm)
    const taskTitle = document.createElement("div")
    taskTitle.classList.add("form-floating", "mb-3")
    taskForm.appendChild(taskTitle)
    const taskTitleInput = document.createElement("input")
    taskTitleInput.setAttribute("type", "text")
    taskTitleInput.setAttribute("name", "title")
    taskTitleInput.classList.add("form-control")
    taskTitleInput.setAttribute("id", "floatingInput")
    taskTitleInput.setAttribute("placeholder", "Title")
    taskTitle.appendChild(taskTitleInput)
    const taskTitleLabel = document.createElement("label")
    taskTitleLabel.setAttribute("for", "floatingInput")
    taskTitle.appendChild(taskTitleLabel)
    const taskTitleLabelText = document.createTextNode("Title");
    taskTitleLabel.appendChild(taskTitleLabelText)

    // create the details components of the form
    const taskDetails = document.createElement("div")
    taskDetails.classList.add("form-floating", "mb-3")
    taskForm.appendChild(taskDetails)
    const taskDetailsTextarea = document.createElement("textarea")
    taskDetailsTextarea.setAttribute("name", "details")
    taskDetailsTextarea.classList.add("form-control")
    taskDetailsTextarea.setAttribute("id", "floatingTextarea")
    taskDetailsTextarea.setAttribute("placeholder", "What are the details?")
    taskDetailsTextarea.setAttribute("style", "height: 100px")
    taskDetails.appendChild(taskDetailsTextarea)
    const taskDetailsLabel = document.createElement("label")
    taskDetailsLabel.setAttribute("for", "floatingTextarea")
    taskDetails.appendChild(taskDetailsLabel)
    const taskDetailsLabelText = document.createTextNode("Details");
    taskDetailsLabel.appendChild(taskDetailsLabelText)

    // create the date component of the form
    const taskDate = document.createElement("div")
    taskDate.classList.add("form-floating", "mb-3")
    taskForm.appendChild(taskDate)
    const taskInputDate = document.createElement("input")
    taskInputDate.setAttribute("type", "date")
    taskInputDate.setAttribute("name", "date")
    taskInputDate.classList.add("form-control")
    taskInputDate.setAttribute("id", "floatingInput")
    taskInputDate.setAttribute("placeholder", "Date")
    taskDate.appendChild(taskInputDate)
    const taskDateLabel = document.createElement("label")
    taskDateLabel.setAttribute("for", "floatingInput")
    taskDate.appendChild(taskDateLabel)
    const taskDateLabelText = document.createTextNode("Date");
    taskDateLabel.appendChild(taskDateLabelText)

    // create the submit button component of the form
    const taskButtonContainer = document.createElement("div")
    taskButtonContainer.classList.add("d-grid", "gap-2", "mt-3")
    taskForm.appendChild(taskButtonContainer)
    const taskButton = document.createElement("button")
    taskButton.classList.add("btn", "btn-outline-success")
    taskButton.setAttribute("type", "submit")
    taskButton.setAttribute("id", "task-form")
    taskButton.setAttribute("value", "Add")
    taskButtonContainer.appendChild(taskButton)
    const taskButtonText = document.createTextNode("Add");
    taskButton.appendChild(taskButtonText)
}

function displayProject(projectName) {
    /* 
    Takes no arguments and displays the projects on the main screen once the submit button is 
    clicked on the project form.
    */

    const projectContainer = document.createElement("div")
    const navbar = document.querySelector(".navbar")
    projectContainer.classList.add("container-md", "p-3", "mt-3")
    projectContainer.setAttribute("id", "new-project")
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

    displayTaskForm()

    const newTaskButtonContainer = document.createElement("div")
    newTaskButtonContainer.classList.add("container-md", "p-3")
    projectContainer.appendChild(newTaskButtonContainer)
    const newTaskButton = document.createElement("button")
    newTaskButton.classList.add("btn", "btn-secondary", "btn-lg", "btn-block")
    newTaskButton.type = "button"
    newTaskButtonContainer.appendChild(newTaskButton)
    const buttonText = document.createTextNode("Add New Task");
    newTaskButton.appendChild(buttonText)
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
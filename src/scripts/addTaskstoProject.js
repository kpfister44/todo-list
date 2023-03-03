import { Project } from "./createNewProject"
import { project_list } from "./toggleAddProject"


function displayTaskForm() {
    // create the title component of the form
    let taskCounter = 0
    const taskContainer = document.createElement("div")
    const projectContainer = document.querySelector("div.new-project")
    taskContainer.classList.add("container-md", "shadow", "p-3", "mt-3", "bg-light", "collapse")
    projectContainer.appendChild(taskContainer)
    const taskForm = document.createElement("form")
    taskForm.classList.add("new-project-form")
    taskForm.setAttribute("id", `${project_list.length-1}`)
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
    taskButton.setAttribute("value", "Add")
    taskButtonContainer.appendChild(taskButton)
    const taskButtonText = document.createTextNode("Add");
    taskButton.appendChild(taskButtonText);
    // add an EventListener on the submit button to collect the taskForm data
    taskForm.addEventListener("submit", (e) => {
      // gather the taskForm data an create a new Task object with that data
      e.preventDefault();
      // need to create the task display using DOM manipulation
      const taskMainDiv = document.createElement("div");
      taskMainDiv.classList.add(
        "container-sm",
        "d-flex",
        "flex-row",
        "p-2",
        "mt-2",
        "shadow",
        "bg-body-tertiary",
        "rounded",
        "border",
        "border-dark"
      );
      taskContainer.setAttribute("id",`task-main-div${taskCounter}`)
      taskContainer.after(taskMainDiv);
      
      // create task object with form data
      const newTaskForm = e.target;
      const newTaskTitle = newTaskForm.title.value;
      const newTaskDetails = newTaskForm.details.value;
      const newTaskDate = newTaskForm.date.value;
      project_list[parseInt(e.target.id)].createTask(
        newTaskTitle,
        newTaskDetails,
        newTaskDate,
        taskCounter,
        taskMainDiv
      );
      taskForm.reset();
      // continue to create task display using DOM manipulation
      const taskCheckboxDiv = document.createElement("div");
      taskCheckboxDiv.classList.add(
        "form-check",
        "d-flex",
        "align-items-center"
      );
      taskMainDiv.appendChild(taskCheckboxDiv);
      //add the checkbox to the task display
      const taskCheckBoxInput = document.createElement("input");
      taskCheckBoxInput.classList.add("form-check-input");
      taskCheckBoxInput.setAttribute("type", "checkbox");
      taskCheckBoxInput.setAttribute("id", "checkboxNoLabel");
      taskCheckBoxInput.setAttribute("value", "");
      taskCheckBoxInput.setAttribute("aria-label", "completed");
      taskCheckboxDiv.appendChild(taskCheckBoxInput);
      // add the title and detials of the task to the task display
      const taskDetailsDiv = document.createElement("div");
      taskDetailsDiv.classList.add("flex-fill", "m-1");
      taskMainDiv.appendChild(taskDetailsDiv);
      const taskDetailsTitleParagraphDiv = document.createElement("div");
      taskDetailsDiv.appendChild(taskDetailsTitleParagraphDiv);
      const taskDetailsTitleParagraph = document.createElement("p");
      taskDetailsTitleParagraph.classList.add("m-1");
      taskDetailsTitleParagraphDiv.appendChild(taskDetailsTitleParagraph);
      const taskDetailsTitleStrong = document.createElement("strong");
      taskDetailsTitleParagraph.after(taskDetailsTitleStrong);
      const taskDetailsTitleStrongText = document.createTextNode(newTaskTitle);
      taskDetailsTitleStrong.appendChild(taskDetailsTitleStrongText);
      const taskDetailsParagraphDiv = document.createElement("div");
      taskDetailsDiv.appendChild(taskDetailsParagraphDiv);
      const taskDetailsParagraph = document.createElement("p");
      taskDetailsParagraph.classList.add("m-1");
      taskDetailsParagraphDiv.appendChild(taskDetailsParagraph);
      const taskDetailsSmall = document.createElement("small");
      taskDetailsParagraph.after(taskDetailsSmall);
      const taskDetailsSmallText = document.createTextNode(newTaskDetails);
      taskDetailsSmall.appendChild(taskDetailsSmallText);
      //add the date to the task display
      const taskDateDiv = document.createElement("div");
      taskDateDiv.classList.add("d-flex", "align-items-center", "p-2");
      taskMainDiv.appendChild(taskDateDiv);
      const taskDateParagraph = document.createElement("p");
      taskDateParagraph.classList.add("p-0", "m-0");
      taskDateDiv.appendChild(taskDateParagraph);
      const taskDateParagraphText = document.createTextNode(newTaskDate);
      taskDateParagraph.appendChild(taskDateParagraphText);
      // add edit or delete drop-up button


      const taskActionButtonDiv = document.createElement("div");
      taskActionButtonDiv.classList.add(
        "d-flex",
        "align-items-center",
        "p-2"
      );
      taskMainDiv.appendChild(taskActionButtonDiv);
      const taskActionDropdownDiv = document.createElement("div")
      taskActionDropdownDiv.classList.add("dropup")
      taskActionButtonDiv.appendChild(taskActionDropdownDiv)
      const taskActionButton = document.createElement("button");
      taskActionButton.setAttribute("type", "button");
      taskActionButton.setAttribute("aria-expanded", "false");
      taskActionButton.setAttribute("data-bs-toggle", "dropdown");
      taskActionButton.classList.add("btn", "btn-secondary", "dropdown-toggle");
      taskActionDropdownDiv.appendChild(taskActionButton);
      const taskActionButtonText = document.createTextNode("Actions");
      taskActionButton.appendChild(taskActionButtonText);
      const actionButtonDropupList = document.createElement("ul")
      actionButtonDropupList.classList.add("dropdown-menu")
      taskActionButton.after(actionButtonDropupList)
      // create the task dropup list edit button 
      const dropupListEditItem = document.createElement("li")
      actionButtonDropupList.appendChild(dropupListEditItem)
      const dropupListEditButton = document.createElement("button")
      dropupListEditButton.classList.add("dropdown-item")
      dropupListEditButton.setAttribute("type","button")
      dropupListEditItem.appendChild(dropupListEditButton)
      const dropupListEditButtonText = document.createTextNode("Edit")
      dropupListEditButton.appendChild(dropupListEditButtonText)
      // create the task dropup list delete button 
      const dropupListDeleteItem = document.createElement("li")
      actionButtonDropupList.appendChild(dropupListDeleteItem)
      const dropupListDeleteButton = document.createElement("button")
      dropupListDeleteButton.classList.add("dropdown-item")
      dropupListDeleteButton.setAttribute("type","button")
      dropupListDeleteButton.setAttribute("id",`btn${taskCounter}`)
      dropupListDeleteItem.appendChild(dropupListDeleteButton)
      const dropupListDeleteButtonText = document.createTextNode("Delete")
      dropupListDeleteButton.appendChild(dropupListDeleteButtonText)


      // add an event listener on the checkbox to strike through the task if clicked
      const taskDetailsTitleDel = document.createElement("del");
      const taskDetailsDel = document.createElement("del");
      taskCheckBoxInput.addEventListener("change", (e) => {
        if (taskCheckBoxInput.checked) {
            // strikethrough the title and details if the checkbox is marked
            taskDetailsTitleStrong.appendChild(taskDetailsTitleDel)
            taskDetailsTitleDel.appendChild(taskDetailsTitleStrongText)
            taskDetailsSmall.appendChild(taskDetailsDel);
            taskDetailsDel.appendChild(taskDetailsSmallText);
          } else {
            // remove strikethrough on the tile and details when checkmark is unclicked
            taskDetailsTitleParagraph.after(taskDetailsTitleStrong);
            taskDetailsTitleStrong.appendChild(taskDetailsTitleStrongText)
            taskDetailsParagraph.after(taskDetailsSmall);
            taskDetailsSmall.appendChild(taskDetailsSmallText)
          }
        
      })

      // add the event listner for the delete button in the actions dropup menu
      dropupListDeleteButton.addEventListener("click", (e) => {
        // loop through the projects list and their tasks until you find the element to be delteted
        project_list.forEach((project) => {
          project.getTasks.forEach((task) => {
            if ("btn" + task.getCreationNum === e.target.id) {
               const deletedElement = task.getTaskElement
               deletedElement.remove()
               project.deleteTask(task.getTitle)
            }
          })
        });
      })
      
      // hide the taskForm and change color and text of New Task button on submit
      const newTaskButtons = document.querySelectorAll("#add-new-task-button");
      taskContainer.classList.remove("show");
      newTaskButtons.forEach((button) => {
        button.classList.remove("btn-danger");
        button.classList.add("btn-secondary");
        button.textContent = "Add New Task";
      });
      taskCounter += 1
    });
    return taskContainer;
}

export {displayTaskForm};
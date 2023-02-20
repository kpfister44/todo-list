import { Project } from "./createNewProject"
import { project_list } from "./toggleAddProject"


function displayTaskForm() {
    // create the title component of the form
    const taskContainer = document.createElement("div")
    const projectContainer = document.querySelector("div.new-project")
    taskContainer.classList.add("container-md", "shadow", "p-3", "mt-3", "bg-light", "collapse")
    taskContainer.setAttribute("id", `task-form-container${project_list.length}`)
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
      const newTaskForm = e.target;
      const newTaskTitle = newTaskForm.title.value;
      console.log(newTaskTitle);
      const newTaskDetails = newTaskForm.details.value;
      console.log(newTaskDetails);
      const newTaskDate = newTaskForm.date.value;
      console.log(newTaskDate);
      project_list[parseInt(e.target.id)].createTask(
        newTaskTitle,
        newTaskDetails,
        newTaskDate
      );
      taskForm.reset();

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
      taskContainer.after(taskMainDiv);
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
      const taskThreeDotButtonDiv = document.createElement("div");
      taskThreeDotButtonDiv.classList.add(
        "d-flex",
        "align-items-center",
        "p-2"
      );
      taskMainDiv.appendChild(taskThreeDotButtonDiv);
      const taskThreeDotButton = document.createElement("button");
      taskThreeDotButton.setAttribute("type", "button");
      taskThreeDotButton.classList.add("btn", "btn-info");
      taskThreeDotButtonDiv.appendChild(taskThreeDotButton);
      const taskThreeDotButtonText = document.createTextNode("Three dots");
      taskThreeDotButton.appendChild(taskThreeDotButtonText);

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
      
      // hide the taskForm and change color and text of New Task button on submit
      const newTaskButtons = document.querySelectorAll("#add-new-task-button");
      taskContainer.classList.remove("show");
      newTaskButtons.forEach((button) => {
        button.classList.remove("btn-danger");
        button.classList.add("btn-secondary");
        button.textContent = "Add New Task";
      });
    });

    return taskContainer;
}

export {displayTaskForm};
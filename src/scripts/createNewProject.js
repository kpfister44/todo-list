import { Task } from "./createNewTask"
export class Project {
    constructor(name) {
        this._name = name
        this._tasks = []
    }

    get getName() {
        return this._name
    }

    set changeName(name) {
        this._name = name
    }

    createTask(title, details, date) {
        const newTask = new Task(title, details, date)
        this._tasks.push(newTask)
        console.log(newTask.getTitle)
    }

    deleteTask(title) {
        for (let i = 0; i < this._tasks.length; i++) {
            if (this._tasks[i].getTitle === title) {
                this._tasks.splice(i, 1)
            }
        }
        console.log(this._tasks)
    }

    editTask(title, details, date) {
        for (let i = 0; i < this._tasks.length; i++) {
            if (this._tasks[i].getTitle === title) {
                this._tasks[i].changeTitle = title
                this._tasks[i].changeDetails = details
                this._tasks[i].changeDate = date
            }
        }
    }
}

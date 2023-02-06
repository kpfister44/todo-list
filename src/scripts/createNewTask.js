export class Task {
  constructor(title, details, date) {
    this._title = title;
    this._details = details;
    this._date = date;
    this._completed = false;
    this._starred = false;
  }
  get getTitle() {
    return this._title;
  }
  get getDetails() {
    return this._details;
  }
  get getDate() {
    return this._date;
  }
  get getCompleted() {
    return this._completed;
  }
  get getStarred() {
    return this._starred;
  }
  set changeTitle(title) {
    this._title = title;
  }
  set changeDetails(details) {
    this._details = details;
  }
  set changeDate(date) {
    this._date = date;
  }

  changeCompletedStatus() {
    if (this._completed === false) {
      this._completed = true;
    } else {
      this._completed = false;
    }
  }
  changeStarredStatus() {
    if (this._starred === false) {
      this._starred = true;
    } else {
      this._starred = false;
    }
  }
}

export class Kurs {
  #isDeleted = false;
  #isExamForced = false;

  constructor(title, hours, examen) {
    this._title = title;       
    this._hours = hours;       
    this._examen = examen;     
  }

  get title() {
    return this._title;
  }

  get hours() {
    return this._hours;
  }

  get examen() {
    return this._examen;
  }

  set title(value) {
    this._title = value;
  }

  set hours(value) {
    this._hours = value;
  }

  set examen(value) {
    this._examen = value;
  }

  show() {
    if (this.#isDeleted) {
      console.log("Этот курса удалён.");
      return;
    }
    console.log(`Название: ${this._title}, Часов: ${this._hours}, Экзаменационный: ${this._examen ? "Да" : "Нет"}`);
  }

  delete() {
    this._title = null;
    this._hours = null;
    this._examen = null;
    this.#isDeleted = true;
  }

  copy() {
    return this;
  }

  static clone(kursInstance) {
    if(kursInstance.#isDeleted){
      return null;
    }
    else{
      return new Kurs(kursInstance.title, kursInstance.hours, kursInstance.examen);
    }
  }

  #markAsExamCourse() {
    this._examen = true;
    this.#isExamForced = true;
  }
}

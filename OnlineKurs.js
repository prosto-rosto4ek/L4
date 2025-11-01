// OnlineKurs.js
import { Kurs } from './Kurs.js';

export class OnlineKurs extends Kurs {
  constructor(title, hours, examen, platform) {
    super(title, hours, examen);
    this._platform = platform; // новое поле
  }

  get platform() {
    return this._platform;
  }

  set platform(value) {
    this._platform = value;
  }

  // Переопределение методов
  show() {
    console.log(`Онлайн-курс: ${this.title}, Часов: ${this.hours}, Экзаменационный: ${this.examen ? "Да" : "Нет"}, Платформа: ${this.platform}`);
  }

  delete() {
    super.delete();
    this._platform = null;
  }

  copy() {
    return this;
  }

  static clone(kursInstance) {
    if (kursInstance.title === null) return null;
    return new OnlineKurs(kursInstance.title, kursInstance.hours, kursInstance.examen, kursInstance.platform);
  }
}

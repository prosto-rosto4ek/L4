import { OnlineKurs } from './OnlineKurs.js';

const kurs1 = new OnlineKurs("JavaScript", 40, true, "Udemy");
const kurs2 = new OnlineKurs("Node.js", 60, false, "Coursera");

const kursy = [kurs1, kurs2];

kursy[0].show();
kursy[1].show();
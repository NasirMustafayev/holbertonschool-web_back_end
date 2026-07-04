import ClassRoom from "./0-classroom.js";

const body = document.querySelector('body')

const room1 = new ClassRoom(10);
const room2 = new ClassRoom(20);
const room3 = new ClassRoom(100)

console.log(room1.maxStudentsSize); // Output: 10
console.log(room2.maxStudentsSize); // Output: 20

const newElement = document.createElement('span')

newElement.textContent = room3.maxStudentsSize

body.appendChild(newElement)
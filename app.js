'use strict'; 

console.log('Hello World!');

let myName;

myName = 'Chris';
console.log(myName);

myName = 'Trace';
console.log(myName);

let usersName = prompt('Who are you?');

let message;

if (usersName == 'Kassie'){
  message = '. I  appreciate you for all of your guidance, during 102!'
} else if (usersName == ''){
  message = "No Name!";
} else if (usersName == 'Justin'){
  message = ". Welcome to my 102 website!";
} else {
  message = '. Welcome to my 102 website!';
}


document.write('Hi, ' + usersName);
document.write(message);
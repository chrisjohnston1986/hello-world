'use strict'; 

console.log('Hello World!');

let myName;

let usersName;
let message;
let ask;


function enterQuestion(){
  let userAnswer = prompt (usersName + ', Do you want to enter website').toLowerCase();
      while (userAnswer !== 'yes'){
          userAnswer = prompt ('WRONG, Do you want to enter?').toLowerCase();
      };
}

function getName(){
  usersName = prompt('Who are you?');
  document.write('Hi, ' + usersName + '. ');
}


// let usersName = prompt('Who are you?');
function makeMessage(){
  if (usersName == 'Kassie'){
    message = ' I  appreciate you, for all of your guidance, during 102!'
  } else if (usersName == ''){
    message = "No Name!";
  } else if (usersName == 'Justin'){
    message = " Welcome to my 102 website!";
  } else {
    message = ' Welcome to my 102 website!';
  }
  document.write(message);
}

function showPiggy(){
  let usersNum = prompt('How many stars would you rate my page? 1-5');
  
  for (let i = 0; i < usersNum && i < 5; i++){
    document.write('<img src="images/pig.png" alt="little pig" class="piggy"/>');
  }
}

// let message;

// if (usersName == 'Kassie'){
//   message = ' I  appreciate you for all of your guidance, during 102!'
// } else if (usersName == ''){
//   message = "No Name!";
// } else if (usersName == 'Justin'){
//   message = " Welcome to my 102 website!";
// } else {
//   message = ' Welcome to my 102 website!';
// }


// document.write('Hi, ' + usersName);

const person_name = prompt("What is your name?")
function greetings(person_name) {
    console.log("Hi, " + person_name + "!");
  }
greetings(person_name);

const number = prompt("Please, enter your number here to know if it's even or odd: ");
if(number % 2 == 0) {
    console.log("The given number " + number + " is even.");
}

else {
    console.log("The given number " + number + " is odd.");
}

const number1 = prompt("Please, enter your number here to know if it's between 0 and 1: ");
if(number1>=0 && number1<=1) {
    console.log("The given number " + number1 + " is between 0 and 1");
}

else {
    console.log("The given number " + number1 + " is NOT between 0 and 1");
}
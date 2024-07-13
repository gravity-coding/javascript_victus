let age = prompt("Enter your age?");
if(age <= 18){
    console.log("You can drive your car")
}
else{
    console.log("Bhag ja, jaake pahle padhai kar le!")
}


// Q1. Write a program that check if a number is even or odd using an if/else statement.


function checkEvenOdd(userNumber){
    if(userNumber % 2 == 0){
       console.log("The number " + userNumber + " is even.");
    }
    else{
       console.log("The number " + userNumber + " is odd."); 
    }
}

const num = prompt("Enter your number to check even or odd!");
checkEvenOdd(num);



// Q.2  Else If ---> Create a program that prompt the user for grade and then use if/else/else if to display corresponding message(eg. A-> Excellent, B-> Very Good, C-> Good, D-> Average, F-> Babuji ka paisa mat barbad karo, jaakar kheti kar lo bhaut scope hain)

function checkGrade(){
    let grade = prompt("Enter your grade to check your performance (A, B, C, D, F)!").toUpperCase();
    if(grade == "A"){
        console.log("Excellent");
    }
    else if(grade == "B"){
        console.log("Very Good");
    }
    else if(grade == "C"){
        console.log("Good");
    }
    else if(grade == "D"){
        console.log("Average");
    }
    else if(grade == "F"){
        console.log("Babuji ka paisa mat barbad karo, jaakar kheti kar lo bhaut scope hain")
    }
    else{
        console.log("Invalid grade");
    }
}

checkGrade();



// Q.3 A program that simulates a simple vending machine. Allow user to choose a product(using if/else if for multiple condition) and display that corresponding price.


// Switch case
let day = prompt("Select your day");

switch (day) {
    case "Monday":
        console.log("Time for a fresh start!");
        break;
    case "Tuesday":
        console.log("Aaj bhai Tuesday hain");
        break;
    case "Wednesday":
        console.log("Aaj bhai Wednesday hain");
        break;
    case "Thursday":
        console.log("Aaj bhai Thursday hain");
        break;
    case "Friday":
        console.log("Aaj bhai Friday hain");
        break;
    case "Saturday":
        console.log("Aaj bhai Saturday hain");
        break;
    case "Sunday":
        console.log("Aaj bhai Sunday hain");
        break;
    default:
        console.log("Invalid day");
}




// Q.1 Write a program that uses a switch statement to evaluate a letter grade(A,B,C,D,F) and display the corresponding meaning(eg.Excellent for A...)


function checkGradeMeaning(grade) {
    grade = grade.toUpperCase();

    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Average");
            break;
        case "D":
            console.log("Below Average");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid Grade");
    }
}

checkGradeMeaning(prompt("Select your grade"));




// Q.2 Create a program that simulates a simple traffic light. Use a switch statement on a variable representing the light's color (red, yellow & green) to display related messages(Stop, Ready, Go respectively.)

function trafficLight(color) {
    color = color.toLowerCase();

    switch (color) {
        case "red":
            console.log("Stop");
            break;
        case "yellow":
            console.log("Ready");
            break;
        case "green":
            console.log("Go!");
            break;
        default:
            console.log("Invalid color! Please aukat ke bhar na jaaye, in 3 me se hi select kigye...");
    }
}

trafficLight(prompt("Select Color to Display message from red, green, yellow"));



// Q.3  A program that prompts the user for their favorite fruit using prompt and then uses a switch statement with multiple cases to display a fun fact about that fruit.(if a match is not found, default your favorite fruit is not in our list, we will add soon.)


// Function

function greet(name) {
    console.log("Hello " + name + "!");
}

greet(prompt("Please enter your name!"));
greet(prompt("Please enter your name!"));
greet(prompt("Please enter your name!"));
greet(prompt("Please enter your name!"));
greet(prompt("Please enter your name!"));




// Q.2  Create a function that check if a number is positive, negative or zero. Use an if/else statement within the function and return the appropiate message.

function checkNumberSign(number){
    if(number > 0){
        return "The number " + number + " Positive";
    }
    else if(number < 0){
        return "The number " + number + " Negative";
    }
    else{
        return "Zero";
    }
}

// const num1 = 10;
// const num2 = -5;
// const num3 = 0;

console.log(checkNumberSign(prompt("Enter your number to check it is positive, negative or zero")));
// console.log(checkNumberSign(num2));
// console.log(checkNumberSign(num3));



// Q.2  Write a function that calculate the area of a rectangle, taking length and width as parameters. Call the function with different values to test it.


// Q.3 A program that simulates a simple Quiz. Define functions for asking questions, checking answers, and calculating the zero.


// How to change the string to number

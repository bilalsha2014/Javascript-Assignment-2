// Chapter 21-25 "String Methods"

// Task1  Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var fullName = firstName + " " + lastName;
alert("Hello " + fullName);

// Task2 Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var favouritePhone = prompt("Enter Your Favorite Mobile Phone Model");
document.write("My Favorite Phone is : " + favouritePhone + "<br>");
document.write("Length of String : " + favouritePhone.length + "<br>");

// Task 3 Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var word = "Pakistani";
document.write("String : " + word + "<br>");
document.write("Index of 'n' : " + word.indexOf("n") + "<br>");

// Task 4 Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

var word = "Hello World";
document.write("String : " + word + "<br>");
document.write("Last Index of 'l' : " + word.lastIndexOf("l") + "<br>");

// Task 5 Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

var word = "Pakistani";
document.write("String : " + word + "<br>");
document.write("Character at 3rd index : " + word.charAt(3) + "<br>");

// Task 6  Repeat Task 1 using string concat() method.

var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var fullName = firstName.concat(" " + lastName);
alert("Hello " + fullName);

// Task 7  Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

var word = "Hyderabad";
document.write("Before Replacement String : " + word + "<br>");
document.write(
  "After Replacement String : " + word.replace("Hyder", "Islam") + "<br>"
);

// Task 8 Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

var message =
  "Ali and Sami are best friends. They play cricket and football together.";
document.write("Before Replacement Message : " + message + "<br>");
document.write(
  "After Replacement String : " + message.replace(/and/g, "&") + "<br>"
);

// Task 9 Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var stringValue = "472";
var NumberValue = Number(stringValue);
document.write("String Value : " + stringValue + "<br>");
document.write("String Value Data Type : " + typeof stringValue + "<br>");
document.write("Number Value : " + NumberValue + "<br>");
document.write("Number Value Data Type : " + typeof NumberValue + "<br>");

//  Task 10 Write a program that takes user input. Convert and show the input in capital letters.

var inputUser = prompt("Enter Letters:");
document.write("User Input : " + inputUser + "<br>");
document.write("Upper Case : " + inputUser.toUpperCase() + "<br>");

// Task 11 Write a program that takes user input. Convert and show the input in title case.

var inputUser = prompt("Enter Letters:");
document.write("User Input : " + inputUser + "<br>");
var splitInput = inputUser.split(" ");
var array = [];
for (var i = 0; i <= splitInput.length - 1; i++) {
  var FirstCharcter = splitInput[i].charAt(0);
  var OthersCharacter = splitInput[i].slice(1);
  var TitleCase = FirstCharcter.toUpperCase() + OthersCharacter.toLowerCase();
  array.push(TitleCase);
}
document.write("TitleCase : " + array.join(" ") + "<br>");

// Task 12 Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

var num = 35.36;
document.write("Number To Convert : " + num + "<br>");
var ConvertString = num.toString().replace(".", "");
document.write("Converted String : " + ConvertString + "<br>");

// Task 13 Write a program to take user input and store username in a variable.
//  If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.
//  For character codes of [@ .
//   Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64

var userName = prompt("Enter Username : ");
var SplitUsername = userName.split("");
for (var i = 0; i <= SplitUsername.length - 1; i++) {
  if (
    SplitUsername[i].charCodeAt() == 33 ||
    SplitUsername[i].charCodeAt() == 44 ||
    SplitUsername[i].charCodeAt() == 46 ||
    SplitUsername[i].charCodeAt() == 64
  ) {
    alert("Enter A Valid UserName");
    break;
  }
}

// Task 14 You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
//    Write a program to enable “search by user input” in an array.
//     After searching, prompt the user whether the given item is found in the list or not.
//    Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Search item");
var lowercaseSearch = search.toLocaleLowerCase();
check = A.indexOf(lowercaseSearch);
if (A[check] == lowercaseSearch) {
  alert("Given Item is Found in the List");
} else {
  alert("Given Item is Not Found in the List");
}

// Task 15 Write a program to take password as an input from user. The password must qualify these requirements:
//    a. It should contain alphabets and numbers
//    b. It should not start with a number
//    c. It must at least 6 characters long If the password does not meet above requirements,
//    prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

var password = prompt("Enter Your Password");
var LalphabetsASCII = [];
var UalphabetsASCII = [];
var NumbersASCII = [];
for (var i = 48; i <= 57; i++) {
  NumbersASCII.push(i);
}
for (var i = 65; i <= 90; i++) {
  UalphabetsASCII.push(i);
}
for (var i = 97; i <= 122; i++) {
  LalphabetsASCII.push(i);
}

var splitpassword = password.split("");
firstcharac = splitpassword[0].charCodeAt();
check1 = NumbersASCII.indexOf(firstcharac);
if (splitpassword[0].charCodeAt() == NumbersASCII[check1]) {
  alert(" It should not start with a number");
} else if (splitpassword.length <= 5) {
  alert(" It must at least 6 characters long ");
} else {
  for (var i = 0; i <= splitpassword.length - 1; i++) {
    Othercharac = splitpassword[i].charCodeAt();
    check2 = NumbersASCII.indexOf(Othercharac);
    check3 = UalphabetsASCII.indexOf(Othercharac);
    check4 = LalphabetsASCII.indexOf(Othercharac);
    if (
      splitpassword[i].charCodeAt() == LalphabetsASCII[check4] ||
      splitpassword[i].charCodeAt() == UalphabetsASCII[check3] ||
      splitpassword[i].charCodeAt() == NumbersASCII[check2]
    ) {
    } else {
      alert(
        "Enter A valid Password \n a.It should contain alphabets and number   \nb. It should not start with a number \nc. It must at least 6 characters long "
      );
      break;
    }
  }
}

// Task 16 Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.

var university = "University of Karachi";
A = university.split(" ");
document.write("String : " + university + "<br>");
document.write("Array : " + A + "<br>");

// Task 17 Write a program to display the last character of a user input.

var userInput = prompt("User Input");
document.write("User Input : " + userInput + "<br>");
document.write(
  "Last Character : " + userInput.charAt(userInput.length - 1) + "<br>"
);

// Task 18  You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

var stringQuote = "The quick brown fox jumps over the lazy dog";
var stringQuoteLower = stringQuote.toLocaleLowerCase();
var QuoteSplit = stringQuoteLower.split(" ");
var wordFind = "the";
var count = 0;
for (var i = 0; i <= QuoteSplit.length - 1; i++) {
  if (wordFind == QuoteSplit[i]) {
    count++;
  }
}
document.write("Number of occurrences of word “the” is: " + count + "<br>");

// Chapter 26-30  "MATH METHODS"

// Task 1 Write a program that takes a positive integer from user & display the following in your browser.

//  a. number
//  b. round off value of the number
//  c. floor value of the number
//  d. ceil value of the number

var num = Number(prompt("Enter Positive Integer"));

if (num >= 0) {
  document.write("Number : " + num + "<br>");
  document.write("Round Off Value : " + Math.round(num) + "<br>");
  document.write("Floor Value : " + Math.floor(num) + "<br>");
  document.write("Ceil Value : " + Math.ceil(num) + "<br>");
} else {
  alert("Enter Positive Integer");
}

// Task 2  Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var num = Number(prompt("Enter Negative Floating Point Number"));

if (num <= 0) {
  document.write("Number : " + num + "<br>");
  document.write("Round Off Value : " + Math.round(num) + "<br>");
  document.write("Floor Value : " + Math.floor(num) + "<br>");
  document.write("Ceil Value : " + Math.ceil(num) + "<br>");
} else {
  alert("Enter Negative Floating Point Number");
}

// Task 3 Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var num = Number(prompt("Enter Number"));

if (num >= 0) {
  document.write("Absolute Value is : " + num + "<br>");
} else if (num <= 0) {
  document.write("Absolute Value is : " + [-num] + "<br>");
} else {
  alert("Enter valid Number");
}

// Task 4 Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

var a = 1 + Math.random() * 5;
var dice = Math.round(a);
document.write("Random Dice Value: " + dice);

// Task 5 Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var a = Math.random() * 2;
var Coin = Math.floor(a);
if (Coin == 0) {
  document.write("Random Coin Value: Head");
} else {
  document.write("Random Coin Value: Tail");
}

// Task 6  Write a program that shows a random number between 1 and 100 in your browser.

var a = 1 + Math.random() * 99;
var num = Math.round(a);
document.write("Random number between 1 and 100:" + num + "<br>");

// Task 7 Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var weight = prompt("Enter Your Weight in Kilograms");
document.write(
  "The Weight of User is :" + parseFloat(weight) + " Kilograms<br>"
);

// Task 8 Write a program that stores a random secret number from 1 to 10 in a variable.
// Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

// var userGuess = Number(prompt("Enter Your Number to Guess"));
// var a = 1 + Math.random() * 9;
// var num = Math.round(a);
// if (num == userGuess) {
//   document.write("Congratulaions! You guessed correctly" + "<br>");
// } else {
//   document.write("Incorrect Guess! Please Try Again!" + "<br>");
// }

// Chapter 31-34  "DATE METHODS "

// Task 1 Write a program that displays current date and time in your browser.

var a = new Date();
document.write(a);

// Task 2 Write a program that alerts the current month in words. For example December.
var months = [
  "January",
  "Febrary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var a = new Date();
document.write(months[a.getMonth()]);

// Task 3 Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var a = new Date();
var aStr = a.toString();
document.write(aStr.slice(0, 3));

// Task 4 Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var a = new Date();
var currentDay = days[a.getDay()];

if (currentDay == "Saturday" || currentDay == "Sunday") {
  document.write("It’s Fun day");
} else {
  document.write("It’s Normal day");
}

// Task 5 Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

var a = new Date();
var currentDay = a.getDate();
if (currentDay <= 15) {
  document.write("First fifteen days of the month");
} else {
  document.write("Last days of the month");
}

// Task 6 Write a program that determines the minutes since midnight,
// Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

var a = new Date();
var timeMilisecond = a.getTime();
var minute_convert = Math.pow(10, -5) * 1.667;
var Minutes = timeMilisecond * minute_convert;
document.write(Minutes);

// Task 7 Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var a = new Date();
var time = a.getHours();
if (time <= 12) {
  document.write("Its AM");
} else {
  document.write("Its PM");
}

// Task 8 Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var laterDate = new Date("December 31,2020");
document.write(laterDate);

// Task 9  Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

var RamadanDate = new Date("April 24,2020");

var CurrentDate = new Date();

var difference = CurrentDate - RamadanDate;
var pastdays = difference / (1000 * 60 * 60 * 24);
pastdays = Math.floor(pastdays);
document.write(pastdays + " Days have been passed since 1st Ramadan 2020");

// Task 10 Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var BeginDate = new Date("January 1,2015");
document.write(BeginDate + "<br>");
var RefDate = new Date("December 5,2015 22:50:16");
document.write(RefDate + "<br>");
var difference = (RefDate - BeginDate) / 1000;
document.write(
  difference +
    " seconds elapsed between the reference date and the beginning of 2015" +
    "<br>"
);

// Task 11 Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var CurrentDate = new Date();
document.write(" Current Date : " + CurrentDate + "<br>");
var HourAhead = new Date();
HourAhead.setHours(CurrentDate.getHours() - 1);
document.write(" 1 Hour Ago it Was : " + HourAhead + "<br>");

// Task 12  Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var CurrentDate = new Date();
document.write(" Current Date : " + CurrentDate + "<br>");
var pastYears = new Date();
pastYears.setFullYear(CurrentDate.getFullYear() - 100);
document.write("100 Years back : " + pastYears + "<br>");

// Task 13 Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var age = Number(prompt("Enter Age"));
var currentDate = new Date();
document.write("Your Age is : " + age + "<br>");
currentDate.setFullYear(currentDate.getFullYear() - age);
document.write("Your Birth Year is : " + currentDate.getFullYear() + "<br>");

//  Task 14 Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places.
//  Display the following fields:
//  a. Customer Name
//  b. Current Month
//  c. Number of units
//  d. Charges per unit
//  e. Net Amount Payable (within Due Date)
//  f. Late Payment Surcharge
//  g. Gross Amount Payable (after Due Date) Where,
//  Net Amount Payable (within Due Date) = Number of units * Charges per unit
//  Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

document.write("<h1>K-Electric Bill</h1>" + "<br><br>");
document.write("Customer Name :<b>Bilal Ahmed Shah</b><br>");
document.write("Month :<b>June</b><br>");
document.write("Units :<b>980</b><br>");
document.write("Charges Per Unit :<b>26</b><br><br>");
var units = 980;
var PerUnit = 26;
var Amount_Within_Duedate = units * PerUnit;
document.write(
  "Net Amount Payable (within Due Date ): " +
    "<b>" +
    Amount_Within_Duedate +
    "</b><br>"
);
var latepayment = 500;
var Amount_After_Duedate = Amount_Within_Duedate + latepayment;
document.write("Late Payment Surcharge :<b>500</b><br>");
var GrossAmountPayable =
  latepayment +
  document.write(
    "Net Amount Payable (After Due Date ) " +
      "<b>" +
      Amount_After_Duedate +
      "</b><br>"
  );

// Chapter 35-38 "FUNCTION"

// Task 1 Write a function that displays current date & time in your browser.

function tellTime() {
  var Currenttime = new Date();
  document.write(Currenttime + "</b><br>");
}
tellTime();

// Task 2 Write a function that takes first & last name and then it greets the user using his full name.

function FullName(FirstName, LastName) {
  var FullName = FirstName + " " + LastName;
  document.write("Hello " + FullName + "</b><br>");
}
FullName(prompt("Enter First Name"), prompt("Enter First Name"));

// Task 3 Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function addition(num1, num2) {
  return num1 + num2;
}
var result = addition(
  Number(prompt("Enter First Number")),
  Number(prompt("Enter Second Number"))
);
document.write(result);

// Task 4  Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

function Operation(num1, num2, operation) {
  return eval(num1 + operation + num2);
}
var result = Operation(
  prompt("Enter First Number"),
  prompt("Enter Second Number"),
  prompt("Enter Operation To Perform")
);
document.write(result);

// Task 5 Write a function that squares its argument.

function Square(num) {
  return Math.pow(num, 2);
}
var result = Square(Number(prompt("Enter Number You Need Square of")));
document.write(result);

// Task 6 Write a function that computes factorial of a number.

function factorial(num) {
  var factorial = num;
  for (var i = 1; i <= num - 1; i++) {
    factorial = factorial * i;
  }
  document.write("Factorial of " + num + " is " + factorial);
}
factorial(Number(prompt("Enter Number You Need Square of")));

// Task 7 Write a function that take start and end number as inputs & display counting in your browser.

function Counting(Start, End) {
  var Counting = [];
  for (var i = Start; i <= End; i++) {
    Counting.push(i);
    document.write(i + "<br>");
  }
  return Counting;
}
var a = Counting(
  Number(prompt("Enter Start Number")),
  Number(prompt("Enter End Number"))
);

document.write("Counting Array " + a + "<br>");

// Task 8 Write a nested function that computes hypotenuse of a right angle triangle.  Hypotenuse2 = Base2 + Perpendicular2
//  Take base and perpendicular as inputs. Outer function : calculateHypotenuse() Inner function: calculateSquare()

function calculateHypotenuse(Base, Perpendicular) {
  function calculateSquare(Number) {
    return Number * Number;
  }
  var Base2 = calculateSquare(Base);
  var Perpendicular2 = calculateSquare(Perpendicular);
  Hypotenuse2 = Base2 + Perpendicular2;
  document.write(
    "Hypotenuse of Right Angle Traingle is :" + Hypotenuse2 + "<br>"
  );
}
calculateHypotenuse(
  Number(prompt("Enter Base of a right angle triangle ")),
  Number(prompt("Enter perpendicular of a right angle triangle "))
);

// Task 9 Write a function that calculates the area of a rectangle.
//   A = width * height
//    Pass width and height in following manner:
//    i. Arguments as value
//    ii. Arguments as variables

function Area(width, height) {
  return width * height;
}
var result = Area(
  Number(prompt("Enter Width Of Rectangle")),
  Number(prompt("Enter Height Of Rectangle"))
);
document.write("Area of rectangle is " + result + "<br>");

// Task 10 Write a JavaScript function that checks whether a passed string is palindrome or not?   A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

function palindrome(check) {
  var split = check.split("");
  var reverse = split.reverse();
  var check2 = reverse.join("");
  if (check == check2) {
    document.write("Passed String is Palindrome " + "<br>");
  } else {
    document.write("Passed String is Not Palindrome " + "<br>");
  }
}
palindrome(prompt("Enter String to Check Palindrome"));

// Task 11 Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
//    EXAMPLE STRING : 'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox'

function titlecase(text) {
  var split = text.split(" ");
  var firstword;
  var Otherword;
  var fullword;
  var result = [];
  for (i = 0; i <= split.length - 1; i++) {
    firstword = split[i];
    firstword = firstword.charAt(0);
    firstword = firstword.toUpperCase();
    Otherword = split[i].slice(1).toLowerCase();
    fullword = firstword + Otherword;
    result.push(fullword);
  }
  result = result.join(" ");
  document.write(result + "<br>");
}
titlecase(prompt("Enter Text to Title Case"));

// Task 12 Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
//     EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development'

function longestWord(text) {
  var split = text.split(" ");
  var LengthArray = [];
  var a;
  for (i = 0; i <= split.length - 1; i++) {
    a = split[i].length;
    LengthArray.push(a);
  }
  var b = Math.max.apply(null, LengthArray);
  var c = LengthArray.indexOf(b);
  var result = split[c];
  document.write("Longest Word is " + result + "<br>");
}
longestWord(prompt("Enter Text to Find Longest Word"));

// Task 13 Write a JavaScript function that accepts two arguments,
//      a string and a letter and the function will count the number of occurrences of the specified letter within the string.
//      Sample arguments : 'JSResourceS.com', 'o'

function count(Text, letter) {
  var split = Text.split("");
  var count;
  var a = 0;
  for (i = 0; i <= split.length - 1; i++) {
    if (letter == split[i]) {
      a++;
    }
  }
  document.write("Number of Occurences of " + letter + " are " + a + "<br>");
}
count(prompt("Enter Text"), prompt("Enter Letter to Find in Text"));

// Task 14 The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
//  • Pass the radius to the function.
//  • Calculate the circumference based on the radius, and output "The circumference is NN".
//  Create a function called calcArea:
//  • Pass the radius to the function.
//  • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle    =     2πr
// Area of circle       =     πr2

function calcCircumference(radius) {
  var result;
  result = 2 * 3.14159 * radius;
  document.write(
    "The Circumference of circle having radius " +
      radius +
      " is " +
      result.toFixed(2) +
      "<br>"
  );
}

function calcArea(radius) {
  var result;
  result = 3.14159 * Math.pow(radius, 2);
  document.write(
    "The Area of circle having radius " +
      radius +
      " is " +
      result.toFixed(2) +
      "<br>"
  );
}
a = Number(prompt("Enter Radius"));
calcCircumference(a);
calcArea(a);

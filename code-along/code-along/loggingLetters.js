var friends = ["Aneki", "Quell", "Clarity", "Sleepy", "Roghar", "DM Crimson"];
var temp1 = new Array();
var temp2 = new Array();

for (var i=0; i<friends.length; i++) {
	if (i % 2 ==0) {
		temp1.push(friends[i]);
	} else {
		temp2.unshift(friends[i]);
	}
}

console.log(temp1);  // ["Aneki", "Clarity", "Roghar"]
console.log(temp2);  // ["DM Crimson", "Sleepy", "Quell"]
temp1.pop();  // ["Aneki", "Clarity"], take off the last element
temp2.shift();  // ["Sleepy", "Quell"], take off the first element
temp2[2] = "Test" // // ["Sleepy", "Quell", "Test"], add the new value
friends.slice(0,2)  // return ["Aneki", "Quell"]
friends.splice(0,2) // ["Clarity", "Sleepy", "Roghar", "DM Crimson"]


var sentence = "I love learning software development";
for (var i=0; i < sentence.length; i++) {
	if (sentence[i] !== " ") {
		console.log(sentence[i]);
	}
}


var n = 25;
var result = 0;

if (n % 2 == 0) {
	result = result + 10;
} else {
	result = result - n;
}
console.log(result);

var sum = 0;
for (var i=1; i<n; i++) {
	sum = sum + i;
}
console.log(sum);

console.debug();
console.info();
console.warn();
console.error();


var likesCake = confirm("Do you like cake?");
// If clicks the OK button, return true; clicks the Cancel button, return false
if (likesCake) {
    var favoriteCake = prompt("What is your favorite cake?");
    // If clicks the Cancel button, return null
    alert("Your favorite cake is: " + favoriteCake);
} else {
    alert("The cake is a lie anyhow.");
}


function sayHello(myName) {
    alert('Hello, ' + myName);
}
sayHello(prompt("What's your name?"));


function countingCharacters3(str, search){    
    var count = 0; // number found
    var numChars = search.length;
   
    var lastIndex = str.length - numChars;
    // Like the last example, we will use a for loop to go through our string
    // This time, we are looking for a series of characters - a substring
    for (var index = 0; index <= lastIndex; index++){
        // substring gets a part of a string from a start to end index
        var current = str.substring(index, index + numChars);
        // if the substring matches our series, increase our counter
        if (current == search){            
            count++;
        }
    }
    return count;
}


function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
 
for (var i = 0; i < 10; i++) {
  console.log(rollDice());
}


function addTwoNumbers(firstNumber, secondNumber){ 
    return firstNumber + secondNumber;
}



// In this exercise, we have an array of numbers
var testArray = [17, 42, 311, 5, 9, 10, 28, 7, 6];
// Let's get a sum of these elements
var sum = 0;
// We'll use a for loop to calculate that sum
for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
    // We'll use the unary addition operator 
    // to add the current element's value to the rolling sum
    sum += testArray[arrayPosition];
}
console.log("The sum of " + testArray + " is: " + sum);

console.log("The max value is: " + findMax(testArray));

function findMax(testArray) {
	var maxValue = 0;
	for (var i=0; i<testArray.length; i++) {
		if (maxValue < testArray[i]) {
			maxValue = testArray[i];
		}
	}

	return maxValue;
}
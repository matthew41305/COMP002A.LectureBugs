myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;
// arrays are always start at 0 so changed let statement to 0
// due to out of bounds error, we must remove the equal sign and make i < myGrades.length
for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);
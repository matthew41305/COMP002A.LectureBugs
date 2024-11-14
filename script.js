myGrades = [100, 100, 90, 73, 78, 94, 86];

myAverage = 0;
// arrays are always start at 0 so changed let statement to 0
// due to out of bounds error, we must remove the equal sign and make i < myGrades.length
for (let i = 0; i < myGrades.length; i++) {

myAverage += myGrades[i];

}

myAverage = myAverage / myGrades.length;

console.log("My grade average is " + myAverage);

// validating grades portion
function validateGrade(grade) {
    // grade must be entered as a number
    if (typeof grade !== 'number') {
        // if not a number, it wil throw this error message
        throw new Error("The value must be a number");
    }
    // sets values between 0-100 and will throw error message if it is not within this range
    if (grade < 0 || grade > 100) {
        throw new Error("The value must be between 0 and 100");
    }
    return grade;
}

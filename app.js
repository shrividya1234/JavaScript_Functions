// EXERCISE 1: Print Odds Continued
function printOdds(count) {
    if (count < 0) {
        console.log("Please provide a positive number.");
        return;
    }
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i);  // This will print the odd numbers
        }
    }
}

// EXERCISE 2: Legal
function checkAge(userName = 'User', age = 0) {
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age < 16) {
        console.log(belowSixteen);  // This will print if age is less than 16
    } else {
        console.log(aboveSixteen);  // This will print if age is 16 or above
    }
}

// EXERCISE 3:  Quadrant
function whichQuadrant(x, y) {
    if (x === 0 && y === 0) {
        console.log("The point is at the origin.");
    } else if (x === 0) {
        console.log(`(${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
        console.log(`(${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3.`);
    } else {
        console.log(`(${x}, ${y}) is in Quadrant 4.`);
    }
}

// EXERCISE 4: Triangle
function triangleType(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle";
    }
    if (a === b && b === c) {
        return "Equilateral triangle";
    } else if (a === b || b === c || a === c) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}

// BONUS EXERCISE 5: Data Plan Status
function dataPlanStatus(planLimit, day, usage) {
    const remainingDays = 30 - day;
    const averageDailyUse = planLimit / 30;
    const averageRemainingUse = (planLimit - usage) / remainingDays;

    console.log(`${day} days used, ${remainingDays} days remaining`);
    console.log(`Average daily use: ${(usage / day).toFixed(2)} GB/day`);

    if (usage / day > averageDailyUse) {
        console.log(`You are EXCEEDING your average daily use (${averageDailyUse.toFixed(2)} GB/day),`);
        const excessUsage = (usage / day - averageDailyUse) * 30;
        console.log(`continuing this high usage, you'll exceed your data plan by ${excessUsage.toFixed(2)} GB.`);
    } else if (usage / day < averageDailyUse) {
        console.log(`You are UNDER your average daily use (${averageDailyUse.toFixed(2)} GB/day),`);
        console.log(`you can afford to use ${(averageRemainingUse).toFixed(2)} GB/day for the rest of the month.`);
    } else {
        console.log(`You are right on track with your average daily use (${averageDailyUse.toFixed(2)} GB/day).`);
    }
}

// Test the functions with sample inputs
console.log("==========");
console.log("EXERCISE 1:");
printOdds(10);
console.log("==========");

console.log("EXERCISE 2:");
checkAge('Alice', 15);
checkAge('Bob', 18);
console.log("==========");

console.log("EXERCISE 3:");
whichQuadrant(0, 2);
whichQuadrant(1, 2);
whichQuadrant(-6, 18);
console.log("==========");

console.log("EXERCISE 4:");
console.log(triangleType(1, 2, 2));
console.log(triangleType(1, 1, 2));
console.log("==========");

console.log("EXERCISE 5:");
dataPlanStatus(100, 15, 56);
console.log("==========");

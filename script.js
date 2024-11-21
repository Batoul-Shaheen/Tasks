// Task 2
const numbers = [10, 55, 30, 70, 65];

function calculateSumAndAverage(numbers) {
    const totalSum = numbers.reduce((sum, num) => sum + num, 0);
    const average = totalSum / numbers.length;

    return { totalSum, average };
}

console.log(calculateSumAndAverage(numbers));


//  Task 3
const strings = ["We", "need", "to", "plan", "ahead", "plan", "ahead", "carefully"];

function removeDuplicates(array) {
    const uniqueArray = [...new Set(array)];
    return uniqueArray;
}

console.log(removeDuplicates(strings));

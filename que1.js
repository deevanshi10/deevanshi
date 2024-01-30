//Array Manipulation 
//Given an array of integers, write a javascript function to find and return the sum of all positive numbers in the array.


const arr = [-2, 5, 3, -8, 10, -4];
const sum = sumOfPositiveNumbers(arr);
console.log(sum);

//function to find and return the sum of all positive numbers in the array

function sumOfPositiveNumbers(arr) {
    //initialize a variable with 0
    let sum = 0;

    //iterate through each element in the array
    for (let i = 0; i < arr.length; i++) {
        //check for positive numbers
        if (arr[i] > 0) {
            //increment the sum with the positive number
            sum += arr[i];
        }
    }

    //return the final sum 
    return sum;
}


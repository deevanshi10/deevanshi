//Sort number in ascending order witout using array.sort().

let num = 8046957321;

//decalre an empty array
const arr = [];

// Extract digits from the number and store them in the array
while (num > 0) {
    let digit = parseInt(num % 10);
    arr.push(digit);
    num = parseInt(num / 10);
}

//sort in ascending order
for (let i = 0; i < arr.length - 1; i++) {

    for (let j = 0; j < arr.length - i; j++) {

        // Compare adjacent digits and swap if necessary
        if (arr[j] > arr[j + 1]) {

            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;

        }

    }
}
console.log(arr);



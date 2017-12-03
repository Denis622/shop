/**
 * bubble sort
 */

let numbersArray = [1, 4, 2, 5, 6, 3];

console.log(numbersArray);

for (let i = 0; i < numbersArray.length; i++) {

    for (let j = i; j < numbersArray.length; j++) {

        if (numbersArray[j] < numbersArray[i]) {
            let temp = numbersArray[j];
            numbersArray[j] = numbersArray[i];
            numbersArray[i] = temp;
        }
    }
}

console.log(numbersArray);
/**
 * bubble sort two
 */

let numberArray = [2, 5, 4, 1, 6, 9],
    i, j, k, n = numberArray.length;

console.log('Default: ' + numberArray);

for (j = 0; j < n; j++) {

    for (i = 0; i < n - 1; i++) {
        if (numberArray[i] > numberArray[i + 1]) {
            k = numberArray[i];
            numberArray[i] = numberArray[i + 1];
            numberArray[i + 1] = k
        }
    }
}

console.log('Direct: ' + numberArray);

for (j = 0; j < n; j++) {

    for (i = 0; i < n - 1; i++) {
        if (numberArray[i] < numberArray[i + 1]) {
            k = numberArray[i];
            numberArray[i] = numberArray[i + 1];
            numberArray[i + 1] = k
        }
    }
}

console.log('Revers: ' + numberArray);

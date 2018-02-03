let letter = 'o';
let text = 'Hello world';
let counter = 0;
let lettersInThePhrase = [];

for (let i = 0; i < text.length; i++) {
    if (text[i] === letter) {
        lettersInThePhrase.push(text[i]);
        counter += 1
    }
}

console.log('Letters: ' + lettersInThePhrase);
console.log('Here are ' + counter + ' letters "O" ');

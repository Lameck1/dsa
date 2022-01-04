// You're working on a secret team solving coded transmissions.

// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

// For example:

//   const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

// console.log(message.join(''));
// // Prints: 'steal pound cake'

// JavaScript
// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

function reverseChars(startIndex, endIndex, message) {
  while (startIndex < endIndex) {
    [message[startIndex], message[endIndex]] = [
      message[endIndex],
      message[startIndex],
    ];
    startIndex++;
    endIndex--;
  }
}

const reverseWords = (message) => {
  // Reverse the entire message
  reverseChars(0, message.length - 1, message);
  console.log(message);

  // Reverse each word
  let currentWordStartIndex = 0;
  for (let i = 0; i <= message.length; i++) {
    // If we reached the end of a word, reverse it
    if (i === message.length || message[i] === ' ') {
      reverseChars(currentWordStartIndex, i - 1, message);
      console.log(message);
      currentWordStartIndex = i + 1;
    }
  }
};

const message = [
  'c',
  'a',
  'k',
  'e',
  ' ',
  'p',
  'o',
  'u',
  'n',
  'd',
  ' ',
  's',
  't',
  'e',
  'a',
  'l',
];

reverseWords(message);

console.log(message.join(''));

/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the `greetAndUppercase` function. This function uses
 *    Async/Await. How is this function different than a regular (non-async)
 *    function? What is its return type?
 * 
 *  This is different than the other async functions  because this one stops its execution
 * while it 'awaits' the promises to be fulfilled. Once it is, a promise object is returned and it can
 * keep going throughout the execution of the function. 
 * 
 * 2. Uncomment block #1 and run the code using `node challenge3.js`. What is
 *    printed when we use `greetAndUppercase` like a regular function?
 * 
 *  It prints the promise object in a pending state. 
 * 
 * 3. Uncomment block #2 and run the code again. What happens now?
 * 
 * Now it prints out HELLO THERE, DUCKY because our .then was able to snag the resolved promise value
 * and log that to the console, where as before we were unable to since result was assigned a pending promise before it settled. 
 * 
 * 4. Write an asynchronous method 'spacer' that takes a string as input and 
 *    returns the input string with a space added between each character. You 
 *    can use your solution from Part 3.
 * 
 *    Call 'spacer' in the `greetAndUppercase` method and run your code again.
 *    You should see something like:
 * 
 *    'H E L L O   T H E R E ,   D U C K Y'
 * 
 * 
 *******************************************************************************
 */
/**
 * Asynchronously returns a spaced out string. far out bro
 * @param str The string to be spaced out 
 */
function spacer(str) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      if (typeof str === 'string'){
        resolve(str.split('').join(" "));
        } else {
          reject('Input must be a string!')
        }
      }, 2500);
  });
}
 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
 function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 500);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 500);
    });
}

async function greetAndUppercase(name) {
    greeting = await greet(name)
    uppercasedGreeting = await uppercaser(greeting)
    spacedOutUpperGreeting = await spacer(uppercasedGreeting)
    return spacedOutUpperGreeting
}

/* Uncomment me! #1 */
// result = greetAndUppercase('Ducky')
// console.log(result) 

/* Uncomment me! #2 */
greetAndUppercase('Ducky')
    .then(function(result) {
        console.log(result)
    })
    .catch(function(err) {
        console.log(err)
    })
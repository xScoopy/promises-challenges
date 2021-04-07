/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 *   We know the output will be in this order: Step 1, Step 3, Step 2, async action... because 
 *  after we log step 1 to the console, step 2 wont appear for at least 2 seconds after snooze is invoked, so step 3
 *  will print while we wait for 2 to finish it's timeout. 
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 *   The steps printed in the order i listed above. 
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 *  I think it will print in the same order as above. I think the timeout of 0ms is misleading
 * because i think the time it will take for it to address that, step 3 will have already printed. 
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');


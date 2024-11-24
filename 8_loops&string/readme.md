   <h1>JavaScript Loops and Control Flow</h1>

<div class="section">
        <h2>1. JavaScript for Loop</h2>
        <p>The JS for loop provides a concise way of writing the loop structure. It contains initialization, condition, and increment/decrement in one line, making it easier to debug.</p>
        <h3>Syntax</h3>
        <pre><code>for (initialization; testing condition; increment/decrement) {
    statement(s)
}</code></pre>
        <h3>Flowchart</h3>
        <p>
            Initialization condition: It initializes the variable and marks the start of a for loop. An already declared variable can be used or a variable can be declared, local to the loop only.<br>
            Test Condition: Used for testing the exit condition of a for loop. It must return a boolean value. It is also an Entry Control Loop as the condition is checked prior to the execution of the loop statements.<br>
            Statement execution: Once the condition is evaluated to be true, the statements in the loop body are executed.<br>
            Increment/Decrement: Used for updating the variable for the next iteration.<br>
            Loop termination: When the condition becomes false, the loop terminates marking the end of its life cycle.
        </p>
        <h3>Example</h3>
        <pre><code>// JavaScript program to illustrate for loop
let x;

// for loop begins when x = 2
// and runs till x <= 4
for (x = 2; x <= 4; x++) {
    console.log("Value of x: " + x);
}
        </code></pre>
        <p>Output:</p>
        <pre><code>Value of x: 2
Value of x: 3
Value of x: 4
        </code></pre>
    </div>
    <div class="section">
        <h2>2. JavaScript while Loop</h2>
        <p>The JS while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.</p>
        <h3>Syntax</h3>
        <pre><code>while (boolean condition) {
    loop statements...
}</code></pre>
        <h3>Flowchart</h3>
        <p>
            While loop starts with checking the condition. If it is evaluated to be true, then the loop body statements are executed. Otherwise, the first statement following the loop is executed. For this reason, it is also called an Entry control loop.<br>
            Once the condition is evaluated to be true, the statements in the loop body are executed. Normally, the statements contain an updated value for the variable being processed for the next iteration.<br>
            When the condition becomes false, the loop terminates which marks the end of its life cycle.
        </p>
        <h3>Example</h3>
        <pre><code>// JavaScript code to use while loop
let val = 1;

while (val < 6) {
    console.log(val); 
    val += 1;
}
        </code></pre>
        <p>Output:</p>
        <pre><code>1
2
3
4
5
        </code></pre>
    </div>
    <div class="section">
        <h2>3. JavaScript do-while Loop</h2>
        <p>The JS do-while loop is similar to the while loop, but the difference is that it checks for the condition after executing the statements. Therefore, it is an example of an Exit Control Loop. It executes loop content at least once even if the condition is false.</p>
        <h3>Syntax</h3>
        <pre><code>do {
    Statements...
} while (condition);</code></pre>
        <h3>Flowchart</h3>
        <p>
            The do-while loop starts with the execution of the statement(s). There is no checking of any condition for the first time.<br>
            After the execution of the statements and update of the variable value, the condition is checked for a true or false value. If it is evaluated to be true, the next iteration of the loop starts.<br>
            When the condition becomes false, the loop terminates marking the end of its life cycle.<br>
            It is important to note that the do-while loop will execute its statements at least once before any condition is checked and therefore is an example of an exit control loop.
        </p>
       
3
4
5
    </div>
        <h2>4. JavaScript for-in Loop</h2>
        <p>The JS for-in loop is used to iterate over the properties of an object. It iterates only over those keys of an object which have their enumerable property set to “true”.</p>
        <h3>Syntax</h3>
        <pre><code>for (let variable_name in object_name)
    </div>
 <div class="section">
        <h2>5. JavaScript for-of Loop</h2>
        <p>The JS for-of loop is used to iterate over iterable objects such as arrays, objects, sets, and maps. It directly iterates over the values of the given iterable object and has a more concise syntax than the for loop.</p>
        <h3>Syntax</h3>
        <pre><code>for (let variable_name of object_name) {
    // Statement
}</code></pre>
        <h3>Example</h3>
        <pre><code>
        let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log(value);
}</code></pre>
        <p>Output:</p>
        <pre><code>1
2
3
4
5
        </code></pre>
    </div>
  <div class="section">
        <h2>6. JavaScript Labeled Statement</h2>
        <p>The JS labeled statement allows you to label any statement in JavaScript. It is commonly used with `break` and `continue` statements for nested loops.</p>
        <h3>Syntax</h3>
        <pre><code>labelName: 
    statement (loop or block of code)</code></pre>
        <h3>Example</h3>
        <pre><code>let sum = 0, a = 1;
        // Label for outer loop 
outerloop: while (true) { 
    a = 1; 

    // Label for inner loop 
    innerloop: while (a < 3) { 
        sum += a; 
        if (sum > 12) { 

            // Break outer loop from inner loop 
            break outerloop; 
        } 
        console.log("sum = " + sum); 
        a++; 
    } 
}</code></pre>
        <p>Output:</p>
        <pre><code>sum = 1
sum = 3
sum = 4
sum = 6
sum = 7
sum = 9
sum = 10
sum = 12
        </code></pre>
    </div>
 <div class="section">
        <h2>7. JavaScript Break Statement</h2>
        <p>The JS break statement is used to terminate the execution of the loop or switch statement when the condition is true.</p>
        <h3>Syntax</h3>
        <pre><code>break;</code></pre>
        <h3>Example</h3>
        <pre><code>for (let i = 1; i < 6; i++) {
    if (i == 4) 
        break;
        
    console.log(i);
}</code></pre>
        <p>Output:</p>
        <pre><code>1
2
3
        </code></pre>
    </div>

<div class="section">
          <h2>8. JavaScript Continue Statement</h2>
        <p>The JS continue statement is used to break the current iteration of the loop and proceed with the next iteration.</p>
        <h3>Syntax</h3>
        <pre><code>continue;</code></pre>
        <h3>Example</h3>
        <pre><code>for (let i = 0; i < 11; i++) {
    if (i % 2 == 0) 
        continue;
        
    console.log(i);
}</code></pre>
        <p>Output:</p>
        <pre><code>1
3
5
7
9
        </code></pre>
    </div>
    <div class="section">
        <h2>9. JavaScript Infinite Loop (Loop Error)</h2>
        <p>An infinite loop occurs when a loop runs indefinitely without a terminating condition. This is a common error in programming.</p>
        <h3>Example</h3>
        <pre><code>// Infinite loop because condition is not false
// condition should have been i > 0.
for (let i = 5; i != 0; i -= 2) {
    console.log(i);
}

let x = 5;

// Infinite loop because update statement
// is not provided
while (x == 5) {
    console.log("In the loop");
}</code></pre>
        <p>Explanation:</p>
        <p>The first loop runs infinitely because `i != 0` will always be true (it should have been `i > 0`).<br>
        The second loop also runs infinitely because `x` is never updated inside the loop to break the condition `x == 5`.</p>
    </div>
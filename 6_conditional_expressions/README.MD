<br>
   <h2>JavaScript Popup Boxes</h2>
    <p>
        <strong>1. Alert box:</strong> An alert box is one type of popup boxes in JavaScript which
         is often used to make sure that information has come through to the user. So, the user will 
         have to click “OK” to proceed when an alert box pops up on the window.
    </p>
<br>
    <p>  <strong>Syntax:</strong></p>
    <br>
       <pre>
        <code>
window.alert("message");
// Another syntax to use alert box is:
alert("message");
    </pre>
        </code>
    <br>
    <p>
        <strong>2. Prompt box:</strong> It is also one of the types of popup boxes in JavaScript which is often used to take input a value before entering a page from the user. To proceed after entering an input value in the prompt, the user will have to click either “OK” or “Cancel”.
    </p>
    <p><strong>Syntax:</strong></p>
    <pre>
        <code>
window.prompt("some message");
// Another syntax to use alert box is:
prompt("some message");
    </pre>
        </code>
        <br>
    <h2>JavaScript Control Structures</h2>
    <br>
    <p><strong>if:</strong> Use the if statement to specify a block of JavaScript code to be executed if a condition is true.</p>
    <p><strong>Syntax:</strong></p>
    <pre>
        <code>
if (condition) {
    // block of code to be executed if the condition is true
}</pre>
        </code>
        <br>
    <p><strong>else:</strong> Use the else statement to specify a block of code to be executed if the condition is false.</p>
    <pre>
        <code>
if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}
        </pre>
        </code>
        <br>
    <p><strong>else if:</strong> Use the else if statement to specify a new condition if the first condition is false.</p>
    <p><strong>Syntax:</strong></p>
    <pre>
        <code>
if (condition1) {
    // block of code to be executed if condition1 is true
} else if (condition2) {
    // block of code to be executed if the condition1 is false and condition2 is true
} else {
    // block of code to be executed if the condition1 is false and condition2 is false
}
         </code>
    </pre>
    <br>
    <h2>Usage of JavaScript switch statement</h2>
    <p>JavaScript switch statement is used with a break or default keyword (optional and both can be used together also).</p>
    <p><strong>Syntax:</strong></p>
    <pre>
        <code>
switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    .
    .
    case valueN:
        statementN;
        break;
    default:
        statementDefault;
}
        </code>
    </pre>

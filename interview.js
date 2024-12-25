Q-1 What is Node.js
// Node.js is an open-source runtime environment that allows developers to run JavaScript code outside a web browser.
// It allows the use of JavaScript on both client-side and server-side.
// It uses asynchronous JavaScript without delaying; it jumps and executes new code.

Q-2 Event loops in Node.js
// console.log("start");
//
// setTimeout(() => {
//    console.log("xyz");
// }, 3000);
//
// setTimeout(() => {
//    console.log("abc");
// });

Q-3 Core modules in Node.js
// fileSystem 
// http and https
// Path
// console

Q-4 Purpose of the require() function in Node.js
// require() is used to import core modules, third-party modules, or local files into a Node.js application.
// It allows modularization of code and reusability by loading only the needed functionality.

Q-5 Difference between require and import in Node.js
// require follows the CommonJS module system, while import uses the ES module system.
// Syntax:
// require: const module = require('module');
// import: import module from 'module';
// require is default in Node.js, while import requires "type": "module" in package.json.

Q-6 Callbacks in Node.js
// A callback is a function passed as an argument to another function and executed after an operation is completed.
// Example:
// fs.readFile('file.txt', (err, data) => {
//    if (err) throw err;
//    console.log(data.toString());
// });

Q-7 What is npm in Node.js?
// npm stands for Node Package Manager.
// It is used to install, manage, and publish JavaScript packages.
// Example: npm install express

Q-8 Difference between process.nextTick(), setImmediate(), and setTimeout() in Node.js
// process.nextTick(): Executes a callback immediately after the current operation, before the event loop continues.
// setImmediate(): Executes a callback on the next iteration of the event loop.
// setTimeout(): Executes a callback after a specified delay (in milliseconds).

Q-9 How do you handle errors in Node.js?
// Use try...catch for synchronous code and proper error handling in callbacks for asynchronous code.
// Example:
// try {
//    // Some synchronous code
// } catch (err) {
//    console.error(err);
// }

Q-10 How do you handle errors in Node.js?
// Use error-first callbacks, promises with .catch(), or async/await with try...catch to handle errors properly.

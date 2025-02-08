# MongoDB $inc Operator Error

This repository demonstrates a common error when using MongoDB's `$inc` operator with the `findOneAndUpdate` method. The `$inc` operator is used to increment a numeric field in a document. However, if a non-numeric value is provided, the operation will fail.

The `bug.js` file shows the incorrect usage of `$inc`, while `bugSolution.js` provides the corrected code.

## How to reproduce the bug

1.  Ensure you have a MongoDB instance running.
2.  Create a collection called `myCollection` with a document that includes a numeric field named `counter`.
3.  Execute the code in `bug.js`.
4.  Observe the error message.

## How to fix the bug

The `bugSolution.js` file demonstrates the correct usage.  Make sure the value passed to `$inc` is a valid number.
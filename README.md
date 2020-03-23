ws_simple_test
==============

A basic example of testing with QUnit. You can use this to guide you in setting up testing in your projects.

Getting started:

```
npm i
npm test
```

If you want to add QUnit testing to your project, you will need the following:

1. add qunit as a dependency: `npm i --save-dev qunit`
2. create a file with the unit tests, like `test.js`, which tests your implementation (wherever it is; ours here is simply in `impl.js`)
3. add the `test` script in `package.json`:
  ```json
  "scripts": {
    "test": "qunit test.js"
  }
  ```
4. run `npm test`

Example task:
-------------

The following task might be attempted by starting from this repo:

**Task: Write unit tests for the following functions:**

- `findHighest(array)`
  – this function takes an array of numbers and returns the biggest number in the array
- `findSecondHighest(array)`
  – takes an array of at least two numbers and returns the second biggest number in the array
- `mean(array)`
  – takes an array of numbers and returns the mean of those numbers

We will give you several implementations of those functions as different node.js modules and you will run your tests to find defects. You will tell us which of the implementations is correct.

- For example, you might find that impl2 has a correct findHighest() and that impl4 has a correct findSecondHighest().
- We will strive to provide exactly one correct implementation of each function.

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

See [QUnit documentation](https://api.qunitjs.com/assert/) for reference.

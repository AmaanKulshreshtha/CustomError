# Empty Object Error

## Simplified using ES5

```javascript
  function EmptyObjectError (msg) {
    this.message = msg;
    this.name = this.constructor.name;

    //
    //    Why not going with Error.captureStackTrace
    //
    //    - We can't customise from which row of the stack do we want to see the errors.
    //    - First row will be the EmptyObjectError function
    //    - Second row will be the helper function in which we are utilising the custom error function
    //

   let stack = new Error().stack;
    // The trace is always returned in the form of a string
    if (typeof stack === 'string') {
        this.stack = defineStack(stack);
    } else {
        //
        //    This will call the inbuilt trace method
        //    - The second argument omits the current function from generated stack trace
        //    - Because of the constructor passed in the prototype, `this` refers to EmptyObjectError function
        //    - The stack trace will however include the util method
        //
        Error.captureStackTrace(this, this.constructor)
    }
}

EmptyObjectError.prototype = Object.create(Error.prototype, {
    // Without the following constructor, `this` would refer to the Error function i.e the parent function
    constructor: Object.assign(constructorConfig, {
        value: EmptyObjectError
    })
});
```
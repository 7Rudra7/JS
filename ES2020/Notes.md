# JavaScript

![alt text](icon.png)

1. Execution Context : Everything in JS executes in "Execution Context".

2. JS is a synchronous single-threaded language.

3. What happens when you run JS program?
   Execution Context is created in 2 phases
   1.Memory creation phase
   2.Code Execution phase
   -> Uses call stack for nested execution statrts with Global Exec Context()
   4."Call stack" Maintains the order of executution of context.
   aka "Execution context stack" or "Program Stack" or "Control Stack" or "Run time Stack" or "Machine stack".

4. this and window are created by JS at start of execution even with no code. We have several predefined methods here to use. We can refer to any global context variable and functions with window.variable OR this.variable Or simply variable.

5. undefined: undefined is allocated at memory allocation phase.
   When varaible is not found it gives "Not defined".
   undefined is a placeholder.

6. JS is a loosely typed language.

```js
var a = 10;
a = "hello "; // valid
```

7. a = undefined; // Not a good practice

8. Scope chain
   Global variable can be accesed within a function. However local function vaiables cannot be accessed in global level.
   Scope is dependent on the lexical environment. (Lexical is hierarchy)
   -> JS finds the variable in local memory , if not found goes to the parent EC using lexical referenece and it goes on until it finds.
   This is "Scope chain".

9. let & const declarations are Hoisted in temporal dead zone:
   These are hoiseted or memory is allocated in another meomory spaces than global.
   Temporal deadzone: The time until when the let and const are not assigned value is called temporal deadzone.
   -> we cannot do redeclaration on let again. It is strict than var.
   -> const should be initialized while declaration.

10. Block : is grouping multiple staements

```js
    {
    // aka Compound Statment
    }

    Block scpoe :
    {
    var a = 10; // we can access it out of this block
    let b = 20; // Can be accesed in the same block
    const c = 40; // Can be accesed in the same block
    }
```

11. Shadowing in JS:

```js
    var a = 100;
    {
    var a = 10; // a is shadowing
    console.log(a); // 10
    }
    console.log(a); // 10
    -> Value was modified to 10 becasue they have same memory location this is shadowing.

    let a = 100;
    {
    let a = 10; // a is shadowing
    console.log(a); // 10
    }
    console.log(a); // 100 in case of let & const. This is how let and const are block scoped.
```

12. Illegal shadowing:

```js
let a = 20;
{
  var a = 12; // Illegal shadowing
}
```

13. Closure
    Function alone with its lexical scope is Closure.
    Uses:
    ->Module Design pattern
    ->Currying
    ->Functions like once
    ->memoize
    ->maintaining state in async world
    ->setTimeouts
    ->Iterators

14. Q&a (https://youtu.be/t1nFAMws5FI?si=6SDGsik70PfZb91u)
    -> Closure & its example.(Rewatch for scope and all sceanrios you can run into)

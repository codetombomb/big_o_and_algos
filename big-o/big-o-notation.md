# Big O Notation

## Objectives 
- Motivate the need for something like Big O Notation
- Describe what Big O Notation is
- Simplify Big O Expressions 
- Define "time complexity" and "space complexity"
- Evaluate the time complexity and space complexity of different algorithms using Big O Notation
- Describe what a logarithm is
<br>

## Motivate the need for Big O Notation

Since there usually more than one way to accomplish a task, ***how are we to figure out what is best?***

That is really what Big O Notation is about. Big O is:

- a system for classifying code
- a way of generalizing code
- a way to compare code and its performance to other code.

Lets create an example:

>Write a function that accepts a string input and returns a reversed copy.

[Stack OverFlow post showing more than 10 different ways to accomplish this task.](https://stackoverflow.com/questions/958908/how-do-you-reverse-a-string-in-place-in-javascript) Which one is the best solution?

<table style='border: 2px solid black'>
    <tr>
        <th style='color: black; background-color: green; border: 2px solid black'>Great!</th>
    </tr>
    <tr>
        <th style='color: black; background-color: lightgreen; border: 2px solid black'>Pretty Good</th>
    </tr>
    <tr>
        <th style='color: black; background-color: yellow; border: 2px solid black'>Only OK</th>
    </tr>
    <tr>
        <th style='color: black; background-color: orange; border: 2px solid black'>Ehhhh</th>
    </tr>
    <tr>
        <th style='color: black; background-color: red; border: 2px solid black'>Awful</th>
    </tr>
</table>

Instead of saying something like great or awful for out code, we can hava numeric representation of the performance of code. So, that's what Big O is going to give us rather than colors and text. 

### Why does it matter if my code is efficient?

You might be wondering why it matters if the code is efficient. shouldn't it only matter that you got it to work?

Well, that's true in some cases depending on the project. When it really starts to matter is for things like:

- Technical Interviewing
- Code challenges
- Working with extremely large datasets 


It's important to have a precise vocabulary to talk about how our code performs because it is useful when discussing trade-offs between different approaches. 

When you code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications.

## Timing Our Code
### An Example

Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number *n*.

```javascript
function addUpTo(n){
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
```

Here is another approach...

```javascript 
function addUpTo(n){
    return n * (n + 1) /2
}
```
In the end, each of these approaches give us the same outcome but which one is better? What does *better* even mean? 

- faster? 
- Is it about how much memory is used?
- More readable? 

Often times, people focus on two of these main aspects:

\- How fast is it? and 

\- How much memory is used?

A lot of times, these three aspects will be affected by the other so there are trade-offs. Let's focus on speed for now.

How do we test to see how fast our code is? The simplest way that we could do this is to use JS's built-in timing functions. 

```javascript
function addUpTo(n){
    let total = 0;
    for (let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

let t1 = performance.now();
addUpTo(1000000000)
let t2 = performance.now();
console.log(`Time Elapsed ${(t1 - t2) / 1000} seconds.`)
```

### The Problem With Time 

The first problem is that different machines will record different times so it's not reliable. Depending on the specifications of a machine and what's currently happening on that machine (what code is running), the times will be different. This doesn't mean that the results will necessarily affect the outcome like one solution is suddenly faster than the other. But, it means that the margins could change and the actual measurements could be different and are almost guaranteed to be different times.

Second, the same machine will record different times. This just shows that this method of using the `performance.now()` method is not a precise way to evaluate the performance from one function to another. 

Lastly, for cases that require very precise speed measurements (like if we are comparing two really fast algorithms) the `performance.now()` method might not be precise enough to give a clear answer. 

So how can we walk through our code and talk in general terms about which code is better? That's where Big-O Notation comes in. 

## Counting Operations














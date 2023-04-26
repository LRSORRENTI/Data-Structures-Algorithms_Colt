// We want to create a function that will 
// calculate the sum of all numbers from 1 
// up to, and including some number n

 export function addUpTwo(num: number): number{
    let total: number = 0;
    for(let i = 0; i <= num; i++){
        total += i;
    }
    console.log(total)
    return total;
}
addUpTwo(6)
addUpTwo(100)

// So that's one solution, another solution is: 

export function addUpTo(n: number): number{
    console.log(n * (n + 1) / 2)
    return n * (n + 1) / 2
    // and essentially what's happening is 
    // we add 1 to n rightaway in the parens, 
    // then mulitply that by n, then divide by two
    // so for addUpTo(6) it goes: 

    // 6 * (6 + 1) / 2
    // 6 * (7) / 2
    // 42 / 2
    // 21

    // basic pemdas 

}

addUpTo(6)
addUpTo(100)

// The main thing we're trying to do is timing these 
// is which version is better? 

/* 

Why does it matter which version is better anyway?

Faster? 

Less memory intensive? 

More readable? 

More concise? 

All of these are valid concerns and it comes 
down to the situation

Most people agree that the first two, speed and 
memory are the most important

And often come at the expense of readability

First let's look at evaluating speed, how long 
does our code take to execute

How do we measure this?

One way is to use a built-in timing function

Something like this: 

*/

let t1 = performance.now();
addUpTo(100000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1)} seconds `)
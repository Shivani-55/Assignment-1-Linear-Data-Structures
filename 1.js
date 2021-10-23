// Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?

let arr = [ 1, 5, 7, -1, 5 ];

function printPairs(arr,sum)
{
    let count = 0; 
    for (let i = 0; i < arr.length; i++)
        for (let j = i + 1; j < arr.length; j++)
            if (arr[i] + arr[j] == sum)
                 console.log("(" + arr[i] + ", "
                    + arr[j] + ")" );
}
printPairs(arr,10);
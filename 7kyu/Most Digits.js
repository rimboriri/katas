/*
https://www.codewars.com/kata/58daa7617332e59593000006
Find the number with the most digits.
If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

const findLongest = a => {
    let longest = 0;
    for (let num of a) {
        if (num.toString().length > longest.toString().length) {
            longest = num;
        }
    }
    return longest;
}

const findLongest = a => a.reduce((a, b) => (b.toString().length > a.toString().length) ? b : a)
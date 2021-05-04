/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091
The main idea is to count all the occurring characters in a string.
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

const count = s => {
    const obj = {}
    // iterate over the string
    s.split('').forEach(char => {
        // is this char a key in the object?
        if (obj[char]) {
            // if yes: increment the value
            obj[char]++
        } else {
            // if not: add the key with value one
            obj[char] = 1;
        }
    })
    return obj;
}

const count = s => {
    const obj = {};
    [...new Set(s)].forEach(char => obj[char] = s.split(char).length - 1)
    return obj
}
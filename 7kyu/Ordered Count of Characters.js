/*
https://www.codewars.com/kata/57a6633153ba33189e000074/
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. 
For empty output return an empty list.
Example:
orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/

const orderedCount = text => {
    const array = text.split('');
    const noDuplicates = [...new Set(array)];
    // also removing the duplicates - using filter
    // const noDuplicates = text.split('').filter((char, i, arr) => {
    //   return arr.indexOf(char) === i
    // })
    return noDuplicates.map(char => [char, text.split(char).length - 1])
}

// turn string to array and filter out the duplicates
// map over the array and replace every character with an array 
// containing the character itself at index 0 and it's number of 
// occurences at index 1
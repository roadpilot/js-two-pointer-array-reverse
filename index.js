/*
Write a function that reverses a string. The input string is given as an array of characters s.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0
    let end = s.length-1
    while (start <= end){
        // console.log(start++,end--)
        [s[start++],s[end--]] = [s[end],s[start]]
    }
};

/* 
sort() method sorts the elements of an array "in place" and returns the sorted array. 
By default, the sort() method sorts values as strings in alphabetical and ascending order.

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

reverse() method reverses the elements of an array "in place". The first array element becomes the last, and the last becomes the first.
*/

let strings = ["def", "abc", "zzz"];
strings.sort();
console.log(strings); // ["abc", "def", "zzz"]

let nums = [5, 30, 1];
// nums.sort(); // [ 1, 30, 5 ] WHICH IS WRONG, sort() by default treats them as strings
nums.sort((a, b) => a - b); // Ascending | b - a for descending order
console.log(nums); 

let numsSorted = nums.toSorted((a, b) => b - a); // New sorted array in descending order - does not modify the original array
console.log(numsSorted); 
console.log(nums); // Original array remains unchanged  

/* 
JavaScript's sort() method has the following complexity:

Time Complexity:
    Average/Best case: O(n log n)
    Worst case: O(n²) - depends on the JavaScript engine implementation

Space Complexity:
    O(log n) to O(n) - depends on implementation

Important details:
Different engines use different algorithms:
    V8 (Chrome/Node.js): Uses Timsort (hybrid of merge sort and insertion sort)
        Time: O(n log n) average and worst case
        Space: O(n)

    SpiderMonkey (Firefox): Uses merge sort
        Time: O(n log n)
        Space: O(n)
    JavaScriptCore (Safari): Uses merge sort
        Time: O(n log n)
        Space: O(n)

Key points:
Modern engines (V8, SpiderMonkey) guarantee O(n log n) worst case
It's an in-place sort (modifies original array), but still needs O(n) auxiliary space internally
For small arrays (< 10 elements), some engines use insertion sort for better performance
*/
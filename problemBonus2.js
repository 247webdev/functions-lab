// Functions lab WDI-16 Day 3 HW for Christain Chandler

// Problem #bonus 5
function findLongestWord(passedArray) {
    if( passedArray.length < 1 ){
        return "The test array is empty";
    } else if(passedArray.length === 1) {
        return "The test array has only one string. Therefore, the longest word is: " + passedArray[0];
    } else {
        for( var i = 0, longestLength = 0; i < passedArray.length; i++ ){
            if( longestLength < passedArray[i].length ){
                longestLength = passedArray[i].length;
            }
        }
        return longestLength;
    }
}


// only one string
var testArray1 = ["Christain"];

// yellowish is longest
var testArray2 = ["The","quick","brown","fox","jumped","over","the","lazy","yellowish","dog."];

// one comparison
var testArray3 = ["General","Assembly"];

// empty array
var testArray4 = [];

// all equal length
var testArray5 = ["sun","get","put","sit","bye"];

findLongestWord(testArray5);
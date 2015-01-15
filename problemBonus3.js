// Functions lab WDI-16 Day 3 HW for Christain Chandler

// Problem #bonus 5
function filterLongWords(passedArray, passedLengthMin) {
    if( passedArray.length < 1 ){
        return "The test array is empty";
    } else if( passedLengthMin%1 > 0 && typeof passedLengthMin === "number" && !isNaN(passedLengthMin) ){
        return "The minimum length has to be an integer.";
    } else {
        for( var i = 0, arrayOfLongWords = []; i < passedArray.length; i++ ){
            if( passedArray[i].length > passedLengthMin ){
                arrayOfLongWords.push( passedArray[i] );
            }
        }
        return arrayOfLongWords;
    }
}


// only one string
var testArray1 = ["Christain"];

// yellowish is longest
var testArray2 = ["The","quick","brown","fox","jumped","over","the","lazy","yellowish","dog!"];

// one comparison
var testArray3 = ["General","Assembly"];

// empty array
var testArray4 = [];

// all equal length
var testArray5 = ["sun","get","put","sit","bye"];

filterLongWords(testArray1, 3);
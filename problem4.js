// Functions lab WDI-16 Day 3 HW for Christain Chandler

// Problem #4
function sumArray(passedArray) {
    for(var i = 0, runningTot = 0; i < passedArray.length; i++){
        runningTot += passedArray[i];
    }
    return runningTot;
}

function multiplyArray(passedArray) {
    for(var i = 0, runningTot = 1; i < passedArray.length; i++){
        runningTot *= passedArray[i];
    }
    return runningTot;
}

var testArray1 = [1,2,3,4,5];
var testArray2 = [5,4,3,2,1];
var testArray3 = [10,20,30,40,50];
var testArray4 = [7,5,9,3,-2];

sumArray(testArray1); // returns 15
multiplyArray(testArray4); // returns -1890
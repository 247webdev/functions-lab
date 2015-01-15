// Functions lab WDI-16 Day 3 HW for Christain Chandler

// Bonus Problem #1
function reverseString(passedString) {
    return passedString.split("").reverse().join("");
}

var testString1 = "Christain";
var testString2 = "The quick brown fox, jumped over the lazy yellow dog.";
var testString3 = "General Assembly";
var testString4 = "Wed Development Immersive";

reverseString(testString2); // returns ".god wolley yzal eht revo depmuj ,xof nworb kciuq ehT"
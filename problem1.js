//Functions lab WDI-16 Day 3 HW for Christian Chandler

// Problem #1
function maxOfTwoNumbers(a, b){
    if(a > b){
        return a;
    } else if (a < b) {
        return b;
    } else {
    	return "The two numbers are equal.";
    }
}

maxOfTwoNumbers(7, 1); // result is 7
maxOfTwoNumbers(4, 9); // result is 9
maxOfTwoNumbers(5, 5); // result is 9
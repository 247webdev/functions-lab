//Functions lab WDI-16 Day 3 HW for Christian Chandler
//*** see below for alternate solution if not using if-then-else construct ***

// Problem #1
function maxOfTwoNumbers(a, b){
    if(a > b){
        return a;
    } else {
        return b;
    }
}

maxOfTwoNumbers(7, 1); // result is 7
maxOfTwoNumbers(4, 9); // result is 9

/*         The following is an alternate syntax to using if-then-else construct...

function maxOfTwoNumbersAlternateSyntax(a, b){
    return (a > b ? a : b); 
}

maxOfTwoNumbersAlternateSyntax(6, 3);  // result is 6

 */

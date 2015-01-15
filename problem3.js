// Functions lab WDI-16 Day 3 HW for Christain Chandler

// Problem #3
function isAVowel(x){
    if( x === "a" || x === "e" || x === "i" || x === "o" || x === "u" ){
        return true;
    } else {
        return false;
    }
}

isAVowel("d");  // returns false

/*
	alt solution
	function isAVowel(x){
		var vowels = ["a","e","i","o","u"];
		if (vowels.indexOf(x) !== -1){
			return true;
		}
		return false;
	}
*/
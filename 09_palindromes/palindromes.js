const palindromes = function (string) {
	// Remove non-alphanumeric characters and convert to lowercase
	const cleanedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
	// Compare the cleaned string with its reverse
	return cleanedString === cleanedString.split('').reverse().join('');
};

// Test cases
console.log(palindromes('racecar')); // true
console.log(palindromes('tacos')); // false
console.log(palindromes('A car, a man, a maraca.')); // true
console.log(palindromes('Rats live on no evil star.')); // true

// Do not edit below this line
module.exports = palindromes;

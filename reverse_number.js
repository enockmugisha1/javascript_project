let x = 123;
let reversed = 0;

// Reverse the number using arithmetic operations
while (x > 0) {
    let digit = x % 10; // Extract the last digit
    reversed = reversed * 10 + digit; // Build the reversed number
    x = Math.floor(x / 10); // Remove the last digit
}

console.log(`Reversed number: ${reversed}`);



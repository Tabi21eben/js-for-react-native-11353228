// Function to process an array of numbers
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num ** 2; // Square the even numbers
        } else {
            return num * 3; // Triple the odd numbers
        }
    });
}

// Export the function for use in other files
module.exports = { processArray };


// Function to process an array of numbers
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num ** 2; // Square the even numbers
        } else {
            return num * 3; // Triple the odd numbers
        }
    });
}

// Function to format strings based on corresponding processed numbers
function formatArrayStrings(strings, processedNumbers) {
    return strings.map((str, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize if the number is even
        } else {
            return str.toLowerCase(); // Convert to lowercase if the number is odd
        }
    });
}

// Export the functions for use in other files
module.exports = { processArray, formatArrayStrings };

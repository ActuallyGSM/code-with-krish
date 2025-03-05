function getNumbers(num1, num2) {
    const num1Parsed = parseFloat(num1);
    const num2Parsed = parseFloat(num2);
    if (isNaN(num1Parsed) || isNaN(num2Parsed)) {
        return {
            status: 400,
            data: {
                error: 'NaN filtered out!'
            }
        };
    }
    return {
        status: 200,
        data: {
            min: Math.min(num1, num2),
        }
    };
}

function calculateAverage(num1, num2) {
    return (num1 + num2) / 2;
}

function sortNumbers(num1, num2) {
    return [num1, num2].sort((a, b) => a - b);
}

function countOccurrences(num1, num2) {
    const numbers = [num1, num2];
    return numbers.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});
}

module.exports = { getNumbers, calculateAverage, sortNumbers, countOccurrences };

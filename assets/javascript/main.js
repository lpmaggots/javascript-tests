// 1) Calculation of the SUM variable
function calculateSum() {
  let INDEX = 13, SUM = 0, K = 0;
  while (K < INDEX) {
      K = K + 1;
      SUM = SUM + K;
  }
  return SUM; // Expected output: 91
}

const calculateSumDiv = document.querySelector('.calculateSum');
calculateSumDiv.innerHTML = calculateSum();


// 2) Check if a number belongs to the Fibonacci sequence
function isFibonacci(number) {
  let a = 0, b = 1;
  while (b < number) {
      let temp = a + b;
      a = b;
      b = temp;
  }
  const result = number === b || number === 0 ? "The number belongs to the Fibonacci sequence." : "The number does NOT belong to the Fibonacci sequence."
  return result
}

const isFibonacciDiv = document.querySelector('.isFibonacci');
isFibonacciDiv.innerHTML = isFibonacci(21)

// 3) Revenue analysis
const monthlyRevenue = [
  { "day": 1, "value": 2000 },
  { "day": 2, "value": 1500 },
  { "day": 3, "value": 0 },
  { "day": 4, "value": 2500 },
  { "day": 5, "value": 3000 }
];

function analyzeRevenue(data) {
  const validValues = data.map(d => d.value).filter(v => v > 0);
  const min = Math.min(...validValues);
  const max = Math.max(...validValues);
  const average = validValues.reduce((acc, v) => acc + v, 0) / validValues.length;
  const daysAboveAverage = validValues.filter(v => v > average).length;
  
  const result = `
    Lowest revenue: ${min} |
    Highest revenue: ${max} |
    Days above average: ${daysAboveAverage}
  `
  return result
}

const monthlyRevenueDiv = document.querySelector('.monthlyRevenue');
monthlyRevenueDiv.innerHTML = analyzeRevenue(monthlyRevenue)

// 4) Calculation of revenue percentage by state
const revenueByState = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Others": 19849.53
};

function calculateRevenuePercentage(states) {
  const total = Object.values(states).reduce((acc, val) => acc + val, 0);
  for (let state in states) {
      const percentage = ((states[state] / total) * 100).toFixed(2);
      const result = `${state}: ${percentage}%`
      return result;
  }
}

const revenueByStateDiv = document.querySelector('.revenueByState');
revenueByStateDiv.innerHTML = calculateRevenuePercentage(revenueByState);

// 5) Reverse a string without using reverse()
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
  }
  return reversed
}

const reverseStringDiv = document.querySelector('.reverseString')
reverseStringDiv.innerHTML = reverseString("TargetSistemas")
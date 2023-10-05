const sumAll = function (min, max) {
  if (min <= 0 || max <= 0 || !Number.isInteger(min) || !Number.isInteger(max))
    return "ERROR";

  if (min > max) {
    let reassign = min;
    min = max;
    max = reassign;
  }
 
  let sum = 0;

  for (min; min < max; min++) {
    sum += min;
  }

  return sum + max;
};

// Do not edit below this line
module.exports = sumAll;

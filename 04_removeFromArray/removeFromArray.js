const removeFromArray = function (arr, n) {

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      arr.splice(1, 1);
    }
  }
};

// Do not edit below this line
module.exports = removeFromArray;

const palindromes = function (input) {
  let string = input.toLowerCase().replace(/[^a-z0-9]/g, "");

  let reversed = string.split("").reverse().join("");
  if (string === reversed) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;

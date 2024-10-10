//write your code here

const reverseString = (str) => {
  //   return str.slice(str[str - 1], -1);
  let result = "";
  for (i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
};

console.log(reverseString("hello"));

const reverseZigZagString = (str) => {
  let result = "";
  let isUpperCase = false;

  for (let i = str.length - 1; i >= 0; i--) {
    let char = str[i];
    if (isUpperCase) {
      result += char.toUpperCase();
    } else {
      result += char.toLowerCase();
    }
    isUpperCase = !isUpperCase;
  }
  return result;
};

console.log(reverseZigZagString("Hello"));

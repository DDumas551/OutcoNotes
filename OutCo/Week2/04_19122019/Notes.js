//MOAR Dynamic Programming
const minSubstring = (fullString, chars) => {
  //init result container to 0 and infinity
  //init hashmap to contain all chars
  // init missing chars to length of the chars
  // init start and end pointers

  //iterate end pointer from 0 to end of fullString
  // if encounter a target char
  //if char count is 0
  //decrement missing chars
  //increment count of found char

  //while missing chars === 0
  //check if we found a new min length subString
  //if true update result

  let result = [0, Infinity];
  let counts = {};
  for (char in chars) {
    counts[char] = 0;
  }
  missingChars = chars.length;

  let start = 0;

  // var left = 0;

  // var right = left + 1;
  // let shortestSub = fullString;
  // let lettersSeen = new Object(chars);
  // const recursive = (left, right) => {

  // }
};

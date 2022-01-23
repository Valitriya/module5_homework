let arr = [1, 34, "abc", {}, false, 5, null];
console.log(arr.length);
arr.forEach((element, index) => {
  console.log(`${index} - ${element}`);
});

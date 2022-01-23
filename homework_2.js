let x;
let result = typeof x;

switch (result) {
  case "number":
    console.log(x + " - это число");
    break;
  case "string":
    console.log(x + " - это строка");
    break;
  case "boolean":
    console.log(x + " - это логический тип");
    break;
  case "undefined":
    console.log(x + " - Тип x не определён");
}

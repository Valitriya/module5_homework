valueNumber = prompt("Введите, пожалуйста, значение");
valueNumber = +valueNumber;
console.log(typeof valueNumber);

if (isNaN(valueNumber) == true) {
  alert("Упс, кажется, вы ошиблись");
} else if (valueNumber % 2 == 0) {
  alert(valueNumber + " - это число чётное");
} else if (valueNumber % 2 != 0) {
  alert(valueNumber + " - это число нечётное");
}

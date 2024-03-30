const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log(evenNumbers);
console.log(oddNumbers);

const userList = [];

while (true) {
  const inputString = prompt("Введите одну из команд: stop, add, del.: ");
  const inputArray = inputString.split(", ");

  if (inputArray[0] === "add") {
    userList.push(inputArray[1]);
  }  else if (inputArray[0] === "del") {
    const userIndex = userList.findIndex(user => user === inputArray[1]);
    if (userIndex !== -1) {
      userList.splice(userIndex, 1);
    }
  } else if (inputArray[0] === "stop") {
    break;
  }

  console.log(userList);
}
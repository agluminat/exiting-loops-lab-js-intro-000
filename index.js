function breakOut(array, changeValue, stopValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === stopValue) {
      break
    }
    array[i] = changeValue
  }
}

// function keepGoing(array, changeValue, skipValue) {
//   for (let i = 0; i < array.length; i++) {
//     array.forEach(array[i] => changeValue)
//     if (array)
// }
//
// findBy(array, findFn) {
//
// }

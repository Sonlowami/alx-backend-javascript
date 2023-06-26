export default function appendToEachArrayValue(array, appendString) {
  for (let elem of array) {
    array[array.indexOf(elem)] = appendString + elem;
  }

  return array;
}


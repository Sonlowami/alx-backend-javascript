export default function appendToEachArrayValue(array, appendString) {
  for (const elem of array) {
    array[array.indexOf(elem)] = appendString + elem;
  }

  return array;
}

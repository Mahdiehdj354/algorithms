const binarySearch = (array, element, low = 0, high = array.length - 1) => {
  const middle = Math.floor((low + high) / 2);
  const middleItem = array[middle];
  if (low > high) return -1;
  if (middleItem > element) return binarySearch(array, element, 0, middle - 1);
  else if (middleItem < element)
    return binarySearch(array, element, middle + 1, high);
  else return middle;
};
const array = [2, 5, 8, 12, 16, 23, 38, 44, 56, 72, 91];
console.log(binarySearch(array, 6, 0));
console.log(binarySearch(array, 12, 0));

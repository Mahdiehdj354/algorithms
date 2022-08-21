function diffrenceOfArrays(array1, array2) {
  const diffrences = [];
  array1.map((item) => {
    if (!array2.includes(item)) diffrences.push(item);
  });
  return diffrences;
}

console.log(diffrenceOfArrays([1, 2, 3, 4, 5, 6], [2, 3, 5, 6]));

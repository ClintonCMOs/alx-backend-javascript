export function taskFirst() {
  // Declare a constant variable `task` and assign a string value to it.
  const task = "I prefer const when I can.";
  // Return the value of `task`.
  return task;
}

export function getLast() {
  // Return a string value.
  return " is okay";
}

export function taskNext() {
  // Declare a variable `combination` using let and assign a string value to it.
  let combination = "But sometimes let";
  // Concatenate the return value of `getLast` function to `combination`.
  combination += getLast();

  // Return the concatenated string.
  return combination;
}

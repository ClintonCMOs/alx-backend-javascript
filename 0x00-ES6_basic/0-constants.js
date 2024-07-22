export function taskFirst() {
  // Declare a variable `combination` using let and assign a string value to it.

  const task = "I prefer const when I can.";
  return task;
}

export function getLast() {
  return " is okay";
}

export function taskNext() {
  let combination = "But sometimes let";
  combination += getLast();

  return combination;
}

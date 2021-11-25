export function createFalseBooleanArray(length: number) {
  const array: Array<boolean> = [];
  for (let index = 0; index < length; index++) {
    array.push(false);
  }
  return array;
}

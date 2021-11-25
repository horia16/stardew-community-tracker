/**
 * Create a random string of a given length
 */
export default function randomString(length = 30) {
  return [...Array(length)].map(() => Math.random().toString(36)[2]).join("");
}

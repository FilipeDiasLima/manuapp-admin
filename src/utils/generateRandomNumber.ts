export function generateRandomNumber() {
  const max = 10000
  const min = 1
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
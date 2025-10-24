export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(randomInt(1, 100));
}

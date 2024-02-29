import { plus } from './mathlib';

function main() {
  console.log('Hello world!');
  console.log('4 + 5 =', plus(4, 5));
}

if (require.main === module) {
  main();
}

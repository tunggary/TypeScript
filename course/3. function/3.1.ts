//함수에 alias로 type지정가능
type Add = (a: number, b: number) => number;

const add = (a: number, b: number) => a + b;
const add2: Add = (a, b) => a + b;

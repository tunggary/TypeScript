//실제 많이 사용하는 경우

//1
function print<T>(a: T[]): T {
  return a[0];
}

const t1 = print<number>([1, 2, 3]);
const t2 = print<string>(["1", "2", "3"]);

//2
type GenericPlayer<T> = {
  name: string;
  extraInfo: T;
};

type Implementaion1 = { favFood: string };
type Implementaion2 = { address: string };

const james: GenericPlayer<Implementaion1> = {
  name: "james",
  extraInfo: {
    favFood: "kimchi",
  },
};

const peter: GenericPlayer<Implementaion2> = {
  name: "peter",
  extraInfo: {
    address: "peter@gmail.com",
  },
};

const owen: GenericPlayer<null> = {
  name: "owen",
  extraInfo: null,
};

//3
type A = Array<number>;
let arr: A = [1, 2, 3];

function printAllNumber(arr: A) {}

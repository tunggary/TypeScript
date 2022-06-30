//1. unknown
//type을 모르는 상태, type을 체크해야 다른 연산들을 진행할 수 있음
let a2: unknown;

//type체크를 안했기 때문에 error
// let b2 = a2 + 1;
if (typeof a2 === "number") {
  let b2 = a2 + 1;
}

//type체크를 안했기 때문에 error
// let b2 = a2.toLowerCase();
if (typeof a2 === "string") {
  let b2 = a.toLowerCase();
}

//2. void
// 함수에서 아무것도 return 하지 않으면 void를 return하는 것

//3. never
// 함수가 절대 return하지 않을 때 발생, 에러같은거 발생시켜서 종료됨, void도 return 하면 안됨
const hello = (): never => {
  throw new Error("error");
};

const func = (name: string | number) => {
  if (typeof name === "string") {
    name; //name => string
  } else if (typeof name === "number") {
    name; //name => number
  } else {
    name; //name => never
  }
};

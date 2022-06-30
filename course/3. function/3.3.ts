//polymorphism

type SuperPrint = {
  (arr: number[]): void;
  (arr: boolean[]): void;
  (arr: string[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4, 5]); // o
superPrint([true, false, true]); // o
superPrint(["a", "b", "c"]); // o
//가능하게 하려면 |을 이용해 모든 경우를 선언해줘야함
// superPrint(["a",1,true]) // x

// <Potata> => generic type으로 설정하면 실행시 실제 타입으로 적용됨(polymorphism)
// overriding, dynamic binding
type GenericPrint = <TypePlaceholder>(arr: TypePlaceholder[]) => void;

const genericPrint: GenericPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

genericPrint([1, 2, 3, 4, 5]); // o
genericPrint([true, false, true]); // o
genericPrint(["a", "b", "c"]); // o
genericPrint(["a", 1, true]); // o

// 그냥 (arr: any[]) => any 로 하면 되지 않음?
const test = genericPrint(["a", 1, true]); // o
// test.any() 이와같이 했을때 에러가 발생해야하는데 any로 하면 발생안됨, 실행시 에러가 발생

//여러개 generic
type MulriGenric = <T, M>(a: T[], b: M) => T;

//overloading
//함수의 param, return type을 여러개 지정해서 사용가능, overloading해서 사용가능
type OverLoadingAdd = {
  (a: number, b: number): number;
  (a: number, b: string): number;
  (a: number, b: number, number: number): number;
};

//param 갯수가 다른 경우, 가장 적은 것을 기준으로 나머지를 optional 설정해야됨
const overLoadingAdd: OverLoadingAdd = (a, b, c?: number) => {
  if (typeof b === "string") return a;
  if (c) return a + b + c;
  return a + b;
};

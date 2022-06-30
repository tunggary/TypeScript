//1. readonly
//readonly 타입을 지정할 수 있음, immutable의 특성을 가짐
type ReadOnlyPlayer = {
  readonly name: string;
  age?: number;
};

//readonly이기 때문에 error가 발생
const tunggary: ReadOnlyPlayer = {
  name: "nico",
};
// tunggary.name = "tunggary"

const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(5)

//2. Tuple
//특정개수와 특정위치의 type을 지정할 수 있음
const TuplePlayer: [string, number, boolean] = ["nico", 12, false];
//tuple로 지정되어있기 때문에 error가 발생
//player[0] = 1

//3. any
//type을 지정안하고, ts도 추론이 안되면 type이 any가 됨 => 많이 사용하면 안좋음, ts를 비활성화 시킴
let array = [];

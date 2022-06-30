//특정 값으로만 타입 지정가능
type Team = "red" | "blud" | "yellow";
type Health = 1 | 5 | 10;

//interface 오브젝트의 모양을 결정(type과 비슷)
//interface는 오로지 오브젝트의 모양을 결정
//type은 이외에도 특정값으로 제한할수도 있고, alias를 만들 수도 있음
interface Person {
  nickname: string;
  team: Team;
  health: Health;
}

const BK: Person = {
  nickname: "nico",
  team: "yellow",
  health: 1,
};

//interface와 type은 상속이 가능
interface Person1 {
  readonly name: string;
}

interface Employer extends Person1 {
  job: string;
}

type Person2 = {
  readonly name: string;
};

type Employee = Person2 & {
  job: string;
};

const MM: Employer = {
  name: "성윤",
  job: "front-end",
};

const MM2: Employee = {
  name: "성윤",
  job: "front-end",
};

// 다른점 interface는 동일한 이름의 interface를 합쳐줄 수 있음, type은 안됨
interface Test {
  name: string;
}

interface Test {
  lastName: string;
}

const MM3: Test = {
  name: "hi",
  lastName: "dsf",
};

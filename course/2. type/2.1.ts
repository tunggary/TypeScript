//type지정을 안하면 ts가 추론함
let a = "hello";
a = "bye";

//ts가 a는 string으로 추론했기 때문에 에러발생
// a = 1

// :을 통해서 type을 지정할 수 있음, ts가 많이 추론하도록 하는게 좋음 => 타이핑 시간 줄일 수 있음
let b: boolean = true;
let c: number[] = [1, 2, 3];
let player = {
  name: "nico",
}; //ts가 추론
// player.hello()

const playerNico: {
  name: string;
  age?: number; //age를 선택적으로 넣고 싶을때
} = {
  name: "nico",
};

//아래와 같은 코드는 error 발생 => age가 undefind 일 수 있기 때문에
// if (playerNico.age < 10) {}

//다음과 같이 명시해야함 => 보호장치
if (playerNico.age && playerNico.age < 10) {
}

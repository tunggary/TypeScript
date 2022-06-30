//type이 중복 될때 하나의 alias type을 지정할 수 있음
type Player = {
  name: string;
  age?: number;
};

const nico: Player = {
  name: "nico",
};

const lynn: Player = {
  name: "lynn",
  age: 31,
};

//object말고도 다른 type에도 적용가능
type Age = number;
type Name = string;
type NewPlayer = {
  name: Name;
  age?: Age;
};

//함수에도 type 적용가능, return type을 지정해주지 않으면 jin의 age를 설정할때 error 발생
const playerMaker = (name: string): Player => {
  return {
    name,
  };
};
const jin = playerMaker("jin");

//playerMaker의 return type을 지정해주지 않으면 error 발생
jin.age = 12;

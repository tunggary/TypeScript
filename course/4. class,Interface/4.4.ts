interface Developer {
  firstName: string;
  lastName: string;
  getFullName(): string;
}

type Level = "gold" | "silver" | "bronze";

interface Member {
  level: Level;
}

//interface를 이용하여 super class를 구현하면 JS로 컴파일될때 super class가 따로 생기지 않음 => 가벼워짐
//abstract class를 이용하는 경우 컴파일시 abstract class가 그대로 JS로 바뀌어서 interface보다 무거음
class ClientDeveloper implements Developer, Member {
  constructor(
    public firstName: string, //
    public lastName: string,
    public level: "gold"
  ) {}

  getFullName(): string {
    return `${this.lastName} ${this.firstName}`;
  } 
}

//함수에서도 interface를 유용하게 사용할 수 있음
//굳이 new Developer와 같이 class를 이용해서 할 필요 없음
function makeDeveloper(developer: Developer): Developer {
  return { ...developer };
}
const bob = makeDeveloper({
  firstName: "성윤",
  lastName: "정",
  getFullName: () => "정성윤",
});

// abstract class는 인스턴스화 될 수 없음
abstract class User {
  constructor(protected firstName: string, private lastName: string, public nickname: string) {}

  public getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  private getLastName() {
    return this.lastName;
  }
  //abstract 함수로 지정하면 abstract class 에서는 call signature만 적어줌
  abstract getFirstName(): string;
}

//구현
class Player1 extends User {
  //abstract 함수의 실제 구현은 상속받은 함수에서 반드시 구현해줘야함 (polymorphism을 활용하기 위함)
  getFirstName() {
    return this.firstName;
  }
}

//abstract class는 instance화 될 수 없음
// const nico = new User("nico", "las", "니꼬");
const nicos = new Player1("nico", "las", "니꼬");

nicos.getFullName();
//private 메소드라 상속안됨
// nico.getLastName()

//컴파일 안됨
// nico.firstName

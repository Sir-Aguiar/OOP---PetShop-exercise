export class Parent {
  constructor(public name: string, public age: number, private cpf: string) {}
  get basic_infos() {
    return { name: this.age, age: this.age, cpf: this.cpf };
  }
}

import { Parent } from "./Parent";
import { Animal } from "./Animal";
export class Pet extends Animal {
  private readonly registration_id = new Date().valueOf();
  constructor(public name: string, public age: number, primitive_info: IAnimal, public parent: Parent | null) {
    const { order, family, weight, size, gender, specie, breed } = primitive_info;
    super(order, family, weight, size, gender, specie, breed);
  }
  public displayBasicInfos() {
    console.log({
      name: this.name,
      age: this.age,
      specie: this.specie,
      breed: this.breed,
    });
  }
  get _id() {
    return this.registration_id;
  }
}

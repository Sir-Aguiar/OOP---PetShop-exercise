export abstract class Animal implements IAnimal {
  constructor(
    public order: string,
    public family: string,
    public weight: number,
    public size: number,
    public gender: string,
    public specie: string,
    public breed: string
  ) {}
  public displayPrimitiveInfos() {
    console.log({
      order: this.order,
      family: this.family,
      weight: this.weight,
      size: this.size,
      gender: this.gender,
      specie: this.specie,
      breed: this.breed,
    });
  }
}

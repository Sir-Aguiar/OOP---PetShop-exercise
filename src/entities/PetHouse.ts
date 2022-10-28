import { Pet } from "./Pet";
import { Parent } from "./Parent";
export class PetHouse {
  private pet_repository: Pet[] = [];
  public getBreed(breed: string | string[]) {
    if (typeof breed == "string") {
      return this.pet_repository.map((pet) => pet.breed === breed);
    }
    if (typeof breed == "object") {
      return this.pet_repository.map((pet) => breed.includes(pet.breed));
    }
  }
  public getSpecie(specie: string | string[]) {
    if (typeof specie == "string") {
      return this.pet_repository.map((pet) => pet.specie === specie);
    }
    if (typeof specie == "object") {
      return this.pet_repository.map((pet) => specie.includes(pet.specie));
    }
  }
  public donate(pet: Pet) {
    if (this.pet_repository.find((repo_pet) => repo_pet._id === pet._id)) {
      throw new Error("This pet is already with us");
    }
    console.log(`Thanks, ${pet.parent?.name} for creating this amazing beeing, ${pet.name} is with us from now on`);
    pet.parent = null;
    this.pet_repository.push(pet);
  }
  public adpot(person: Parent, pet: number) {
    const found_pet = this.pet_repository.find((repo_pet) => repo_pet._id === pet);
    if (!found_pet) {
      throw new Error("This pet doesn't exists");
    }
    const adopted_pet = this.pet_repository.splice(this.pet_repository.indexOf(found_pet), 1)[0];
    return `Congratulations, you've been adopted ${adopted_pet.name}`;
  }
}

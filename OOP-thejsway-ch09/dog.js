/**
 * DOGS
 * 
 * Complete the following program to add the definition of the Dog class.
*
* Dogs taller than 60 emote "Grrr! Grrr!" when they bark, other ones yip "Woof! *  Woof!".
 */

// TODO: define the Dog class here

class Dog {
  constructor(name, species, size) {
    this.name = name,
    this.species = species,
    this.size = size
    // this.bark = null
  }
  
  bark() {
    this.size > 60 
      ? this.bark = "Grrr! Grrr!" 
      : this.bark = "Woof! Woof!"
      return this.bark
  }

  describe() {
    return `${this.name} is a ${this.species} dog measuring ${this.size}`
  }
}


const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);
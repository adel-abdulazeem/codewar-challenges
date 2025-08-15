



// class that takes 4 arg and comes with 2 methods






class Person {
    constructor(firstName = 'John',lastName= 'Doe',age = 0,gender= 'Male',raceName){
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.gender = gender
    }
    sayFullName(){
      return `${this.firstName} ${this.lastName}`
    }
   static greetExtraTerrestrials(raceName){
      return `Welcome to Planet Earth ${raceName}`
    }
  }
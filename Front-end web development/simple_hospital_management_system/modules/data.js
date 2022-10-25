// Represent a data
module.exports = class Data {
  constructor(personalNumber, name, gender, age, address, phoneNumber, disease, comment) {
    // Add data properties
    this.personalNumber = personalNumber;
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.disease = disease;
    this.comment = comment;
  }

  // Describe the data as a string
  toString() {
    if (this.gender.toLowerCase() == "f")
    return `${this.personalNumber}: ${this.name} is ${this.age}, she lives at ${this.address}, her phone number is ${this.phoneNumber},
     she is sick with ${this.disease} disease, the comment from her doctor is ${this.comment}`;
    else 
    return `${this.personalNumber}: ${this.name} is ${this.age}, he lives at ${this.address}, his phone number is ${this.phoneNumber},
     he is sick with ${this.disease} disease, the comment from his doctor is ${this.comment}`;
  }
};
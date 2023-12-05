class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  confrontaEta(altroUtente) {
    if (this.age > altroUtente.age) {
      return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
    } else if (this.age < altroUtente.age) {
      return `${this.firstName} è più giovane di ${altroUtente.firstName}`;
    } else {
      return `${this.firstName} ha la stessa età di ${altroUtente.firstName}`;
    }
  }
}

const utenteX = new User("Francesco", "Esposito", 28, "Napoli");
const utenteY = new User("Alessandro", "Capasso", 25, "Roma");

const risultatoConfronto = utenteX.confrontaEta(utenteY);

console.log(risultatoConfronto);

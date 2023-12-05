class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  condividiProprietario(pet) {
    return this.ownerName === pet.ownerName;
  }
}

function creaPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const nuovoPet = new Pet(petName, ownerName, species, breed);

  aggiungiPetAllaLista(nuovoPet);

  document.getElementById("petForm").reset();
}

function aggiungiPetAllaLista(pet) {
  const listaPet = document.getElementById("listaPet");
  const listItem = document.createElement("li");
  listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
  listaPet.appendChild(listItem);
}

// Salon object literal
const salon = {
  name: "Happy Paws Pet Salon",
  phone: "555-123-4567",
  address: {
    street: "123 Pet Street",
    city: "Pawville",
    state: "CA"
  },
  hours: {
    open: "9:00 AM",
    close: "6:00 PM"
  }
};

// Pet constructor
class Pet {
  constructor(name, age, gender, breed, service, type) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.type = type;
  }
}

// Load pets from localStorage or initialize with defaults
let pets = JSON.parse(localStorage.getItem("pets")) || [
  new Pet("Bella", 3, "Female", "Golden Retriever", "Grooming", "Dog"),
  new Pet("Max", 5, "Male", "Bulldog", "Bath", "Dog"),
  new Pet("Luna", 2, "Female", "Poodle", "Haircut", "Dog")
];

// Save pets to localStorage
function savePets() {
  localStorage.setItem("pets", JSON.stringify(pets));
}

// Display salon info
function displaySalonInfo() {
  const info = document.getElementById("salonInfo");
  if (!info) return;
  info.innerHTML = `
    <h2>${salon.name}</h2>
    <p><strong>Phone:</strong> ${salon.phone}</p>
    <p><strong>Address:</strong> ${salon.address.street}, ${salon.address.city}, ${salon.address.state}</p>
    <p><strong>Hours:</strong> ${salon.hours.open} - ${salon.hours.close}</p>
  `;
}

// Display pet count
function displayPetCount() {
  const count = document.getElementById("petCount");
  if (!count) return;
  count.textContent = `Total Pets Registered: ${pets.length}`;
}

// Display pets in table
function displayRow() {
  const tableBody = document.getElementById("petTable");
  if (!tableBody) return;
  tableBody.innerHTML = "";

  pets.forEach(pet => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pet.name}</td>
      <td>${pet.age}</td>
      <td>${pet.gender}</td>
      <td>${pet.breed}</td>
      <td>${pet.service}</td>
      <td>${pet.type}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Register new pet
const form = document.getElementById("petForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const newPet = new Pet(
      document.getElementById("petName").value,
      document.getElementById("petAge").value,
      document.getElementById("petGender").value,
      document.getElementById("petBreed").value,
      document.getElementById("petService").value,
      document.getElementById("petType").value
    );

    pets.push(newPet);
    savePets(); // Save to localStorage

    alert(`${newPet.name} has been registered!`);
    form.reset(); // Clear form
  });
}

// Run displays when on index.html
if (document.body.contains(document.getElementById("salonInfo"))) {
  displaySalonInfo();
  displayPetCount();
  displayRow();
}

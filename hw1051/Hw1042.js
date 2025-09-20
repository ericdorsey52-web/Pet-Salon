// Create pets array with 3 objects
let pet = [
  {
    name: "Bella",
    age: 3,
    gender: "Female",
    service: "Grooming",
    breed: "Golden Retriever"
  },
  {
    name: "Max",
    age: 5,
    gender: "Male",
    service: "Bath & Nail Trim",
    breed: "Bulldog"
  },
  {
    name: "Luna",
    age: 2,
    gender: "Female",
    service: "Full Spa Package",
    breed: "Poodle"
  }
];

/**
 * Display total number of pets in the salon
 */
function displayPetCount() {
  document.getElementById("petCount").textContent = pet.length;
}

/**
 * Display names of pets in the list section
 */
function displayPetNames() {
  let list = document.getElementById("petList");
  list.innerHTML = ""; // clear old list

  for (let i = 0; i < pet.length; i++) {
    let li = document.createElement("li");
    li.textContent = pet[i].name;
    list.appendChild(li);
  }
}

// Initialize on page load
window.onload = function() {
  displayPetCount();
  displayPetNames();
};
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

// Display pet list
function displayPetList() {
  const list = document.getElementById("petList");
  if (!list) return;
  list.innerHTML = "";
  pets.forEach(pet => {
    const div = document.createElement("div");
    div.classList.add("pet-item");
    div.innerHTML = `<strong>${pet.name}</strong> (${pet.type}) - ${pet.breed}, ${pet.service}`;
    list.appendChild(div);
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
  displayPetList();
}

// Run displays when on registration page
if (document.body.contains(document.getElementById("petForm"))) {
  displayPetCount();
}

function registerPetFromForm() {
  // get form values
  const name = $("#petName").val().trim();
  const age = $("#petAge").val().trim();
  const gender = $("#petGender").val().trim();
  const breed = $("#petBreed").val().trim();
  const service = $("#petService").val().trim();
  const type = $("#petType").val().trim();
  const color = $("#petColor").val().trim();
  const paymentMethod = $("#petPayment").val().trim();
  const fileInput = $("#petImage")[0];
  let imageURL = "images/default-pet.png";

  if (fileInput && fileInput.files.length > 0) {
    imageURL = URL.createObjectURL(fileInput.files[0]);
  }

  // remove old red borders
  $("input, select").removeClass("is-invalid");

  // validation check
  let isValid = true;
  $("#registerForm input, #registerForm select").each(function () {
    if ($(this).val().trim() === "") {
      $(this).addClass("is-invalid"); // bootstrap red border
      isValid = false;
    }
  });

  if (!isValid) return; // stop if validation failed

  // create new Pet (or Service) object
  const newPet = new Pet(name, Number(age), gender, breed, service, type, color, paymentMethod, imageURL);
  salon.pets.push(newPet);

  // update table
  displayRow(newPet);

  // clear form
  $("#registerForm")[0].reset();
}
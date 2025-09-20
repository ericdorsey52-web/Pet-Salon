// Initialize pets array with 3 pets
const pets = [
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
service: "Haircut",
breed: "Poodle"
}
];


// Function to display pet count
function displayPetCount() {
document.getElementById("petCount").innerText = `Total Pets Registered: ${pets.length}`;
}


// Function to display pet names
function displayPetNames() {
let petNamesDiv = document.getElementById("petNames");
petNamesDiv.innerHTML = ""; // Clear previous content


for (let i = 0; i < pets.length; i++) {
let petItem = document.createElement("div");
petItem.classList.add("pet-item");
petItem.textContent = pets[i].name;
petNamesDiv.appendChild(petItem);
}
}


// Call functions to display data
displayPetCount();
displayPetNames();
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
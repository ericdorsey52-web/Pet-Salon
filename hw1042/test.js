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
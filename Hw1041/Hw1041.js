// Create pets array with 3 objects
let pets = [
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
  document.getElementById("petCount").textContent = pets.length;
}

/**
 * Display names of pets in the list section
 */
function displayPetNames() {
  let list = document.getElementById("petList");
  list.innerHTML = ""; // clear old list

  for (let i = 0; i < pets.length; i++) {
    let li = document.createElement("li");
    li.textContent = pets[i].name;
    list.appendChild(li);
  }
}

// Initialize on page load
window.onload = function() {
  displayPetCount();
  displayPetNames();
};
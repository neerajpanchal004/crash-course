// fill in javascript code here

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
  
    // Fetching input values
    const name = document.getElementById("name").value;
    const employeeID = document.getElementById("employeeID").value;
    const department = document.getElementById("department").value;
    const exp = parseInt(document.getElementById("exp").value);
    const email = document.getElementById("email").value;
    const mbl = document.getElementById("mbl").value;
  
    // Assigning role based on experience
    let role;
    if (exp > 5) {
      role = "Senior";
    } else if (exp >= 2 && exp <= 5) {
      role = "Junior";
    } else {
      role = "Fresher";
    }
  
    // Creating table row
    const table = document.querySelector("tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${employeeID}</td>
      <td>${department}</td>
      <td>${exp}</td>
      <td>${email}</td>
      <td>${mbl}</td>
      <td>${role}</td>
      <td><button class="delete-btn">Delete</button></td>
    `;
  
    // Adding delete functionality
    const deleteButton = newRow.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
      newRow.remove();
    });
  
    // Appending row to table
    table.appendChild(newRow);
  
    // Resetting form fields after submission
    event.target.reset();
  }
  
  // Event listener for form submission
  document.querySelector("form").addEventListener("submit", handleSubmit);
  
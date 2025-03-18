document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed!");
  
    const title = document.querySelector("h1");
    title.style.color = "blue"; 
    title.style.textAlign = "center"; 
  
    const paragraph = document.querySelector("p");
    paragraph.innerHTML += " <strong>JavaScript is now modifying this!</strong>";
  
    const tableBody = document.querySelector("tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>script</td><td>block</td>`;
    tableBody.appendChild(newRow);
  });
  
let i = 1;
function handleSave() {
  const name = document.querySelector("#name");
  const weight = document.querySelector("#weight");
  const image = document.querySelector("#image");
  const table = document.querySelector("#table tbody");

  const tr = document.createElement("tr");
  const idCol = document.createElement("td");
  const nameCol = document.createElement("td");
  const weightCol = document.createElement("td");
  const imageCol = document.createElement("td");
  const buttonCol = document.createElement("td");

  const theImage = document.createElement("img");

  const deleteButton = document.createElement("button");
  const editButton = document.createElement("button");

  const nameForm = document.createElement("input");
  const weightForm = document.createElement("input");
  const imageForm = document.createElement("input");

  nameForm.type = "text";
  weightForm.type = "number";
  imageForm.type = "url";

  theImage.src = image.value;

  deleteButton.textContent = "Hapus";
  deleteButton.onclick = (e) => {
    table.removeChild(tr);
  };
  deleteButton.classList = "delete";

  editButton.textContent = "Edit";
  editButton.classList = "edit";
  editButton.onclick = (e) => {
    if (e.target.textContent == "Edit") {
      e.target.textContent = "Save";

      nameForm.value = nameCol.textContent;
      weightForm.value = parseInt(weightCol.textContent);
      imageForm.value = theImage.src;

      nameCol.innerHTML = "";
      weightCol.innerHTML = "";
      imageCol.innerHTML = "";

      nameCol.appendChild(nameForm);
      weightCol.appendChild(weightForm);
      imageCol.appendChild(imageForm);
    } else {
      e.target.textContent = "Edit";

      theImage.src = imageForm.value;

      nameCol.innerHTML = nameForm.value;
      weightCol.innerHTML = weightForm.value + "kg";
      imageCol.innerHTML = "";
      imageCol.appendChild(theImage);
    }
  };

  if (weight.value > 5) weightCol.style.backgroundColor = "red";

  idCol.textContent = i++;
  nameCol.textContent = name.value;
  weightCol.textContent = weight.value + "kg";

  imageCol.appendChild(theImage);

  buttonCol.appendChild(deleteButton);
  buttonCol.appendChild(editButton);
  tr.appendChild(idCol);
  tr.appendChild(nameCol);
  tr.appendChild(weightCol);
  tr.appendChild(imageCol);
  tr.appendChild(buttonCol);
  table.appendChild(tr);
}

const serverUrl = "http://localhost:4000";

const contentElement = document.getElementById("content");

// Create and return a DOM element for showing a data
const showDataElement = data => {
  // Create DOM element for personalNumber
  const personalNumberElement = document.createElement("span");
  personalNumberElement.classList.add("dataText");
  personalNumberElement.appendChild(document.createTextNode(`Personal number: ${data.personalNumber}. `));

  // Create DOM element for name
  const nameElement = document.createElement("span");
  nameElement.classList.add("dataText");
  nameElement.appendChild(document.createTextNode(`Name: ${data.name}. `));

  // Create DOM element for gender
  const genderElement = document.createElement("span");
  genderElement.classList.add("dataText");
  genderElement.appendChild(document.createTextNode(`Gender: ${data.gender}. `));

  // Create DOM element for age
  const ageElement = document.createElement("span");
  ageElement.classList.add("dataText");
  ageElement.appendChild(document.createTextNode(`Age: ${data.age}. `));

  // Create DOM element for address
  const addressElement = document.createElement("span");
  addressElement.classList.add("dataText");
  addressElement.appendChild(document.createTextNode(`Address: ${data.address}. `));

  // Create DOM element for phoneNumber
  const phoneNumberElement = document.createElement("span");
  phoneNumberElement.classList.add("dataText");
  phoneNumberElement.appendChild(document.createTextNode(`Phone number: ${data.phoneNumber}. `));

  // Create DOM element for disease
  const diseaseElement = document.createElement("span");
  diseaseElement.classList.add("dataText");
  diseaseElement.appendChild(document.createTextNode(`Disease: ${data.disease}. `));

  // Create DOM element for comment
  const commentElement = document.createElement("span");
  commentElement.classList.add("dataText");
  commentElement.appendChild(document.createTextNode(` Comment: ${data.comment}.` ));

  // Create DOM element for data
  const dataElement = document.createElement("div");
  dataElement.classList.add("data");
  dataElement.appendChild(personalNumberElement);
  dataElement.appendChild(nameElement);
  dataElement.appendChild(genderElement);
  dataElement.appendChild(ageElement);
  dataElement.appendChild(addressElement);
  dataElement.appendChild(phoneNumberElement);
  dataElement.appendChild(diseaseElement);
  dataElement.appendChild(commentElement);

  return dataElement;
};

// Create and return a DOM input element
// Parameters are name, placeholder text and input size
// Design Input box
const createInputElement = (name, placeholder, size) => {
  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.setAttribute("name", name);
  inputElement.setAttribute("placeholder", placeholder);
  inputElement.setAttribute("size", size);
  inputElement.setAttribute("required", "true");
  inputElement.classList.add("form-control");
  return inputElement;
};

// Send data to the server, show newly added data
const submitData = e => {
  // Cancel default form behavior
  e.preventDefault();

  // Create a FormData object, passing the form as a parameter
  const formData = new FormData(e.target);
  // Send data data to the server with an aynchronous POST request
  fetch(`${serverUrl}/datas`, {
    method: "POST",
    body: formData
  })
    .then(response => response.json())
    .then(newData => {
      // Add new data to page, replacing form
      const newDataElement = showDataElement(newData);
      contentElement.replaceChild(newDataElement, e.target);

      // Create info message indicating success
      const infoElement = document.createElement("div");
      infoElement.classList.add("alert");
      infoElement.classList.add("alert-success");
      infoElement.textContent = `The data from ${newData.personalNumber} has been succesfully added!`;
      contentElement.insertBefore(infoElement, newDataElement);
      // Remove info and added messages after 2 seconds
      setTimeout(() => {
        contentElement.removeChild(infoElement);
        contentElement.removeChild(newDataElement);

      }, 2000);
    })
    .catch(err => {
      console.error(err.message);
    });
};

// Create and return a form for submitting a new data
const createDataForm = () => {
  // Create input fields for data properties
  const personalNumberElement = createInputElement("personalNumber", "Personal number", 15);
  const nameElement = createInputElement("name", "Name", 20);
  const genderElement = createInputElement("gender", "Gender", 6);
  const ageElement = createInputElement("age", "Age", 5);
  const addressElement = createInputElement("address", "Address", 50);
  const phoneNumberElement = createInputElement("phoneNumber", "Phone number", 15);
  const diseaseElement = createInputElement("disease", "Disease", 15);
  const commentElement = createInputElement("comment", "Comment", 100);

  // Create add data button
  const submitElement = document.createElement("input");
  submitElement.id = "finishedButton";
  submitElement.type = "submit";
  submitElement.value = "Add data";
  submitElement.classList.add("btn");
  submitElement.classList.add("btn-primary");

  // Create cancel button
  const cancelElement = document.createElement("input");
  cancelElement.id = "cancelButton";
  cancelElement.type = "submit";
  cancelElement.value = "Cancel";
  cancelElement.classList.add("btn");
  cancelElement.classList.add("btn-primary");

  // Create data submission form
  const dataFormElement = document.createElement("form");
  dataFormElement.classList.add("dataForm");
  dataFormElement.classList.add("form-inline");
  dataFormElement.appendChild(personalNumberElement);
  dataFormElement.appendChild(nameElement);
  dataFormElement.appendChild(genderElement);
  dataFormElement.appendChild(ageElement);
  dataFormElement.appendChild(addressElement);
  dataFormElement.appendChild(phoneNumberElement);
  dataFormElement.appendChild(diseaseElement);
  dataFormElement.appendChild(commentElement);

  dataFormElement.appendChild(submitElement);
  dataFormElement.appendChild(cancelElement);

  // Handle form submission
  dataFormElement.addEventListener("submit", submitData);
  return dataFormElement;
};


// Search data, will be used in the next function
const submitSearchData = e => {
  // clear the content values
  contentElement.innerHTML = "";
  // Fetch datas from server
  fetch(`${serverUrl}/api/datas`)
    .then(response => response.json())
    .then(datas => {
      var foundData = 0;
      datas.forEach(data => {
        // search data with the input personal number
        if (e.target.personalNumber.value === data.personalNumber)
        {
          foundData = 1;
          const dataElement = showDataElement(data);
          contentElement.appendChild(dataElement);
        }      
      });
      // if no data can be found, print a hint 
      if (!foundData)
        {
          contentElement.innerHTML = "No such data!";
        }
    })
    .catch(err => {
      console.error(err.message);
    });
};
  
// Create and return a form for searching a new data
const createSearchElement = () => {
  // Create input fields for data properties
  const personalNumberElement = createInputElement("personalNumber", "Personal number", 15);
  
  // Create search data button
  const submitElement = document.createElement("input");
  submitElement.id = "finishedButton";
  submitElement.type = "submit";
  submitElement.value = "Search";
  submitElement.classList.add("btn");
  submitElement.classList.add("btn-primary");

  // Create cancel button
  const cancelElement = document.createElement("input");
  cancelElement.id = "cancelButton";
  cancelElement.type = "submit";
  cancelElement.value = "Cancel";
  cancelElement.classList.add("btn");
  cancelElement.classList.add("btn-primary");

  // Create data submission form
  const dataFormElement = document.createElement("form");
  dataFormElement.classList.add("dataForm");
  dataFormElement.classList.add("form-inline");
  dataFormElement.appendChild(personalNumberElement);
  

  dataFormElement.appendChild(submitElement);
  dataFormElement.appendChild(cancelElement);

  // Handle form submission
  dataFormElement.addEventListener("submit", submitSearchData);
  return dataFormElement;
};

  

// Handle cancel button
const Cancel = () => {
  var finished = document.getElementById("cancelButton");
  finished.onclick = () => window.location = "/";
};

// Add data
const AddData = () => {
  // clear the content values
  contentElement.innerHTML = "";
  // Create add data submission form
  const formElement = createDataForm();
  // Add form on page before the first data
  contentElement.insertBefore(formElement, document.querySelector(".data"));
};

// Read all data
const ReadAll = () => {
  // clear the content values
  contentElement.innerHTML = "";
  // Fetch datas from server
  fetch(`${serverUrl}/api/datas`)
    .then(response => response.json())
    .then(datas => {
      datas.forEach(data => {
        const dataElement = showDataElement(data);
        contentElement.appendChild(dataElement);
      });
    })
    .catch(err => {
      console.error(err.message);
    });
  };

  // Search one data
  const Search = () => {

    // clear the content values
  contentElement.innerHTML = "";
  // Create search data submission form
  const formElement = createSearchElement();

  // Add form on page before the first data
  contentElement.insertBefore(formElement, document.querySelector(".data"));
  };



  


// Handle choice submission
const choicesform  = document.querySelector("form");
choicesform.addEventListener("submit", e => {
  // Cancel default behavior of sending a synchronous POST request
  e.preventDefault();

  const choice = e.target.choices.value;
  
  switch(choice){
    case 'add':    
      AddData();
      Cancel();
      break;
    case 'read':
      ReadAll();
      break; 
    case 'search':
      Search();
      Cancel();
      break; 
  }

});

// Create cancel button
const subElement = document.getElementById("submit");
subElement.classList.add("btn");
subElement.classList.add("btn-primary");


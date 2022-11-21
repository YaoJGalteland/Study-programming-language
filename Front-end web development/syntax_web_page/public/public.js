
/*---------- Event-driven programming ----------*/
// Update the "content" DOM element
const contentElement = document.getElementById("buttoncontent");

// add button
const buttonElement = document.createElement("button");
buttonElement.id = "mybutton";
buttonElement.textContent = "Click me";

// add button
const deactivebuttonElement = document.createElement("button");
deactivebuttonElement.id = "deactive";
deactivebuttonElement.textContent = "Deactive the click button";

contentElement.appendChild(buttonElement);
contentElement.appendChild(document.createElement("br"));  // new line
contentElement.appendChild(deactivebuttonElement);

// Show a message when the user clicks on the button
const clickhandler = (e) => {
    const textElement = document.createElement("p");
    textElement.textContent = "clicked!";
    contentElement.appendChild(textElement);
}
buttonElement.addEventListener("click", clickhandler);

deactivebuttonElement.addEventListener("click", () => {
    // Remove the handler for the click event
    buttonElement.removeEventListener('click', clickhandler);
});

/*---------- Form ----------*/
const usernameElement = document.getElementById("username");

// focus
usernameElement.addEventListener("focus", () => {
    document.getElementById("usernameHelp").textContent = "Input username";
});
usernameElement.addEventListener("blur", () => {
    document.getElementById("usernameHelp").textContent = "";
});

// checkbox, change, e.target.value/checked
document.getElementById("confirmation").addEventListener("change", e => {
    document.getElementById("confirmationHelp").textContent = `The check status is ${e.target.checked}`;
});

// radio, change, e.target.value/checked
const substriptionElements = Array.from(document.getElementsByName("subscription"));
substriptionElements.forEach(substriptionElement => {
    substriptionElement.addEventListener("change", e => {
        document.getElementById("subscriptionHelp").textContent = `The choosen value is ${e.target.value}`;
    });
});

// Dropdown lists, change, e.target.value/checked
const nationalityElements = Array.from(document.getElementsByName("nationality"));
nationalityElements.forEach(nationalityElement => {
    nationalityElement.addEventListener("change", e => {
        document.getElementById("nationalityHelp").textContent = `Nationality code: ${e.target.value}`;
    });
});


// form submisstion, e.target.elements.<name>.value/checked
const formElement = document.querySelector("form");
formElement.addEventListener("submit", (e) => {
    const resultElement = document.getElementById("formsubresult");
    const userinfoElement = document.createElement("p");
    userinfoElement.textContent = `Username: ${e.target.elements.username.value}, email check status: ${e.target.elements.confirmation.checked}, 
    subscription: ${e.target.elements.subscription.value}, nationality: ${e.target.elements.nationality.value}`;
    resultElement.appendChild(userinfoElement);
    e.preventDefault(); // Cancel form data sending
});

// form validation, Regular Expressions
// Check email validity when field loses focus
document.getElementById("emailAddress").addEventListener("blur", e => {
    // Match a string of the form xxx@yyy.zzz
    const emailRegex = /.@.+\..+/;
    let validityMessage = "";
    if (!emailRegex.test(e.target.value)) {
      validityMessage = "Invalid address";
    }
    document.getElementById("emailHelp").textContent = validityMessage;
  });
  
/*---------- Web server communication ----------*/
//To test your server code, you  to change the start of the server URL from 
//https://yourapp.herokuapp.com to your own server URL (which would be 
//http://localhost:3000 if your server runs on your local machine).
// fetch data
const serverUrl = "http://localhost:3000"; //running locally

const paintingElement = document.getElementById("webdata");

fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
.then(response => response.json())
.then(paintings => {     
paintingElement.textContent = JSON.stringify(paintings);

paintings.forEach(painting => {
    // Create name element
    const nameElement = document.createElement("h3");
    nameElement.textContent = painting.name;
    // Create content element
    const contentElement = document.createElement("p");
    contentElement.textContent = painting.year + painting.artist;
    // Add name and content to the page
    paintingElement.appendChild(nameElement);
    paintingElement.appendChild(contentElement);

    })
})
.catch(err => {
console.error(err.message);
});


// send data
document.querySelectorAll("form")[1].addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch(`${serverUrl}/articles`, {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        document.getElementById("senddata").textContent = result; // result from Web route in index.js
    })
    .catch(err => {
        console.log(err.message);
    });
});




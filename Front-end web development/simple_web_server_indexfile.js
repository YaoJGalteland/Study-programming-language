/* You can launch your server with either node index.js or npm start, then 
type its root URL (http://localhost:3000 if your server runs on your local 
machine) in a browser. You should see the string "Hello from Express!" appear.
 */

// Access the exported service
const upload = multer();


// Load the Express package as a module
const express = require("express");

// Access the exported service
const app = express();

// Return a string for requests to the root URL ("/")
app.get("/", (request, response) => {
  response.send("Hello from Express!");
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});

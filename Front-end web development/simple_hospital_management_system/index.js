const express = require("express");
const multer = require("multer");
const Data = require("./modules/data.js");

const app = express();
const upload = multer();

// Enable CORS (see https://enable-cors.org/server_expressjs.html)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Serve content of the "public" subfolder directly
app.use(express.static("public"));

// Initial datas array
const datas = [];
datas.push(new Data("01018012345", "Alice", "F", "42", "XX street, YY city, ZZ country", "123456789", "diabetes", "Drink more water"));
datas.push(new Data("12127054321", "Bob", "M", "52", "xxx street, yyy city, zzz country", "987654321", "heart disease", "Sleep more"));

// Routes
app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/webpage.html`);
});

app.get("/api/datas", (request, response) => {
  response.json(datas);
});

app.post("/datas", upload.array(), (request, response) => {
  // Create new data object
  const personalNumber = request.body.personalNumber;
  const name = request.body.name;
  const gender = request.body.gender;
  const age = request.body.age;
  const address = request.body.address;
  const phoneNumber = request.body.phoneNumber;
  const disease = request.body.disease;
  const comment = request.body.comment;
  const data = new Data(personalNumber, name, gender, age, address, phoneNumber, disease, comment);
  // Add new data to the beginning of the list
  datas.unshift(data);
  // Send back newly created data as JSON
  response.json(data);
});

// Start listening to incoming requests
// If process.env.PORT is not defined, port number 3000 is used
const listener = app.listen(process.env.PORT || 4000, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
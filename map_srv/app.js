const express = require("express");
const cors = require("cors"); // Import the cors package
const app = express();
const port = 3000;

const {
  governoratesMarkers,
  mapCenter,
  regionsCoordinates,
} = require("./data/map");

app.use(cors()); // Enable CORS

app.get("/map/center", (req, res) => {
  res.json(mapCenter);
});

app.get("/map/governorates", (req, res) => {
  res.json(governoratesMarkers);
});

app.get("/map/regions", (req, res) => {
  res.json(regionsCoordinates);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

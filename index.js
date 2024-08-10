const express = require("express");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  return res.json({ message: "Hello from Docker" });
});

app.listen(PORT, () => {
  console.log(`Server starting at PORT ${PORT}`);
});

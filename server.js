const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening at the port ${PORT}`);
});
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

mongoose
  .connect("mongodb+srv://negihimanshu1214:sikandar@cluster0.ltjdr.mongodb.net/MERN-Ecom")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log(error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: [
      "http://localhost:5173", // Frontend URL
      "https://www.sandbox.paypal.com", // PayPal sandbox URL
      "https://sandbox.paypal.com", // PayPal sandbox URL (ensure both variations work)
    ],
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true, // Allows cookies to be sent
  })
);


app.use(cookieParser());
app.use(express.json());
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
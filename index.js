const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

// Atrof-muhit o'zgaruvchilarini yuklash
dotenv.config({ path: "./.env" });

// Ma'lumotlar bazasi bilan bog'lanish
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

// JSON formatidagi ma'lumotlarni olish uchun middleware
app.use(express.json());

// Mahsulotlar marshrutlari
app.use("/api/", productRoutes);

// Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishlamoqda`));

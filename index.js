const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

// Atrof-muhit o'zgaruvchilarini yuklash
dotenv.config();

// Ma'lumotlar bazasi bilan bog'lanish
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB bilan bog'lanildi"))
  .catch((err) => console.error("MongoDB bilan bog'lanishda xatolik:", err));

const app = express();

// JSON formatidagi ma'lumotlarni olish uchun middleware
app.use(express.json());

// Mahsulotlar marshrutlari
app.use("/api/v1", productRoutes);

// 404 Not Found handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Sahifa topilmadi" });
});

// Xatoliklarni boshqarish middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Serverda xatolik yuz berdi" });
});

// Serverni ishga tushirish
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ${PORT} portda ishlamoqda`));

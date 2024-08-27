const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB bilan bog‘lanish muvaffaqiyatli!");
  } catch (error) {
    console.error("Ma’lumotlar bazasiga bog‘lanishda xatolik:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

const mongoose = require("mongoose");

const mahsulotSchema = new mongoose.Schema({
  toliqNomi: {
    type: String,
    required: true,
    maxlength: 1000, // Katta matnli kletka uchun
  },
  artikul: {
    type: String,
    required: true,
    unique: true, // Har bir artikul takrorlanmas bo'lishi kerak
  },
  barkod: {
    type: String,
    required: true,
    unique: true, // Har bir barkod ham takrorlanmas bo'lishi kerak
  },
  kirganNarxi: {
    type: Number,
    required: true,
  },
  sotilishNarxi: {
    type: Number,
    required: true,
  },
  brend: {
    type: String,
    required: true,
  },
  yetkazibBeruvchi: {
    type: String,
    required: true,
  },
  kategoriya: {
    type: String,
    required: true,
  },
  yaratildi: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Mahsulot", mahsulotSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: { type: String, required: true }, // require tru sprawia ze parametr jest wymagany przy zapsisie w bazie danych
  description: { type: String, required: [true, "Pole tytuł jest wymagane"] }, //przekazujac tru w tablicy mozemy dodać samemu jako drugą wartoś tłumaczenie wymagania
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model("News", newsSchema);

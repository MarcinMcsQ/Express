const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: { type: String, required: true }, // require tru sprawia ze parametr jest wymagany przy zapsisie w bazie danych
  vote: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("Quiz", quizSchema);

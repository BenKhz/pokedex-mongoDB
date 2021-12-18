const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/pokeMongo", { useNewUrlParser: true }, (err) => {
  console.log(err ? err : "Connected to MongoDb!")
});

const PokeSchema = new mongoose.Schema({
  name: String,
  type: String,
  img: String
})

const PokeModel = mongoose.model("Pokemons", PokeSchema);

module.exports = PokeModel;

import mongoose from "mongoose";

// 1. create a Schema
const jokeSchema = new mongoose.Schema(
  {
    joke: String,
  },
  {
    collection: "jokes",
  } // optional, name is inferred from model Name by default
);

// 2. use Schema to create the Model
// check first if the model "Joke" already exists

const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);

export default Joke;

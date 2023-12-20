import dbConnect from "@/db/connect.js";
import Joke from "@/db/models/Joke.js";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;

  if (request.method === "GET") {
    const joke = await Joke.findById(id);

    if (!joke) {
      response.status(404).json({ status: `Joke with id ${id} wasn't found.` });
      return;
    }
    response.status(200).json(joke);
    return;
  }

  response.status(405).json({ status: "Method not allowed." });
}

const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base("coffee-stores");

console.log(table);

const createCoffeeStore = (req, res) => {
  console.log({ req });
  if (req.method === "POST") {
    res.json({ message: "Hi There!" });
  } else {
    res.json({ message: "Method is GET" });
  }
};

export default createCoffeeStore;

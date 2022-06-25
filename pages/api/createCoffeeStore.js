const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base("coffee-stores");

console.log(table);

const createCoffeeStore = async (req, res) => {
  if (req.method === "POST") {
    console.log({ req });
    // Find a record
    const findCoffeeStoreRecords = await table
      .select({
        filterByFormula: `id="0"`,
      })
      .firstPage();
    console.log({ findCoffeeStoreRecords });

    if (findCoffeeStoreRecords.length !== 0) {
      res.json(findCoffeeStoreRecords);
    } else {
      // Create a record
      res.json({ message: "Create a record" });
    }
  }
};

export default createCoffeeStore;

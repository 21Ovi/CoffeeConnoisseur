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
    try {
      const findCoffeeStoreRecords = await table
        .select({
          filterByFormula: `id="0"`,
        })
        .firstPage();
      console.log({ findCoffeeStoreRecords });

      if (findCoffeeStoreRecords.length !== 0) {
        const records = findCoffeeStoreRecords.map((record) => {
          return {
            ...record.fields,
          };
        });

        res.json(records);
      } else {
        // Create a record
        res.json({ message: "Create a record" });
      }
    } catch (err) {
      console.log("Error Finding Store", err);
      res.status(500);
      res.json({ message: "Error Finding Store", err });
    }
  }
};

export default createCoffeeStore;

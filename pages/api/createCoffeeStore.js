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
          filterByFormula: `id="3"`,
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
        const crateRecords = await table.create([
          {
            fields: {
              id: "3",
              name: "My Favoutire Coffee",
              address: "My Address",
              neighbourhood: "Some places",
              voting: 200,
              imgUrl: "http://myimg.com",
            },
          },
        ]);
        const records = crateRecords.map((record) => {
          return {
            ...record.fields,
          };
        });
        res.json({ records });
      }
    } catch (err) {
      console.log("Error Finding Store", err);
      res.status(500);
      res.json({ message: "Error Finding Store", err });
    }
  }
};

export default createCoffeeStore;

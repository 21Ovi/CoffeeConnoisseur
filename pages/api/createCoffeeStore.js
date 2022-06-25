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

    const { id, name, neighbourhood, address, imgUrl, voting } = req.body;

    try {
      if (id) {
        const findCoffeeStoreRecords = await table
          .select({
            filterByFormula: `id="${id}"`,
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
          if (name) {
            const crateRecords = await table.create([
              {
                fields: {
                  id,
                  name,
                  address,
                  neighbourhood,
                  voting,
                  imgUrl,
                },
              },
            ]);
            const records = crateRecords.map((record) => {
              return {
                ...record.fields,
              };
            });
            res.json({ records });
          } else {
            res.status(400);
            res.json({ message: "Name is Missing!" });
          }
        }
      } else {
        res.status(400);
        res.json({ message: "Id is Missing!" });
      }
    } catch (err) {
      console.log("Error Creating or Finding a Store", err);
      res.status(500);
      res.json({ message: "Error Creating or Finding Store", err });
    }
  }
};

export default createCoffeeStore;

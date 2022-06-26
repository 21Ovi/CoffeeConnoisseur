import { table, getMinifiedRecords } from "../../lib/airtable";

const createCoffeeStore = async (req, res) => {
  if (req.method === "POST") {
    // Find a record

    const { id, name, neighbourhood, address, imgUrl, voting } = req.body;

    try {
      if (id) {
        const findCoffeeStoreRecords = await table
          .select({
            filterByFormula: `id="${id}"`,
          })
          .firstPage();

        if (findCoffeeStoreRecords.length !== 0) {
          const records = getMinifiedRecords(findCoffeeStoreRecords);

          res.json(records);
        } else {
          // Create a record
          if (name) {
            const createRecords = await table.create([
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
            const records = getMinifiedRecords(createRecords);

            res.json(records);
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

import { fetchCoffeeStores } from "../../lib/coffee-stores";

const getCoffeeStoresByLocation = async (req, res) => {
  // Configure latlong and limit

  try {
    const { latLong, limit } = req.query;
    const response = await fetchCoffeeStores(latLong, 30);
    res.status(200);
    res.json(response);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Oh no! Something went wrong", err });
  }

  //return
};
export default getCoffeeStoresByLocation;

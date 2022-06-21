import Link from "next/link";
import { useRouter } from "next/router";

import CoffeeStoreData from "../../data/coffee-stores.json";

export async function getStaticProps(staticProps) {
  const params = staticProps.params;
  console.log("params", params);
  return {
    props: {
      coffeeStore: CoffeeStoreData.find((coffeeStore) => {
        //return coffeeStore.id === 0; //dynamic id
        return coffeeStore.id.toString() === params.id; //dynamic id
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    paths: [{ params: { id: "0" } }, { params: { id: "1" } }],
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  console.log(props);
  const router = useRouter();
  console.log("router", router);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  console.log(props);

  return (
    <div>
      Coffee Store Page{router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/coffee-store/one">
        <a>Go to page Dynamic</a>
      </Link>
      <p>{props.coffeeStore.address}</p>
      <p>{props.coffeeStore.name}</p>
    </div>
  );
};

export default CoffeeStore;

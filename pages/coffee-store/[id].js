import Link from "next/link";
import { useRouter } from "next/router";

import CoffeeStoreData from "../../data/coffee-stores.json";

export function getStaticProps(staticProps) {
  const params = staticProps.params;
  return {
    props: {
      CoffeeStore: CoffeeStoreData.find((coffeeStore) => {
        return coffeeStore.id === 0;
      }),
    },
  };
}

export function getStaticPaths() {
  return {
    path: [{ params: { id: "0" } }, { params: { id: "1" } }],
  };
}

const CoffeeStore = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      Coffee Store Page{router.query.id}
      <Link href="/">
        <a>Back to home</a>
      </Link>
      <Link href="/coffee-store/one">
        <a>Go to page Dynamic</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;

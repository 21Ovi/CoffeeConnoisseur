/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";
import Card from "../components/card";

import coffeeStoresData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  console.log("hi getStaticProps");
  return {
    props: {
      coffeeStores: coffeeStoresData,
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  console.log(props);
  const handleOnBannerClick = () => {
    console.log("Hi banner button");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText="View stores nearby!"
          handleOnClick={handleOnBannerClick}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="hero"
          />
        </div>
        {props.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto Stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={coffeeStore.imgUrl}
                    href={`/coffee-store/${coffeeStore.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

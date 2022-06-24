/* eslint-disable react/jsx-key */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";
import Card from "../components/card";
import { fetchCoffeeStores } from "../lib/coffee-stores";

import useTrackLocation from "../hooks/use-track-location";

export async function getStaticProps(context) {
  console.log("hi getStaticProps");

  const coffeeStores = await fetchCoffeeStores();

  return {
    props: {
      coffeeStores,
    }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const { handleTrackLocation, latLong, locationErrorMsg, isFindingLocation } =
    useTrackLocation();
  console.log({ latLong, locationErrorMsg });
  //console.log(props);
  const handleOnBannerClick = () => {
    console.log("Hi banner button");
    handleTrackLocation();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={isFindingLocation ? "Locating..." : "View stores nearby!"}
          handleOnClick={handleOnBannerClick}
        />
        {locationErrorMsg && <p> Something went wrong: {locationErrorMsg}</p>}
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            width={700}
            height={400}
            alt="hero"
          />
        </div>
        {props.coffeeStores.length > 0 && (
          <div className={styles.sectionWrapper}>
            <h2 className={styles.heading2}>Toronto Stores</h2>
            <div className={styles.cardLayout}>
              {props.coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    imgUrl={
                      coffeeStore.imgUrl ||
                      "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80"
                    }
                    href={`/coffee-store/${coffeeStore.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

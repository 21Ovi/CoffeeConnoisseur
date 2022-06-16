import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Banner from "../components/banner";
import Card from "../components/card";

export default function Home() {
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
        <div className={styles.cardLayout}>
          <Card
            name="DarkHorse Coffee"
            imgUrl="/static/hero-image.png"
            href="/coffee-store/darkhorse-coffee"
            className={styles.card}
          />

          <Card
            name="DarkHorse Coffee"
            imgUrl="/static/hero-image.png"
            href="/coffee-store/darkhorse-coffee"
            className={styles.card}
          />
        </div>
      </main>
    </div>
  );
}

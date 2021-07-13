import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../public/assets/comming-soon.json";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.container}>
      <Head>tailleLottie
        <title>ARCHITRAVE - Architecture</title>
        <meta
          name="description"
          content="Site en construction - Antonin Reigneaud"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="font-bold text-3xl ">
          ARCHITRAVE <br />
        </div>
        Site en maintenance
        
        <div className='lotties'>
            <Lottie options={defaultOptions}  className='tailleLottie' />
        </div>
      
      </main>

      <footer className={styles.footer}>
        Make with love by Antonin Reigneaud
      </footer>
    </div>
  );
}

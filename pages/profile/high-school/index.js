import Head from 'next/head';
import Header from '../../../components/header/header';
import styles from '../profilePage.module.scss';

import HsAverage from '../../../components/charts/hsAverage';



export default function HighSchool() {
  return (
    <>
      <Head>
        <title>High School • Class Profile</title>
      </Head>

      <Header />

      <div className={styles.content}>
        <h1>High School</h1>
      </div>
      <HsAverage/>
    </>
  );
}

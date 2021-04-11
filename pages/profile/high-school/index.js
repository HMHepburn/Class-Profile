import Head from 'next/head';
import Content from '../../../components/layout/layout';

import HsAverage from '../../../components/charts/hsAverage';


import Header from '../../../components/header/header';
import styles from '../profilePage.module.scss';

export default function HighSchool() {
  return (
    <>
      <Head>
        <title>High School • Class Profile</title>
      </Head>

      <Content>
        <h1>High School</h1>
      </Content>
    </>
  );
}

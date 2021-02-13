import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hackability</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello hackability</h1>
    </div>
  );
}

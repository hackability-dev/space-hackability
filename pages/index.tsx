import { PrismaClient } from '@prisma/client';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const prisma = new PrismaClient();

const Home = ({ groups }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>hackability</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello hackability</h1>
      <pre>{JSON.stringify(groups, null, 2)}</pre>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const groups = await prisma.group.findMany();
  return {
    props: {
      groups,
    },
  };
};

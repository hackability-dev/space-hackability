import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { GetGroupsDocument } from '../src/generated/graphql';
import { FC } from 'react';

const client = new ApolloClient({
  uri: 'https://space.k8s.hackability.dev/api/graphql',
  cache: new InMemoryCache(),
});

const Home: FC<InferGetStaticPropsType<typeof getStaticProps>> = ({ groups }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>hackability</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hackability</h1>
      <p> Welcome CI/CD</p>
      {groups.map((group) => (
        <div key={group.id}>
          <h3>{group.name}</h3>
          <p>{group.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await client.query({
    query: GetGroupsDocument,
  });
  return {
    props: {
      groups: res.data.groups,
    },
  };
};

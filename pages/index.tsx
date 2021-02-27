import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { GetServerSideProps, GetStaticProps } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const client = new ApolloClient({
  uri: 'https://space.k8s.hackability.dev/api/graphql',
  cache: new InMemoryCache(),
});

const Home = ({ groups }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>hackability</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>hackability</h1>
      <p> Welcome CI/CD</p>
      <pre>{JSON.stringify(groups, null, 2)}</pre>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.query({
    query: gql`
      query GetGroups {
        groups {
          id
          description
          name
        }
      }
    `,
  });
  return {
    props: {
      groups: res.data.groups,
    },
  };
};

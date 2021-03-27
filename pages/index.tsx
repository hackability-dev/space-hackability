import { ApolloClient, InMemoryCache } from '@apollo/client';
import styled from '@emotion/styled';
import { InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import { BetaAlert } from '../components/beta-alert';
import { Footer } from '../components/footer';
import { GroupPreview } from '../components/group-preview';
import { Nav } from '../components/nav';
import { GetGroupsDocument } from '../src/generated/graphql';

const client = new ApolloClient({
  uri: 'https://space.k8s.hackability.dev/api/graphql',
  cache: new InMemoryCache(),
});

const GroupsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  margin-top: 50px;
  gap: 20px;
  padding: 0 10px;
  div {
    margin: auto;
  }
`;

const Home: FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ groups }) => {
  return (
    <div>
      <Nav />
      <BetaAlert />
      <Head>
        <title>hackability</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mt-10 font-bold text-center text-4xl"> Ecco tutti i team ed eventi</h1>
      <GroupsList>
        {groups.map((group) => (
          <GroupPreview key={group.id} group={group}></GroupPreview>
        ))}
      </GroupsList>

      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const res = await client.query({
    query: GetGroupsDocument,
  });
  return {
    props: {
      groups: res.data.groups,
    },
  };
};

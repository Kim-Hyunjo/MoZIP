import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import List from "../components/List";
import { User } from "../interfaces";
import { sampleUserData } from "../utils/sample-data";

type Props = {
  items: User[];
};

const getTest = ({ items }: Props) => {
  return (
    <Layout title="Axios Test">
      <h1>Users List</h1>
      <p>박웅기 Test</p>
      <p>{}</p>
      <p>왕희도 Test</p>
      <p>{}</p>
      <p>한채은 Test</p>
      <p>{}</p>
    </Layout>
  );
};

export const dataFetchTest: GetStaticProps = async () => {
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default getTest;

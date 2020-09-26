import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import List from "../components/List";
import { User } from "../interfaces";
import { Test } from "../interfaces/test";
import { sampleUserData } from "../utils/sample-data";
import Axios from "axios";

type Props = {
  test1: Test;
};

const getTestProps = ({ test1 }: Props) => {
  return (
    <Layout title="Axios Test">
      <h1>Users List</h1>
      <p>박웅기 Test</p>
      <p>{test1.name}</p>
      <p>{test1.project}</p>
      <p>{test1.date}</p>
      <p>왕희도 Test</p>
      <p>{}</p>
      <p>한채은 Test</p>
      <p>{}</p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const getTest = await Axios.get("https://skhu-pwk.firebaseio.com/test.json");
  const test1: Test = getTest.data;

  console.log(test1);

  return { props: { test1 } };
};

export default getTestProps;

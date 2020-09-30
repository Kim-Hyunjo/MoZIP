import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import { Test } from "../interfaces/test";
import { httpClient } from "../http/HttpClient";
import { IHttpClientRequestParameters } from "../http/IHttpClientRequestParameters";

type Props = {
  test1: Test[];
};

const getTestProps = ({ test1 }: Props) => {
  return (
    <Layout title="Axios Test">
      <h1>Users List</h1>
      <p>박웅기 Test</p>

      {test1.map((info) => {
        return <div>{info}</div>;
      })}

      <p>왕희도 Test</p>
      <p>{}</p>
      <p>한채은 Test</p>
      <p>{}</p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const getParameter: IHttpClientRequestParameters<string[]> = {
    url: "todo1.json",
    requiresToken: false,
  };
  let test1: string[] = await httpClient.get<string[]>(getParameter);

  console.log(test1);

  return { props: { test1 } };
};

export default getTestProps;

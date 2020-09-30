import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../components/Layout";
import List from "../components/List";
import { User } from "../interfaces";
import { Test } from "../interfaces/test";
import { sampleUserData } from "../utils/sample-data";
import Axios from "axios";
import { useEffect, useState } from "react";
import { httpClient } from "../http/HttpClient";
import { IHttpClientRequestParameters } from "../http/IHttpClientRequestParameters";

type Props = {
  test1: Test[];
};

const getTestProps = ({}: Props) => {
  const [todo1, setTodo1] = useState<string[]>([]);

  const getTodo1 = () => {
    // Axios.get("https://skhu-pwk.firebaseio.com/todo1.json").then((r) => {
    //   setTodo1(r.data);
    //   console.log(todo1);
    // });
    // const getParameter: IHttpClientRequestParameters<string[]> = {
    //   url: "https://skhu-pwk.firebaseio.com/todo1.json",
    //   requiresToken: false,
    // };
    httpClient
      .get<string[]>({
        url: "todo1.json",
        requiresToken: false,
      })
      .then((r) => {
        setTodo1(r);
      });
  };

  const bt = () => {
    console.log(todo1);
  };

  useEffect(() => {
    getTodo1();
  }, []);

  return (
    <Layout title="Axios Test">
      <h1>Users List</h1>
      <p>박웅기 Test</p>
      {/* {test1.map((info) => {
        return (
          <div>
            <p>{info.id}</p>
            <p>{info.title}</p>
            <p>{info.content}</p>
          </div>
        );
      })} */}

      {/* <p>{test1.id}</p>
      <p>{test1.title}</p>
      <p>{test1.content}</p> */}

      {todo1.map((info) => {
        return <div>{info}</div>;
      })}

      <input type="button" onClick={bt}></input>

      <p>왕희도 Test</p>
      <p>{}</p>
      <p>한채은 Test</p>
      <p>{}</p>
    </Layout>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   // const getTest = await Axios.get("https://skhu-pwk.firebaseio.com/test.json");
//   const getTest = await Axios.get("http://127.0.0.1:8000/api/listpost/");
//   const test1: Test = getTest.data;

//   console.log(test1);

//   return { props: { test1 } };
// };

export default getTestProps;

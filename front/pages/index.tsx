import Link from "next/link";
import { Component } from "react";
import Layout from "../components/Layout";

// const IndexPage = () => (
//   <Layout title="Home | Next.js + TypeScript Example">
//     <h1>Hello Next.js 👋</h1>
//     <p>
//       <Link href="/about">
//         <a>About</a>
//       </Link>
//     </p>
//   </Layout>
// )

// import React, { Component } from 'react'

export class IndexPage extends Component {
  render() {
    return (
      <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js 👋</h1>
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </Layout>
    );
  }
}

export default IndexPage;

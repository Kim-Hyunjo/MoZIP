import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        {/* <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>Users List</a>
        </Link>{' '}
        |{' '}
        <Link href="/test">
          <a>test</a>
        </Link>{' '}
        | <a href="/api/users">Users API</a> */}

        <Link href="/">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>Recruit</a>
        </Link>{' '}
        |{' '}
        <Link href="/users">
          <a>List</a>
        </Link>{' '}
        |{' '}
        <Link href="/test">
          <a>My Page</a>
        </Link>{' '}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <a href="#">이용약관</a>{' '}|{' '}
      <a href="#">개인정보 처리방침</a>{' '}|{' '}
      <a href="#">고객센터</a>

      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus dolore beatae saepe odit laudantium. Ullam non, impedit, excepturi quisquam fugiat qui nobis dolores, ipsam voluptates iusto quos debitis eos! Illo?
      </div>
    </footer>
  </div>
)

export default Layout

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles/pages/Home'

const ListDetail: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>List Details</title>
      </Head>


      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Container>
  )
}

export default ListDetail
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import PokemonLogo from '../assets/pokemonlogo.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <PokemonLogo />
      <h1>Pokemon Challend</h1>
      <p>List Pokémon from PokéAPI</p>
      <Link href="/list">
        <a>List All</a>
      </Link>
    </Container>
  )
}

export default Home

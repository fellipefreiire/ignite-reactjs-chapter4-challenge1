import type { NextPage } from 'next'
import { Box } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <Banner />
      <TravelTypes />
    </Box>
  )
}

export default Home

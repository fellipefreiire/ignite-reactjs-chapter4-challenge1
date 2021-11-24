import type { NextPage } from 'next'
import { Box, Divider, Text } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { Carousel } from '../components/Carousel'

const Home: NextPage = () => {
  return (
    <Box>
      <Header isHome={true} />
      <Banner />
      <TravelTypes />
      <Divider w='90px' mt='80px' mb='52px' ml='auto' mr='auto' borderColor='dark.text' />
      <Box mb='52px'>
        <Text textAlign='center' fontSize='32px' fontWeight='500'>
          Vamos nessa?<br />
          Então escolha seu continente
        </Text>
      </Box>
      <Carousel />
    </Box>
  )
}

export default Home

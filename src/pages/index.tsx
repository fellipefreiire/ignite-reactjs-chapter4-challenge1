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
      <Divider
        w={[null, null, '60px', '75px', '90px']}
        mt={[null, null, '36px', '58px', '80px']}
        mb={[null, null, '24px', '38px', '52px']}
        ml='auto'
        mr='auto'
        borderColor='dark.text'
      />
      <Box mb={[null, null, '20px', '36px', '52px']}>
        <Text
          textAlign='center'
          fontSize={[null, null, '20px', '26px', '32px']}
          fontWeight='500'
        >
          Vamos nessa?<br />
          Então escolha seu continente
        </Text>
      </Box>
      <Carousel />
    </Box>
  )
}

export default Home

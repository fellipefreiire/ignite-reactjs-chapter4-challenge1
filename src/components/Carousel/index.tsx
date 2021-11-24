import { Box, Flex, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Carousel: React.FC = (): JSX.Element => {
  return (
    <Box w='1240px' h='450px' m='auto' mb='40px'>
      <Swiper
        navigation
        pagination={{
          clickable: true
        }}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
      >
        {/* TODO: missing route to pages */}
        <SwiperSlide>
          <Flex
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            h='450px'
            bgImage={"url('/europe.png')"}
          >
            <Box textAlign='center'>
              <Text fontSize='48px' fontWeight='700' color='light.text'>Europa</Text>
              <Text fontSize='24px' fontWeight='700' color='light.info'>O continente mais antigo.</Text>
            </Box>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
          <Box h='450px' bgSize='cover' bgImage={"url('/northAmerica.jpg')"}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h='450px' bgImage={"url('/europe.png')"}></Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box h='450px' bgImage={"url('/europe.png')"}></Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}
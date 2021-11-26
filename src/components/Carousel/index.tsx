import { Box, Flex, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useRouter } from 'next/dist/client/router'
import { continentsInfo } from './continentsInfo'

export const Carousel: React.FC = (): JSX.Element => {
  const router = useRouter()

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
        {continentsInfo.map(continent => (
          <SwiperSlide key={continent.name}>
            <Flex
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              h='450px'
              bgImage={`url('${continent.bgImageUrl}')`}
              backgroundSize='cover'
              backgroundPosition='left'
              onClick={() => router.push(`${continent.pageUrl}`)}
            >
              <Box textAlign='center'>
                <Text fontSize='48px' fontWeight='700' color='light.text'>{continent.name}</Text>
                <Text fontSize='24px' fontWeight='700' color='light.info'>{continent.description}</Text>
              </Box>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
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
    <Box
      w={[null, null, '375px', '768px', '1240px', '1400px']}
      h={[null, null, '250px', '350px', '450px', '550px']}
      m='auto'
      mb={[null, null, '24px', '32px', '40px', '48px']}
    >
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
              h={[null, null, '250px', '350px', '450px', '550px']}
              bgImage={`url('${continent.bgImageUrl}')`}
              backgroundSize='cover'
              backgroundPosition='left'
              onClick={() => router.push(`${continent.pageUrl}`)}
            >
              <Box textAlign='center'>
                <Text
                  fontSize={[null, null, '24px', '32px', '48px', '60px']}
                  fontWeight='700'
                  color='light.text'
                >
                  {continent.name}
                </Text>
                <Text
                  fontSize={[null, null, '14px', '20px', '24px', '28px']}
                  fontWeight='700'
                  color='light.info'
                >
                  {continent.description}
                </Text>
              </Box>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
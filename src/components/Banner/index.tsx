import { Box, Text, Flex } from "@chakra-ui/react"
import Image from 'next/image'

export const Banner: React.FC = (): JSX.Element => {
  return (
    <Box h='335' bgImage={"url('/bannerBackground.png')"} pl='140px' pr='140px'>
      <Flex justifyContent='space-between'>
        <Box pt='80px' h='265' w='524px' boxSizing='border-box'>
          <Text fontSize='36' fontWeight='500' color='light.headings'>
            6 continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text fontSize='20' fontWeight='300' color='light.info' mt='20px'>
            Chegou a hora de tirar do papel a viagem que você<br />
            sempre sonhou.
          </Text>
        </Box>
        <Box pt='100px' >
          <Image
            src='/airplane.svg'
            width={417}
            height={270}
            alt='Airplane'
          />
        </Box>
      </Flex>
    </Box>
  )
}
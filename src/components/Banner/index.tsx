import { Box, Text, Flex } from "@chakra-ui/react"
import Image from 'next/image'

export const Banner: React.FC = (): JSX.Element => {
  return (
    <Box
      h={['163', '335']}
      bgImage={"url('/bannerBackground.png')"}
      pl={['16px', '140px']}
      pr={['16px', '140px']}
    >
      <Flex justifyContent='space-between'>
        <Box pt={['28px', '80px']} h={['163', '265']} w={['335px', '524px']} boxSizing='border-box'>
          <Text fontSize={['20', '36']} fontWeight='500' color='light.headings'>
            6 continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text fontSize={['14', '20']} fontWeight='300' color='light.info' mt={['8px', '20px']}>
            Chegou a hora de tirar do papel a viagem que você
            sempre sonhou.
          </Text>
        </Box>
        <Box pt='100px' display={['none', 'block']} >
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
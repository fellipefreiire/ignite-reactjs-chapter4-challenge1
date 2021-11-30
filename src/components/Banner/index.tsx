import { Box, Text, Flex } from "@chakra-ui/react"
import Image from 'next/image'

export const Banner: React.FC = (): JSX.Element => {
  return (
    <Box
      h={[null, null, '163', '245', '335']}
      bgImage={"url('/bannerBackground.png')"}
      pl={[null, null, '16px', '64px', '140px']}
      pr={[null, null, '16px', '64px', '140px']}
    >
      <Flex justifyContent='space-between'>
        <Box
          pt={[null, null, '28px', '54px', '80px']}
          h={[null, null, '163', '214', '265']}
          w={[null, null, '335px', '430px', '524px']}
          boxSizing='border-box'
        >
          <Text
            fontSize={[null, null, '20', '28', '36']}
            fontWeight='500'
            color='light.headings'
          >
            6 continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text
            fontSize={[null, null, '14', '17', '20']}
            fontWeight='300'
            color='light.info'
            mt={[null, null, '8px', '14px', '20px']}
          >
            Chegou a hora de tirar do papel a viagem que você
            sempre sonhou.
          </Text>
        </Box>
        <Box pt='100px' display={[null, null, 'none', null, 'block']} >
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
import { Box, Text, Flex } from "@chakra-ui/react"
import Image from 'next/image'

export const Banner: React.FC = (): JSX.Element => {
  return (
    <Box
      h={[null, null, '163', '245', '335', '380']}
      w='100%'
      bgImage={"url('/bannerBackground.png')"}
      bgSize='cover'
      pl={[null, null, '16px', '64px', '140px', '178px']}
      pr={[null, null, '16px', '64px', '140px', '178px']}
    >
      <Flex justifyContent='space-between'>
        <Box
          pt={[null, null, '28px', '54px', '80px', '93px']}
          h={[null, null, '163', '214', '265', '290']}
          w={[null, null, '335px', '430px', '524px', '571px']}
          boxSizing='border-box'
        >
          <Text
            fontSize={[null, null, '20', '28', '36', '44']}
            fontWeight='500'
            color='light.headings'
          >
            6 continentes, <br />
            infinitas possibilidades.
          </Text>
          <Text
            fontSize={[null, null, '14', '17', '20', '23']}
            fontWeight='300'
            color='light.info'
            mt={[null, null, '8px', '14px', '20px', '26px']}
          >
            Chegou a hora de tirar do papel a viagem que você
            sempre sonhou.
          </Text>
        </Box>
        <Box
          pt={[null, null, null, null, '100px', '145px']}
          display={[null, null, 'none', null, 'block']}
        >
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
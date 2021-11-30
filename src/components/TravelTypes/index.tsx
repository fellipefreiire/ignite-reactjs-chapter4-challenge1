import { Box, Flex, Text } from "@chakra-ui/react"
import Image from 'next/image'
import { data } from './content'

export const TravelTypes: React.FC = (): JSX.Element => {
  return (
    <Flex
      w={[null, null, '375px', '668px', '1160px', '1400px']}
      h='145'
      justifyContent={[null, null, 'space-between']}
      alignItems={[null, null, 'center']}
      m='auto'
      mt={[null, null, '36px', null, '114px']}
      pl={[null, null, '50px', '0', null]}
      pr={[null, null, '50px', '0', null]}
      wrap='wrap'
    >
      {data.map(item => (
        <Flex
          key={item.alt}
          direction={[null, null, 'row', 'column', null]}
          justifyContent='center'
          alignItems='center'
          m='auto'
        >
          <Box display={[null, null, 'none', null, null, 'block']}>
            <Image
              src={item.img}
              width={120}
              height={120}
              alt={item.alt}
            />
          </Box>
          <Box display={[null, null, 'none', null, 'block', 'none']}>
            <Image
              src={item.img}
              width={85}
              height={85}
              alt={item.alt}
            />
          </Box>
          <Box display={[null, null, 'none', 'block', 'none']}>
            <Image
              src={item.img}
              width={50}
              height={50}
              alt={item.alt}
            />
          </Box>
          <Box
            display={[null, null, 'block', 'none', null]}
            w='8px'
            h='8px'
            bgColor='highlight'
            borderRadius='50%'
          />
          <Text
            fontSize={[null, null, '18px', '21px', '24px', '27px']}
            fontWeight={[null, null, '500', '600', null]}
            mt={[null, null, '0', null, '24px']}
            ml={[null, null, '8px', null, '0']}
          >
            {item.text}
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}

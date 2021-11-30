import { Box, Flex, Text } from "@chakra-ui/react"
import Image from 'next/image'
import { data } from './content'

export const TravelTypes: React.FC = (): JSX.Element => {
  return (
    <Flex
      w={['375px', '1160px']}
      h='145'
      justifyContent={['space-between', 'space-between']}
      alignItems={['center', 'center']}
      m='auto'
      mt={['36px', '114px']}
      pl={['50px', '0']}
      pr={['50px', '0']}
      wrap='wrap'
    >
      {data.map(item => (
        <Flex
          key={item.alt}
          direction={['row', 'column']}
          justifyContent='center'
          alignItems='center'
          m='auto'
        >
          <Box display={['none', 'block']}>
            <Image
              src={item.img}
              width={85}
              height={85}
              alt={item.alt}
            />
          </Box>
          <Box
            display={['block', 'none']}
            w='8px'
            h='8px'
            bgColor='highlight'
            borderRadius='50%'
          />
          <Text
            fontSize={['18px', '24px']}
            fontWeight={['500', '600']}
            mt={['0', '24px']}
            ml={['8px', '0']}
          >
            {item.text}
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}

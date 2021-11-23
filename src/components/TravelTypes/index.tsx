import { Flex, Text } from "@chakra-ui/react"
import Image from 'next/image'
import { data } from './content'

export const TravelTypes: React.FC = (): JSX.Element => {
  return (
    <Flex
      w='1160px'
      h='145'
      justifyContent='space-between'
      m='auto'
      mt='114px'
    >
      {data.map(item => (
        <Flex
          key={item.alt}
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
        >
          <Image
            src={item.img}
            width={85}
            height={85}
            alt={item.alt}
          />
          <Text fontSize='24px' fontWeight='600' mt='24px'>
            {item.text}
          </Text>
        </Flex>
      ))}
    </Flex>
  )
}

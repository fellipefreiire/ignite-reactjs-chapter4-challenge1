import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

export const Header: React.FC = (): JSX.Element => {
  return (
    <Flex h='100' bgColor='light.white' alignItems='center' justifyContent='center'>
      <Image
        src='/logo.svg'
        width={184}
        height={46}
        alt='logo'
      />
    </Flex>
  )
}
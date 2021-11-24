import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

interface HeaderProps {
  isHome: boolean
}

export const Header: React.FC<HeaderProps> = ({ isHome }): JSX.Element => {
  return (
    <>
      {isHome && <Flex
        h='100'
        bgColor='light.white'
        alignItems='center'
        justifyContent='center'
        pl='140px'
        pr='140px'
      >
        <Box>
          <Image
            src='/logo.svg'
            width={184}
            height={46}
            alt='logo'
          />
        </Box>
      </Flex>}
      {!isHome && <Flex
        h='100'
        bgColor='light.white'
        alignItems='center'
        justifyContent='space-between'
        pl='140px'
        pr='140px'
      >
        {/* TODO: missing back to home function */}
        <MdOutlineArrowBackIosNew />

        <Box mr='488px'>
          <Image
            src='/logo.svg'
            width={184}
            height={46}
            alt='logo'
          />
        </Box>
      </Flex>}
    </>
  )
}
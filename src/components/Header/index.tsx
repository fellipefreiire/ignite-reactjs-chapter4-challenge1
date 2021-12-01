import { Box, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

interface HeaderProps {
  isHome: boolean
}

export const Header: React.FC<HeaderProps> = ({ isHome }): JSX.Element => {
  const router = useRouter()

  return (
    <>
      {isHome && <Flex
        h={[null, null, '50', '75', '100']}
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
        h={[null, null, '50', '75', '100']}
        bgColor='light.white'
        alignItems='center'
        justifyContent='space-between'
        pl='16px'
        pr={[null, null, '140px', '195px', '140px', '380px']}
      >
        <MdOutlineArrowBackIosNew onClick={() => { router.push('/') }} />

        <Box
          mr={[null, null, '0', '100px', '488px']}
          ml={[null, null, '115px']}
        >
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
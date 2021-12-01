import { Box, Flex, Text, Tooltip } from "@chakra-ui/react"
import { MdOutlineInfo } from 'react-icons/md'

interface ContinentDescriptionProps {
  description: string | undefined
}

export const ContinentDescription: React.FC<ContinentDescriptionProps> = ({ description }): JSX.Element => {
  return (
    <Flex
      mt={[null, null, '24px', '24px', '80px', null]}
      mb={[null, null, '32px', '32px', '80px', null]}
      pl={[null, null, '0', null, '140px', null]}
      pr={[null, null, '0', null, '140px', null]}
      justify='space-between'
      direction={[null, null, 'column', null, 'row', null]}
    >
      <Box
        w={[null, null, '375px', '768px', '600px', '800px']}
        pl={[null, null, '16px', '32px', '0', null]}
        pr={[null, null, '16px', '32px', '0', null]}
        h={[null, null, '146px', '211px', null, '300px']}
        mb={[null, null, '16px', '0', null, null]}
      >
        <Text
          fontSize={[null, null, '14px', "24px", null, '32px']}
          color='dark.text'
          textAlign='justify'
        >
          {description}
        </Text>
      </Box>
      <Flex
        w={[null, null, '375px', '470px', null, '650px']}
        pl={[null, null, '24px', '0', null, null]}
        pr={[null, null, '24px', '0', null, null]}
        m={'auto'}
        justify='space-between'
        align='center'
        textAlign='center'
      >
        <Box>
          <Text
            fontSize={[null, null, '24px', '48px', null, '72px']}
            fontWeight='600'
            lineHeight={[null, null, '24px', '56px', null, '88px']}
            color='highlight'
          >
            50
          </Text>
          <Text
            fontSize={[null, null, '18px', '24px', null, '32px']}
            fontWeight={[null, null, '500', '600', null, null]}
            lineHeight='24px'
            color='dark.text'
          >
            países
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={[null, null, '24px', '48px', null, '72px']}
            fontWeight='600'
            lineHeight={[null, null, '24px', '56px', null, '88px']}
            color='highlight'
          >
            60
          </Text>
          <Text
            fontSize={[null, null, '18px', '24px', null, '32px']}
            fontWeight={[null, null, '500', '600', null, null]}
            lineHeight='24px'
            color='dark.text'
          >
            línguas
          </Text>
        </Box>
        <Box>
          <Text
            fontSize={[null, null, '24px', '48px', null, '72px']}
            fontWeight='600'
            lineHeight={[null, null, '24px', '56px', null, '88px']}
            color='highlight'
          >
            27
          </Text>
          <Flex>
            <Text
              fontSize={[null, null, '18px', '24px', null, '32px']}
              fontWeight={[null, null, '500', '600', null, null]}
              lineHeight='24px'
              color='dark.text'
            >
              cidades +100
            </Text>
            <Flex align="center" ml='5px' color='dark.info50'>
              <Tooltip label='Cidades' aria-label="A tooltip">
                <Box>
                  <MdOutlineInfo />
                </Box>
              </Tooltip>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}
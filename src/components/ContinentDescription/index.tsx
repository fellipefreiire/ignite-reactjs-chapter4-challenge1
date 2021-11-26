import { Box, Flex, Text, Tooltip } from "@chakra-ui/react"
import { MdOutlineInfo } from 'react-icons/md'

interface ContinentDescriptionProps {
  description: string | undefined
}

export const ContinentDescription: React.FC<ContinentDescriptionProps> = ({ description }): JSX.Element => {
  return (
    <Flex mt='80px' mb='80px' pl='140px' pr='140px' justify='space-between'>
      <Box w='600px' h='211px'>
        <Text fontSize="24px" color='dark.text' textAlign='justify'>
          {description}
        </Text>
      </Box>
      <Flex w='470px' justify='space-between' align='center' textAlign='center'>
        <Box>
          <Text fontSize="48px" fontWeight='600' lineHeight='56px' color='highlight'>50</Text>
          <Text fontSize="24px" fontWeight='600' lineHeight='24px' color='dark.text'>países</Text>
        </Box>
        <Box>
          <Text fontSize="48px" fontWeight='600' lineHeight='56px' color='highlight'>60</Text>
          <Text fontSize="24px" fontWeight='600' lineHeight='24px' color='dark.text'>línguas</Text>
        </Box>
        <Box>
          <Text fontSize="48px" fontWeight='600' lineHeight='56px' color='highlight'>27</Text>
          <Flex>
            <Text
              fontSize="24px"
              fontWeight='600'
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
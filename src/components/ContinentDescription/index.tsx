import { Box, Flex, Text } from "@chakra-ui/react"

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
          {/* TODO: missing info icon  */}
          <Text fontSize="24px" fontWeight='600' lineHeight='24px' color='dark.text'>cidades +100</Text>
        </Box>
      </Flex>
    </Flex>
  )
}
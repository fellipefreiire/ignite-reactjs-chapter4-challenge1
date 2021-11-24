import { Box, Text } from "@chakra-ui/react"

interface ContinentBannerProps {
  backgroundUrl: string
  continentName: string
}

export const ContinentBanner: React.FC<ContinentBannerProps> = ({
  backgroundUrl,
  continentName
}): JSX.Element => {
  return (
    <Box bgImage={`url('${backgroundUrl}')`} pt='370px' pl='140px' pr='140px' h='500px'>
      <Text fontSize='48px' fontWeight='600' color='light.headings'>
        {continentName}
      </Text>
    </Box>
  )
}
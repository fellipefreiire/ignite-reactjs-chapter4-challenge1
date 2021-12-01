import { Flex, Text } from "@chakra-ui/react"

interface ContinentBannerProps {
  backgroundUrl: string
  continentName: string
}

export const ContinentBanner: React.FC<ContinentBannerProps> = ({
  backgroundUrl,
  continentName
}): JSX.Element => {
  return (
    <Flex
      bgImage={`url('${backgroundUrl}')`}
      pt={[null, null, '0', null, '370px', '510px']}
      pl={[null, null, '0', null, '140px']}
      pr={[null, null, '0', null, '140px']}
      h={[null, null, '150px', '325px', '500px', '675px']}
      align={[null, null, 'center', null, 'normal']}
      justify={[null, null, 'center', null, 'normal']}
      bgSize={[null, null, 'cover']}
    >
      <Text
        fontSize={[null, null, '28px', '48px', null, '64px']}
        fontWeight={[null, null, '600']}
        color='light.headings'
      >
        {continentName}
      </Text>
    </Flex>
  )
}
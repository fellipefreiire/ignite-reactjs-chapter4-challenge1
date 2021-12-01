import { Flex, Heading, Text } from "@chakra-ui/react"
import Image from 'next/image'

type City = {
  name: string
  country: string
  cityPhotoUrl: string
  countryFlagUrl: string
}

interface ContinentCitiesProps {
  cities: City[] | undefined
}

export const ContinentCities: React.FC<ContinentCitiesProps> = ({ cities }): JSX.Element => {
  return (
    <Flex
      direction="column"
      mb='35px'
      pl={[null, null, '16px', null, '140px']}
      pr={[null, null, '16px', null, '140px']}
    >
      <Heading
        fontSize={[null, null, '24px', '30px', '36px', '42px']}
        fontWeight={[null, null, '500', '600']}
        color='dark.headings'
      >
        Cidades +100
      </Heading>

      <Flex
        mt={[null, null, '20px', '32px', '40px']}
        css={{ gap: '45px' }}
        wrap='wrap'
        justify={[null, null, 'center', null, 'normal']}
      >
        {cities?.map(city => (
          <Flex
            direction="column"
            key={city.name}
            w='256px'
            h='279px'
          >
            <Image src={city.cityPhotoUrl} width={256} height={173} alt={city.name} />
            <Flex
              p='24px'
              justify='space-between'
              border='1px'
              borderTop='0'
              borderRadius='4px'
              borderTopRightRadius='0'
              borderTopLeftRadius='0'
              borderColor='highlight'
            >
              <Flex direction='column'>
                <Text fontSize='20px' color='dark.text'>{city.name}</Text>
                <Text fontSize='16px' color='dark.info'>{city.country}</Text>
              </Flex>
              <Image src={city.countryFlagUrl} width={30} height={30} alt={city.country} />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
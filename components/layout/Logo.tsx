import { Flex, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import Logo3Black from '../../public/3transparent_black.png';
import Logo3White from '../../public/3transparent_white.png';

export default function Logo() {

  const logoColor = useColorModeValue(Logo3Black, Logo3White)

  return (
    /*<Flex
      as={Link}
      href="/"
      fontSize="2xl"
      color={useColorModeValue('gray.800', 'white')}
      align="center"
      lineHeight={1}
    >
      <Text as="span" fontWeight="bold">
        your
        <Text as="span" color={useColorModeValue('primary.500', 'primary.400')}>
          app
        </Text>
      </Text>
    </Flex>
    */
    <Flex>
      <Image src={logoColor} alt="Logo" width={60} height={60} />
    </Flex>
  );
}

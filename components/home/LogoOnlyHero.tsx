import { Flex, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import MainLogoEn_1a1a1aOnTransparent from '../../public/Black logo - no background.png';
import MainLogoEn_WhiteOnTransparent from '../../public/White logo - no background.png';

export default function LogoOnlyHero() {
  const { t } = useTranslation('home');
  const mainLogoColor = useColorModeValue(MainLogoEn_1a1a1aOnTransparent, MainLogoEn_WhiteOnTransparent)

  return (
    <Flex
      direction="column"
      textAlign="center"
      bg={useColorModeValue('primary.50', 'beausoft.900')}
      px={0}
      py={0}
      mt={0}
      align="center"
      justify="center"
    >
      <Image src={mainLogoColor} alt="Your Image" width={800} height={800} />
    </Flex>
  );
}

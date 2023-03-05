import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FaMoon, FaSun, FaRegLightbulb } from 'react-icons/fa';

export default function ColorModeSwitch() {
  const { t } = useTranslation('common');
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useColorModeValue('beausoft.900', 'primary.50');

  return (
    <IconButton
      size="sm"
      aria-label={colorMode === 'light' ? t('colorMode.dark') : t('colorMode.light')}
      icon={colorMode === 'light' ? <FaMoon /> : <FaRegLightbulb />}
      color={iconColor}
      onClick={toggleColorMode}
      variant="ghost"
    ></IconButton>
  );
}

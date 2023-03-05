import {
  Box,
  Container,
  Heading,
  HStack,
  IconButton,
  Link as StyledLink,
  List,
  ListItem,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { FaEnvelope, FaTwitter } from 'react-icons/fa';
import Logo from './Logo';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <Box as="footer" bg={useColorModeValue('primary.50', 'beausoft.900')} px={4} py={16}>
      <Container maxW="5xl">
        <SimpleGrid spacing={8} columns={[1, 1, 3]}>
          <VStack align="start" spacing={3}>
             {/*
            <Logo />
  */}
            <HStack>
              <IconButton
                aria-label="Twitter"
                as="a"
                href="mailto:richardbeauregard@beausoft.ca"
                colorScheme={useColorModeValue('beausoft.900', 'primary.50')}
                variant="ghost"
                fontSize="xl"
              >
                <FaEnvelope />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                as="a"
                href="https://twitter.com/iamritchb"
                colorScheme="twitter"
                variant="ghost"
                fontSize="xl"
              >
                <FaTwitter />
              </IconButton>
            </HStack>
            <Text fontSize="xs" color={useColorModeValue('beausoft.900', 'primary.50')}>Property of 13686205 Canada Inc. {t('footer.allRightsReserved')}</Text>
          </VStack>

          {/*<Box>
            <Heading fontSize="base" mb={3}>
              {t('footer.links')}
            </Heading>
            <List spacing={1} opacity={0.75}>
              <ListItem>
                <StyledLink as={Link} href="/#">
                  {t('footer.link1')}
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink as={Link} href="/#">
                  {t('footer.link2')}
                </StyledLink>
              </ListItem>
            </List>
          </Box>

          <Box>
            <Heading fontSize="base" mb={3}>
              {t('footer.legal')}
            </Heading>
            <List spacing={1} opacity={0.75}>
              <ListItem>
                <StyledLink as={Link} href="/#">
                  {t('footer.privacy')}
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledLink as={Link} href="/#">
                  {t('footer.terms')}
                </StyledLink>
              </ListItem>
            </List>
          </Box>
          */}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

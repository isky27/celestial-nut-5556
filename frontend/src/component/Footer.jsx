import React from 'react'
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
  VisuallyHidden,
  chakra
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};


const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const Footer = () => {
  return (
    <Box>
        <Box color={useColorModeValue('gray.700', 'gray.200')}>
    <Container as={Stack} maxW={'6xl'} py={10}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
        <Stack align={'flex-start'} fontSize={'1.2rem'}>
          <ListHeader>Product</ListHeader>
          <Link href={'#'}>Overview</Link>
          <Stack direction={'row'} align={'center'} spacing={2} >
            <Link href={'#'}>Features</Link>
            <Tag
              size={'sm'}
              bg={useColorModeValue('green.300', 'green.800')}
              ml={2}
              color={'white'}>
              New
            </Tag>
          </Stack>
          <Link href={'#'}>Tutorials</Link>
          <Link href={'#'}>Pricing</Link>
          <Link href={'#'}>Releases</Link>
        </Stack>
        <Stack align={'flex-start'} fontSize={'1.2rem'}>
          <ListHeader>Company</ListHeader>
          <Link href={'#'}>About Us</Link>
          <Link href={'#'}>Press</Link>
          <Link href={'#'}>Careers</Link>
          <Link href={'#'}>Contact Us</Link>
          <Link href={'#'}>Partners</Link>
        </Stack>
        <Stack align={'flex-start'} fontSize={'1.2rem'}>
          <ListHeader>Legal</ListHeader>
          <Link href={'#'}>Cookies Policy</Link>
          <Link href={'#'}>Privacy Policy</Link>
          <Link href={'#'}>Terms of Service</Link>
          <Link href={'#'}>Law Enforcement</Link>
          <Link href={'#'}>Status</Link>
        </Stack>
        <Stack align={'flex-start'} fontSize={'1.2rem'}>
          <ListHeader>Follow Us</ListHeader>
          <Link href={'#'}>Facebook</Link>
          <Link href={'#'}>Twitter</Link>
          <Link href={'#'}>Dribbble</Link>
          <Link href={'#'}>Instagram</Link>
          <Link href={'#'}>LinkedIn</Link>
        </Stack>
      </SimpleGrid>
    </Container>
    <Box py={10}>
      <Flex
        align={'center'}
        _before={{
          content: '""',
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          flexGrow: 1,
          ml: 8,
        }}>
      </Flex>
    </Box>
        </Box>

        <Box
      bg={'#F0F0F0'}
      padding={'1rem'}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
        color={'hsl(0,0%,20%)'}>
          <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Security</Link>
          <Link href={'#'}>API</Link>
          <Link href={'#'}>Sitemap</Link>
          <Link href={'#'}>Privacy</Link>
          <Link href={'#'}>Terms</Link>
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
    </Box>
  )
}

export default Footer
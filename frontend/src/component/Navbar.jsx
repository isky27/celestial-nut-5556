import React from 'react'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    HStack,
    PopoverTrigger,
    useColorModeValue,
    Image,Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerContent,
    DrawerCloseButton,
    Input,
    useDisclosure,
    SimpleGrid
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Flag from './Flag';
import logo from "../Assets/logo.png"
import { useNavigate,Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const drawer_items = [
  {
    label: [
      { item: "Overview" },
      { item: "Features" },
      { item: "Templates", to: "/template" },
      { item: "Integrations" },
      { item: "Enterprise Overview" },
      { item: "Maketplace", to: "/marketplace" },
      { item: "Interface Designer", to: "/interface" },
    ],
    color: "pink.300",
  },
  {
    label: [
      { item: "By Time" },
      { item: "By Use Case" },
      { item: "See all solutions" },
      { item: "Download Apps" },
    ],
    color: "green.600",
  },
  {
    label: [
      { item: "Enterprise Overview" },
      { item: "Enterprise Services" },
      { item: "Enterprise Security" },
    ],
    color: "blue.600",
  },
  {
    label: [
      { item: "Webinars" },
      { item: "Demos" },
      { item: "Guides" },
      { item: "Articles" },
      { item: "Blog" },
      { item: "API Docs" },
      { item: "Developer Community" },
      { item: "Universe" },
      { item: "Customer Stories" },
      { item: "Contact Support" },
    ],
    color: "green.600",
  },
];

  export default function WithSubnavigation() {
    const { isOpen, onToggle , onOpen, onClose } = useDisclosure();
    const navigate = useNavigate()
 const { isAuth, isError } = useSelector((store) => store.userLogin);

  
    return (
      <Box position="fixed" width="100%" zIndex={100}>
        <Flag />
        <Box>
          <Flex
            bg={useColorModeValue("white", "gray.800")}
            color={useColorModeValue("gray.600", "white")}
            // minH={'60px'}
            py={{ base: 2 }}
            px={{ base: 4 }}
            align={"center"}
          >
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
              <Box width="15%">
                <Link to={"/"}>
                  <Image src={logo} width="100%" />
                </Link>
              </Box>

              <Flex display={{ base: "none", md: "flex" }} ml={10}>
                <DesktopNav />
              </Flex>
            </Flex>

            {!isAuth ? (
              <Stack
                flex={{ base: 1, md: 0 }}
                justify={"flex-end"}
                direction={"row"}
                spacing={6}
              >
                <Button
                  as={"a"}
                  fontSize={"lg"}
                  fontWeight={400}
                  border={"3px solid grey"}
                  borderRadius="8px"
                  bg={"none"}
                  href={"#"}
                >
                  Contact Sales
                </Button>
                <Button
                  display={{ base: "none", md: "inline-flex" }}
                  fontSize={"lg"}
                  fontWeight={600}
                  color={"white"}
                  bg={"blue.400"}
                  href={"#"}
                  _hover={{
                    bg: "blue.600",
                  }}
                  onClick={() => navigate("/signup")}
                >
                  Sign up for free
                </Button>
                <Button
                  as={"a"}
                  fontSize={"lg"}
                  fontWeight={400}
                  bg={"none"}
                  border={"none"}
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </Button>
              </Stack>
            ) : (
              <Box display={{ base: "none", md: "none", lg: "block" }}>
                <HStack spacing={25}>
                  <HStack>
                    <Text fontWeight="semibold" color="whiteAlpha.900">
                      userName
                    </Text>
                  </HStack>

                  <Button
                    fontWeight="lighter"
                    colorScheme="messenger"
                    variant="solid"
                  >
                    LogOut
                  </Button>
                </HStack>
              </Box>
            )}
          </Flex>
        </Box>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = ({ children, ...rest }) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
     
    const { isOpen , onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

     const navigate = useNavigate()
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem,index) => (
          <Box key={index} display="flex" justifyContent={'center'} alignItems="center" >
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link to={navItem.to}>
                <Text
                  p={2}
                  fontSize={'lg'}
                  fontWeight={'500'}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}
                  ref={btnRef} onClick={onOpen}>
                  {navItem.label}
                </Text>
                </Link>
              </PopoverTrigger>
            </Popover>
            <Drawer
              variant="alwaysOpen"
              {...rest}
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              trapFocus={false}
              closeOnOverlayClick={false}
              blockScrollOnMount={false}
              size={'lg'}>
        {/* <DrawerOverlay /> */}
             <DrawerContent>
                 <DrawerCloseButton />
                     {/* <DrawerHeader>Create your account</DrawerHeader> */}

                     <DrawerBody>
                        {
                          drawer_items.map((item,index)=>(
                            <SimpleGrid columns={2} key={index}>
                                
                                {
                                  item.label.map((el)=>(
                                   <Box key={el} marginTop={'1rem'}>
                                         <Link to={el.to}>
                                         <Text p={2}
                                          fontSize={'lg'}
                                          fontWeight={'500'}
                                          color={item.color}
                                          _hover={{
                                          textDecoration: 'none',
                                          color: linkHoverColor,
                                          }} >{el.item}</Text>
                                    </Link>
                                   </Box>
                                  ))
                                }
                            </SimpleGrid>
                          ))
                        }
                     </DrawerBody>

                     <DrawerFooter>
                         <Button variant="outline" mr={3} onClick={onClose}>Cancel </Button>
                         <Button colorScheme="blue">Save</Button>
                     </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem,index) => (
          <MobileNavItem key={index} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
        </Flex>
  
        {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse> */}
      </Stack>
    );
  };
  
  // interface NavItem {
  //   label: string;
  //   subLabel?: string;
  //   children?: Array<NavItem>;
  //   href?: string;
  // }
  
  const NAV_ITEMS = [
    {
      label: 'Product',
    },
    {
      label: 'Solutions',
    },
    {
      label: 'Pricing',
      to:"/price"
    },
    {
      label: 'Enterprise',
    },
    {
      label: 'Solutions',
    }
  ];

  

  
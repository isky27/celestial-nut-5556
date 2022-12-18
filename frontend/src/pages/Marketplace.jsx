import {
  Box,
  Text,
  Button,
  SimpleGrid,
  Image,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import Navbar from "../component/Navbar"
import Footer from "../component/Footer";

import { Search2Icon } from "@chakra-ui/icons";

const Marketplace = () => {
  const exbyair = [
    {
      img: "https://dl.airtable.com/.blockIconImages/56eb956cb00fd3087c627c040e1d6b77/c47911ac",
      head: "Vega-Lite",
      para: "Build visualizations using Vega-Lite",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/92b88b458c964ae55d8b74f5152510f5/918ed580",
      head: "Chart",
      para: "Visualize your records on a bar, line, pie, or scatter chart",
    },
    {
      img: "	https://dl.airtable.com/.blockIconImages/b167bfd3fd6d24c2fffed59d0e341b65/51d1de9e",
      head: "Pivot table",
      para: "Summarize your records in a pivot table",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/df91e7c84b4038afbfed45bcf42be09f/25ca45ca",
      head: "Search",
      para: "Search the records in your base",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/4b0c13c957c531e009ac12cb07e41764/50c853c9",
      head: "CSV Import",
      para: "Import CSV files into your base",
    },
    {
      img: "	https://dl.airtable.com/.blockIconImages/ca2b082f78a7b0782668150f98d52f0c/72f81454",
      head: "Base Schema",
      para: "Visualize all your base's tables, fields, and relationships",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/a3021643fb54a59518ab6219982111e2/8c572d4e",
      head: "ORG Chart",
      para: "Visualize hierarchical relationships between linked records",
    },
    {
      img: "	https://dl.airtable.com/.blockIconImages/938bd57c5646ef695c93b78914fc46e9/563609a4",
      head: "SendGrid",
      para: "Send emails to contacts in a table using SendGrid",
    },
  ];

  const exAll = [
    {
      img: "https://dl.airtable.com/.blockIconImages/9d35db07b99e356d944dc42d108433c4/6cbe3dab",
      head: "Charts & Reports",
      para: "Visualize your base data with charts & graphs, download as PDF and schedule email reports.",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/415350c9a756f1aaad52982dfe5ad0c6/f3cf4349",
      head: "Micro",
      para: "Visualize your ideas on a collaborative whiteboard",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/32b1209734c8a8064c5bf73237129a7d/11f40cc8",
      head: "TypeForm",
      para: "Generate forms and import responses",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/06b0f4521bb8145f4473c7601b7de710/055aa072",
      head: "Text Splitter",
      para: "Split text into separate fields",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/253f0afad2f092e76d615ac816745c45/51799aeb",
      head: "Name Parser",
      para: "Parses names into title, suffix, first, middle and last name",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/80ebfb0ea7a1fa2683b933dd9e26fa72/75f18a0d",
      head: "Formstack Documents",
      para: "Auto-populate documents with your records",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/bfb2981384961a71cbd53bac3f0c8640/7c9cabef",
      head: "Pexels",
      para: "Browse, search, and attach free stock photos",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/544eb525681751d957a1ded4cb6158e2/60004cb6",
      head: "PDF Generator API",
      para: "Easily generate PDF documents from pre-defined templates with JSON data",
    },
  ];

  const scriptAir = [
    {
      img: "https://dl.airtable.com/.blockIconImages/b4ab25071d9559923301d74da1adbe7e/013938c3",
      head: "Find and replace",
      para: "Find and replace all text matches for a field",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/b4ab25071d9559923301d74da1adbe7e/013938c3",
      head: "Randomize values",
      para: "Fill all cells in a particular field with random values",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/b4ab25071d9559923301d74da1adbe7e/013938c3",
      head: "Convert attachments to Urls",
      para: "Export attachments as a comma-separated URL list",
    },
    {
      img: "https://dl.airtable.com/.blockIconImages/b4ab25071d9559923301d74da1adbe7e/013938c3",
      head: "Convert URLs to attachements",
      para: "Upload all attachments for URLs in a field",
    },
  ];
  return (
    <>  
      <Navbar />
      <Box
         height={[
          '268',
          '268',
          '298', 
          '292',
        ]}
        paddingTop='28'
        paddingBottom='8'
        style={{
          backgroundImage: `url(${"https://static.airtable.com/images/marketplace_banner@2x.png"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "100%",
        }}
      >
        <Box w="100%" display="flex" >
          <Box  height="100%" width={[
                '60%', // 0-30em
                '48%', // 30em-48em
                '52%', // 48em-62em
                '68%', // 62em+
              ]}>
            <Text
              marginTop="14"
              ml={[8,12,14, 16]}
              fontWeight="bold"
              color="black"
              fontSize={{ base: '18px', md: '24px', lg: '32px' }}
            >
              Marketplace
            </Text>
            <Text fontSize={['sm', 'md', 'lg', 'xl']} ml={[8,12,14, 16]} mt="4" color="black">
              Analyze, enrich, and take action on your data with Airtable
              Extensions.
            </Text>
          </Box>
          <Box p="4" width={[
                '40%', // 0-30em
                '52%', // 30em-48em
                '48%', // 48em-62em
                '42%', // 62em+
              ]} display="flex" justifyContent="center">
            <Button
              mt={[16, 16, 20, 20]}
              ml={[4,12,18, 20]}
              mr={[-40,4,4, 2]}
              width={[
                '280%', // 0-30em
                '86%', // 30em-48em
                '64%', // 48em-62em
                '52%', // 62em+
              ]}
              leftIcon={<Search2Icon />}
              colorScheme="white"
              fontSize={['sm', 'md', 'lg', 'xl']}
              color="gray.400"
              border="2px solid "
            >
              Find an extension
            </Button>
          </Box>
        </Box>
      </Box>
      <Tabs mt="12" ml="16">
        <TabList width="94%">
          <Tab fontWeight="500">Features</Tab>
          <Tab fontWeight="500">Extensions by Airtable</Tab>
          <Tab fontWeight="500">All extensions</Tab>
          <Tab fontWeight="500">Scripts</Tab>
        </TabList>
      </Tabs>
      <SimpleGrid
        marginTop="4"
        columns={[1, null, 3]}
        spacing="2px"
        width="94%"
      >
        <Image
          width="94%"
          borderRadius="12"
          marginLeft="16"
          mt="8"
          src="https://static.airtable.com/images/marketplace/marketing_collection@2x.png"
          alt="ab"
        />
        <Image
          width="94%"
          borderRadius="12"
          marginLeft="16"
          mt="8"
          src="https://static.airtable.com/images/featured_app_page_designer2.png"
          alt="ab"
        />
        <Image
          width="94%"
          borderRadius="12"
          marginLeft="16"
          mt="8"
          src="https://static.airtable.com/images/featured_app_scripting2.png"
          alt="ab"
        />
      </SimpleGrid>
      <Text fontSize='xl' fontWeight={'bold'} ml='20' mt='12'>
            Extensions by Airtable
      </Text>
      <SimpleGrid
          minChildWidth='350px'

          marginTop="12"
          spacing="40px"
          width={'90%'}
          marginLeft={"50px"}
          ml='16'
        >
          {exbyair.map((el,index) => {
            return (
              <div key={index}>
                <Box
                  height="70px"
                  backgroundColor={"white"}
                  width={'100%'}
                  display='flex'
                  mt='-6'
                >
                  <Image
                    height="80%"
                    justifyContent={"center"}
                    src={el.img}
                  />
                  <Box marginLeft='4'>
                    <Text fontSize='m' fontWeight={'600'}>
                        {el.head}
                    </Text>
                    <Text fontSize='xs' fontWeight={'500'} color='gray'>
                        {el.para}
                    </Text>
                  </Box>
                </Box>
              </div>
            );
          })}
        </SimpleGrid>
        <Box w='100%' display='flex' justifyContent='center' alignItems={'center'}>
            <Button colorScheme='gray' color='blue' height={'8'}  mt='4'>
            View all extensions
            </Button>
        </Box>
        <Text fontSize='xl' fontWeight={'bold'} ml='20' mt='12'>
            Extensions by Airtable
      </Text>
      <SimpleGrid
          // columns={[4, null, 2]}
          minChildWidth='350px'
          marginTop="12"
          spacing="40px"
          width={'90%'}
          marginLeft={"50px"}
          ml='16'
        >
          {exAll.map((el,index) => {
            return (
              <div key={index}>
                <Box
                  height="70px"
                  backgroundColor={"white"}
                  width={'100%'}
                  display='flex'
                  mt='-6'
                >
                  <Image
                    height="80%"
                    justifyContent={"center"}
                    src={el.img}
                    borderRadius='18'
                  />
                  <Box marginLeft='4'>
                    <Text fontSize='m' fontWeight={'600'}>
                        {el.head}
                    </Text>
                    <Text fontSize='xs' fontWeight={'500'} color='gray'>
                        {el.para}
                    </Text>
                  </Box>
                </Box>
              </div>
            );
          })}
        </SimpleGrid>
        <Box w='100%' display='flex' justifyContent='center' alignItems={'center'}>
            <Button colorScheme='gray' color='blue' height={'8'}  mt='4'>
            View all extensions
            </Button>
        </Box>
        <Text fontSize='xl' fontWeight={'bold'} ml='20' mt='12'>
            Extensions by Airtable
      </Text>
      <SimpleGrid
          minChildWidth='360px'
          marginTop="12"
          spacing="40px"
          width={'90%'}
          marginLeft={"50px"}
          ml='16'
        >
          {scriptAir.map((el,index) => {
            return (
              <div key={index}>
                <Box
                  height="70px"
                  backgroundColor={"white"}
                  width={'100%'}
                  display='flex'
                  mt='-6'
                >
                  <Image
                    height="80%"
                    justifyContent={"center"}
                    src={el.img}
                  />
                  <Box marginLeft='4'>
                    <Text fontSize='m' fontWeight={'600'}>
                        {el.head}
                    </Text>
                    <Text fontSize='xs' fontWeight={'500'} color='gray'>
                        {el.para}
                    </Text>
                  </Box>
                </Box>
              </div>
            );
          })}
        </SimpleGrid>
        <Box w='100%' display='flex' justifyContent='center' alignItems={'center'}>
            <Button colorScheme='gray' color='blue' height={'8'} mt='4'>
            View all scripts
            </Button>
        </Box>
        <Box w='full'margin={'auto'} mt='12' ml={[20, 0, 0, 0]}>
            <Image width='100%' borderRadius='12' src='https://static.airtable.com/images/open_source@2x.png' />
        </Box>
        <Box w='100%' textAlign={'center'}>
            <Text fontSize='xl' fontWeight={'bold'}  ml={[20, 10, 0, 0]} mt='8'>
                Open Source extensions
            </Text>
            <Text fontSize='14'  ml={[24, 0, 0, 0]} fontWeight={'400'} mt='4' color='gray'>
            The Airtable community has developed and published over 150 open source extensions on GitHub.
            </Text>
            <Text fontSize='14'  ml={[24, 0, 0, 0]}  fontWeight={'400'} color='gray'>
            Remix open source extensions and customize them to fit your own workflows.
            </Text>
            <Button width={[
                '150%', // 0-30em
                '65%', // 30em-48em
                '42%', // 48em-62em
                '32%', // 62em+
              ]} lineHeight='normal' colorScheme={'blue'} height='10' fontSize={'s'} borderRadius='28' mt='4'  ml={[20, 0, 0, 0]} color='white'>
                View all open sources extensions on GitHub
            </Button>
            <Text fontSize={'14'} color='blue' mt={'2'}  ml={[24, 0, 0, 0]} >
              Learn how to remix open source extensions
            </Text>
        </Box>
        <Box p={4} display={{ md: 'flex' }}>
  <Box flexShrink={0}>
    <Image
      borderRadius='lg'
      width={{ md: 40 }}
      src='https://bit.ly/2jYM25F'
      alt='Woman paying for a purchase'
    />
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Text
      fontWeight='bold'
      textTransform='uppercase'
      fontSize='sm'
      letterSpacing='wide'
    >
      Marketing
    </Text>
    <Text mt={2} color='gray.500'>
      Getting a new business off the ground is a lot of hard work. Here are five
      ideas you can use to find your first customers.
    </Text>
  </Box>
</Box>
<Footer/>

    </>
  );
};

export default Marketplace;

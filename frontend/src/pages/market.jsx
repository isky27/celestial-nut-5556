import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
function Marketplace() {
  return (
    <Box>
      {/* heading  */}
      <Box
        h={"260"}
        backgroundImage="url('https://static.airtable.com/images/marketplace_banner@2x.png')"
        backgroundPosition="center"
        bgSize={"100%"}
        backgroundRepeat="no-repeat"
      >
        <Grid
          pl={"50px"}
          pr={"50px"}
          templateColumns="repeat(6, 1fr)"
          pt={{ base: "20px", md: "40px", lg: "80px" }}
        >
          <GridItem colSpan={4} width={"80%"}>
            <Text fontWeight={500} fontSize={"25px"}>
              Marketplace
            </Text>
            <Text fontWeight={500} fontSize={"18px"} color={"gray.600"}>
              Analyze, enrich, and take action on your data with Airtable
              Extensions.
            </Text>
          </GridItem>
          <GridItem colSpan={2} pt={{ lg: "20px" }}>
            <InputGroup bgColor={"white"} size={"md"}>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300" />}
              />
              <Input
                border={"2px solid black"}
                type="text"
                placeholder="Find an extension"
              />
            </InputGroup>
          </GridItem>
        </Grid>
      </Box>

      {/* 2nd heading  */}
      <Flex mt={5} mb={10} p={5}>
        <Box m={3} h={{ base: "270px", md: "270px", lg: "270px" }}>
          <Image
            borderRadius={20}
            src="https://static.airtable.com/images/marketplace/marketing_collection@2x.png"
          />
        </Box>
        <Box m={3} h={{ base: "270px", md: "270px", lg: "270px" }}>
          <Image
            borderRadius={20}
            src="https://static.airtable.com/images/featured_app_page_designer2.png"
          />
        </Box>
        <Box m={3} h={{ base: "270px", md: "270px", lg: "270px" }}>
          <Image
            borderRadius={20}
            src="https://static.airtable.com/images/featured_app_scripting2.png"
          />
        </Box>
      </Flex>

      {/* 3rd  heading */}
      <Box pl={10} pr={10}>
        <Text fontWeight={500} fontSize={"25px"}>
          Extensions by Airtable
        </Text>
        <Box pl={5} pr={5}>
          <Grid mt={5} templateColumns="repeat(2, 1fr)" gap={6}>
            {/* First  */}
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/56eb956cb00fd3087c627c040e1d6b77/c47911ac"
                />
                <Box mt={"2px"}>
                  <Text>Vega-Lite</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Build visualizations using Vega-Lite
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            {/* Second  */}
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/92b88b458c964ae55d8b74f5152510f5/918ed580"
                />
                <Box mt={"2px"}>
                  <Text>Chart</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Visualize your records on a bar, line, pie, or scatter chart
                  </Text>
                </Box>
              </Flex>
            </GridItem>

            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/b167bfd3fd6d24c2fffed59d0e341b65/51d1de9e"
                />
                <Box mt={"2px"}>
                  <Text>Pivot table</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Summarize your records in a pivot table
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/df91e7c84b4038afbfed45bcf42be09f/25ca45ca"
                />
                <Box mt={"2px"}>
                  <Text>Search</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Search the records in your base
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/4b0c13c957c531e009ac12cb07e41764/50c853c9"
                />
                <Box mt={"2px"}>
                  <Text>CSV import</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Import CSV files into your base
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/ca2b082f78a7b0782668150f98d52f0c/72f81454"
                />
                <Box mt={"2px"}>
                  <Text>Base schema</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Visualize all your base's tables, fields, and relationships
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/a3021643fb54a59518ab6219982111e2/8c572d4e"
                />
                <Box mt={"2px"}>
                  <Text>Org Chart</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Visualize hierarchical relationshi s between linked records
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/938bd57c5646ef695c93b78914fc46e9/563609a4"
                />
                <Box mt={"2px"}>
                  <Text>SendGrid</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Send emails to contacts in a table using SendGrid
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      <Center>
        <Button m={5} size={"sm"} color={"blue.600"}>
          <Text fontSize={"12px"}>View all extensions by Airtable</Text>
        </Button>
      </Center>

      {/* ->  */}
      {/* 4rt heading  */}
      <Box pl={10} pr={10}>
        <Text fontWeight={500} fontSize={"25px"}>
          All Extensions
        </Text>
        <Box pl={5} pr={5}>
          <Grid mt={5} templateColumns="repeat(2, 1fr)" gap={6}>
            {/* First  */}
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/9d35db07b99e356d944dc42d108433c4/6cbe3dab"
                />
                <Box mt={"2px"}>
                  <Text>Charts & Reports</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Visualize your base data with charts & graphs, download as
                    PDF and schedule email reports.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            {/* Second  */}
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/415350c9a756f1aaad52982dfe5ad0c6/f3cf4349"
                />
                <Box mt={"2px"}>
                  <Text>Miro</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Visualize your ideas on a collaborative whiteboard
                  </Text>
                </Box>
              </Flex>
            </GridItem>

            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/32b1209734c8a8064c5bf73237129a7d/11f40cc8"
                />
                <Box mt={"2px"}>
                  <Text>Typeform</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Generate forms and import responses
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/06b0f4521bb8145f4473c7601b7de710/055aa072"
                />
                <Box mt={"2px"}>
                  <Text>Text Splitter</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Split text into separate fields
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/253f0afad2f092e76d615ac816745c45/51799aeb"
                />
                <Box mt={"2px"}>
                  <Text>Name Parser</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Parses names into title, suffix, first, middle and last name
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/80ebfb0ea7a1fa2683b933dd9e26fa72/75f18a0d"
                />
                <Box mt={"2px"}>
                  <Text>Formstack Documents</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Auto-populate documents with your records
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/bfb2981384961a71cbd53bac3f0c8640/7c9cabef"
                />
                <Box mt={"2px"}>
                  <Text>Pexels</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Browse, search, and attach free stock photos
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/544eb525681751d957a1ded4cb6158e2/60004cb6"
                />
                <Box mt={"2px"}>
                  <Text>PDF Generator API</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Easily generate PDF documents from pre-defined templates
                    with JSON data
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      <Center>
        <Button m={5} size={"sm"} color={"blue.600"}>
          <Text fontSize={"12px"}>View all extensions</Text>
        </Button>
      </Center>

      {/* 5th heading  */}
      <Box pl={10} pr={10}>
        <Text fontWeight={500} fontSize={"25px"}>
          Scripts
        </Text>
        <Box pl={5} pr={5}>
          <Grid mt={5} templateColumns="repeat(2, 1fr)" gap={6}>
            {/* First  */}
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/b4ab25071d9559923301d74da1adbe7e/013938c3"
                />
                <Box mt={"2px"}>
                  <Text>Find and replace</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Find and replace all text matches for a field
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            {/* Second  */}
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/b4ab25071d9559923301d74da1adbe7e/013938c3"
                />
                <Box mt={"2px"}>
                  <Text>Randomize values</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Fill all cells in a particular field with random values
                  </Text>
                </Box>
              </Flex>
            </GridItem>

            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/b4ab25071d9559923301d74da1adbe7e/013938c3"
                />
                <Box mt={"2px"}>
                  <Text>Convert attachments to URLs</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Export attachments as a comma-separated URL list
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem w="100%" h={"auto"}>
              <Flex>
                <Image
                  mr={4}
                  h={"56px"}
                  w={"56px"}
                  src="https://dl.airtable.com/.blockIconImages/b4ab25071d9559923301d74da1adbe7e/013938c3"
                />
                <Box mt={"2px"}>
                  <Text>Convert URLs to attachments</Text>
                  <Text fontSize={"14px"} color={"gray.500"}>
                    Upload all attachments for URLs in a field
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      <Center>
        <Button m={5} size={"sm"} color={"blue.600"}>
          <Text fontSize={"12px"}>View all Scripts</Text>
        </Button>
      </Center>

      {/* After grid  */}
      <Box
        h={"260"}
        backgroundImage="url('https://static.airtable.com/images/open_source@2x.png')"
        backgroundPosition="center"
        bgSize={"100%"}
        backgroundRepeat="no-repeat"
      ></Box>

      {/* Last Second  */}
      <Center>
      <Box mt={5} width={"70%"} alignItems={"center"} textAlign={"center"}>
        <Text m={3} fontSize={"19px"} fontWeight={"600"}>
          Open source extensions
        </Text>
        <Text fontSize={"14px"} fontWeight={"600"}>
          The Airtable community has developed and published over 150 open
          source extensions on GitHub. Remix open source extensions and
          customize them to fit your own workflows.
        </Text>
        <Button m={3} bgColor={"blue.400"} borderRadius={50} color={"white"}>View all open source extensions on GitHub</Button>
        <Text m={3} color={"blue.400"} fontSize={"15px"} fontWeight={600}>Learn how to remix open source extensions</Text>
      </Box>
      </Center>
    </Box>
  );
}

export default Marketplace;

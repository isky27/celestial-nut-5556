import {
  Icon,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import CottageIcon from "@mui/icons-material/Cottage";
import { SearchIcon } from "@chakra-ui/icons";
import Navbar from "../component/Navbar"
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
function Template() {
  return (
    <Box>
      <Box>
      <Navbar />
      </Box>
    <Flex gap={1}>
      {/* ONe  */}
      <Box
        overflowY={"hidden"}
        w={"22%"}
        h={"570px"}
      >
        <Flex m={2}>
          <Button bgColor={"gray.300"}>
            <Icon color={"white"} as={CottageIcon} />
          </Button>
          <InputGroup ml={2} mr={2}>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.500" />}
            />
            <Input bg={"gray.100"} type="tel" placeholder="Search" />
          </InputGroup>
        </Flex>
        {/* Second  */}
        <Box ml={2} mr={2} mt={5}>
          <Text
            mb={5}
            ml={2}
            textAlign={"left"}
            fontSize={"11px"}
            color={"gray.400"}
            fontWeight={500}
            letterSpacing={1}
          >
            CATEGORIES
          </Text>
          <Flex flexDirection={"column"} gap={2} m={2}>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Content production
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Featured
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Creative
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Event Planning
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Everyday Life
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Groups, Clubs & Hobbies
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              HR & Recruiting
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Legal
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Local Business
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Marketing
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Nonprofit
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Personal
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              PR & Communications
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Product, design, and UX
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Project Management
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Publishing
            </Text>
            <Text
              textAlign={"left"}
              fontSize={"15px"}
              color={"gray.400"}
              fontWeight={400}
              letterSpacing={1}
            >
              Real Estate
            </Text>
          </Flex>
        </Box>
      </Box>
      {/* Second  */}
      <Box ml={"290px"} position={"absolute"} w={"76%"}>
        {/* All  */}
        <Box>
          <SimpleGrid p={3} columns={[1, 2, 3]}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              src="https://i.postimg.cc/DfcfxpBV/content.png"
            />
            <Image
              borderRadius={"10px"}
              width={"300px"}
              src="https://i.postimg.cc/pXGWH9wq/Screenshot-2022-12-17-180735.png"
            />
            <Image
              borderRadius={"10px"}
              boxSize="230px"
              width={"800px"}
              src="https://i.postimg.cc/nrnFHqVw/Screenshot-2022-12-17-180747.png"
            />
          </SimpleGrid>
          {/* Sec  */}
          <SimpleGrid p={3} columns={[1, 2, 3, 4]} ml={4} gap={3}>
            <Image
              borderRadius={"10px"}
              width={"200px"}
              src="https://i.postimg.cc/Dzby52Y5/Screenshot-2022-12-17-180805.png"
            />
            <Image
              borderRadius={"10px"}
              width={"200px"}
              src="https://i.postimg.cc/26QjR0YZ/Screenshot-2022-12-17-180818.png"
            />
            <Image
              borderRadius={"10px"}
              width={"200px"}
              src="https://i.postimg.cc/XJSNzTRW/Screenshot-2022-12-17-180830.png"
            />
            <Image
              borderRadius={"10px"}
              width={"200px"}
              src="https://i.postimg.cc/8cw1ssjk/Screenshot-2022-12-17-180842.png"
            />
            <Image
              borderRadius={"10px"}
              width={"200px"}
              src="https://i.postimg.cc/gkkzQyTx/Screenshot-2022-12-17-180856.png"
            />
            <Image
              borderRadius={"10px"}
              width={"200px"}
              src="https://i.postimg.cc/44VSNPHN/Screenshot-2022-12-17-182314.png"
            />
            <Image
              borderRadius={"10px"}
              width={"200px"}
              src="https://i.postimg.cc/X7WDZ59K/Screenshot-2022-12-17-182327.png"
            />
            <Image
              borderRadius={"10px"}
              width={"200px"}
              src="https://i.postimg.cc/hP0ZVG0k/Screenshot-2022-12-17-182339.png"
            />
          </SimpleGrid>
        </Box>
        {/* Content Pro   */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            Content Production
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              src="https://dl.airtable.com/exploreCoverImages%2FTRLvmCoSQ9OYrG2r3Yfz_pexels-photo-474873.jpeg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Digital Video Production
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Video production can seem daunting at first, but the key to any
              complicated, collaborative project is organization...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              src="https://dl.airtable.com/exploreCoverImages%2Fov1cp3ToTz2FnXiM91dT_william-iven-19843-unsplash.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Social Media Calendar
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              World-class social media teams move fast. Part content calendar,
              part culture calendar, this social template helps yo...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              src="https://dl.airtable.com/exploreCoverImages%2Fh1cprqPaTGa9wU6ynnzI_exploreCoverImages%252FtbKYQWtPTW2q1lBLf551_exploreCoverImages%252FJf3M5wTSSnC6SKG6TgrQ_25171507233_6a774fcfc3_k.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Blog Editorial Calendar
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Even the most battle-hardened editorial team needs a plan of
              attack. And that plan is called an editorial calendar. It's .
            </Text>
          </Box>
        </SimpleGrid>
        {/* Creative  */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            Creative
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FwZu6WoFpTwKU27RSTrbP_exploreCoverImages%252FpTXzLfrHQxGNZsHx2qVK_exploreCoverImages%252F0PzqYS7zRByV7jSagoeo_azztu531psm-jakob-owens.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Indie Film Production
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Manage every step from script to screen! You can use this template
              to plan out scenes, shots, props and acto...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2F2LWMIEY4S3q0vdFpGZLQ_exploreCoverImages%252FYp4H1qhxRMq7i5rSocDR_y02jex_b0o0-aaron-burden.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Novel Planning
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              When it's time to channel your inner Tolkien, use this novel
              writing template to build and remember every detail of...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              src="https://dl.airtable.com/exploreCoverImages%2Fz22XguvRB6zLe8C7K0UA_tbvsc-xxnuw-raphael-koh.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Art Gallery Management
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Whether you are an art gallery manager or a museum curator, you
              need the ability to test how different...
            </Text>
          </Box>
        </SimpleGrid>
        {/* Event Planing  */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            Event Planing
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FLBoIUpzRe6Xjlr3Ghh0g_exploreCoverImages%252F9i5vidWERBuvRqglcBS0_event-1597531_1280.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Event Planning
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Everyone is an event planner, even when said planning may be as
              simple as a weeknight dinner. For events with...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FPkXhlBvRu2aNaGbceKc5_exploreCoverImages%252F0vcOdULcTC293RKECSce_xxalfz6v9rq-robert-mathews.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Event marketing
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Hosting events is one of the best ways to engage customers. Use
              this template to plan meetups, dinners, webinars, an...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FzdmMsyAQou5WHE0gyuoQ_exploreCoverImages%252F1fHDLkrmQdOxV4oaoyA8_udodaha_mh8-annie-spratt.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Nonprofit Gala
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Venues, schedules, speakers—there's a lot that goes in to pulling
              off a successful event. This template will hel...
            </Text>
          </Box>
        </SimpleGrid>
        {/* Everyday life  */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            Event Planing
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FXOawPuXfTnSDLgL7amOr_exploreCoverImages%252Fdxp8ILVR2imNYlk6lX3r_jpkfc5_d-di-davide-cantelli.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Restaurant Field Guide
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              For the foodie, an easy way to organize restaurants and
              reservations. List the restaurants you'd like to visit, and jot...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FQZGOcH8FReaF6JtRyJkF_exploreCoverImages%252FqGARl5B7TKmyGxhhbsNK__c_i5gmzyr0-justin-veenema.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Pet Medical History
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Whether you identify as a cat person, or a dog person, or a guinea
              pig or snake person, remembering vet visits,...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FVziHvU67TGDYbFVu5uvM_exploreCoverImages%252FzgWPRxSBQmKnaZSFF0K9_exploreCoverImages%252Fgm5Usg0wRbaVd9nAeX8o_exploreCoverImages%252FmopX32y4S8gtq7lr8vQQ_iecsdu416pe-paul-nylund.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Apartment Hunting
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Apartment hunting is stressful, with so many budgets, details, and
              and amenities to track. Parking or no...
            </Text>
          </Box>
        </SimpleGrid>
        {/* Group club  */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            Groups, Clubs & Hobbies
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FcOnNWME3RHyBuL6sH9x0_exploreCoverImages%252FHL3dFyPOTFWs8C3c3FIs_exploreCoverImages%252FxevfPIYlR5WLz6XTxt5E_exploreCoverImages%252FKWWAftgTNuySDeJ4ftTR__m-drbinfa4-eli-francis.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Book Catalog
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Are you a bookworm who can never quite remember the title of that
              next book ou were going to read? Do you...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FgzW37v0XT0igXLLiM4dw_exploreCoverImages%252FHFRil8ikQpCbFYJdf8Jk_ggetibd0hvo-tom-sodoge.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Soccer Club
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Face it, you won't ever be as good as Pelé. But now you have an
              opportunity to organize like a champion. Use this...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FbEWPKxpwTh2sfWiHKhF9_chris-lawton-99165-unsplash.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Apartment Hunting
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Apartment hunting is stressful, with so many budgets, details, and
              and amenities to track. Parking or no...
            </Text>
          </Box>
        </SimpleGrid>
        {/* HR & R  */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            HR & Recruiting
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FNmBYkdJAQu2ZAcw4Qg4Z_exploreCoverImages%252F4h0SYn11QByaLAztYTKw_exploreCoverImages%252F2PUdqEAqS5q8PkBb9nR2_kslnvacfehs-ran-berkovich.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Simple Applicant Tracker
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              A dozen candidates apply for a job. Each is in different steps of
              the process. And each requires dedicated emails,...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FcNCXWyLQS2otMZ2ZOzQe_exploreCoverImages%252FLEncP9eVTBiNbdqNpqkL_ls0hg4l5joo-luis-llerena.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Employee directory
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              A shared directory of all the employees in your company. Keep
              track of their roles, start dates, birthdays, food...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FDD4RezRTrqzacazxxRGb_exploreCoverImages%252FB3NZV2HNRLWID6wWCAXR_ibpzztr3vxy-tristan-colangelo.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Contractor Time Tracker
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Airtable is a simple and fast way to keep track of your employees'
              hours worked across different projects. Easily update...
            </Text>
          </Box>
        </SimpleGrid>
        {/* Legal */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            Legal
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FV9FlS9kSQmWhrtUBmfVx_pexels-photo-197309.jpeg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Legal Case Tracking and...
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              With this template, you can stay on top of your cases, clients,
              and billing, no matter what's thrown at you.
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FV9zjDh3KRFGb9LiJRq5O_pexels-photo.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Legal Case Analysis
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Capture and organize facts, documents, people, evidence, issues,
              and authorities for your cases with this template. Keep..
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FZX70BSeBTPWAAR07mcXI_lance-anderson-2669461.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Legal matter manageme...
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Matter management made simple and beautiful. Setup proper client
              intake and screening. Find documents whenever...
            </Text>
          </Box>
        </SimpleGrid>
        {/* Local Business */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            Local Business
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2Ftn3tW8QrS75kVLwNoIHg_exploreCoverImages%252FmmGMuFSnyLwYE60isAwl_exploreCoverImages%252FbxZIdK7RQ226Ef4FDdOm_jufcqxgcxwa-samuel-zeller.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Product Catalog
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Last century it was a Sears catalog; today it's the curated
              homepage of your favorite website.No matter what the...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FjzlAsQLdQPG9Z0L3wwcq_exploreCoverImages%252FCEowSY2cTXWJEXx0mmJw_exploreCoverImages%252F0qmFxvo1RzictU7CYCi9_syqm-ypaew4-tim-wright.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Cattle Ranching
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Why buy the cow? Because milk isn't free. Track profits, livestock
              and more with this easy and extensible cattle...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2Foawe9jnTN66twQFgomf0_office-supplies.jpeg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Office Inventory Manage...
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Heyr where'd all the paperclips go? Is the printer out of
              toner?Not this time! Thanks to Airtable's Office Inventory...
            </Text>
          </Box>
        </SimpleGrid>
        {/* Marketing  */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            Marketing
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2F51D8ycQOSpew9WIDP2Me_pexels-photo-373966-upload.png"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Content Calendar
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Running a top-notch content program requires more than tracking
              deadlines. Get a broader view of your content...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FNyowWcFoSfaj40BMWDtG_exploreCoverImages%252FHqdWGSA7QQqGE8avD2Ow_f3uyey6ours-nicolai-berntsen.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Marketing Campaign Tra...
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Marketing campaigns are complex—and between all the click tracking
              and conversions, they can get messy. If...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/.exploreCoverImages/ad037bef50029f8b4219dd50b56acfd0/dc6ff729"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Content Operations
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Behind every great content marketing team is a complex web of
              processes— often known as content operations....
            </Text>
          </Box>
        </SimpleGrid>
        {/* Non profit  */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            Nonprofit
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FXpMWc83VRouIaJxoVclz_yfmjalh1s6s-matheus-ferrero.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Individual and corporate...
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Organize your individual and corporate donations in one place.
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FZLpwhAhxTh6CRCAAKqsw_exploreCoverImages%252FHhCgAyh2TaeFRmj1v61R_lcnwqwdz38g-d-ng-tr-n-qu-c.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Nonprofit grant tracker
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              You aim to do good in the world, not get lost in administrative
              details. If you've been juggling nonprofit grant...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FKCPLHw0SDuUaDrbMgTf8_exploreCoverImages%252FkRZ4wFfwTm8twpqZsMhV_foko4dpxamq-eric-rothermel.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Nonprofit program man...
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              As a program manager at a nonprofit organization, you need a
              simple and intuitive project management tool to...
            </Text>
          </Box>
        </SimpleGrid>
        {/* Personal  */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            personal
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2Fg4PoLJ2CR9iiLo4KcrPQ_pcrm_smiling.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Personal CRM
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Deepen your current relationships and expand your network with
              this Personal CRM template. Keep track of friends...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FvZ9rGRdXRvqkhwpFGWI3_lightcrm_smiling.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Lightweight CRM
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Most CRM products make a few too many assumptions about how a CRM
              should work for you. We don't pretend...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages/kOfif4zTRVGsGBzX9Q8L_vasily-koloda-620886-unsplash.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Graduation Requirements
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Planning and tracking graduation requirements can be a tough
              process, even for the most organized student....
            </Text>
          </Box>
        </SimpleGrid>
        {/* PR  */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            PR & Communications
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2Ffiy3qg4ATwW16OXngy6I_exploreCoverImages%252FMtNNmB9QhyPFUk3UaQ9r_speakers-744579_1920.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              PR Firm CRM
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Meant for an internal PR or comms team, this template can be used
              to track press for competitors and journalist...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2Fivfkjz6rSnvf6Cj6P8rK_exploreCoverImages%252FshWTobcyRM69EfhQkpFd_books-1840975_1920.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Product Messaging Libra...
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Keeping your product message consistent is a challenge, especially
              when you manage a team where...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FbDutAhFkT5a31KLK0L1U_exploreCoverImages%252FNAhQwwj4RK6opqfqwMir_o7bp1grkk1s-daniel-mccullough.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              PR & Media Lists
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Stop the presses! Track your journalist contacts and competitors'
              press mentions with this template.
            </Text>
          </Box>
        </SimpleGrid>
        {/* Product and design  */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            Product, design, and UX
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/.exploreCoverImages/b4b45d94db75dc2d9ead15d2c4b4066c/0345c04d"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Product Ops for Teams
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Tens of thousands of new products are introduced to the market
              each year— and almost half of them fail. Three big...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://comicbento.com/wp-content/uploads/2022/02/Uchiha-Itachi.png"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Product Ops for Your Or...
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Tens of thousands of new products are introduced to the market
              each year— and almost half of them fail. Three big...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FJawInXKTW2qpiT9Fhhfg_exploreCoverImages%252FZFxxi0tNSdG1u6tug6K3_9hi8ujmsdza-braden-collum.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Product Planning
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Customer stories? Sprints? Epics? If hearing those words gets you
              excited for rapid product development, then...
            </Text>
          </Box>
        </SimpleGrid>
        {/* Project Management  */}
        <Flex p={5}>
          <Text fontSize={"25px"} color={"gray.400"} fontWeight={500}>
            Project Management
          </Text>
          <Icon
            boxSize={"30px"}
            mt={"5px"}
            ml={"5px"}
            color={"gray.400"}
            as={TrendingFlatIcon}
          />
        </Flex>
        <SimpleGrid p={4} gap={5} columns={[1, 2, 3]}>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2Fn8taW1kVSb2oOkq4wCye_exploreCoverImages%252FwHQewJl3Tku9OU6MW6X7_jwimshwif14-jeff-sheldon.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Project Tracker
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              Impending deadlines. Critical collaborators. Tiny tasks. They all
              make up a small—but essential—part of...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FGlwLSXkPSHuOjO930qGL_ae1zkhoreq8-anthony-delanoix.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Science Museum Project ...
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              This lightweight project management base is designed around the
              trials and tribulations of the employees at a...
            </Text>
          </Box>
          <Box borderRadius={"10px"} border={1} boxShadow={"lg"}>
            <Image
              borderRadius={"10px"}
              width={"300px"}
              height={"200px"}
              src="https://dl.airtable.com/exploreCoverImages%2FKCPLHw0SDuUaDrbMgTf8_exploreCoverImages%252FkRZ4wFfwTm8twpqZsMhV_foko4dpxamq-eric-rothermel.jpg"
            />
            <Text textAlign={"center"} m={2} fontSize={"22px"} fontWeight={500}>
              Nonprofit program man...
            </Text>
            <Text
              m={5}
              textAlign="center"
              fontSize={"16px"}
              fontWeight={400}
              color={"gray.400"}
            >
              As a program manager at a nonprofit organization, you need a
              simple and intuitive project management tool to...
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Flex>
    </Box>
  );
}

export default Template;

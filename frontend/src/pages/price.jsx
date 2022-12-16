import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Price() {
  return (
    <Box>
      <Box h={{base : "30px",mg:"40px",lg: "50px"}} bgGradient="linear(to-r, blue, purple)">
        <Text pt={{base:"6px",md:"8px",lg:"10px"}}  pb={{base:"6px",md:"8px",lg:"10px"}} fontWeight={600} fontSize={{base : "16px",md:"17px",lg:"18px"}} color={"white"}>
          ✨ Sign up today and try the Pro plan for free
        </Text>
      </Box>
      {/* 2nd  */}
      <Center mt={5} mb={5}>
        <Text
          fontSize={{base : "25px",md:"30px",lg:"35px"}}
          textAlign={"center"}
          width={{base:"80%",md:"65%",lg:"50%"}}
          fontWeight={"700"}
        >
          Choose the perfect plan for your team’s needs
        </Text>
      </Center>
      <SimpleGrid columns={[1, 2, 3, 4]} pl={10} pr={10} gap={5}>
        {/* ONE  */}
        <Box p={3} border={"1px"} borderColor={"gray.300"} borderRadius={10}>
          <Box h={"160px"}>
            <Text fontWeight={500} textAlign={"left"} fontSize={"22px"}>
              Free
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"18px"}>
              For individuals or very small teams just getting started with
              Airtable
            </Text>
          </Box>
          <Text mt={10} fontWeight={500} textAlign={"left"} fontSize={"48px"}>
            Free
          </Text>
          <Button
            mt={10}
            width={"100%"}
            borderRadius={50}
            border={"1px"}
            p={5}
            borderColor={"black"}
          >
            <Text>Sign up</Text>
          </Button>
          <Box mt={5} h={"300px"}>
            <Text mb={3} fontWeight={500} textAlign={"left"} fontSize={"16px"}>
              Free includes :
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ Unlimited bases
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ Up to 5 creators or editors
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ Unlimited commenter & read-only users
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ Interface Designer
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 1 extension per base
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 1 sync integration
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 1,200 records per base
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 2GB of attachments per base
            </Text>
          </Box>
        </Box>
        {/* Two  */}
        <Box
          bgColor={"rgb(255,234,182)"}
          p={3}
          border={"1px"}
          borderColor={"gray.300"}
          borderRadius={10}
        >
          <Box h={"160px"}>
            <Text fontWeight={500} textAlign={"left"} fontSize={"22px"}>
              Plus
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"18px"}>
              For teams looking to create connected apps to manage their own
              workflows
            </Text>
          </Box>
          <Flex gap={5}>
            <Text mt={5} fontWeight={600} fontSize={"58px"}>
              $10
            </Text>
            <Text mt={10} fontWeight={500} width={"50%"} fontSize={"16px"}>
              per seat /month billed annually
            </Text>
          </Flex>
          <Text fontWeight={500} fontSize={"16px"} textAlign={"left"}>
            $12 billed monthly
          </Text>
          <Button
            mt={5}
            width={"100%"}
            borderRadius={50}
            border={"1px"}
            p={5}
            borderColor={"black"}
          >
            <Text>Try for free</Text>
          </Button>
          <Box mt={5} h={"300px"}>
            <Text mb={3} fontWeight={500} textAlign={"left"} fontSize={"16px"}>
              Everything in Free, plus:
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 3 extensions per base
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 3 sync integrations
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 5,000 records per base
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 5GB of attachments per base
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ Custom branded forms
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 6-month revision & snapshot history
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ Automatic table syncing
            </Text>
          </Box>
        </Box>
        {/* Three  */}
        <Box
          bgColor={"rgb(208,240,253)"}
          p={3}
          border={"1px"}
          borderColor={"rgb(208,240,253)"}
          borderRadius={10}
        >
          <Box h={"160px"}>
            <Text fontWeight={500} textAlign={"left"} fontSize={"22px"}>
              Pro
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"18px"}>
              For teams and departments who need to build connected apps to
              power their most important processes
            </Text>
          </Box>
          <Flex gap={5}>
            <Text mt={5} fontWeight={600} fontSize={"58px"}>
              $20
            </Text>
            <Text mt={10} fontWeight={500} width={"50%"} fontSize={"16px"}>
              per seat /month billed annually
            </Text>
          </Flex>
          <Text fontWeight={500} fontSize={"16px"} textAlign={"left"}>
            $24 billed monthly
          </Text>
          <Button
            mt={5}
            width={"100%"}
            borderRadius={50}
            border={"1px"}
            p={5}
            bgColor={"rgb(45,127,249)"}
          >
            <Text>Try for free</Text>
          </Button>
          <Box mt={5} h={"300px"}>
            <Text mb={3} fontWeight={500} textAlign={"left"} fontSize={"16px"}>
              Everything in Plus, plus:
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 10 extensions per base
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 7 sync integrations including Jira Cloud
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 50,000 records per base
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 20GB of attachments per base
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ Gantt & Timeline Views
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ Granular interface permissions
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ 1-year revision & snapshot history
            </Text>
            <Text fontWeight={500} textAlign={"left"} fontSize={"14px"}>
              ✔️ Personal & locked views
            </Text>
          </Box>
        </Box>
        {/* Four  */}
        <Box
          bgColor={"rgb(51,51,51)"}
          p={3}
          border={"1px"}
          borderColor={"rgb(208,240,253)"}
          borderRadius={10}
        >
          <Box h={"160px"}>
            <Text
              color={"white"}
              fontWeight={500}
              textAlign={"left"}
              fontSize={"22px"}
            >
              Enterprise
            </Text>
            <Text
              color={"white"}
              fontWeight={500}
              textAlign={"left"}
              fontSize={"18px"}
            >
              For departments and organizations who need a secure, scalable, and
              customizable connected apps platform to stay aligned and move work
              forward
            </Text>
          </Box>
          <Flex gap={5}>
            <Text color={"white"} mt={5} mb={5} fontWeight={600} fontSize={"58px"}>
            ✨
            </Text>
            
          </Flex>
          <Button
            mt={5}
            width={"100%"}
            borderRadius={50}
            border={"1px"}
            p={5}
            bgColor={"whtie"}
          >
            <Text>Contact Sales</Text>
          </Button>
          <Box mt={5} h={"300px"}>
            <Text
              color={"white"}
              mb={3}
              fontWeight={500}
              textAlign={"left"}
              fontSize={"16px"}
            >
             Everything in Pro, plus:
            </Text>
            <Text
              color={"white"}
              fontWeight={500}
              textAlign={"left"}
              fontSize={"14px"}
            >
              ✔️ Unlimited workspaces per organization
            </Text>
            <Text
              color={"white"}
              fontWeight={500}
              textAlign={"left"}
              fontSize={"14px"}
            >
              ✔️ Unlimited extensions
            </Text>
            <Text
              color={"white"}
              fontWeight={500}
              textAlign={"left"}
              fontSize={"14px"}
            >
              ✔️ Salesforce & Jira on-prem sync integrations
            </Text>
            <Text
              color={"white"}
              fontWeight={500}
              textAlign={"left"}
              fontSize={"14px"}
            >
              ✔️ 250,000 records per base
            </Text>
            <Text
              color={"white"}
              fontWeight={500}
              textAlign={"left"}
              fontSize={"14px"}
            >
              ✔️ 1,000GB of attachments per base
            </Text>
            <Text
              color={"white"}
              fontWeight={500}
              textAlign={"left"}
              fontSize={"14px"}
            >
              ✔️ Advanced interface controls
            </Text>
            <Text
              color={"white"}
              fontWeight={500}
              textAlign={"left"}
              fontSize={"14px"}
            >
              ✔️ 3-year revision & snapshot history
            </Text>
            <Text
              color={"white"}
              fontWeight={500}
              textAlign={"left"}
              fontSize={"14px"}
            >
              ✔️ SAML-based single sign-on
            </Text>
          </Box>
        </Box>
      </SimpleGrid>

      <Center m={10}>
        <Text
          fontSize={"30px"}
          textAlign={"center"}
          width={"50%"}
          fontWeight={"500"}
        >
          See all features and compare plans
        </Text>
        <Text>
          <ChevronDownIcon w={8} h={8} />
        </Text>
      </Center>
      <Box m={5}>
        <Text mb={5} fontSize={"23px"} fontWeight={500} color={"gray.400"}>
          Trusted by 300,000+ forward-thinking companies worldwide
        </Text>
        <Image src="https://www.airtable.com/images/about/logos-horizontal.png" />
      </Box>
      <Center m={10}>
        <Text fontSize={"30px"} fontWeight={500} color={"black"}>
          Have additional questions?
        </Text>
      </Center>
      <Center m={10} gap={{base : 5,md:20,lg:30}}>
        <Box>
          <Text fontSize={{base:"12px",md:"14px",lg:"16px"}} fontWeight={500} color={"gray"}>
            BILLING / PRICING
          </Text>
          <Text fontSize={{base:"12px",md:"14px",lg:"16px"}} fontWeight={500} color={"blue"}>
            Billing FAQ
          </Text>
        </Box>
        <Box>
          <Text fontSize={{base:"12px",md:"14px",lg:"16px"}} fontWeight={500} color={"gray"}>
            SPECIAL PLANS FOR
          </Text>
          <Text fontSize={{base:"12px",md:"14px",lg:"16px"}} fontWeight={500} color={"blue"}>
            Nonprofits or Education
          </Text>
        </Box>
        <Box>
          <Text fontSize={{base:"12px",md:"14px",lg:"16px"}} fontWeight={500} color={"gray"}>
            ENTERPRISE PLANS
          </Text>
          <Text fontSize={{base:"12px",md:"14px",lg:"16px"}} fontWeight={500} color={"blue"}>
            Contact sales
          </Text>
        </Box>
      </Center>

      {/* FAQ  */}
      <Box ml={{base : 1,md:10,lg:20}} mr={{base : 1,md:10,lg:20}}>
        <Text fontSize={"35px"} fontWeight={500} m={5}>
          Frequently asked questions
        </Text>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"20px"} fontWeight={500}>How does Airtable's pricing work?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"17px"} pb={4}>
            Airtable plans are charged per seat. If you are on Airtable’s Free plan, you can add viewers and commenters to your workspace for free. If you are on a paid Airtable plan, you will be charged for all collaborators who have edit or comment permissions to at least one base in the workspace. No charges will apply for read-only collaborators or people submitting forms. Charges are prorated: collaborators with edit permissions added partway through the month will only be charged for the days they were collaborators.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* Second  */}
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"20px"} fontWeight={500}>How does Airtable's Enterprise pricing work?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"17px"} pb={4}>
            Upgrades to Airtable Enterprise apply per account within an organization. You will be charged for all collaborators with edit, comment, or read access to at least one base in your organization. An organization has the ability to create unlimited workspaces and bases as part of the enterprise plan. Charges are prorated: collaborators with edit, comment, or read permissions added partway through the billing cycle will only be charged for the months they were collaborators. For more information on our Enterprise plans, contact sales.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* Third   */}
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"20px"} fontWeight={500}>How much does Airtable cost?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"17px"} pb={4}>
            Our Free plan is available at no cost for teams just getting started. For teams who like the features of our Free plan but need more storage, our Plus plan is available for $10/user. Our Pro plan costs $20/user and includes the customization and team management features that fast moving teams and organizations need. Our Enterprise plan pricing is custom, based on the organization’s needs and scale with Airtable. To learn more about our Enterprise pricing, contact sales.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* 4rth  */}
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"20px"} fontWeight={500}>What are my payment options?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"17px"} pb={4}>
            All payments are made via credit card for Plus and Pro workspaces. For Enterprise accounts, we can issue an annual invoice with payment via PO and/or ACH, wire, or check. Please contact sales for more information.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* 5th  */}
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"20px"} fontWeight={500}>What happens when I hit my usage limits?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"17px"} pb={4}>
            If you reach our record or attachment limits, you’ll still be able to use your bases. We’ll let you know about the overage, and give you a grace period to find a plan that fits your needs!

            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* 5th  */}
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"20px"} fontWeight={500}>What's an Airtable base?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"17px"} pb={4}>
            A base is a collection of related tables, often reflecting a single project, process, or workflow that you collaborate on with your team. For example, you could make a base to organize your sales process, with tables for sales leads, companies, and deal opportunities. Each table contains records (similar to rows in a spreadsheet), which represent the individual objects, ideas, or people that you’re tracking. You’re free to create as many bases as you’d like on any of our plans.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* 5th  */}
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"20px"} fontWeight={500}>What is revision history?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"17px"} pb={4}>
            Airtable provides powerful ways to go back in time with record-level revision history and base snapshots. View a living history of all the changes that have been made to a single record and jump back in time and restore your base to a previous state. We provide a limited history for free plans, with extended histories for our premium plans. When you upgrade and extend your history, all future revisions will be tracked using the upgraded setting.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* 5th  */}
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"20px"} fontWeight={500}>What are the per-base record and attachment limits?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"17px"} pb={4}>
            While we don’t limit the number of bases you can create, we do limit records and attachment space per base. On the Free plan, we limit the total number of records you can have across all tables in a base. We also limit the total amount of attachment space you can use in a base. You can increase these limits by upgrading to one of our premium plans.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        {/* 5th  */}
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text fontSize={"20px"} fontWeight={500}>What are sync integrations?</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"17px"} pb={4}>
            Sync integrations (previously known as external source sync) let you import data from external sources like Google Calendar, Zendesk, and Box into an Airtable base. Some external sources like Salesforce and Jira count as premium sync integrations and are only available as part of the Pro and Enterprise plans.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
}

export default Price;

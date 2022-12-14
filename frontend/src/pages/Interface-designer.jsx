import React from 'react'
import { Box,
Text,
Button,
Image,
SimpleGrid,
AccordionPanel,
AccordionButton,
AccordionItem,
Accordion
} 
from '@chakra-ui/react'

const Interfacedesigner = () => {
  return (
    <>
        <Box bg='#1a3866' w='100%' p={40} color='white'>
            <Text fontSize='6xl' marginTop='-12%' textAlign='center' fontWeight='bold' color='gray300'>
                Reimagine your workflows with Interface Designer
            </Text>
            <Text fontSize='xl'  textAlign='center' fontWeight='bold' marginTop='2' color='gray300'>
                Keep teams connected and working together with custom interfaces.
            </Text>
            <Button colorScheme='blue' marginLeft='96' marginTop='6' fontWeight='bold' size='lg'>Get Started For Free</Button>
            <Image height='400px' width='8xl' marginTop='16' marginBottom='-40' src='https://images.ctfassets.net/wl95ljfippl8/66whWGlDV24fjLHmfIvgzw/0f2911110b141203aae07c0412dc45e3/Tier1-InterfaceDesigner-01-21x9.png?w=1920' alt='Dan Abramov' />
        </Box>
        <Box w='100%' display='flex' marginTop='8'>
            <Box p='4' width='60%'>
                    <Text fontSize='4xl' marginLeft='32' fontWeight='bold' color='black'>
                        The power to create is in your hands
                    </Text>
                </Box>
                <Box p='4' width='40%'>
                    <Text fontSize='xl' marginRight='32' color='black'>
                    Interface Designer enables anyone, at any technical skill level, to build and share custom interfaces without code.
                    </Text>
                </Box>
        </Box>
        <Box width='100%' p={10}>
            <Image width='100%' height='96' src='https://images.ctfassets.net/wl95ljfippl8/qrBqADBtmq6eQ8pPACMwl/996c3db331ea49b36359823c9bb498e0/Tier1-InterfaceDesigner-01.2-21x9.png?w=1920' alt='Dan Abramov' />
        </Box>
        {/* ********************** box 1 ******************* */}
        <Box height='96' w='100%' display='flex' marginTop='8'>
                <Box p='4' height='100%' width='58%'>
                    <Image borderRadius='12' width='67%' height='99%' margin='auto' src='https://images.ctfassets.net/wl95ljfippl8/5decmcG06ZzDqIfXE5OR9m/d9eb2a6460a4c97b3a010839bd419b0d/Tier1-InterfaceDesigner-02.png?w=1920' alt='Dan Abramov' />
                </Box>
                <Box p='4' width='42%'>
                    <Text fontSize='4xl' marginTop='14' fontWeight='bold' marginRight='44' color='black'>
                    Create your first interface in minutes
                    </Text>
                    <Text fontSize='xl' marginRight='28' color='gray'>
                    Drag-and-drop components make it simple to design completely custom interfaces right away.
                    </Text>
                </Box>
        </Box>
        {/* ********************** box 2 ******************* */}
        <Box height='96' w='100%' display='flex' marginTop='8'>
                <Box p='4' height='100%'  width='58%'>
                    <Text fontSize='4xl' marginLeft='28' marginTop='14' fontWeight='bold' marginRight='60' color='black'>
                        Customize for anyone
                    </Text>
                    <Text mt='2' fontSize='xl' ml='28' marginRight='52' color='gray'>
                    Create interfaces that match the way each person on your team works, no matter what they are working on.
                    </Text>
                </Box>
                <Box p='4' width='42%'>
                    <Image borderRadius='12' width='99%' height='100%' margin='auto' src='https://images.ctfassets.net/wl95ljfippl8/5decmcG06ZzDqIfXE5OR9m/d9eb2a6460a4c97b3a010839bd419b0d/Tier1-InterfaceDesigner-02.png?w=1920' alt='Dan Abramov' />
                </Box>
        </Box>
        {/* ********************** box 3 ******************* */}
        <Box height='96' w='100%' display='flex' marginTop='8'>
                <Box p='4' height='100%'  width='58%'>
                    <Image borderRadius='12' width='67%' height='99%' margin='auto' src='https://images.ctfassets.net/wl95ljfippl8/6gJGMD4X15k2H8bbxaNgx8/6316c79d05fffbdbf174292f7c5733dd/Tier1-InterfaceDesigner-04.png?w=1920' alt='Dan Abramov' />
                </Box>
                <Box p='4' width='42%'>
                    <Text fontSize='4xl' marginTop='14' fontWeight='bold' marginRight='44' color='black'>
                    Provide the right info to the right people
                    </Text>
                    <Text fontSize='xl' marginRight='28' color='gray'>
                    Some teammates don't need access to your full workflow. Permissions let you decide who sees what.
                    </Text>
                </Box>
        </Box>
        {/* ********************** box 4 ******************* */}
        <Box height='96' w='100%' display='flex' marginTop='8'>
                <Box p='4' height='100%'  width='58%'>
                    <Text fontSize='4xl' marginLeft='28' marginTop='14' fontWeight='bold' marginRight='60' color='black'>
                    Turn data into action
                    </Text>
                    <Text mt='2' fontSize='xl' ml='28' marginRight='52' color='gray'>
                    Powered by your existing data, interfaces are an interactive layer that allow teammates to take action.
                    </Text>
                </Box>
                <Box p='4' width='42%'>
                    <Image borderRadius='12' width='99%' height='100%' margin='auto' src='https://images.ctfassets.net/wl95ljfippl8/6EuDQCRJ3v3aOX4N536v4U/6d18a34384f1ad1863c7c2ae6290e490/Tier1-InterfaceDesigner-05.png?w=1920' alt='Dan Abramov' />
                </Box>
        </Box>
        {/* ************************************************ */}
        <Box bg='#cce0fe' marginTop='12' w='100%' p={40}>
            <Text fontSize='5xl' marginTop='-12%' textAlign='center' fontWeight='bold' color='black'>
            What will you build with Airtable?
            </Text>
            <Image height='400px' width='6xl' marginTop='12' src='https://images.ctfassets.net/wl95ljfippl8/66whWGlDV24fjLHmfIvgzw/0f2911110b141203aae07c0412dc45e3/Tier1-InterfaceDesigner-01-21x9.png?w=1920' alt='Dan Abramov' />
            <Box w='100%'  display='flex' marginTop='8'>
                    <Box p='4'  width='55%'>
                        <Text fontSize='5xl' marginLeft='-20' fontWeight='500' color='blackAlpha.700'>
                        Start building your first interface
                        </Text>
                    </Box>
                    <Box p='4'  width='45%'>
                        <Text fontSize='xl' fontWeight='bold' marginRight='-16' marginTop='4'  color='blackAlpha.700'>
                        Love the idea of interfaces, but not sure where to start? We’ve got you.
                        </Text>
                    </Box>
            </Box>
           </Box>
           <SimpleGrid marginTop='-28' columns={[1, null, 4]} spacing="4px">
                <Box bgColor='white' ml='12' border='2px solid gray' borderRadius='12' height="180px">
                    <Image marginLeft='6' mt='8'  src='https://images.ctfassets.net/wl95ljfippl8/6h0MOf3faGLkvaEeelr5Jx/45f52bc5274439235d5e278d51810309/movie_strip.svg' alt='ab' />
                    <Text fontSize='xl'  textAlign='center' fontWeight='bold' marginTop='4' ml='2' color='gray300'>
                    See interfaces in action
                    </Text>
                    <Button fontSize='xl' mt='6' fontWeight='600' colorScheme='whiteAlpha' color='blue.400' ml='4'>
                        Watch Videos ➡️
                    </Button>
                </Box>
                <Box bgColor='white'  ml='12' border='2px solid gray' borderRadius='12'  height="180px">
                    <Image marginLeft='6' mt='8'  src='https://images.ctfassets.net/wl95ljfippl8/5dVaeLPtH4bgFDnQLIyIGG/14b9d1ca87dd54d4ab5acf11f6271bba/megaphone.svg' alt='ab' />
                    <Text fontSize='xl'  textAlign='center' fontWeight='bold' marginTop='4' ml='2' color='gray300'>
                    Interface Designer Ebook
                    </Text>
                    <Button mt='6' fontSize='xl' fontWeight='600' colorScheme='whiteAlpha' color='blue.400' ml='4'>
                        Read more ➡️
                    </Button>
                </Box>
                <Box bgColor='white'  ml='12' border='2px solid gray' borderRadius='12' height="180px">
                    <Image marginLeft='6' mt='8'  src='https://images.ctfassets.net/wl95ljfippl8/2eSoQEC4YfOU2409umY58B/98a456499002d13eb34ae7aa61a87785/laptop.svg' alt='ab' />
                    <Text fontSize='xl'  textAlign='center' fontWeight='bold' marginTop='4' ml='2' color='gray300'>
                    Get hands-on help
                    </Text>
                    <Button mt='6' fontSize='xl' fontWeight='600' colorScheme='whiteAlpha' color='blue.400' ml='4'>
                        Join our webinar ➡️
                    </Button>
                </Box>
                <Box bgColor='white'  ml='12' border='2px solid gray' borderRadius='12'  height="180px">
                    <Image marginLeft='6' mt='8'  src='https://images.ctfassets.net/wl95ljfippl8/1QWvNlhvDdDS7rA1F64wDr/a33148afd6e177abe7b3320bd8aa8331/book.svg' alt='ab' />
                    <Text fontSize='xl'  textAlign='center' fontWeight='bold' marginTop='4' ml='2' color='gray300'>
                    Interface Designer Guide
                    </Text>
                    <Button mt='6' fontSize='xl' fontWeight='600' colorScheme='whiteAlpha' color='blue.400' ml='4'>
                        Read more ➡️
                    </Button>
                </Box>
            </SimpleGrid>
            {/* ********************** FAQ ************************* */}
            <Text fontSize='2xl' ml='20' fontWeight='bold' marginTop='20' color='gray'>
                    FAQ
                    </Text>
            <Text fontSize="5xl" marginTop='2' ml='20' marginBottom="10">
            All things Interface Designer
            </Text>
            <Accordion maxW={"6xl"} marginLeft="5%" allowMultiple>
                <AccordionItem>
                {({ isExpanded }) => (
                    <>
                    <h2>
                        <AccordionButton>
                        {isExpanded ? <Box>➖</Box> : <Box>➕</Box>}
                        <Box
                            height={"12"}
                            flex="1"
                            marginTop={"6"}
                            marginLeft="4"
                            fontSize={"18"}
                            textAlign="start"
                            fontWeight={"500"}
                        >
                            What is Interface Designer?
                        </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={3} textAlign="start" fontSize='xl'ml='8'>
                    Interface Designer is an Airtable feature that allows you to create custom interfaces <br/> for your apps that pull in data from your existing bases. Interfaces are a simple way <br/> to visualize, share, and action data.
                    </AccordionPanel>
                    </>
                )}
                </AccordionItem>
            </Accordion>
            <Accordion maxW={"6xl"} marginLeft="5%" allowMultiple>
                <AccordionItem>
                {({ isExpanded }) => (
                    <>
                    <h2>
                        <AccordionButton>
                        {isExpanded ? <Box>➖</Box> : <Box>➕</Box>}
                        <Box
                            height={"12"}
                            flex="1"
                            marginTop={"6"}
                            marginLeft="4"
                            fontSize={"18"}
                            textAlign="start"
                            fontWeight={"500"}
                        >
                            How do I create an interface in Airtable?
                        </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={3} fontSize='xl'ml='8' textAlign="start">
                    To open Interface Designer, go to your base and click the “Interfaces” button in the <br/> top left corner. You’ll find a suite of drag-and-drop elements to choose from, and from <br/> there, you can start dragging the elements you want into your interface. For more on <br/> how to get started, check out this article.
                    </AccordionPanel>
                    </>
                )}
                </AccordionItem>
            </Accordion>
            <Accordion maxW={"6xl"} marginLeft="5%" allowMultiple>
                <AccordionItem>
                {({ isExpanded }) => (
                    <>
                    <h2>
                        <AccordionButton>
                        {isExpanded ? <Box>➖</Box> : <Box>➕</Box>}
                        <Box
                            height={"12"}
                            flex="1"
                            marginTop={"6"}
                            marginLeft="4"
                            fontSize={"18"}
                            textAlign="start"
                            fontWeight={"500"}
                        >
                            Can I build an interface on top of any base in Airtable?
                        </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={3} textAlign="start" fontSize='xl'ml='8'>
                    Yes, you can build an interface using data from any existing base you have in Airtable.<br/> Just click the "Interfaces" button in the top left of your base and start creating.
                    </AccordionPanel>
                    </>
                )}
                </AccordionItem>
            </Accordion>
            <Accordion maxW={"6xl"} marginLeft="5%" allowMultiple>
                <AccordionItem>
                {({ isExpanded }) => (
                    <>
                    <h2>
                        <AccordionButton>
                        {isExpanded ? <Box>➖</Box> : <Box>➕</Box>}
                        <Box
                            height={"12"}
                            flex="1"
                            marginTop={"6"}
                            marginLeft="4"
                            fontSize={"18"}
                            textAlign="start"
                            fontWeight={"500"}
                        >
                            Can I create multiple interfaces within one base?
                        </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={3} textAlign="start" fontSize='xl'ml='8'>
                    Yes, in fact, you can create as many as you need. Each interface can be personalized <br/> for individual team members, or for stakeholders to get a higher level view at your team’s work.
                    </AccordionPanel>
                    </>
                )}
                </AccordionItem>
            </Accordion>
            <Accordion maxW={"6xl"} marginLeft="5%" allowMultiple>
                <AccordionItem>
                {({ isExpanded }) => (
                    <>
                    <h2>
                        <AccordionButton>
                        {isExpanded ? <Box>➖</Box> : <Box>➕</Box>}
                        <Box
                            height={"12"}
                            flex="1"
                            marginTop={"6"}
                            marginLeft="4"
                            fontSize={"18"}
                            textAlign="start"
                            fontWeight={"500"}
                        >
                            Is Interface Designer a paid feature?
                        </Box>
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={3} textAlign="start" fontSize='xl'ml='8'>
                    Interface Designer is available for all Airtable users. While some features, like those <br/> around permissions, are exclusive to certain price tiers, most features are available to <br/> everyone! For more information, visit our pricing page.
                    </AccordionPanel>
                    </>
                )}
                </AccordionItem>
            </Accordion>
    </>
  )
}

export default Interfacedesigner

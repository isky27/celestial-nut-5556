import { Box, VStack,HStack, Text, Button, Image } from '@chakra-ui/react'
import cole from "../Assets/cole.png";
import Medium from "../Assets/Medium.png";
import expedia from "../Assets/expedia.png";
import Netflix from "../Assets/Netflix.png";
import time from "../Assets/time.png";
import shopify from "../Assets/shopify.png";
import React from 'react'
import vid1 from "../Assets/vid1.mp4"
import vid2 from "../Assets/vid2.mp4"
import vid3 from "../Assets/vid3.mp4"
import vid4 from "../Assets/vid4.mp4"
import img1 from "../Assets/img1.jpg"
import img3 from "../Assets/img3.jpg"
import Footer from './Footer';



const MidContent = () => {
  return (
    <Box>
          <Box bg={'#ebf7fc'} display="flex" justifyContent="center" alignItems="center" gap={'5rem'} padding="10rem" >
             <Box>
                <VStack spacing='2.5rem' align="left">
                   <Text fontSize={'6rem'} fontWeight={'600'} color={'hsl(0,0%,20%)'} lineHeight={'6rem'}>Connect <br></br> everything.<br></br> Achieve<br></br> anything.</Text>
                   <Text fontSize={'2rem'} fontWeight={'630'} color={'hsl(0,0%,20%)'} lineHeight={'2.5rem'}>Accelerate work and unlock potential<br></br> with powerful apps that connect your<br></br> data, workflows and teams. This is how.</Text>
                   <Box>
                      <Button height="43px" width="200px" fontSize={'3xl'} bg={'#0768f8'} color={'white'} padding="20px" borderRadius={'8px'} >Sign up for free</Button>
                   </Box>
                </VStack>
             </Box>
             <Box width="55%" borderBottom={'1px solid black'} >
                <video playsInline loop autoPlay muted width="100%">
                  <source src={vid1} type="video/mp4" />
                </video>
             </Box>
          </Box>


          <Box bg={'#f2f4f7'}>
               <HStack spacing='4rem' justifyContent={'center'} alignItems={'center'} >
                  <Image src={cole} width="150px" style={{filter: "grayscale(10)"}} />
                  <Image src={Medium} width="150px" />
                  <Image src={expedia} width="150px" />
                  <Image src={Netflix} width="150px" />
                  <Image src={time} width="100px" />
                  <Image src={shopify} width="120px" />
               </HStack>
          </Box>

          <Box bg={'#fbfbfc'} padding={'6.5rem'}>
                <VStack spacing='2.5rem' align="center">
                   <Text fontSize={'5rem'} fontWeight={'600'} color={'hsl(0,0%,20%)'} lineHeight={'6rem'} textAlign="center">Create solutions <br></br> that mirror your<br></br>business</Text>
                   <Text fontSize={'2rem'} color={'hsl(0,0%,20%)'} lineHeight={'2.5rem'} textAlign="center">Move work forward faster with no-code apps that<br></br> perfectly match your team’s agility and scale.</Text>
                </VStack>
          </Box>

          <Box bg={'#FAF2F4'} display="flex" justifyContent="center" alignItems="center" gap={'5rem'} padding="10rem" >
             <Box>
                <VStack spacing='2.5rem' align="left">
                   <Text fontSize={'4rem'} fontWeight={'600'} color={'hsl(0,0%,20%)'} lineHeight={'4rem'}>Unite every <br></br> stream of<br></br> work</Text>
                   <Text fontSize={'1.6rem'} color={'hsl(0,0%,20%)'} lineHeight={'2.2rem'}>Create a single source of truth that’s<br></br>tailored precisely to how your teams<br></br>work. Include everything you need,<br></br>nothing you don’t.</Text>
                   <Box>
                       <Text fontSize={'1.6rem'} fontWeight={'bold'} color={'#0768f8'} lineHeight={'2.2rem'}>Explore the product</Text>
                   </Box>
                </VStack>
             </Box>
             <Box width="50%" border={'none'}>
                <video playsInline loop autoPlay muted width="100%">
                  <source src={vid2} type="video/mp4" />
                </video>
             </Box>
          </Box>

          <Box bg={'#FAF2F4'} display="flex" justifyContent="center" alignItems="center" gap={'5rem'} padding="3rem" >
             <Box width="45%" border={'none'}>
                <video playsInline loop autoPlay muted width="100%">
                  <source src={vid3} type="video/mp4" />
                </video>
             </Box>
             <Box>
                <VStack spacing='2.5rem' align="left">
                   <Box><Button bg={'#6b1cb0'} color={'white'} borderRadius={'15px'} fontSize={'1.2rem'}>NEW</Button></Box>
                   <Text fontSize={'4rem'} fontWeight={'600'} color={'hsl(0,0%,20%)'} lineHeight={'4rem'}>Interface <br></br>with work in<br></br> a new way</Text>
                   <Text fontSize={'1.6rem'} color={'hsl(0,0%,20%)'} lineHeight={'2.2rem'}>Create custom interfaces that give<br></br>each and every teammate the<br></br>relevant information they need, and<br></br>a simple way to take action.</Text>
                   <Box>
                       <Text fontSize={'1.6rem'} fontWeight={'bold'} color={'#0768f8'} lineHeight={'2.2rem'}>Learn more about Interface Designer →</Text>
                   </Box>
                </VStack>
             </Box>
          </Box>

          <Box bg={'#FAF2F4'} padding={'5rem'}>
                <HStack spacing='25rem' justifyContent="center" alignItems="center">
                   <Text fontSize={'4rem'} fontWeight={'600'} color={'hsl(0,0%,20%)'} lineHeight={'4rem'}>Bring all your <br></br>data together</Text>
                   <Text fontSize={'1.6rem'} color={'hsl(0,0%,20%)'} lineHeight={'2.2rem'}>All your information. Always up to date. At your<br></br>fingertips. Keep everything in sync across your<br></br>organization.</Text>
                </HStack>
          </Box>

          <Box bg={'#FAF2F4'} display="flex" justifyContent="center" alignItems="center" >
            <Image src={img1} width="70%" />
          </Box>

          <Box bg={'FBFBFC'} display="flex" justifyContent="center" alignItems="center" gap={'5rem'} padding="8rem" >
             <Box>
                <VStack spacing='2.5rem' align="left">
                   <Text fontSize={'4rem'} fontWeight={'600'} color={'hsl(0,0%,20%)'} lineHeight={'4rem'}>Get started<br></br> quickly</Text>
                   <Text fontSize={'1.6rem'} color={'hsl(0,0%,20%)'} lineHeight={'2.2rem'}>Begin building on day one.<br></br>Airtable’s pre-made templates<br></br>and intuitive design help you<br></br>tackle even your most complex <br></br>needs, right away.</Text>
                </VStack>
             </Box>
             <Box width="50%" border={'none'}>
                <video playsInline loop autoPlay muted width="100%">
                  <source src={vid4} type="video/mp4" />
                </video>
             </Box>
          </Box>

          <Box bg={'#FAF2F4'}  display="flex" flexDirection={'column'} justifyContent="center" alignItems="center" gap={'4rem'} padding={'5rem'} >
             <Box>
                <HStack spacing='6rem' justifyContent="center" alignItems="center" >
                   <Text fontSize={'1.6rem'}  fontWeight={'bold'} color={'#0768f8'} >Read all customer stories</Text>
                   <Text fontSize={'4rem'} fontWeight={'600'} color={'hsl(0,0%,20%)'} lineHeight={'4rem'}>Trusted by teams<br></br> from all industries</Text>
                </HStack>
             </Box>
             <HStack>
                 <Box><Image src={img3} width="400px" /></Box>
                 <Box width={'400px'} padding={'12px'} bg={'white'}>
                    <VStack spacing={'2rem'} align={'left'}>
                      <Text fontSize={'1.4rem'}  fontWeight={'bold'}>Baker Hughes</Text>
                      <Text fontSize={'1.8rem'}  fontWeight={'semibold'} color={'hsl(0,0%,20%)'} >“A business transformation is really just a series of smaller changes rolling out one after the other. It’s about getting the right information to people when they need it. What started as an Airtable calendar very quickly became the solution that we use to manage everything.”</Text>
                      <Text fontSize={'1.6rem'} color={'hsl(0,0%,20%)'}>Stephanie Hartgrove<br></br>VP of Global Communications,<br></br>Baker Hughes</Text> 
                   </VStack>
                 </Box>
             </HStack>
          </Box>

          <Box padding={'4rem'}>
              <VStack justifyContent={'center'} alignItems={'center'} spacing={'4rem'}>
                  <Text textAlign={'center'} fontSize={'6rem'} fontWeight={'600'} color={'hsl(0,0%,20%)'} lineHeight={'6rem'}>300,000+ innovative<br></br>companies use<br></br>Airtable every day.<br></br>Join them.</Text>
                  <VStack justifyContent={'center'} alignItems={'center'}>
                      <Button height={'50px'} width={'220px'} fontSize={'25px'} bg={'#0768f8'} color={'white'} borderRadius={'10px'}>Sign up for free</Button>
                      <Text fontSize={'1.6rem'} fontWeight={'600'} color={'hsl(0,0%,20%)'}>No credit card needed</Text>
                  </VStack>
              </VStack>
          </Box>

          <hr style={{width:"90%",borderWidth:'1.2px', backgroundColor:'#E8E8E8', margin:'auto', marginTop:'0.5rem', marginBottom:'0.5rem'}} ></hr>

          <Box>
              <Footer/>
          </Box>
    </Box>
  )
}

export default MidContent
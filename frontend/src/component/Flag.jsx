import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Flag = () => {
  return (
    <Box bg={'#ebf7fc'}  >
        <Flex gap={4} justifyContent="center" padding={4}>
           <Text>See how new Airtable features can improve your work in our latest webinar</Text>
           <Text color={'blue.600'} fontWeight={'bold'} >View webinar</Text>
        </Flex>
    </Box>
  )
}

export default Flag

// bgGradient={[
//     'linear(to-tr, teal.300, yellow.400)',
//     'linear(to-t, blue.200, teal.500)',
//     'linear(to-b, orange.100, purple.200)',
//   ]}
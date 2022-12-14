import { Box, Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
function Marketplace() {
  return (
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
      templateColumns="repeat(5, 1fr)"
    >
      <GridItem colSpan={4} width={"80%"}>
        <Text fontWeight={500} fontSize={"25px"} >Marketplace</Text>
        <Text fontWeight={500} fontSize={"22px"} >Analyze, enrich, and take action on your data with Airtable Extensions.</Text>
      </GridItem>
    </Grid>
    </Box>
  );
}

export default Marketplace;

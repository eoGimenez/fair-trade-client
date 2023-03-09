import { Box, Card, CardHeader, Flex, Avatar, CardBody, Text, Image, CardFooter, Button, Heading, IconButton, Stat, StatLabel, StatNumber, StatHelpText, Divider, SimpleGrid } from "@chakra-ui/react";


export default function Post() {
  return (
    <SimpleGrid 
      spacing={2}
      templateColumns="repeat(auto-fill, minmax(340px, 1fr))"
    >
      <Card maxW="md" ml="10px" mt="30px">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Nombre Artesano" src="https://bit.ly/sage-adebayo" />
              <Box>
                <Heading size="sm">Nombre Artesano</Heading>
                <Text>Ubicacion</Text>
              </Box>
            </Flex>
            <IconButton
              variant="ghost"
              colorScheme="gray"
              aria-label="See menu"
              /* icon={<BsThreeDotsVertical />} */
            />
          </Flex>
        </CardHeader>
        <CardBody>
          <Text mb="10px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            unde maxime in sit aut consequatur odit commodi obcaecati modi
            voluptatibus voluptas eligendi enim quia recusandae saepe quibusdam
            libero, similique neque?
          </Text>
          <Divider />
          <Stat>
            <StatLabel>Batch</StatLabel>
            <StatNumber>15 Units</StatNumber>
            <StatNumber fontSize="lg">$12.00</StatNumber>
          </Stat>
        </CardBody>
          <Image
            objectFit="cover"
            src="https://archive.marcoguoli.com/img-get/I0000ZgDBgbNhP1w/s/1200/I0000ZgDBgbNhP1w.jpg"
            alt="Chakra UI"
          />
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" /* leftIcon={<BiChat />} */>
            Contact
          </Button>
          <Button flex="1" variant="ghost" /* leftIcon={<BiChat />} */>
            View details
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
}

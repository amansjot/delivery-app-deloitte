import {
    Heading,
    Center,
    Stack,
    Box,
  } from "@chakra-ui/react";
  
  const Sell = () => {
  
    return (
      <Box bgColor="#E3F7FF" pt="60px">
        <Stack py="60px">
          <Center>
            {" "}
            <Heading size="xl">My Lists</Heading>
          </Center>
          <br />
          <Center height="20vh" fontSize="20px" mb="150px">
            You have no saved lists!
          </Center>
        </Stack>
      </Box>
    );
  };
  
  export default Sell;
  
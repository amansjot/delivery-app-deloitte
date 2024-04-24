import {
    Heading,
    Center,
    Stack,
    Box,
  } from "@chakra-ui/react";
  
  const Cart = () => {
  
    return (
      <Box bgColor="#E3F7FF" pt="60px">
        <Stack py="60px">
          <Center>
            {" "}
            <Heading size="xl">My Cart</Heading>
          </Center>
          <br />
          <Center height="20vh" fontSize="20px" mb="150px"> 
          </Center>
        </Stack>
      </Box>
    );
  };
  
  export default Cart;
  
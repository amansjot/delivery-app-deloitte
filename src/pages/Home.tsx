import {
  useColorModeValue,
  Heading,
  Image,
  HStack,
  Container,
  Text,
  Button,
  Center,
  Stack,
  Box,
  Wrap,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import config from "../config";
import { SearchBar } from "../SearchBar";
import { ShowListings } from "./Listings";
import { categories, Category } from "../Categories";
// import Carousel from "../Carousel";

const Home = () => {
  const greybg = useColorModeValue("gray.300", "gray.700");
  const greytext = useColorModeValue("gray.600", "gray.300");
  const linkcolor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box bgColor="#E3F7FF" pt="60px">
      <Container
        maxW="100%"
        textAlign="center"
        p="25px 0"
        // backgroundColor={mainbg}
        // backgroundImage="url('https://i.imgur.com/IW65k4A.png')"
        // backgroundRepeat="repeat"
        backgroundColor="#E3F7FF"
        // backgroundSize="50px 50px"
        // backgroundPosition="150px 150px"
      >
        <Container maxW="100%" mb="10">
          <Image
            src={config.logo}
            w="100px"
            h="100px"
            m="0 auto"
            alt="CS+SG logo"
          />
          <Heading mb="2" fontSize="5xl">
            {config.name}
          </Heading>
          <Heading size="md" color="grey">
            We Deliver to You!
          </Heading>
        </Container>

        <Container maxW="100%" px="0">
          <SearchBar query="" category="" />
          <HStack
            w="100%"
            maxW="380px"
            color={linkcolor}
            margin="12px auto 0 auto"
          >
            {["bananas", "frozen meals", "cakes"].map(
              (item: string): JSX.Element => {
                return (
                  <Text margin="0 auto">
                    <Link to={"/listings?q=" + item}>
                      <Search2Icon mt="-1" fontSize="13px" /> {item}
                    </Link>{" "}
                  </Text>
                );
              }
            )}
          </HStack>
        </Container>
      </Container>
      <br />

      <Box
        backgroundColor={greybg}
        p="50px 30px 70px 30px"
        // backgroundImage="url('https://blog.lumen.com/wp-content/uploads/2019/09/thumbnail-3546423f9df9db871c3798ca0c3f83a8.jpeg')"
        background="linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('https://blog.lumen.com/wp-content/uploads/2019/09/thumbnail-3546423f9df9db871c3798ca0c3f83a8.jpeg')"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        backgroundAttachment="fixed"

      >
        <Wrap m="32px auto 0 auto" width="900px" maxW="90%">
          {[...categories].map((category: Category) => {
            return (
              <Box m="10px auto" width={{ base: "100%", sm: "70%", md: "auto" }}>
                <Link to={"/listings?q=&c=" + category.value}>
                  <Button p="50px 25px" w="100%" backgroundColor="#ffffffcc">
                    <Stack>
                      <Text fontSize="3xl">
                        {category.name || "All"} {category.emoji}
                      </Text>
                      <Text fontSize="sm" fontWeight="normal" color={greytext}>
                        {category.description}
                      </Text>
                    </Stack>
                  </Button>
                </Link>
              </Box>
            );
          })}
        </Wrap>
      </Box>

      <Stack pb="60px">
        <br />
        <br />
        <Center>
          {" "}
          <Heading size="xl">Recently Purchased</Heading>
        </Center>
        <br />
        <Flex wrap="wrap" justifyContent="center">
          {ShowListings("", "", 3)}
        </Flex>
        <Center>
          <Link to="/listings">
            <Button colorScheme="blue" mt="20px" p="25px">
              <a href="/">View All Products</a>
            </Button>
          </Link>
        </Center>
      </Stack>

      {/* <br />
      <br />
      <Carousel /> */}
    </Box>
  );
};

export default Home;

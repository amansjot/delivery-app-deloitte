import {
  useColorModeValue,
  Heading,
  Image,
  Text,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Center,
  Stack,
  Badge,
  Box,
  Flex,
  HStack,
  CardFooter,
  Select,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Listing, listings, Perks } from "../Listings";
import { SearchBar } from "../SearchBar";
import React from "react";

export const ShowListings = (
  query = "",
  category = "",
  numListings?: number
) => {
  const listingbg = useColorModeValue("white", "blue.800");
  const listingtxt = useColorModeValue("black", "white");
  const listingborder = useColorModeValue("blue.600", "blue.900");
  const priceText = useColorModeValue("green.600", "green.200");

  const navigate = useNavigate();

  type SortType = "recent" | "price";
  const [sort, setSort] = React.useState<SortType>("recent");
  
  console.log(sort);

  const broadenResults = () => {
    navigate("/listings?q=" + query + "&c=");
  };

  const searchAllCategory = () => {
    navigate("/listings?q=&c=" + category);
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };

  let listingsArray: Listing[] = [...listings];

  /* filter by search query */
  if (query) {
    listingsArray = listingsArray.filter((listing) => {
      return listing.keywords.some((keyword) => query.startsWith(keyword));
    });
  }

  /* filter by category */
  if (category) {
    listingsArray = listingsArray.filter((listing) => {
      return listing.category === category;
    });
  }

  const sortCards = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as SortType);
  };
  

  /* truncate listings for homepage */
  if (numListings) {
    listingsArray = listingsArray.slice(0, numListings);
  }

  return (
    <Box m="0">
      {numListings ? (
        <></>
      ) : (
        <Stack>
          <Center fontSize="lg" color="grey" mt="-1" mb="2">
            ({listingsArray.length} result
            {listingsArray.length === 1 ? "" : "s"})
          </Center>
          <Center mb="4">
            Sort by
            <Select width="180px" ml="2" onChange={sortCards}>
              <option value="recent">🕛 Most Recent</option>
              <option value="price">💵 Cheapest</option>
            </Select>
          </Center>
        </Stack>
      )}

      {!numListings && category && listingsArray.length === 0 ? (
        <Center>
          <Stack mt="7" mb="8" spacing="4">
            <Button p="6" onClick={broadenResults}>
              Search {query ? '"' + query + '" in' : ""} All Categories
            </Button>
            <Button p="6" onClick={searchAllCategory}>
              View all products in{" "}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          </Stack>
        </Center>
      ) : (
        <></>
      )}

      {!numListings && !category && listingsArray.length === 0 ? (
        <Center>
          <Stack mt="7" mb="24" spacing="4">
            <Button p="6" onClick={searchAllCategory}>
              View All Listings
            </Button>
          </Stack>
        </Center>
      ) : (
        <></>
      )}

      <Flex wrap="wrap" justifyContent="center">
        {listingsArray.map((listing: Listing) => {
          return (
            <Box minWidth="sm" height="480px" mb="-50px">
              <Card
                width="sm"
                height="85%"
                bg={listingbg}
                color={listingtxt}
                borderWidth="1px"
                borderStyle="solid"
                borderColor={listingborder}
                m="10px"
              >
                <CardBody>
                  <Image
                    h="195px"
                    m="0 auto"
                    src={listing.image[0]}
                    alt={`Image for ` + listing.title}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="lg">{listing.title}</Heading>
                    <HStack>
                      <Text color={priceText} fontSize="xl">
                        {formatCurrency(listing.price)}
                        {Object.keys(listing.perks).map(
                          (key: string, index: number): JSX.Element => {
                            const perkKey = key as keyof Perks;
                            const perkColors = [
                              "green",
                              "purple",
                              "blue",
                              "orange",
                            ];
                            return listing.perks[perkKey] ? (
                              <Badge
                                ml="10px"
                                mt="-1"
                                p="2px 6px"
                                colorScheme={perkColors[index]}
                              >
                                {key.replace(/(?=[A-Z])/g, " ")}
                              </Badge>
                            ) : (
                              <></>
                            );
                          }
                        )}
                      </Text>
                    </HStack>
                    {/* <Text color="gray.500" fontSize="md">
                      {listing.location}
                    </Text> */}
                  </Stack>
                </CardBody>
                <CardFooter mt="-10">
                  <ButtonGroup mt="5" spacing="2">
                    <Button colorScheme="blue">Add to Order</Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

const Listings = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("c") || "";

  return (
    <Box bgColor="#E3F7FF" pt="120px">
      <Stack pt={{ base: 2, md: 8 }} pb="10">
        <SearchBar query={query} category={category} />
        <Center mt="7" mb="2">
          <Heading size="xl">
            {query ? `Products matching: "${query}"` : "All Products"}
            {category
              ? ` in ${category.charAt(0).toUpperCase() + category.slice(1)}`
              : ""}
          </Heading>
        </Center>
        {ShowListings(query, category)}
      </Stack>
    </Box>
  );
};

export default Listings;

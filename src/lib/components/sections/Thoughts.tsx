import {
  Box,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { BsArrowRight } from 'react-icons/bs';

const Thoughts = () => {
  const thoughts = [
    {
      heading: 'The Differences between UI design and UX design',
      textContent:
        'Often times, the term UI and UX Design are being used mutually in the industry and outside the design industry. Incase you don’t know, UI and UX are two different words but work together. UI means User Interface while UX means User Experience.',
      img: 'img8.jpg',
    },

    {
      heading: 'My Tech Journey: How I Started My Career In Product Design',
      textContent:
        'Life Before Starting a Career in Tech I am a graduate of Business Administration, from Tai Solarin University of Education. I graduated in 2015, after 7 months of staying at home and teaching, I was deployed to Arokho, Owan East in Edo state to serve my father’s land, as a teacher, in a private school.',
      img: 'img7.jpg',
    },
  ];
  return (
    <Box my="3rem" w="90%" mr="auto" ml="auto">
      <Flex justify="space-between" w="full" align="center">
        <Heading
          fontSize="24px"
          fontFamily="brSemi"
          color="brand.200"
          sx={{
            '@media(min-width: 700px)': {
              fontSize: '2rem',
            },
          }}
        >
          Our thoughts
        </Heading>
      </Flex>
      <SimpleGrid
        columns={2}
        spacing={5}
        mt="2rem"
        sx={{
          '@media(min-width: 700px)': {
            gridTemplateColumns: 'repeat(3, 1fr)',
          },
        }}
      >
        {thoughts.map((item, index) => (
          <GridItem
            key={index}
            colSpan={1}
            h="full"
            borderRadius="10px"
            boxShadow="0px 20px 25px rgba(212, 212, 212, 0.35);"
            bg="white"
            display={index === 2 ? 'none' : ''}
            sx={{
              '@media(min-width: 700px)': {
                fontSize: '1rem',
                display: index === 2 ? 'block' : '',
              },
            }}
          >
            <Box
              w="100%"
              h="100px"
              sx={{
                '@media(min-width: 700px)': {
                  height: '200px',
                },
              }}
            >
              <Image
                src={item.img}
                alt="course1"
                borderRadius="10px 10px 0 0"
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </Box>
            <Box
              padding="10px"
              h="15rem"
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
            >
              <Text
                fontWeight="500"
                fontSize="16px"
                color="brand.200"
                lineHeight={1.2}
                sx={{
                  '@media(min-width: 700px)': {
                    fontSize: '1.5rem',
                  },
                }}
              >
                {item.heading}
              </Text>
              <Text
                fontWeight="400"
                fontSize="10px"
                color="brand.200"
                h="3.5rem"
                overflow="hidden"
                textOverflow="ellipsis"
                // whiteSpace="nowrap"
                mt={3}
                sx={{
                  '@media(min-width: 700px)': {
                    fontSize: '0.8rem',
                  },
                }}
              >
                {item.textContent}
              </Text>
              <Flex justify="flex-end" alignSelf="flex-end" mt="1.4rem">
                <BsArrowRight />
              </Flex>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};
export default Thoughts;

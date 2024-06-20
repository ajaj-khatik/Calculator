import { Box, Button, Flex, Grid, Text } from "@chakra-ui/react";
import { useState } from "react";

const Home = () => {
  const [display, setDisplay] = useState("");
  const handleClick = (value: string) => {
    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleEqual = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const buttonStyles = {
    _hover: {
      boxShadow: "0 0 10px 2px",
    },
    transition: "all 0.3s ease",
  };

  return (
    <Box>
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={10}
        fontSize="2xl"
        fontWeight="bold"
        color="teal.500"
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.2)"
        bgGradient="linear(to-r, teal.400, blue.500)"
        bgClip="text"
      >
        Calculator
      </Text>

      <Flex height="100vh" justifyContent="center" alignItems="center" p={4}>
        <Box
          p={4}
          maxW={{ base: "90%", sm: "80%", md: "400px" }}
          width="100%"
          borderWidth={1}
          borderRadius="lg"
          mx="auto"
        >
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            mb={4}
            textAlign="right"
            borderWidth={1}
            p={2}
            borderRadius="md"
            height="60px"
            overflow="hidden"
            whiteSpace="nowrap"
          >
            {display}
          </Text>
          <Button
            gridColumn="span 4"
            mb={2}
            onClick={handleClear}
            width="100%"
            borderRadius="50px"
            sx={{ ...buttonStyles, _hover: { boxShadow: "0 0 10px 2px red" } }}
          >
            Clear
          </Button>
          <Grid templateColumns="repeat(4, 1fr)" gap={2}>
            {["7", "8", "9", "/"].map((char) => (
              <Button
                key={char}
                onClick={() => handleClick(char)}
                sx={{
                  ...buttonStyles,
                  _hover: { boxShadow: "0 0 10px 2px orange" },
                }}
              >
                {char}
              </Button>
            ))}
            {["4", "5", "6", "*"].map((char) => (
              <Button
                key={char}
                onClick={() => handleClick(char)}
                sx={{
                  ...buttonStyles,
                  _hover: { boxShadow: "0 0 10px 2px yellow" },
                }}
              >
                {char}
              </Button>
            ))}
            {["1", "2", "3", "-"].map((char) => (
              <Button
                key={char}
                onClick={() => handleClick(char)}
                sx={{
                  ...buttonStyles,
                  _hover: { boxShadow: "0 0 10px 2px green" },
                }}
              >
                {char}
              </Button>
            ))}
            {["0", ".", "=", "+"].map((char) => (
              <Button
                key={char}
                onClick={() =>
                  char === "=" ? handleEqual() : handleClick(char)
                }
                sx={{
                  ...buttonStyles,
                  _hover: { boxShadow: "0 0 10px 2px blue" },
                }}
              >
                {char}
              </Button>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;

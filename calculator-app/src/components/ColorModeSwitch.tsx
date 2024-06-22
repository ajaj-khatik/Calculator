import { Switch, useColorMode, Box, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text>{colorMode === "dark" ? "Light Mode" : "Dark Mode"}</Text>
    </Box>
  );
};

export default ColorModeSwitch;

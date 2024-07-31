import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { GoMoon } from "react-icons/go";
import { IoIosSunny } from "react-icons/io";



const Navbar = () => {
    const {colorMode,toggleColorMode} = useColorMode();
    

   
  return (
   <Container maxW={"1160px"} px={4} >
  <Flex
    h={16}
    alignItems={"center"}
    justifyContent={"space-between"}
    flexDir={{ base: "column", sm: "row" }}
  >
    <Text
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      textTransform={"uppercase"}
      textAlign={"center"}
      bgClip="text"
      fontSize={{ base: "22", sm: "28" }}
      fontWeight="bold"
    >
      <Link to={"/"}>₹V Store</Link>
    </Text>
    <HStack spacing={4} alignItems={"center"}>
      <Link to={"/create"}>
        <Button>
          <CiSquarePlus fontSize={20} />
        </Button>
      </Link>
      <Button onClick={toggleColorMode}>
        {colorMode === "light" ? <GoMoon /> : <IoIosSunny />}
      </Button>
    </HStack>
  </Flex>
</Container>

  );
};

export default Navbar;

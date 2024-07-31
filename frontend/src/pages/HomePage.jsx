import { Container, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    const {fetchProducts,products} = useProductStore();

    useEffect(()=>{
        fetchProducts()
    },[fetchProducts]);
    console.log("products:",products)
  return (
    <Container maxW={"Container.xl"} py={12}>
      <VStack spacing={8}>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          textTransform={"uppercase"}
          textAlign={"center"}
          bgClip="text"
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="bold"
        >
          Current Products 🚀
        </Text>

        <SimpleGrid columns={{
            base:1,
            md:2,
            lg:3
        }}
        spacing={10}
        w={"full"}
        >
         {products.map((product)=>(
            <ProductCard key={product._id} product={product}/>
         ))}
        </SimpleGrid>

        {products.length===0 &&(
            <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            {" "}
            No products found 😿{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;

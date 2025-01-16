import { defineRecipe } from "@chakra-ui/react";

const InputRecipe = defineRecipe({
  base: {
    backgroundColor: "white",
    borderWidth: "1px",
    borderEndWidth: "0px",
    p: "20px",
    borderColor: "border.input",
    boxShadow: "0 4px 16px 0 #1D29391A, 0 2px 4px 0 #1D29390D",
    height: "68px",
    borderRadius: "10px",
    outline: "none",
    fontSize: "16px",
    fontWeight: "semibold",
    fontFamily: "Lato",
    _focus: {
      borderColor: "brand.base",
    },
    transition: "all 0.3s ease",
  },
});

export { InputRecipe };

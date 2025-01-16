import { defineRecipe } from "@chakra-ui/react";

const IconButtonRecipe = defineRecipe({
  base: {
    bg: "brand.base",
    height: "68px",
    borderRadius: "10px",
    p: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    _hover: {
      bg: "brand.hover",
    },
    _focus: {
      bg: "brand.hover.value",
    },
    _disabled: {
      bg: "brand.disabled",
      cursor: "not-allowed",
    },
  },
});

export { IconButtonRecipe };

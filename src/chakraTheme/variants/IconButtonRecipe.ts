import { defineRecipe } from "@chakra-ui/react";

const IconButtonRecipe = defineRecipe({
  base: {
    bg: "brand.base",
    height: "68px",
    borderRadius: "10px",
    p: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: "white",
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
  variants: {
    ghost: {
      true: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "auto",
        bg: "transparent",
        p: 2,
        _hover: {
          bg: "#f4f4f5",
        },
        color: "text.gray.dark",
        borderRadius: "0.25rem",
      },
    },
  },
});

export { IconButtonRecipe };

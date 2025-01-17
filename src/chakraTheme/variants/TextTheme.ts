import { defineRecipe } from "@chakra-ui/react";

export const textTheme = defineRecipe({
  variants: {
    LSDisplayXl: {
      true: {
        fontSize: "40px",
        lineHeight: "56px",
        letterSpacing: "-2%",
      },
    },
    LSDisplayMd: {
      true: {
        fontSize: "24px",
        lineHeight: "32px",
      },
    },
    LSDisplaySm: {
      true: {
        fontSize: "20px",
        lineHeight: "28px",
      },
    },
    LSHeading: {
      true: {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    LSSubheading: {
      true: {
        fontSize: "12px",
        lineHeight: "16px",
        letterSpacing: "4%",
      },
    },
    LSBody: {
      true: {
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    LSCaption: {
      true: {
        fontSize: "12px",
        lineHeight: "16px",
      },
    },
    SSDisplayMd: {
      true: {
        fontSize: "20px",
        lineHeight: "28px",
      },
    },
  },
});

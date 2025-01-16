import {
  chakra,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { InputRecipe } from "./variants/InputRecipe";
import { IconButtonRecipe } from "./variants/IconButtonRecipe";
import { textTheme } from "./variants/TextTheme";

// Dark theme configuration
const lightTheme = defineConfig({
  theme: {
    tokens: {
      colors: {
        teal: {
          bg: { value: "#F3FAFB" },
        },
        brand: {
          base: {
            value: "#E30613",
          },
          hover: {
            value: "#C20510",
          },
          disabled: {
            value: "#F4999F",
          },
        },
        text: {
          teal: {
            value: "#0098A5",
          },
          gray: {
            normal: {
              value: "#667085",
            },
            dark: {
              value: "#111619",
            },
          },
        },
        border: {
          input: {
            value: "#E2E8F0",
          },
          gray: {
            value: "#E4E7EC",
          },
          timeline: {
            value: "#D0D5DD",
          },
        },
      },
    },
  },
});

// Create systems for each theme
export const lightSystem = createSystem(defaultConfig, lightTheme);
export const Input = chakra("input", InputRecipe);
export const IconButton = chakra("button", IconButtonRecipe);
export const Text = chakra("text", textTheme);

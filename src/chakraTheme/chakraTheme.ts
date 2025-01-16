import { chakra, createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { InputRecipe } from "./variants/InputRecipe"
import { IconButtonRecipe } from "./variants/IconButtonRecipe"

// Dark theme configuration
const lightTheme = defineConfig({
  theme:{
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
            value: "#0098A5"
          },
          gray: {
            value: "#667085",
            dark: {
              value: "#111619"
            }
          },
        },
        gray: {
          border:{
            value: "#E2E8F0"
          }
        }
      },
      shadows:{
        md :{
          value: "0 4px 16px 0 #1D29391A",
        }
      }
    },
  },
})

// Create systems for each theme
export const lightSystem = createSystem(defaultConfig, lightTheme)
export const Input = chakra("input", InputRecipe)
export const IconButton = chakra("button", IconButtonRecipe)
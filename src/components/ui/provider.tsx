import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { ThemeProviderProps } from "next-themes";
import { theme } from "@/chakraTheme/chakraTheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Provider(props: ThemeProviderProps) {
  const queryClient = new QueryClient();
  return (
    <ColorModeProvider {...props} forcedTheme="light">
      <QueryClientProvider client={queryClient}>
        <ChakraProvider value={theme}>{props.children}</ChakraProvider>
      </QueryClientProvider>
    </ColorModeProvider>
  );
}

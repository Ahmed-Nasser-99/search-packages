import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { ThemeProviderProps } from "next-themes";
import { lightSystem } from "@/chakraTheme/chakraTheme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export function Provider(props: ThemeProviderProps) {
  const queryClient = new QueryClient();
  return (
    <ColorModeProvider {...props}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider value={lightSystem}>{props.children}</ChakraProvider>
      </QueryClientProvider>
    </ColorModeProvider>
  );
}

import { Box, HStack, VStack } from "@chakra-ui/react";
import LanguageSwitcher from "../language-switcher";
import Logo from "../Logo";
import MobileSearch from "./MobileSearch";
import { useState } from "react";

interface NavBarProps {
  input: string;
  setInput: (input: string) => void;
  refetch: () => void;
}

export const NavBar = ({ input, setInput, refetch }: NavBarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <VStack
      bg={{ base: "white", md: "transparent" }}
      boxShadow={{
        base: "0 -1px 0 0 #E4E7EC, 0 0 1px 1px #E4E7EC",
        md: "none",
      }}
    >
      <HStack justifyContent="space-between" p={4} w="full">
        <Box display={isSearchOpen ? "none" : "block"}>
          <Logo />
        </Box>
        <HStack w={isSearchOpen ? "full" : "auto"}>
          {!isSearchOpen && <LanguageSwitcher />}
          <MobileSearch
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
            input={input}
            setInput={setInput}
            refetch={refetch}
          />
        </HStack>
      </HStack>
    </VStack>
  );
};

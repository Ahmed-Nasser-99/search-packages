import { HStack, VStack } from "@chakra-ui/react";
import LanguageSwitcher from "./language-switcher";
import Logo from "./Logo";
import { ColorModeButton } from "./ui/color-mode";

export const NavBar = () => {
  return (
    <VStack>
      <HStack justifyContent="space-between" p={4} w="full">
        <Logo />
        <HStack>
          <LanguageSwitcher />
          <ColorModeButton />
        </HStack>
      </HStack>
    </VStack>
  );
};

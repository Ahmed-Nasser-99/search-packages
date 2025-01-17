import SearchIcon from "@/assets/icons/SearchIcon";
import { IconButton, Input } from "@/chakraTheme/chakraTheme";
import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { CgClose } from "react-icons/cg";

interface MobileSearchProps {
  input: string;
  setInput: (input: string) => void;
  refetch: () => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (isSearchOpen: boolean) => void;
}

const MobileSearch = ({
  input,
  setInput,
  refetch,
  isSearchOpen,
  setIsSearchOpen,
}: MobileSearchProps) => {
  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  if (!isSearchOpen)
    return (
      <IconButton
        ghost
        borderStartRadius={0}
        aria-label="search"
        type="submit"
        onClick={() => setIsSearchOpen(true)}
        display={{ base: isSearchOpen ? "none" : "flex", md: "none" }}
      >
        <SearchIcon boxSize="14px" />
      </IconButton>
    );

  return (
    <Box w="100%">
      <form onSubmit={handleSubmit}>
        <HStack w="full">
          <IconButton
            ghost
            aria-label="closeSearch"
            onClick={() => setIsSearchOpen(false)}
            type="button"
          >
            <CgClose />
          </IconButton>
          <HStack gap={0} w="full">
            <Input
              borderEndRadius={0}
              placeholder={t("search_package")}
              p="10px"
              h="44px"
              w="full"
              value={input}
              onChange={(e) => {
                // remove non-numeric characters
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
                setInput(e.target.value);
              }}
            />
            <IconButton
              borderStartRadius={0}
              aria-label="search"
              type="submit"
              disabled={!input.length}
              h="44px"
              p="8px"
            >
              <SearchIcon />
            </IconButton>
          </HStack>
        </HStack>
      </form>
    </Box>
  );
};

export default MobileSearch;

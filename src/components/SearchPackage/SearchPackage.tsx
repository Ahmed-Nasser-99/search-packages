import { HStack, VStack, Image, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import SearchIcon from "@/assets/icons/SearchIcon";
import { IconButton, Input, Text } from "@/chakraTheme/chakraTheme";

interface SearchPackageProps {
  input: string;
  setInput: (input: string) => void;
  refetch: () => void;
}

const SearchPackage = ({ input, setInput, refetch }: SearchPackageProps) => {
  const { t } = useTranslation();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <HStack w="full" justifyContent="center">
      <VStack>
        <VStack gap={0}>
          <Image src="/Pin.png" alt="Pin" objectFit="fill" w="1/3" />
          <Text
            LSDisplayXl
            fontWeight="bold"
            textAlign="center"
            color="text.gray.dark"
          >
            {t("track_your_order")}
          </Text>
          <Text
            display={{ base: "block", md: "none" }}
            LSBody
            textAlign="center"
            color="text.gray.dark"
            mb={{ base: "16px", md: "0" }}
          >
            {t("mobile_search")}
          </Text>
        </VStack>
        <Box display={{ base: "none", md: "block" }} w="60%">
          <form onSubmit={handleSubmit}>
            <HStack gap={0} h="full" transform="translateY(30%)">
              <Input
                borderEndRadius={0}
                placeholder={t("search_package")}
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
              >
                <SearchIcon />
              </IconButton>
            </HStack>
          </form>
        </Box>
      </VStack>
    </HStack>
  );
};

export default SearchPackage;

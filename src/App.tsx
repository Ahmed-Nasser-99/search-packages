import { Stack } from "@chakra-ui/react";
import { NavBar } from "./components/navBar/NavBar";
import SearchPackage from "./components/SearchPackage/SearchPackage";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPackageByTrackingNumber } from "./api/fetchPackageByTrackingNumber";
import PackageDetails from "./components/packageDetails/PackageDetails";
import { useTranslation } from "react-i18next";
import { AxiosError } from "axios";

function App() {
  const [input, setInput] = useState("");
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { data, refetch, error, isRefetching, isLoading, isPending } = useQuery(
    {
      queryKey: ["package", input],
      queryFn: () => fetchPackageByTrackingNumber(input, lang),
      enabled: false,
      retry: false,
    }
  );

  console.log(data, error, isRefetching, isLoading, isPending);

  useEffect(() => {
    if (data) refetch();
  }, [lang]);

  return (
    <Stack w="full" alignItems="center">
      <Stack
        w="full"
        alignItems="center"
        bg="teal.bg"
        mb={{ base: "4", md: "10" }}
      >
        <Stack w={["100%", "100%", "70%"]} gap="24px">
          <NavBar input={input} setInput={setInput} refetch={refetch} />
          <SearchPackage input={input} setInput={setInput} refetch={refetch} />
        </Stack>
      </Stack>
      <Stack w={["100%", "80%", "70%"]}>
        <PackageDetails
          data={data?.data}
          isLoading={isLoading}
          error={error as AxiosError}
        />
      </Stack>
    </Stack>
  );
}

export default App;

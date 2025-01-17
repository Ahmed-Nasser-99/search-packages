import { Stack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import SearchPackage from "./components/SearchPackage/SearchPackage";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPackageByTrackingNumber } from "./api/fetchPackageByTrackingNumber";
import PackageDetails from "./components/packageDetails/PackageDetails";
import { useTranslation } from "react-i18next";

function App() {
  const [input, setInput] = useState("");
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const { data, refetch } = useQuery({
    queryKey: [input],
    queryFn: () => fetchPackageByTrackingNumber(input, lang),
    enabled: false,
  });

  useEffect(() => {
    refetch();
  }, [lang]);

  return (
    <Stack w="full" alignItems="center">
      <Stack w="full" alignItems="center" bg="teal.bg" mb="10">
        <Stack w={["100%", "80%", "70%"]}>
          <NavBar />
          <SearchPackage input={input} setInput={setInput} refetch={refetch} />
        </Stack>
      </Stack>
      <Stack w={["100%", "80%", "70%"]}>
        <PackageDetails data={data} />
      </Stack>
    </Stack>
  );
}

export default App;

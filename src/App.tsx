import { Stack } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import SearchPackage from "./components/SearchPackage/SearchPackage";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPackageByTrackingNumber } from "./api/fetchPackageByTrackingNumber";
import PackageDetails from "./components/packageDetails/PackageDetails";

function App() {
  const [input, setInput] = useState("");

  const { data, refetch } = useQuery({
    queryKey: [input],
    queryFn: () => fetchPackageByTrackingNumber(input),
    enabled: false,
  });

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

import { Spinner, VStack } from "@chakra-ui/react";
import MainData from "./MainData";
import { ShipmentDetails } from "@/types/packageType";
import TrackingDetails from "./TrackingDetails";
import { useTranslation } from "react-i18next";
import { Alert } from "../ui/alert";
import { AxiosError } from "axios";

interface PackageDetailsProps {
  data: ShipmentDetails;
  isLoading: boolean;
  error?: AxiosError | null;
}

const PackageDetails = ({ data, isLoading, error }: PackageDetailsProps) => {
  const { t } = useTranslation();
  console.log(isLoading, data, error);
  if (isLoading)
    return (
      <VStack w="full" h="full" justify="center" align="center">
        <Spinner size="xl" />
      </VStack>
    );
  if (error)
    return (
      <Alert status="error" title="Invalid Fields">
        {t("error")}
      </Alert>
    );
  if (!data) return null;
  return (
    <VStack gap="24px">
      <MainData shipmentDetails={data} />
      <TrackingDetails transitEvents={data.TransitEvents} />
    </VStack>
  );
};

export default PackageDetails;

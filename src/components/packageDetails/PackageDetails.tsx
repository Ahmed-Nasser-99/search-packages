import { VStack } from "@chakra-ui/react";
import MainData from "./MainData";
import { ShipmentDetails } from "@/types/packageType";
import TrackingDetails from "./TrackingDetails";

interface PackageDetailsProps {
  data: ShipmentDetails;
}

const PackageDetails = ({ data }: PackageDetailsProps) => {
  if (!data) return null;
  return (
    <VStack gap="24px">
      <MainData shipmentDetails={data} />
      <TrackingDetails transitEvents={data.TransitEvents} />
    </VStack>
  );
};

export default PackageDetails;

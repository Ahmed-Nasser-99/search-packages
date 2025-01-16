import { VStack } from "@chakra-ui/react";
import React from "react";
import MainData from "./MainData";
import { ShipmentDetails } from "@/types/packageType";

interface PackageDetailsProps {
  data: ShipmentDetails;
}

const PackageDetails = ({ data }: PackageDetailsProps) => {
  if (!data) return null;
  return (
    <VStack>
      <MainData shipmentDetails={data} />
    </VStack>
  );
};

export default PackageDetails;

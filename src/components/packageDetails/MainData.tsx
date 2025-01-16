import { HStack, VStack } from "@chakra-ui/react";
import { ShipmentDetails } from "@/types/packageType";
import { Text } from "@/chakraTheme/chakraTheme";
import { useTranslation } from "react-i18next";
import moment from "moment";
import PackageTimeLine from "./PackageTimeLine";

interface MainDataProps {
  shipmentDetails: ShipmentDetails;
}

const MainData = ({ shipmentDetails }: MainDataProps) => {
  const { t } = useTranslation();

  return (
    <VStack
      borderRadius="10px"
      border="1px solid"
      borderColor="border.gray"
      w="100%"
      alignItems="flex-start"
      boxShadow="0 4px 4px 0 #1D29390D, 0 0 1px 1px #E4E7EC"
    >
      <VStack
        align="flex-start"
        gap="none"
        borderBottom="1px solid"
        p="16px"
        borderColor="border.gray"
        w="full"
      >
        <Text LSSubheading color="text.gray.normal">
          {t("ORDER_#")}
          {shipmentDetails.TrackingNumber}
        </Text>
        <HStack gap="0">
          <Text LSDisplayMd color="text.gray.dark" fontWeight="semibold">
            {t("Arriving by")}
          </Text>
          &nbsp;
          <Text LSDisplayMd color="text.teal" fontWeight="semibold">
            {moment(shipmentDetails.CurrentStatus.timestamp).format(
              "ddd MMM. D"
            )}
          </Text>
        </HStack>
        <Text LSBody color="text.gray.normal">
          {t("your_order_is_expected_to_arrive_within_2_-3_working_days")}
        </Text>
      </VStack>
      <HStack minW="70%" py="16px" h="128px" mx="auto">
        <PackageTimeLine shipmentDetails={shipmentDetails} />
      </HStack>
    </VStack>
  );
};

export default MainData;

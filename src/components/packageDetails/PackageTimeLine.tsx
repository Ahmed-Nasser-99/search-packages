import { Stack, Steps } from "@chakra-ui/react";
import { StepsItem, StepsList, StepsRoot } from "@/components/ui/steps";
import { ShipmentDetails } from "@/types/packageType";
import { useTranslation } from "react-i18next";
import { Text } from "@/chakraTheme/chakraTheme";

interface PackageTimeLineProps {
  shipmentDetails: ShipmentDetails;
}

const PackageTimeLine = ({ shipmentDetails }: PackageTimeLineProps) => {
  const { t } = useTranslation();

  const steps = [
    t("picked_up"),
    t("processing"),
    t("in_transit"),
    t("delivered"),
  ];

  return (
    <Stack gap="16" w="100%">
      <StepsRoot
        variant="subtle"
        count={steps.length}
        step={3}
        size="sm"
        w="100%"
      >
        <StepsList>
          {steps.map((step, index) => (
            <StepsItem
              index={index}
              key={index}
              flexDirection="column"
              title={
                <Text LSBody fontWeight="medium" color="text.gray.dark">
                  {step}
                </Text>
              }
            />
          ))}
        </StepsList>
      </StepsRoot>
    </Stack>
  );
};

export default PackageTimeLine;

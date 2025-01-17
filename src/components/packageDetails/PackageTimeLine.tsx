import { Stack } from "@chakra-ui/react";
import { StepsItem, StepsList, StepsRoot } from "@/components/ui/steps";
import { ShipmentDetails } from "@/types/packageType";
import { useTranslation } from "react-i18next";
import { Text } from "@/chakraTheme/chakraTheme";
import moment from "moment";
import { CODE_FOR_DELIVERED, CODE_FOR_OUT_FOR_DELIVERY } from "@/conts";

interface PackageTimeLineProps {
  shipmentDetails: ShipmentDetails;
}

const PackageTimeLine = ({ shipmentDetails }: PackageTimeLineProps) => {
  const { t } = useTranslation();

  const steps = [
    {
      label: t("picked_up"),
    },
    {
      label: t("processing"),
    },
    {
      code: CODE_FOR_OUT_FOR_DELIVERY,
      label: t("out_for_delivery"),
    },
    {
      code: CODE_FOR_DELIVERED,
      label: t("delivered"),
    },
  ];

  return (
    <Stack gap="16" w="100%">
      <StepsRoot
        variant="subtle"
        count={steps.length}
        step={getStep(shipmentDetails.CurrentStatus.code)}
        size="sm"
      >
        <StepsList alignItems="start !important">
          {steps.map((step, index) => (
            <StepsItem
              index={index}
              key={index}
              flexDirection="column"
              title={
                <Text
                  LSBody
                  fontWeight="medium"
                  color="text.gray.dark"
                  textAlign="center"
                >
                  {step.label}
                </Text>
              }
              description={
                <Text
                  LSCaption
                  color="text.gray.dark"
                  textAlign="center"
                  whiteSpace="nowrap"
                >
                  {step.label === t("picked_up")
                    ? moment(shipmentDetails.collectedFromBusiness).format(
                        "dddd MMM.D"
                      )
                    : step.code === shipmentDetails.CurrentStatus.code
                    ? moment(shipmentDetails.CurrentStatus.timestamp).format(
                        "dddd MMM.D"
                      )
                    : null}
                </Text>
              }
            />
          ))}
        </StepsList>
      </StepsRoot>
    </Stack>
  );
};

const getStep = (code: number) => {
  switch (code) {
    case CODE_FOR_DELIVERED:
      return 4;
    case CODE_FOR_OUT_FOR_DELIVERY:
      return 3;
    default:
      return 1;
  }
};

export default PackageTimeLine;

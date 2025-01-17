import { Text } from "@/chakraTheme/chakraTheme";
import { ShipmentDetails } from "@/types/packageType";
import { HStack, VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import {
  TimelineConnector,
  TimelineContent,
  TimelineItem,
  TimelineRoot,
  TimelineTitle,
} from "../ui/timeline";
import moment from "moment";

interface TrackingDetailsProps {
  transitEvents: ShipmentDetails["TransitEvents"];
}

const TrackingDetails = ({ transitEvents }: TrackingDetailsProps) => {
  const { t } = useTranslation();

  if (!transitEvents)
    return (
      <HStack>
        <Text LSDisplaySm fontWeight="medium" color="text.gray.normal">
          {t("no_tracking_details")}
        </Text>
      </HStack>
    );

  const groupedEvents = groupByDay(transitEvents);
  return (
    <VStack
      alignItems="start"
      w="full"
      gap="32px"
      px={{ base: "16px", md: "0" }}
    >
      <Text color="text.gray.normal" LSDisplaySm fontWeight="medium">
        {t("tracking_details")}
      </Text>
      <TimelineRoot size="lg" variant="subtle">
        {Object.entries(groupedEvents)
          .reverse()
          .map(([date, events], index) => {
            return (
              <TimelineItem w="full">
                <TimelineConnector
                  bgColor={index === 0 ? "text.teal" : "border.timeline"}
                />
                <TimelineContent w="full">
                  <TimelineTitle>
                    <Text LSHeading color="text.gray.dark" fontWeight="medium">
                      {moment(date).format("dddd MMM D,YYYY")}
                    </Text>
                  </TimelineTitle>
                  {events.map((event, index) => (
                    <VStack
                      key={index}
                      alignItems="start"
                      p="8px 16px"
                      border="1px solid"
                      borderRadius="4px"
                      borderColor="border.gray"
                      w="full"
                    >
                      <Text LSBody color="text.gray.dark">
                        {event.state || event.msg}
                      </Text>
                      <Text LSBody color="text.gray.normal">
                        {moment(event.timestamp).format("hh:mm A")}
                      </Text>
                    </VStack>
                  ))}
                </TimelineContent>
              </TimelineItem>
            );
          })}
      </TimelineRoot>
    </VStack>
  );
};

const groupByDay = (events: ShipmentDetails["TransitEvents"]) => {
  return events.reduce((groups, event) => {
    const date = new Date(event.timestamp).toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(event);
    return groups;
  }, {} as Record<string, ShipmentDetails["TransitEvents"]>);
};

export default TrackingDetails;

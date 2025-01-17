import { Steps as ChakraSteps, VStack } from "@chakra-ui/react";
import * as React from "react";
import { LuCheck } from "react-icons/lu";

interface StepInfoProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export interface StepsItemProps
  extends Omit<ChakraSteps.ItemProps, "title">,
    StepInfoProps {}

export const StepsItem = React.forwardRef<HTMLDivElement, StepsItemProps>(
  function StepsItem(props, ref) {
    const { title, description, ...rest } = props;
    return (
      <ChakraSteps.Item
        {...rest}
        ref={ref}
        flex="1 0 0 !important"
        flexDirection={{ base: "row", md: "column" }}
        gap="16px"
      >
        <ChakraSteps.Indicator
          _complete={{ bg: "text.teal", color: "white" }}
          _incomplete={{ bg: "transparent", color: "text.gray.dark" }}
          _current={{
            bg: "transparent",
            border: "1px solid",
            borderColor: "border.gray",
          }}
          color="white"
        >
          <ChakraSteps.Status
            complete={<LuCheck strokeWidth="4px" />}
            incomplete={null}
          />
        </ChakraSteps.Indicator>
        <StepInfo title={title} description={description} />
      </ChakraSteps.Item>
    );
  }
);

export const StepInfo = (props: StepInfoProps) => {
  const { title, description } = props;

  if (title && description) {
    return (
      <VStack gap="0" alignItems={{ base: "start", md: "center" }}>
        <ChakraSteps.Title>{title}</ChakraSteps.Title>
        <ChakraSteps.Description>{description}</ChakraSteps.Description>
      </VStack>
    );
  }

  return (
    <>
      {title && <ChakraSteps.Title>{title}</ChakraSteps.Title>}
      {description && (
        <ChakraSteps.Description>{description}</ChakraSteps.Description>
      )}
    </>
  );
};

interface StepsIndicatorProps {
  completedIcon: React.ReactNode;
  icon?: React.ReactNode;
}

export const StepsIndicator = React.forwardRef<
  HTMLDivElement,
  StepsIndicatorProps
>(function StepsIndicator(props, ref) {
  const { icon = <ChakraSteps.Number />, completedIcon } = props;
  return (
    <ChakraSteps.Indicator ref={ref}>
      <ChakraSteps.Status complete={completedIcon} incomplete={icon} />
    </ChakraSteps.Indicator>
  );
});

export const StepsList = ChakraSteps.List;
export const StepsRoot = ChakraSteps.Root;
export const StepsContent = ChakraSteps.Content;
export const StepsCompletedContent = ChakraSteps.CompletedContent;

export const StepsNextTrigger = ChakraSteps.NextTrigger;
export const StepsPrevTrigger = ChakraSteps.PrevTrigger;

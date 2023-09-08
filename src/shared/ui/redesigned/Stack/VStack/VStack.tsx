import { FC } from "react";
import { Flex, FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

export const VStack: FC<VStackProps> = (props: VStackProps) => {
  const { align = "start" } = props;
  return (
    <Flex direction="column" {...props} align={align}>
      {props.children}
    </Flex>
  );
};

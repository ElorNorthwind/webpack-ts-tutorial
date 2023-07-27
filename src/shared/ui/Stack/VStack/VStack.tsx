import { FC } from "react";
import { Flex, FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

export const VStack: FC<VStackProps> = (props: VStackProps) => {
  return (
    <Flex direction="row" {...props}>
      {props.children}
    </Flex>
  );
};

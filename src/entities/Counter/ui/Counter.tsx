import { Button } from "@/shared/ui/Button";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useCounterActions } from "../model/slice/counterSlice";
import { HStack } from "@/shared/ui/Stack";

export const Counter: React.FC = () => {
  const counterValue = useCounterValue();
  const { increment, decrement, add } = useCounterActions();
  const handleIncrement = () => {
    increment();
  };
  const handleDecrement = () => {
    decrement();
  };
  const handleAddFive = () => {
    add(5);
  };

  return (
    <HStack>
      <Button data-testid="increment-btn" onClick={handleIncrement}>
        +
      </Button>
      <Button data-testid="decrement-btn" onClick={handleDecrement}>
        -
      </Button>
      <Button data-testid="decrement-btn" onClick={handleAddFive}>
        +5
      </Button>
      <h1 data-testid="value-title">{counterValue}</h1>
    </HStack>
  );
};

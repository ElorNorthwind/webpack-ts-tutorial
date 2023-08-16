import { useEffect, useState } from "react";
import { Button } from "@/shared/ui/Button";

// Компонент для ручного тестирования ErrorBoundry
export const BugButton: React.FC = () => {
  const [error, setError] = useState(false);

  const onThrow = (): void => {
    setError(true);
  };
  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  return <Button onClick={onThrow}>Throw error</Button>;
};

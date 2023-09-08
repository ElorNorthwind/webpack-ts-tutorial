import { Counter } from "@/entities/Counter";
import { RatingCard } from "@/entities/Rating";
import { toggleFeatures } from "@/shared/lib/features";
import { ListBox } from "@/shared/ui/deprecated/Popups";
import { VStack } from "@/shared/ui/deprecated/Stack";
import { Page } from "@/widgets/Page";

const counter = toggleFeatures({
  name: "isCounterEnabled",
  on: () => <Counter />,
  off: () => undefined,
});

const MainPage = (): JSX.Element => {
  return (
    <Page data-testid={"MainPage"}>
      <VStack max>
        <div>Это новая версия пиу пиу</div>
        <ListBox
          defaultValue="Выберите значение"
          onChange={(value: string) => {}}
          value={undefined}
          items={[
            { content: "Опция 1", value: "option1", unavailable: false },
            { content: "Опция 2", value: "option2", unavailable: false },
            { content: "Опция 3", value: "option3", unavailable: true },
            { content: "Опция 4", value: "option4", unavailable: false },
          ]}
        />
        <div>Это див</div>
        <div>Это див</div>
        <div>Это див</div>
        <RatingCard
          title="оцени плез"
          feedbackTitle="Оставь отзыв к оценочке, братюня"
          hasFeedback
        />
        {counter}
      </VStack>
    </Page>
  );
};

export default MainPage;

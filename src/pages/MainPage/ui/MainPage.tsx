import { RatingCard } from "@/entities/Rating";
import { ListBox } from "@/shared/ui/Popups";
import { VStack } from "@/shared/ui/Stack";
import { Page } from "@/widgets/Page/Page";

const MainPage = (): JSX.Element => {
  return (
    <Page>
      <VStack max>
        <div>Это див</div>
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
      </VStack>
    </Page>
  );
};

export default MainPage;

import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card as CardDeprecated } from "@/shared/ui/deprecated/Card";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { StarRaiting } from "@/shared/ui/deprecated/StarRaiting";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Button as ButtonDeprecated, ButtonSize, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";
import { Drawer } from "@/shared/ui/redesigned/Drawer";
import { ToggleFeatures } from "@/shared/lib/features";
import { Text } from "@/shared/ui/redesigned/Text";
import { Input } from "@/shared/ui/redesigned/Input";
import { Button } from "@/shared/ui/redesigned/Button";
import { Card } from "@/shared/ui/redesigned/Card";

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  feedbackText?: string;
  hasFeedback?: boolean;
  onCancel?: (starCount: number) => void;
  onAccept?: (starCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard: FC<RatingCardProps> = memo((props: RatingCardProps) => {
  const {
    className,
    title,
    feedbackTitle,
    feedbackText,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starCount, setStarCount] = useState(rate);
  const [feedback, setFeedback] = useState("");
  const isMobile = useDevice();

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starCount, feedback);
  }, [feedback, onAccept, starCount]);

  const calcelHandler = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starCount);
  }, [onCancel, starCount]);

  const formButtons = isMobile ? (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button onClick={acceptHandler} size="l" fullWidth data-testid={"RatingCard.Submit"}>
          {t("Отправить")}
        </Button>
      }
      off={
        <ButtonDeprecated
          onClick={acceptHandler}
          size={ButtonSize.L}
          fullWidth
          data-testid={"RatingCard.Submit"}
        >
          {t("Отправить")}
        </ButtonDeprecated>
      }
    />
  ) : (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <HStack justify="end" max gap={"16"}>
          <Button
            onClick={calcelHandler}
            variant="outline"
            color="error"
            data-testid={"RatingCard.Close"}
          >
            {t("Закрыть")}
          </Button>
          <Button onClick={acceptHandler} data-testid={"RatingCard.Submit"}>
            {t("Отправить")}
          </Button>
        </HStack>
      }
      off={
        <HStack justify="end" max gap={"16"}>
          <ButtonDeprecated
            onClick={calcelHandler}
            theme={ButtonTheme.OUTLINE_RED}
            data-testid={"RatingCard.Close"}
          >
            {t("Закрыть")}
          </ButtonDeprecated>
          <ButtonDeprecated onClick={acceptHandler} data-testid={"RatingCard.Submit"}>
            {t("Отправить")}
          </ButtonDeprecated>
        </HStack>
      }
    />
  );

  const modalContent = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <VStack max gap={"32"}>
          <Text title={feedbackTitle} />
          <Input
            value={feedback}
            onChange={setFeedback}
            label={t("Ваш отзыв")}
            data-testid={"RatingCard.Input"}
          />
          {formButtons}
        </VStack>
      }
      off={
        <VStack max gap={"32"}>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            value={feedback}
            onChange={setFeedback}
            placeholder={t("Ваш отзыв")}
            data-testid={"RatingCard.Input"}
          />
          {formButtons}
        </VStack>
      }
    />
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card className={classNames("", {}, [className])} max border="partial" padding="24">
          <VStack align={"center"} data-testid={"RatingCard"}>
            <Text title={starCount ? t("Ваша оценка") : title} text={feedbackText} />
            <StarRaiting selectedStars={starCount} size={40} onSelect={onSelectStars} />
          </VStack>
          {isMobile ? (
            <Drawer isOpen={isModalOpen} lazy onClose={calcelHandler}>
              {modalContent}
            </Drawer>
          ) : (
            <Modal isOpen={isModalOpen} lazy>
              {modalContent}
            </Modal>
          )}
        </Card>
      }
      off={
        <CardDeprecated className={classNames("", {}, [className])} max>
          <VStack align={"center"} data-testid={"RatingCard"}>
            <TextDeprecated title={starCount ? t("Ваша оценка") : title} text={feedbackText} />
            <StarRaiting selectedStars={starCount} size={40} onSelect={onSelectStars} />
          </VStack>
          {isMobile ? (
            <Drawer isOpen={isModalOpen} lazy onClose={calcelHandler}>
              {modalContent}
            </Drawer>
          ) : (
            <Modal isOpen={isModalOpen} lazy>
              {modalContent}
            </Modal>
          )}
        </CardDeprecated>
      }
    />
  );
});

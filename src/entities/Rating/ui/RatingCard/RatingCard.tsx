import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/deprecated/Card";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Text } from "@/shared/ui/deprecated/Text";
import { StarRaiting } from "@/shared/ui/deprecated/StarRaiting";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { Input } from "@/shared/ui/deprecated/Input";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";
import { Drawer } from "@/shared/ui/redesigned/Drawer";

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
    <Button onClick={acceptHandler} size={ButtonSize.L} fullWidth data-testid={"RatingCard.Submit"}>
      {t("Отправить")}
    </Button>
  ) : (
    <HStack justify="end" max gap={"16"}>
      <Button
        onClick={calcelHandler}
        theme={ButtonTheme.OUTLINE_RED}
        data-testid={"RatingCard.Close"}
      >
        {t("Закрыть")}
      </Button>
      <Button onClick={acceptHandler} data-testid={"RatingCard.Submit"}>
        {t("Отправить")}
      </Button>
    </HStack>
  );

  const modalContent = (
    <VStack max gap={"32"}>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t("Ваш отзыв")}
        data-testid={"RatingCard.Input"}
      />
      {formButtons}
    </VStack>
  );

  return (
    <Card className={classNames("", {}, [className])} max>
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
  );
});

import { FC, memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Card } from "@/shared/ui/Card";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";
import { StarRaiting } from "@/shared/ui/StarRaiting";
import { Modal } from "@/shared/ui/Modal";
import { Input } from "@/shared/ui/Input";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";
import { Drawer } from "@/shared/ui/Drawer";

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
    <Button onClick={acceptHandler} size={ButtonSize.L} fullWidth>
      {t("Отправить")}
    </Button>
  ) : (
    <HStack justify="end" max gap={"16"}>
      <Button onClick={calcelHandler} theme={ButtonTheme.OUTLINE_RED}>
        {t("Закрыть")}
      </Button>
      <Button onClick={acceptHandler}>{t("Отправить")}</Button>
    </HStack>
  );

  const modalContent = (
    <VStack max gap={"32"}>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} placeholder={t("Ваш отзыв")} />
      {formButtons}
    </VStack>
  );

  return (
    <Card className={classNames("", {}, [className])} max>
      <VStack align={"center"}>
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

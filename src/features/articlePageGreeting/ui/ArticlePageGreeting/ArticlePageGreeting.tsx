import { useTranslation } from "react-i18next";
import { memo, useEffect, useState } from "react";
import { Modal } from "@/shared/ui/Modal";
import { Text } from "@/shared/ui/Text";
import { saveJsonSettings, useJsonSettings } from "@/entities/User";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Drawer } from "@/shared/ui/Drawer";
import { useDevice } from "@/shared/lib/hooks/useDevice/useDevice";

export const ArticlePageGreeting = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlePageVisited } = useJsonSettings();
  const dispatch = useAppDispatch();
  const onClose = () => {
    setIsOpen(false);
  };
  const isMobile = useDevice();
  const { t } = useTranslation();

  useEffect(() => {
    if (!isArticlePageVisited) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlePageVisited: true }));
    }
  }, [dispatch, isArticlePageVisited]);

  const text = (
    <Text
      title={t("Добро пожаловать на страницу статей")}
      text={t("Это Ваш первый визит сюда. Вам тут не то чтобы рады...")}
    />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal lazy isOpen={isOpen} onClose={onClose}>
      {text}
    </Modal>
  );
});

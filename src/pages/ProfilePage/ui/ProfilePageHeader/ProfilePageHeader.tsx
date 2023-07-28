import {
  getProfileData,
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "entities/Profile";
import { getUserAuthData } from "entities/User";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { HStack } from "shared/ui/Stack/";
import { Text } from "shared/ui/Text/Text";

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader: React.FC<ProfilePageHeaderProps> = (
  props: ProfilePageHeaderProps,
) => {
  const { className } = props;
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCalcelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack justify="between" className={classNames("", {}, [className])} max>
      <Text title={t("Профиль")} />
      {canEdit && (
        <HStack>
          {readonly ? (
            <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
              {t("Редактировать")}
            </Button>
          ) : (
            <>
              <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCalcelEdit}>
                {t("Отмена")}
              </Button>
              <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                {t("Сохранить")}
              </Button>
            </>
          )}
        </HStack>
      )}
    </HStack>
  );
};

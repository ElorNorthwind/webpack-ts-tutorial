import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData";
import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { profileActions } from "../../model/slice/profileSlice";
import { updateProfileData } from "../../model/service/updateProfileData/updateProfileData";
import { ToggleFeatures } from "@/shared/lib/features";
import { Text } from "@/shared/ui/redesigned/Text";
import { Button } from "@/shared/ui/redesigned/Button";
import { Card } from "@/shared/ui/redesigned/Card";

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = memo(
  (props: EditableProfileCardHeaderProps) => {
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
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card max border="partial" padding="24">
            <HStack justify="between" className={classNames("", {}, [className])} max>
              <Text title={t("Профиль")} />
              {canEdit && (
                <HStack>
                  {readonly ? (
                    <Button
                      variant="outline"
                      onClick={onEdit}
                      data-testid={"EditableProfileCardHeader.EditButton"}
                    >
                      {t("Редактировать")}
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        color="error"
                        onClick={onCalcelEdit}
                        data-testid={"EditableProfileCardHeader.CancelButton"}
                      >
                        {t("Отмена")}
                      </Button>
                      <Button
                        variant="outline"
                        color="success"
                        onClick={onSave}
                        data-testid={"EditableProfileCardHeader.SaveButton"}
                      >
                        {t("Сохранить")}
                      </Button>
                    </>
                  )}
                </HStack>
              )}
            </HStack>
          </Card>
        }
        off={
          <HStack justify="between" className={classNames("", {}, [className])} max>
            <TextDeprecated title={t("Профиль")} />
            {canEdit && (
              <HStack>
                {readonly ? (
                  <ButtonDeprecated
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEdit}
                    data-testid={"EditableProfileCardHeader.EditButton"}
                  >
                    {t("Редактировать")}
                  </ButtonDeprecated>
                ) : (
                  <>
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE_RED}
                      onClick={onCalcelEdit}
                      data-testid={"EditableProfileCardHeader.CancelButton"}
                    >
                      {t("Отмена")}
                    </ButtonDeprecated>
                    <ButtonDeprecated
                      theme={ButtonTheme.OUTLINE}
                      onClick={onSave}
                      data-testid={"EditableProfileCardHeader.SaveButton"}
                    >
                      {t("Сохранить")}
                    </ButtonDeprecated>
                  </>
                )}
              </HStack>
            )}
          </HStack>
        }
      />
    );
  },
);

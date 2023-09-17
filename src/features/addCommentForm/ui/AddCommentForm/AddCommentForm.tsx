import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/compomemts/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button as ButtonDeprecated, ButtonTheme } from "@/shared/ui/deprecated/Button";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import cls from "./AddCommentForm.module.scss";
import { HStack } from "@/shared/ui/redesigned/Stack";
import { ToggleFeatures } from "@/shared/lib/features";
import { Card } from "@/shared/ui/redesigned/Card";
import { Input } from "@/shared/ui/redesigned/Input";
import { Button } from "@/shared/ui/redesigned/Button";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();
  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch],
  );
  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentTextChange("");
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Card padding="24" border="partial" max>
            <HStack
              max
              gap="16"
              className={classNames(cls.addCommentFormRedesigned, {}, [className])}
              data-testid={"AddCommentForm"}
            >
              <Input
                data-testid={"AddCommentForm.Input"}
                className={cls.input}
                placeholder={t("Введите текст комментария")}
                value={text}
                onChange={onCommentTextChange}
              />
              <Button
                variant="outline"
                onClick={onSendHandler}
                data-testid={"AddCommentForm.Submit"}
              >
                {t("Отправить")}
              </Button>
            </HStack>
          </Card>
        }
        off={
          <HStack
            max
            gap="16"
            className={classNames(cls.addCommentForm, {}, [className])}
            data-testid={"AddCommentForm"}
          >
            <InputDeprecated
              data-testid={"AddCommentForm.Input"}
              className={cls.input}
              placeholder={t("Введите текст комментария")}
              value={text}
              onChange={onCommentTextChange}
            />
            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              onClick={onSendHandler}
              data-testid={"AddCommentForm.Submit"}
            >
              {t("Отправить")}
            </ButtonDeprecated>
          </HStack>
        }
      />
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;

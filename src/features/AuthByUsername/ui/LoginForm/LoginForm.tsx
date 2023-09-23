import { memo, useCallback } from "react";
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
import { Text as TextDeprecated, TextTheme } from "@/shared/ui/deprecated/Text";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { Text } from "@/shared/ui/redesigned/Text";
import { Input } from "@/shared/ui/redesigned/Input";
import { Button } from "@/shared/ui/redesigned/Button";
import { VStack } from "@/shared/ui/redesigned/Stack";
// import { useForceUpdate } from "@react-spring/shared";

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm: React.FC<LoginFormProps> = memo((props: LoginFormProps) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  // const forceUpdate = useForceUpdate();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUserName({ username, password }));
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
      // forceUpdate();
      window.location.reload();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <VStack className={classNames(cls.loginFormRedesigned, {}, [className])} gap="24">
            <Text title={t("Форма авторизации")} />
            <VStack max>
              <Input onChange={onChangeUsername} value={username} label={t("Логин")} autoFocus />
              <Input onChange={onChangePassword} value={password} label={t("Пароль")} />
              {error && <Text variant="error" text={t(error)} />}
            </VStack>
            <Button
              onClick={onLoginClick}
              className={cls.loginBtn}
              variant="outline"
              disabled={isLoading}
            >
              {t("Войти")}
            </Button>
          </VStack>
        }
        off={
          <div className={classNames(cls.loginForm, {}, [className])}>
            <TextDeprecated title={t("Форма авторизации")} />
            <InputDeprecated
              onChange={onChangeUsername}
              value={username}
              className={cls.input}
              placeholder={t("Логин")}
              autoFocus
            />
            <InputDeprecated
              onChange={onChangePassword}
              value={password}
              className={cls.input}
              placeholder={t("Пароль")}
            />
            {error && <TextDeprecated theme={TextTheme.ERROR} text={t(error)} />}
            <ButtonDeprecated
              onClick={onLoginClick}
              className={cls.loginBtn}
              theme={ButtonTheme.OUTLINE}
              disabled={isLoading}
            >
              {t("Войти")}
            </ButtonDeprecated>
          </div>
        }
      />
    </DynamicModuleLoader>
  );
});

export default LoginForm;

import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { getLoginState } from "../../model/selectors/getLoginState";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";
import { loginActions } from "../../model/slice/loginSlice";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = memo(
  (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback(
      (value: string) => {
        dispatch(loginActions.setUsername(value));
      },
      [dispatch]
    );

    const onChangePassword = useCallback(
      (value: string) => {
        dispatch(loginActions.setPassword(value));
      },
      [dispatch]
    );

    const onLoginClick = useCallback(() => {
      dispatch(loginByUserName({ username, password }));
    }, [dispatch, username, password]);

    return (
      <div className={classNames(cls.loginForm, {}, [className])}>
        <Text title={t("Форма авторизации")} />
        <Input
          onChange={onChangeUsername}
          value={username}
          className={cls.input}
          placeholder={t("Логин")}
          autoFocus
        />
        <Input
          onChange={onChangePassword}
          value={password}
          className={cls.input}
          placeholder={t("Пароль")}
        />
        {error && <Text theme={TextTheme.ERROR} text={t(error)} />}
        <Button
          onClick={onLoginClick}
          className={cls.loginBtn}
          theme={ButtonTheme.OUTLINE}
          disabled={isLoading}
        >
          {t("Войти")}
        </Button>
      </div>
    );
  }
);

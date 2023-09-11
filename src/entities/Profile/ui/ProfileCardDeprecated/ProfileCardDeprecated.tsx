import { CountrySelect } from "@/entities/Country";
import { CurrencySelect } from "@/entities/Currency";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { Input as InputDeprecated } from "@/shared/ui/deprecated/Input";
import { Loader as LoaderDeprecated } from "@/shared/ui/deprecated/Loader";
import { Text as TextDeprecated, TextAlign, TextTheme } from "@/shared/ui/deprecated/Text";
import cls from "./ProfileCardDeprecated.module.scss";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";

import { ProfileCardProps } from "../ProfileCard/ProfileCard";

export const ProfileCardDeprecatedError = ({ className }: { className?: string }) => {
  const { t } = useTranslation("profile");

  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.profileCard, {}, [cls.error, className])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={t("Ошибка при загрузке профиля")}
        text={t("Обновите страницу")}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecatedSkeleton = ({ className }: { className?: string }) => {
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.profileCard, {}, [cls.loading, className])}
    >
      <LoaderDeprecated />
    </HStack>
  );
};

export const ProfileCardDeprecated = (props: ProfileCardProps) => {
  const {
    className,
    data,
    // error,
    // isLoading,
    readOnly = true,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation("profile");

  return (
    <VStack
      max
      gap="16"
      className={classNames(cls.profileCard, { [cls.editing]: !readOnly }, [className])}
    >
      {data?.avatar && (
        <HStack justify="center" max className={cls.avatarWrapper}>
          <AvatarDeprecated src={data?.avatar} alt={`${data?.username || ""} avatar`} />
        </HStack>
      )}

      <InputDeprecated
        className={cls.input}
        value={data?.first}
        placeholder={t("Ваше Имя")}
        onChange={onChangeFirstname}
        readOnly={readOnly}
        data-testid={"ProfileCard.firstname"}
      />
      <InputDeprecated
        className={cls.input}
        value={data?.lastname}
        placeholder={t("Ваша фамилия")}
        onChange={onChangeLastname}
        readOnly={readOnly}
        data-testid={"ProfileCard.lastname"}
      />
      <InputDeprecated
        className={cls.input}
        value={String(data?.age || "")}
        placeholder={t("Ваш возраст")}
        type="number"
        onChange={onChangeAge}
        readOnly={readOnly}
      />
      <InputDeprecated
        className={cls.input}
        value={data?.city}
        placeholder={t("Город")}
        onChange={onChangeCity}
        readOnly={readOnly}
      />
      <InputDeprecated
        className={cls.input}
        value={data?.username}
        placeholder={t("Имя пользователя")}
        onChange={onChangeUsername}
        readOnly={readOnly}
      />
      <InputDeprecated
        className={cls.input}
        value={data?.avatar}
        placeholder={t("Аватар")}
        onChange={onChangeAvatar}
        readOnly={readOnly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readOnly={readOnly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readOnly={readOnly}
      />
    </VStack>
  );
};

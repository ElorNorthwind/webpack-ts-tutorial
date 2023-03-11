import { CountrySelect } from "entities/Country";
import { Country } from "entities/Country/model/types/country";
import { Currency, CurrencySelect } from "entities/Currency";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input/Input";
import { Loader } from "shared/ui/Loader/Loader";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readOnly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string | number) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard: React.FC<ProfileCardProps> = (
  props: ProfileCardProps
) => {
  const {
    className,
    data,
    error,
    isLoading,
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

  if (isLoading) {
    return (
      <div
        className={classNames(cls.profileCard, {}, [cls.loading, className])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls.profileCard, {}, [cls.error, className])}>
        <Text
          theme={TextTheme.ERROR}
          title={t("Ошибка при загрузке профиля")}
          text={t("Обновите страницу")}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div
      className={classNames(cls.profileCard, { [cls.editing]: !readOnly }, [
        className,
      ])}
    >
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar src={data?.avatar} alt={`${data?.username || ""} avatar`} />
          </div>
        )}

        <Input
          className={cls.input}
          value={data?.first}
          placeholder={t("Ваше Имя")}
          onChange={onChangeFirstname}
          readOnly={readOnly}
        />
        <Input
          className={cls.input}
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          onChange={onChangeLastname}
          readOnly={readOnly}
        />
        <Input
          className={cls.input}
          value={String(data?.age || "")}
          placeholder={t("Ваш возраст")}
          type="number"
          onChange={onChangeAge}
          readOnly={readOnly}
        />
        <Input
          className={cls.input}
          value={data?.city}
          placeholder={t("Город")}
          onChange={onChangeCity}
          readOnly={readOnly}
        />
        <Input
          className={cls.input}
          value={data?.username}
          placeholder={t("Имя пользователя")}
          onChange={onChangeUsername}
          readOnly={readOnly}
        />
        <Input
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
      </div>
    </div>
  );
};

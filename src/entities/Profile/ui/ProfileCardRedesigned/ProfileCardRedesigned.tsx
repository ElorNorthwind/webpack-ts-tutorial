import { CountrySelect } from "@/entities/Country";
import { CurrencySelect } from "@/entities/Currency";
import { useTranslation } from "react-i18next";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { Input } from "@/shared/ui/redesigned/Input";
import { Card } from "@/shared/ui/redesigned/Card";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { ProfileCardProps } from "../ProfileCard/ProfileCard";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { Text } from "@/shared/ui/redesigned/Text";

export const ProfileCardRedesignedError = ({ className }: { className?: string }) => {
  const { t } = useTranslation("profile");

  return (
    <Card max padding="24" className={className}>
      <VStack gap="32" max>
        <HStack justify="center" gap="24" max className={className}>
          <Text
            variant="error"
            title={t("Ошибка при загрузке профиля")}
            text={t("Обновите страницу")}
            align="center"
          />
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesignedSkeleton = ({ className }: { className?: string }) => {
  return (
    <Card max padding="24" className={className}>
      <VStack gap="32" max>
        <HStack justify="center" max>
          <Skeleton width={128} height={128} border={"50%"} />
        </HStack>
        <HStack gap="24" max>
          <VStack gap="16" max>
            <Skeleton width={"100%"} height={38} border={"19px"} />
            <Skeleton width={"100%"} height={38} border={"19px"} />
            <Skeleton width={"100%"} height={38} border={"19px"} />
            <Skeleton width={"100%"} height={38} border={"19px"} />
          </VStack>
          <VStack gap="16" max>
            <Skeleton width={"100%"} height={38} border={"19px"} />
            <Skeleton width={"100%"} height={38} border={"19px"} />
            <Skeleton width={"100%"} height={38} border={"19px"} />
            <Skeleton width={"100%"} height={38} border={"19px"} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesigned: React.FC<ProfileCardProps> = (props: ProfileCardProps) => {
  const {
    className,
    data,
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
    <Card max padding="24" variant={readOnly ? "light" : "normal"} className={className}>
      <VStack gap="32" max>
        {data?.avatar && (
          <HStack justify="center" max>
            <Avatar src={data?.avatar} alt={`${data?.username || ""} avatar`} size={128} />
          </HStack>
        )}

        <HStack gap={"24"} align="start">
          <VStack gap={"16"} max>
            <Input
              value={data?.lastname}
              label={t("Ваша фамилия")}
              onChange={onChangeLastname}
              readonly={readOnly}
              data-testid={"ProfileCard.lastname"}
            />
            <Input
              value={String(data?.age || "")}
              label={t("Ваш возраст")}
              type="number"
              onChange={onChangeAge}
              readonly={readOnly}
            />
            <Input
              value={data?.city}
              label={t("Город")}
              onChange={onChangeCity}
              readonly={readOnly}
            />
            <Input
              value={data?.username}
              label={t("Имя пользователя")}
              onChange={onChangeUsername}
              readonly={readOnly}
            />
          </VStack>
          <VStack gap={"16"} max>
            <Input
              value={data?.first}
              label={t("Ваше Имя")}
              onChange={onChangeFirstname}
              readonly={readOnly}
              data-testid={"ProfileCard.firstname"}
            />

            <Input
              value={data?.avatar}
              label={t("Аватар")}
              onChange={onChangeAvatar}
              readonly={readOnly}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readOnly={readOnly}
            />
            <CountrySelect value={data?.country} onChange={onChangeCountry} readOnly={readOnly} />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

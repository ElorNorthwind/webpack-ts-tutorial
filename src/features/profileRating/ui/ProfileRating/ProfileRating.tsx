import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { RatingCard } from "@/entities/Rating";
import { useGetProfileRating, useRateProfile } from "../../api/profileRatingApi";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton";

export interface ProfileRatingProps {
  className?: string;
  profileId: string;
}

const ProfileRating: FC<ProfileRatingProps> = memo((props: ProfileRatingProps) => {
  const { className, profileId } = props;
  const userData = useSelector(getUserAuthData);
  const { t } = useTranslation();
  const { data, isLoading } = useGetProfileRating({ profileId, userId: userData?.id ?? "" });
  const [rateProfileeMutation] = useRateProfile();

  const handleRateProfile = useCallback(
    (starCount: number, feedback?: string) => {
      try {
        rateProfileeMutation({
          userId: userData?.id ?? "",
          profileId,
          rate: starCount,
          feedback,
        });
      } catch (e) {
        // insert proper error handling here :(
        console.log(e);
      }
    },
    [profileId, rateProfileeMutation, userData?.id],
  );

  const onAccept = useCallback(
    (starCount: number, feedback?: string) => {
      handleRateProfile(starCount, feedback);
    },
    [handleRateProfile],
  );

  const onCancel = useCallback(
    (starCount: number) => {
      handleRateProfile(starCount);
    },
    [handleRateProfile],
  );

  if (isLoading) {
    return <Skeleton width={"100%"} height={120} />;
  }

  const rating = data?.[0];

  return (
    <RatingCard
      onAccept={onAccept}
      onCancel={onCancel}
      className={className}
      title={t("Оцените профиль")}
      feedbackText={data?.[0]?.feedback}
      feedbackTitle={t("Оставьте свой комментарий, мы обязательно его проигрорируем")}
      hasFeedback
      rate={rating?.rate}
    />
  );
});

export default ProfileRating;

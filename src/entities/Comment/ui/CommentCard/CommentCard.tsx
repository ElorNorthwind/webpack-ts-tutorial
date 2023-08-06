import { FC, memo } from "react";
import { RoutePaths } from "@/shared/config/routeConfig/routeConfig";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Avatar } from "@/shared/ui/Avatar/Avatar";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Text } from "@/shared/ui/Text/Text";
import { Comment } from "../../model/types/comment"; // should error in eslint ;(
import cls from "./CommentCard.module.scss";
import { VStack } from "@/shared/ui/Stack";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack max className={classNames(cls.commentCard, {}, [className, cls.loading])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border={"50%"} className={cls.avatar} />
          <Skeleton width={100} height={16} border={"3px"} />
        </div>
        <Skeleton width={"100%"} height={50} border={"3px"} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack max className={classNames(cls.commentCard, {}, [className])}>
      <AppLink to={`${RoutePaths.profile}${comment.user.id}`} className={cls.header}>
        {comment.user?.avatar ? (
          <Avatar className={cls.avatar} size={30} src={comment.user.avatar} />
        ) : null}
        <Text title={comment.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </VStack>
  );
});

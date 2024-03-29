import { FC, memo } from "react";
import { getRouteProfile } from "@/shared/const/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink as AppLinkDeprecated } from "@/shared/ui/deprecated/AppLink";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import { Skeleton as SkeletonRedesigned } from "@/shared/ui/redesigned/Skeleton";
import { Text as TextDeprecated } from "@/shared/ui/deprecated/Text";
import { Comment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { ToggleFeatures, toggleFeatures } from "@/shared/lib/features";
import { Card } from "@/shared/ui/redesigned/Card";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { Avatar } from "@/shared/ui/redesigned/Avatar";
import { Text } from "@/shared/ui/redesigned/Text";

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  const Skeleton = toggleFeatures({
    name: "isAppRedesigned",
    on: () => SkeletonRedesigned,
    off: () => SkeletonDeprecated,
  });

  if (isLoading) {
    return (
      <VStack
        max
        className={classNames(cls.commentCard, {}, [className, cls.loading])}
        data-testid={"CommentCard.Loading"}
      >
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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Card padding="24" max border="partial">
          <VStack
            max
            className={classNames(cls.commentCardRedesigned, {}, [className])}
            data-testid={"CommentCard.Content"}
          >
            <AppLink to={getRouteProfile(comment.user.id)}>
              <HStack>
                {comment.user?.avatar ? (
                  <Avatar className={cls.avatar} size={30} src={comment.user.avatar} />
                ) : null}
                <Text text={comment.user.username} bold />
              </HStack>
            </AppLink>
            <Text className={cls.text} text={comment.text} />
          </VStack>
        </Card>
      }
      off={
        <VStack
          max
          className={classNames(cls.commentCard, {}, [className])}
          data-testid={"CommentCard.Content"}
        >
          <AppLinkDeprecated to={getRouteProfile(comment.user.id)} className={cls.header}>
            {comment.user?.avatar ? (
              <AvatarDeprecated className={cls.avatar} size={30} src={comment.user.avatar} />
            ) : null}
            <TextDeprecated title={comment.user.username} />
          </AppLinkDeprecated>
          <TextDeprecated className={cls.text} text={comment.text} />
        </VStack>
      }
    />
  );
});

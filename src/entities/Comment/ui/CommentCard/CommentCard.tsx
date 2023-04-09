import { FC, memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Text } from "shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentCard: FC<CommentCardProps> = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.commentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border={"50%"} className={cls.avatar} />
          <Skeleton width={100} height={16} border={"3px"} />
        </div>
        <Skeleton width={"100%"} height={50} border={"3px"} className={cls.text} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.commentCard, {}, [className])}>
      <div className={cls.header}>
        {comment.user?.avatar ? (
          <Avatar className={cls.avatar} size={30} src={comment.user.avatar} />
        ) : null}
        <Text title={comment.user.username} />
      </div>
      <Text className={cls.text} text={comment.text} />
    </div>
  );
});
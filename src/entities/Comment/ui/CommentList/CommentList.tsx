import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import { Text } from "shared/ui/Text/Text";
import { Comment } from "../../model/types/comment";
import { CommentCard } from "../CommentCard/CommentCard";
import cls from "./CommentList.module.scss";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(cls.commentList, {}, [className])}>
        <CommentCard key={1} isLoading={true} className={cls.comment} />
        <CommentCard key={2} isLoading={true} className={cls.comment} />
        <CommentCard key={3} isLoading={true} className={cls.comment} />
      </div>
    );
  }
  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            isLoading={isLoading}
            comment={comment}
            className={cls.comment}
          />
        ))
      ) : (
        <Text text={t("Комментарии отсутствуют")} />
      )}
    </div>
  );
});

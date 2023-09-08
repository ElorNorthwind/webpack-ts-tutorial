import { FC, memo } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./NotificationList.module.scss";
import { useNotifications } from "../../api/notificationApi";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { NotificationItem } from "../NotificationItem/NotificationItem";
import { Skeleton } from "@/shared/ui/deprecated/Skeleton";

interface NotificationListProps {
  className?: string;
}

export const NotificationList: FC<NotificationListProps> = memo((props: NotificationListProps) => {
  const { className } = props;
  const { data, isLoading } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack gap={"16"} className={classNames(cls.notificationList, {}, [className])}>
        <Skeleton width={"100%"} border={"8px"} height={"80px"} />
        <Skeleton width={"100%"} border={"8px"} height={"80px"} />
        <Skeleton width={"100%"} border={"8px"} height={"80px"} />
      </VStack>
    );
  }

  return (
    <VStack gap={"16"} className={classNames(cls.notificationList, {}, [className])}>
      {data?.map((item) => (
        <NotificationItem key={item.id} item={item} />
      ))}
    </VStack>
  );
});

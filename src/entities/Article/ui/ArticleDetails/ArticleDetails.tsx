import { FC, memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import TimeIcon from "@/shared/assets/icons/time.svg";
import ViewesIcon from "@/shared/assets/icons/viewes.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/compomemts/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Avatar as AvatarDeprecated } from "@/shared/ui/deprecated/Avatar";
import { Icon as IconDeprecated } from "@/shared/ui/deprecated/Icon";
import { Skeleton as SkeletonDeprecated } from "@/shared/ui/deprecated/Skeleton";
import {
  Text as TextDeprecated,
  TextAlign,
  TextSize,
  TextTheme,
} from "@/shared/ui/deprecated/Text";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetailsSelectors";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import cls from "./ArticleDetails.module.scss";
import { HStack, VStack } from "@/shared/ui/redesigned/Stack";
import { renderArticleBlock } from "./renderBlock";
import { ToggleFeatures } from "@/shared/lib/features";
import { Text } from "@/shared/ui/redesigned/Text";
import { Icon } from "@/shared/ui/redesigned/Icon";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <HStack justify="center" max className={cls.avatarWrapper}>
        <AvatarDeprecated size={200} src={article?.img} className={cls.avatar} />
      </HStack>
      <VStack gap="4" max data-testid={"ArticleDetails.Info"}>
        <TextDeprecated
          title={article?.title}
          text={article?.subtitle}
          className={cls.title}
          size={TextSize.L}
        />
        <HStack className={cls.articleInfo}>
          <IconDeprecated Svg={ViewesIcon} className={cls.icon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack className={cls.articleInfo}>
          <IconDeprecated Svg={TimeIcon} className={cls.icon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
      </VStack>
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);
  return (
    <>
      <Text title={article?.title} size="l" bold />
      <Text text={article?.subtitle} size="l" />
      <AppImage
        src={article?.img}
        loadingFallback={<Skeleton width={"100%"} height={420} border={"16px"} />}
        width={"100%"}
        height={420}
        className={cls.img}
      />
      {article?.blocks.map(renderArticleBlock)}
    </>
  );
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
  };

  let content;

  if (isLoading) {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <>
            <Skeleton className={cls.avatar} width={200} height={200} border={"50%"} />
            <Skeleton className={cls.title} width={300} height={32} />
            <Skeleton className={cls.skeleton} width={600} height={24} />
            <Skeleton className={cls.skeleton} width={"100%"} height={200} />
            <Skeleton className={cls.skeleton} width={"100%"} height={200} />
          </>
        }
        off={
          <>
            <SkeletonDeprecated className={cls.avatar} width={200} height={200} border={"50%"} />
            <SkeletonDeprecated className={cls.title} width={300} height={32} />
            <SkeletonDeprecated className={cls.skeleton} width={600} height={24} />
            <SkeletonDeprecated className={cls.skeleton} width={"100%"} height={200} />
            <SkeletonDeprecated className={cls.skeleton} width={"100%"} height={200} />
          </>
        }
      />
    );
  } else if (error) {
    content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Text align="center" title={t("Произошла ошибка при загрузке статьи")} variant="error" />
        }
        off={
          <TextDeprecated
            align={TextAlign.CENTER}
            title={t("Произошла ошибка при загрузке статьи")}
            theme={TextTheme.ERROR}
          />
        }
      />
    );
  } else {
    content = <ToggleFeatures feature="isAppRedesigned" on={<Redesigned />} off={<Deprecated />} />;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <VStack max gap="16" className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </VStack>
    </DynamicModuleLoader>
  );
});

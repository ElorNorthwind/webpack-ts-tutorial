import { ArticleDetails } from "@/entities/Article";
import { FC, memo } from "react";
import { useParams } from "react-router-dom";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
  DynamicModuleLoader,
  ReducersList,
} from "@/shared/lib/compomemts/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page";
import cls from "./ArticleDetailsPage.module.scss";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "@/shared/ui/redesigned/Stack";
import { ArticleRecommendationsList } from "@/features/ArticleRecommendationsList";
import { ArticleDetailsComments } from "../ArticleDetailsComments/ArticleDetailsComments";
import { ArticleRating } from "@/features/articleRating";
import { ToggleFeatures } from "@/shared/lib/features";
import { StickyContentLayout } from "@/shared/layouts/StickyContentLayout";
import { DetailsContainer } from "../DetailsContainer/DetailsContainer";
import { AdditionalInfoContainer } from "../AdditionalInfoContainer/AdditionalInfoContainer";

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <StickyContentLayout
            content={
              <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <VStack max gap="16">
                  <DetailsContainer />
                  <ArticleRating articleId={id} />
                  <ArticleRecommendationsList />
                  <ArticleDetailsComments id={id} />
                </VStack>
              </Page>
            }
            right={<AdditionalInfoContainer />}
          />
        }
        off={
          <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
            <VStack max gap="16">
              <ArticleDetailsPageHeader />
              <ArticleDetails id={id} />
              <ToggleFeatures
                feature="isArticleRatingEnabled"
                on={<ArticleRating articleId={id} />}
              />
              <ArticleRecommendationsList />
              <ArticleDetailsComments id={id} />
            </VStack>
          </Page>
        }
      />
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);

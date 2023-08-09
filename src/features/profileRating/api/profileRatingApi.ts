import { Rating } from "@/entities/Rating";
import { rtkApi } from "@/shared/api/rtkApi";

interface GetProfileRatingArg {
  userId: string;
  profileId: string;
}

interface RateProfileArg {
  userId: string;
  profileId: string;
  rate: number;
  feedback?: string;
}

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<Rating[], GetProfileRatingArg>({
      query: ({ userId, profileId }) => ({
        url: "/profile-ratings",
        params: {
          userId,
          profileId,
        },
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    rateArticle: build.mutation<void, RateProfileArg>({
      query: (arg) => ({
        url: "/profile-ratings",
        method: "POST",
        body: arg,
      }),
    }),
  }),
});

export const useGetProfileRating = profileRatingApi.useGetArticleRatingQuery;
export const useRateProfile = profileRatingApi.useRateArticleMutation;

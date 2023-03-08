import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from "entities/Profile";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/compomemts/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";

const reducers: ReducersList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;

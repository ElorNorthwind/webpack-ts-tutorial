import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page/Page";
import { VStack } from "@/shared/ui/Stack/";
import { EditableProfileCard } from "@/features/EditableProfileCard";
import { ProfileRating } from "@/features/profileRating";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <Page>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
        <ProfileRating profileId={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;

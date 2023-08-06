import { useParams } from "react-router-dom";
import { Page } from "@/widgets/Page/Page";
import { VStack } from "@/shared/ui/Stack/";
import { EditableProfileCard } from "@/features/EditableProfileCard";

interface ProfilePageProps {
  className?: string;
}

const ProfilePage: React.FC<ProfilePageProps> = (props: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page>
      <VStack gap="16" max>
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  );
};

export default ProfilePage;

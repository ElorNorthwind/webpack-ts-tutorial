import { Suspense } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Loader } from "@/shared/ui/deprecated/Loader";
import { Modal } from "@/shared/ui/redesigned/Modal";
import { LoginFormAsync } from "../LoginForm/LoginForm.async";
import cls from "./LoginModal.module.scss";
import { ToggleFeatures } from "@/shared/lib/features";
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { VStack } from "@/shared/ui/redesigned/Stack";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props: LoginModalProps) => {
  const { className, isOpen, onClose } = props;

  const fallback = (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <VStack max>
          <Skeleton width={"80%"} height={36} />
          <Skeleton width={"100%"} height={36} />
          <Skeleton width={"100%"} height={36} />
        </VStack>
      }
      off={<Loader />}
    />
  );

  return (
    <Modal
      className={classNames(cls.loginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={fallback}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};

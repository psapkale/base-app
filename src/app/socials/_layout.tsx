import { SocialFooter } from "@/src/common/components/socialFooter";
import { SocialHeader } from "@/src/common/components/socialHeader";
import { Slot } from "expo-router";

const SocialsLayout = () => {
  return (
    <>
      <SocialHeader />
      <Slot />
      <SocialFooter />
    </>
  );
};

export default SocialsLayout;
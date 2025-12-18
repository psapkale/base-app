import { SocialFooter } from "@/src/components/socialFooter";
import { SocialHeader } from "@/src/components/socialHeader";
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
import React from "react";
import { AtSign } from "lucide-react";
import { RiInstagramLine, RiTwitterXLine } from "@remixicon/react";

const SocialMediaIcons = () => {
  return (
    <>
      <div className="flex gap-8 justify-center">
        <RiInstagramLine size={21} />
        <RiTwitterXLine size={21} />
        <AtSign size={21} />
      </div>
    </>
  );
};

export default SocialMediaIcons;

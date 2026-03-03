import React from "react";
import BackgroundImage from "./BackgroundImage";
import Button from "./Button";
import ProfileImage from "./ProfileImage";

const UserImages = (props) => {
  return (
    <>
      <div className="w-full h-44 rounded-4xl relative border border-gray-200/90">
        <BackgroundImage bgImage={props.bgImage} />

        <Button />

        <ProfileImage profileImage={props.profileImage} />
      </div>
    </>
  );
};

export default UserImages;

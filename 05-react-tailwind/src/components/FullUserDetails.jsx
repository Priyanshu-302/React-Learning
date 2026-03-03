import React from "react";
import UserInfo from "./UserInfo";
import UserStats from "./UserStats";
import SocialMediaIcons from "./SocialMediaIcons";

const FullUserDetails = (props) => {
  return (
    <>
      <div className="h-[45vh] flex flex-col gap-6">
        <UserInfo
          userName={props.userName}
          userDescription={props.userDescription}
        />

        <UserStats
          likesCount={props.likesCount}
          postCount={props.postCount}
          viewsCount={props.viewsCount}
        />

        <SocialMediaIcons />
      </div>
    </>
  );
};

export default FullUserDetails;

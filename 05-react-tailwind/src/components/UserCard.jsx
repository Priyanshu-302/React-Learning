import React from "react";
import UserImages from "./UserImages";
import FullUserDetails from "./FullUserDetails";

const UserCard = (props) => {
  return (
    <>
      <div className="p-8 flex gap-8 flex-wrap">
        <div className="bg-white w-85 h-full rounded-[30px] border border-gray-100 shadow-2xl p-3 flex flex-col justify-between">
          <UserImages
            bgImage={props.bgImage}
            profileImage={props.profileImage}
          />

          <FullUserDetails
            userName={props.userName}
            userDescription={props.userDescription}
            likesCount={props.likesCount}
            postCount={props.postCount}
            viewsCount={props.viewsCount}
          />
        </div>
      </div>
    </>
  );
};

export default UserCard;

import React from "react";
import UserCard from "./UserCard";

const MainCard = (props) => {
  return (
    <>
      <UserCard
        bgImage={props.bgImage}
        profileImage={props.profileImage}
        userName={props.userName}
        userDescription={props.userDescription}
        likesCount={props.likesCount}
        postCount={props.postCount}
        viewsCount={props.viewsCount}
      />
    </>
  );
};

export default MainCard;

import React from "react";

const UserInfo = (props) => {
  return (
    <>
      <div>
        <h1 className="text-center pt-15 font-semibold text-2xl tracking-tight">
          {props.userName}
        </h1>
        <p className="text-center pt-2 text-base tracking-tight text-gray-500">
          {props.userDescription}
        </p>
      </div>
    </>
  );
};

export default UserInfo;

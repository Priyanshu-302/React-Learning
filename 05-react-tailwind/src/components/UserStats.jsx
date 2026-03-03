import React from "react";

const UserStats = (props) => {
  return (
    <>
      <div className="flex justify-evenly items-center w-full h-24 rounded-3xl shadow-2xl bg-gray-200/50">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold">{props.likesCount}</h2>
          <p className="text-gray-500/70">Likes</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold">{props.postCount}</h2>
          <p className="text-gray-500/70">Posts</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-lg font-bold">{props.viewsCount}</h2>
          <p className="text-gray-500/70">Views</p>
        </div>
      </div>
    </>
  );
};

export default UserStats;

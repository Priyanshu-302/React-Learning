import React from "react";

const ProfileImage = (props) => {
  return (
    <>
      <div className="absolute left-1/2 -bottom-12 -translate-x-1/2">
        <div className="p-0.75 rounded-full bg-linear-to-tr from-orange-400 via-purple-500 to-green-400">
          <div className="bg-white p-1 rounded-full">
            <img
              src={props.profileImage}
              alt="Profile Image"
              className="w-24 h-24 rounded-full object-cover bg-slate-200"
              onContextMenu={(e) => e.preventDefault()} // Disables Right Click on the image
              onDragStart={(e) => e.preventDefault()} // Disables Dragging the Image
              draggable={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileImage;

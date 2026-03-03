import React from "react";

const BackgroundImage = (props) => {
  return (
    <>
      <img
        className="object-cover w-full h-full rounded-4xl absolute"
        src={props.bgImage}
        alt="Background Image"
        onContextMenu={(e) => e.preventDefault()} // Disables Right Click on the image
        onDragStart={(e) => e.preventDefault()} // Disables Dragging the Image
        draggable={false}
      />
    </>
  );
};

export default BackgroundImage;

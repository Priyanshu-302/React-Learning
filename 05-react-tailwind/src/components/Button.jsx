import React from "react";
import { Plus } from "lucide-react";

const Button = () => {
  return (
    <>
      <button className="absolute bg-white/80 backdrop-blur-md top-4 right-4 p-2 rounded-full shadow-sm hover:bg-white transition-colors">
        <Plus size={20} className="text-gray-600" />
      </button>
    </>
  );
};

export default Button;

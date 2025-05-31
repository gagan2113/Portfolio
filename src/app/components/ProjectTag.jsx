import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white border-blue-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg lg:text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};


export default ProjectTag;

import React from "react";

type Props = {
  icon: React.ReactElement;
  tooltip: string;
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
};

const IconWithTooltip: React.FC<Props> = ({ icon, tooltip, onClick }) => {
  return (
    <span
      onClick={onClick}
      className="group relative inline-block cursor-pointer"
    >
      {icon}
      <span className="absolute bottom-[-1.8rem] left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        {tooltip}
      </span>
    </span>
  );
};

export default IconWithTooltip;

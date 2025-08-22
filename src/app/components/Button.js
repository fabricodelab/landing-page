import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Button = ({ children, icon = true }) => {
  return (
    <button className="bg-neutral-800 hover:bg-neutral-600 text-[15px] text-white py-2 px-4 rounded-sm items-center gap-3 inline-flex w-auto font-archivo cursor-pointer">
      {children}
      {icon ? <ArrowRightIcon className="w-5 h-5" /> : null}
    </button>
  );
};

export default Button;

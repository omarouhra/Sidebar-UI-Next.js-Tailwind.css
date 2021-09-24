import { MapIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { NavLink } from "react-router";

function NavItem({ index, icon, title }) {
  // Appp States

  return (
    <div className='flex items-center space-x-4 cursor-pointer rounded-lg hover:shadow-xl p-4 transition duration-300'>
      {icon}
      <h1 className='hidden md:inline font-semibold'>{title}</h1>
    </div>
  );
}

export default NavItem;

//  Data style layout

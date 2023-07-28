"use client";

import { Category } from "@/types";
import { Combobox } from "./ui/combobox";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      <Combobox data={data} />
    </nav>
  );
};

export default MainNav;

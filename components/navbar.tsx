import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import MobileNav from "@/components/mobile-nav";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">Guitar Gear Shop</p>
          </Link>
          <div className="hidden md:block">
            <MainNav data={categories} />
          </div>
          <NavbarActions />
          <MobileNav data={categories} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

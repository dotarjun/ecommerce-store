import Link from "next/link";
import Image from "next/image";

import Container from "@/components/ui/container";
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
            <Image
              src="/electric-guitar.webp"
              alt="Guitar Gear Shop Icon"
              width="30"
              height="30"
              className="w-[30px] h-[30px] hidden sm:block"
            />
            <p className="font-bold text-xl ">Guitar Shop</p>
          </Link>
          <div className="ml-auto flex items-center">
            <MobileNav data={categories} />
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

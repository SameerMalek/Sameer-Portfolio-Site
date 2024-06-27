"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Resume',
    path: '/resume'
  },
  {
    name: 'Projects',
    path: '/projects'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-20 text-center text-2xl">
            <Link href={"/"}>
            <h1 className="text-4xl font-semibold">Sameer<span className="text-accent">.</span></h1></Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link,index)=>{
                return <Link href={link.path} key={index} className={`${link.path===pathname && "text-accent border-b-2 border-accent transition-all"} text-xl hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

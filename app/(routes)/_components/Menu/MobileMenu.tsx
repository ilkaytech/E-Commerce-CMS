import React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { navLinks } from "@/constans";
import Image from "next/image";

const MobileMenu = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Image
                alt=""
                src="/logo.png"
                width={512}
                height={150}
                className="w-auto h-12 lg:h-14"
              />
            </SheetTitle>
            <SheetDescription asChild>
              <div className="flex flex-col gap-1 items-start">
                {navLinks.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className="hover:bg-indigo-100 rounded-xl p-2 transition duration-500"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;

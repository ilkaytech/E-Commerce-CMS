import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSub,
  DropdownMenuGroup,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import { APIURL, Category } from "@/constans";
import Link from "next/link";
import { slugify } from "@/lib/utils";

interface AllCategoriesProps {
  categories: Category[];
}

const AllCategories = ({ categories }: AllCategoriesProps) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex flex-row items-center gap-3 text-white bg-indigo-500 px-4 rounded-2xl py-3 cursor-pointer">
            <Menu />
            All Categories
            <ChevronDown />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-60 text-slate-600 mt-3">
          <DropdownMenuGroup>
            {categories.length > 0 ? (
              categories.map((category) =>
                Array.isArray(category.subcategories) &&
                category.subcategories.length > 0 ? (
                  <DropdownMenuSub key={category.id}>
                    <DropdownMenuSubTrigger className="p-3">
                      <Link
                        href={`/categories/${slugify(category.name)}`}
                        className="flex flex-row items-center"
                      >
                        <Image
                          src={`${APIURL}/assets/${category.icon}`}
                          alt=""
                          width={50}
                          height={50}
                          className=" w-8 h-8 "
                        />
                        {category.name}
                      </Link>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-60 text-slate-600 ml-1">
                      {category.subcategories.map((subcategory) => (
                        <DropdownMenuItem
                          key={subcategory.id}
                          className="p-3"
                          asChild
                        >
                          <Link
                            href={`/categories/${slugify(
                              category.name
                            )}/${slugify(subcategory.name)}`}
                          >
                            {subcategory.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem key={category.id} asChild>
                    <Link
                      href={`/categories/${slugify(category.name)}`}
                      className="flex flex-row items-center p-3"
                    >
                      {category.icon && (
                        <Image
                          src={`${APIURL}/assets/${category.icon}`}
                          alt=""
                          width={50}
                          height={50}
                          className="w-8 h-8"
                        />
                      )}
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                )
              )
            ) : (
              <>
                <DropdownMenuItem>No Categories available</DropdownMenuItem>
              </>
            )}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-xs">New Arrivals</DropdownMenuItem>
          <DropdownMenuItem className="text-xs">
            Value of the day
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AllCategories;

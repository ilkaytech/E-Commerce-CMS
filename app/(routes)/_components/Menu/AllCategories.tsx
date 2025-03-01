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
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, Settings, User } from "lucide-react";

const AllCategories = () => {
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
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="p-3">
                <User />
                Profile
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-60 text-slate-600 ml-1">
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings />
                  Settings
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AllCategories;

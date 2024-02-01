"use client";
import { SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const SearchBar = () => {
  const [search, setSearch] = useState<string | null>(null);
  const [focus, setFocus] = useState(false);

  const handleSearch = () => {
    console.log(search);
  };

  return (
    <div
      className={cn(
        "max-w-[350px] w-full h-[50px] flex items-center justify-center border-2 border-slate-200 rounded-full hover:border-emerald-400 px-2 mx-2",
        focus && "border-emerald-400"
      )}
    >
      <Input
        type="text"
        placeholder="search here..."
        className="border-none focus:outline-none hover:outline-none bg-transparent"
        onKeyDown={(e: any) => setSearch(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <Button
        className="bg-green-600 hover:bg-green-600 rounded-full p-3"
        size={"sm"}
        variant={"ghost"}
        onClick={handleSearch}
      >
        <SearchIcon className="w-4 h-4 text-white" />
      </Button>
    </div>
  );
};
import { useState } from "react";

import { Icons } from "../shared/icons";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  const [isSearchbar, setSearchbar] = useState(false);
  return (
    <div className="flex w-full items-center justify-between bg-custom-background px-4 py-2 text-custom-foreground">
      <span className="font-brand text-2xl">Wingman</span>

      <span className="flex gap-2">
        {isSearchbar && (
          <input
            type="text"
            className="border-2 border-custom-foreground bg-custom-background px-2 outline-none"
          />
        )}
        <button className="border-2 border-foreground p-1 px-2">
          <Icons.search
            className="size-5"
            onClick={() => setSearchbar((prev) => !prev)}
          />
        </button>
        <ModeToggle />
        <button className="border-2 border-foreground p-1 px-2">
          <Icons.cart className="size-5" />
        </button>
      </span>
    </div>
  );
}

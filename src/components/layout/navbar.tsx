import { Icons } from "../shared/icons";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <div className="flex w-full items-center justify-between bg-custom-background px-4 py-2 text-custom-foreground">
      <span className="font-brand text-2xl">Wingman</span>

      <span className="flex gap-2">
        <button className="border-2 border-foreground p-1 px-2">
          <Icons.search className="size-5" />
        </button>
        <ModeToggle />
        <button className="border-2 border-foreground p-1 px-2">
          <Icons.cart className="size-5" />
        </button>
      </span>
    </div>
  );
}

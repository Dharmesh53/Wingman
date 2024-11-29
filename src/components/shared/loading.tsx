import { Icons } from "./icons";

export function Loading() {
  return (
    <span className="flex h-full w-full flex-1 items-center justify-center">
      <Icons.spinner className="animate-spin" />
    </span>
  );
}

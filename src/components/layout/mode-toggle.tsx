import { useCallback, useEffect } from "react";

import { Icons } from "../shared/icons";

export function ModeToggle() {
  const toggleTheme = useCallback(() => {
    document.body.classList.toggle("dark");
  }, []);

  const handleKeydown = useCallback(
    (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }
      if (event.key === "m" || event.key === "M") {
        event.preventDefault();
        toggleTheme();
      }
      return;
    },
    [toggleTheme],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <button
      className="flex items-center justify-center border-2 border-foreground p-1 outline-none"
      onClick={toggleTheme}
    >
      <Icons.sun className="rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
      <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}

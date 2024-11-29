import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Capatilize(text: string) {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
}

export function Truncate(text: string, length: number) {
  return text.length > length ? `${text.slice(0, length)}...` : text;
}

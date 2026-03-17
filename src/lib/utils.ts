import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// Returns absolute asset URLs as-is for Cloudflare Pages root deployment
export const assetUrl = (path: string) => path;

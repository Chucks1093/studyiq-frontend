import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classNames: string[]) => twMerge(clsx(classNames));


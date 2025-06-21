import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//convert any value to regular json object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// format number to decimal places
export function formatNumber(num: number): string {
  const [intigerPart, floatPart] = num.toString().split(".");
  return floatPart ? `${intigerPart}.${floatPart.padEnd(2, "0")}` : `${intigerPart}.00`;
}

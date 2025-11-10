import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with clsx and merges Tailwind classes intelligently.
 * 
 * Why do we need this?
 * 1. clsx: Conditionally constructs className strings
 * 2. tailwind-merge: Resolves Tailwind class conflicts
 * 
 * @example
 * // Without cn:
 * className="px-4 py-2 bg-blue-500 px-6" 
 * // Result: Both px-4 and px-6 apply (conflict!)
 * 
 * // With cn:
 * cn("px-4 py-2 bg-blue-500", "px-6")
 * // Result: "py-2 bg-blue-500 px-6" (px-4 removed, no conflict)
 * 
 * @example
 * // Conditional classes:
 * cn(
 *   "base-class",
 *   isActive && "active-class",
 *   isDisabled && "disabled-class"
 * )
 * 
 * @example
 * // Object syntax:
 * cn({
 *   "text-red-500": hasError,
 *   "text-green-500": isSuccess,
 * })
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
import { ClassArray, clsx } from "clsx";
import { twMerge } from "tw-merge";

/**
 *
 * @description A utility function to correctly merge tailwind classes. Utilizes clsx and tw-merge.
 * @param classNames classes to merge
 * @returns merged merged classes
 */
export function cx(...classNames: ClassArray) {
	return twMerge(clsx(...classNames));
}

import { FieldValues, UseControllerProps } from "react-hook-form";

export type InputProps<FormData extends FieldValues> = Omit<UseControllerProps<FormData>, "shouldUnregister"> & {
	component?: "input" | "textarea";
	isRequired?: boolean;
	label?: string;
	placeholder?: string;
};

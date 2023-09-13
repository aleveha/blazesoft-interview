"use client";

import { cx } from "@shared/utils/cx";
import { useId } from "react";
import { FieldValues, useController } from "react-hook-form";
import { InputProps } from "./types";

export const Input = <FormData extends FieldValues>({
	control,
	defaultValue,
	disabled,
	isRequired,
	label,
	name,
	rules,
	...props
}: InputProps<FormData>) => {
	const id = useId();
	const {
		field: { onChange, value, ref },
		fieldState: { error },
	} = useController({
		control,
		defaultValue,
		disabled,
		name,
		rules: {
			required: isRequired ? "This field is required" : undefined,
			...rules,
		},
	});

	return (
		<div className={cx("input", error?.message && "input--with-helper-text")}>
			{label && (
				<label className="input__label" htmlFor={id}>
					{label}
				</label>
			)}
			{props.component === "textarea" ? (
				<textarea className="input__inner" id={id} onChange={onChange} value={value} ref={ref} rows={6} />
			) : (
				<input className="input__inner" id={id} onChange={onChange} value={value} ref={ref} />
			)}
			{error?.message && <span className="input__helper-text">{error.message}</span>}
		</div>
	);
};

import { cx } from "@shared/utils/cx";
import { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariants = "solid" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children?: ReactNode;
	variant?: ButtonVariants;
}

export const Button = forwardRef<HTMLButtonElement, Props>(({ className, children, variant, ...restProps }, ref) => (
	<button className={cx("button", variant && `button--variant-${variant}`, className)} ref={ref} {...restProps}>
		{children}
	</button>
));

Button.displayName = "Button";

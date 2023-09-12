import { cx } from "@shared/utils/cx";
import { randomColor } from "@shared/utils/randomColor";
import { FC } from "react";

interface Props {
	children: string;
	className?: string;
	hasGeneratedColor?: boolean;
}

export const Label: FC<Props> = ({ children, className, hasGeneratedColor: genColor }) => (
	<span
		className={cx("w-fit rounded-full bg-neutral-200 px-3 py-0.5 text-sm", className)}
		style={{ backgroundColor: genColor ? randomColor({ text: children, type: "rgba", opacity: 0.45 }) : undefined }}
	>
		{children}
	</span>
);

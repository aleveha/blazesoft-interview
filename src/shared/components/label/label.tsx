import { cx } from "@shared/utils/cx";
import { randomColor } from "@shared/utils/randomColor";
import { FC } from "react";

type LabelColors = "gold" | "gray";

interface Props {
	children: string;
	color?: LabelColors;
	hasGeneratedColor?: boolean;
}

export const Label: FC<Props> = ({ children, color, hasGeneratedColor }) => (
	<span
		className={cx("label", color && !hasGeneratedColor ? `label--color-${color}` : "label--color-gray")}
		style={{ backgroundColor: hasGeneratedColor ? randomColor({ text: children, type: "rgba", opacity: 0.45 }) : undefined }}
	>
		{children}
	</span>
);

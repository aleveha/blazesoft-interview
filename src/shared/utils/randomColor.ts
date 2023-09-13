import { createHash } from "crypto";

interface ColorGeneratorOptions {
	text?: string;
	type?: "hex" | "rgba";
}

interface HexColorOptions extends ColorGeneratorOptions {
	type: "hex";
}

interface RgbaColorOptions extends ColorGeneratorOptions {
	type: "rgba";
	opacity?: number;
}

type ColorOptions = HexColorOptions | RgbaColorOptions;

/**
 * @description Generate a hex color based on a text
 * @param text Text based on which the color will be generated
 * @returns Hex color as string
 */
function hex(text?: string): string {
	const hash = createHash("md5").update("blazesoft " + text || Math.random().toString());

	return "#" + hash.digest("hex").slice(0, 6);
}

/**
 * @description Convert hex color to rgba
 * @param hexColor Hex color
 * @param alpha Alpha channel value (opacity), value must be between 0 and 1, default is 1
 */
function hex2rgba(hexColor: string, alpha = 1): string {
	const r = parseInt(hexColor.slice(1, 3), 16),
		g = parseInt(hexColor.slice(3, 5), 16),
		b = parseInt(hexColor.slice(5, 7), 16);

	return `rgba(${r},${g},${b},${alpha > 1 ? 1 : alpha < 0 ? 0 : alpha})`;
}

/**
 * @description Generate a random color based on options provided
 * @param options.text Text based on which the color will be generated
 * @param options.type Type of the color, hex or rgba
 * @param options.opacity Opacity of the color, when rgba type was chosen, value must be between 0 and 1, default is 1
 * @returns Random color as string
 */
export function randomColor(options: ColorOptions): string {
	const hexColor = hex(options.text);

	if (options.type === "hex") {
		return hexColor;
	}

	return hex2rgba(hexColor, options.opacity);
}

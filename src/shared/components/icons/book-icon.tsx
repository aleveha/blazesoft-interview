import { FC } from "react";
import { IconProps } from "./types";

export const BookIcon: FC<IconProps> = ({ className }) => (
	<svg className={className} fill="currentColor" viewBox="0 0 24 24">
		<path d="M8,3 L8,17 L19,17 L19,3.5 C19,3.22385763 18.7761424,3 18.5,3 L8,3 Z M7,3 L6.5,3 C5.67157288,3 5,3.67157288 5,4.5 L5,17.4998169 C5.41783027,17.1859724 5.93719704,17 6.5,17 L7,17 L7,3 Z M4.15121433,20.3582581 C4.05793442,20.2674293 4,20.1404803 4,20 L4,4.5 C4,3.11928813 5.11928813,2 6.5,2 L18.5,2 C19.3284271,2 20,2.67157288 20,3.5 L20,20.5 C20,21.3284271 19.3284271,22 18.5,22 L6.5,22 C5.42082093,22 4.50134959,21.3162099 4.15121433,20.3582581 L4.15121433,20.3582581 Z M19,18 L6.5,18 C5.67157288,18 5,18.6715729 5,19.5 C5,20.3284271 5.67157288,21 6.5,21 L18.5,21 C18.7761424,21 19,20.7761424 19,20.5 L19,18 Z M10.5,10 C10.2238576,10 10,9.77614237 10,9.5 C10,9.22385763 10.2238576,9 10.5,9 L16.5,9 C16.7761424,9 17,9.22385763 17,9.5 C17,9.77614237 16.7761424,10 16.5,10 L10.5,10 Z M10.5,8 C10.2238576,8 10,7.77614237 10,7.5 C10,7.22385763 10.2238576,7 10.5,7 L14.5,7 C14.7761424,7 15,7.22385763 15,7.5 C15,7.77614237 14.7761424,8 14.5,8 L10.5,8 Z" />
	</svg>
);
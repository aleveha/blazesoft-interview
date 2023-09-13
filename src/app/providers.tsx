"use client";

import { LayoutProps } from "@shared/types";
import { reduxStore } from "@store";
import { FC } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as WrapBalancerProvider } from "react-wrap-balancer";

export const Providers: FC<LayoutProps> = ({ children }) => {
	return (
		<WrapBalancerProvider>
			<ReduxProvider store={reduxStore}>{children}</ReduxProvider>
		</WrapBalancerProvider>
	);
};

"use client";

import { LayoutProps } from "@shared/types";
import { FC } from "react";
import { Provider as WrapBalancerProvider } from "react-wrap-balancer";

export const Providers: FC<LayoutProps> = ({ children }) => {
	return <WrapBalancerProvider>{children}</WrapBalancerProvider>;
};

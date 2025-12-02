import type { FC, ReactNode } from "react";

export const NavItem: FC<{
	children: ReactNode;
	href: string;
}> = ({ children, href }) => {
	return (
		<a
			href={href}
			className="text-xl hover:text-primary p-1 px-2.5 focus:outline-2 focus:outline-primary-active active:text-primary-active"
		>
			{children}
		</a>
	);
};

import type { FC, ReactNode } from "react";

export const BlackBtn: FC<{
	children: ReactNode;
}> = ({ children }) => {
	return (
		<button
			type="button"
			className="text-base text-white bg-black focus:bg-primary hover:bg-primary active:text-black focus:text-black hover:text-black active:bg-primary-active p-[17px] px-[43px] rounded-4xl outline-0"
		>
			{children}
		</button>
	);
};

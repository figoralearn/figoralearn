"use client";

import "./styles.css";
import { DropdownProps } from "./type";

export default function SelectWrapper({
	className = "",
	children,
	open,
	setOpen,
}: DropdownProps) {
	if (!Array.isArray(children) || children.length !== 2) {
		throw new Error("Dropdown expects exactly two children: [button, menu]");
	}

	const [button, menu] = children;

	return (
		<div
			onClick={() => setOpen(!open)}
			className={`relative flex flex-col items_center ${className} cursor_point`}
		>
			{button}
			<div
				className={`${
					open ? "select__menu--open" : "select__menu"
				} trans_y_105 txt_default absolute transition flex flex-col p-xxs`}
				onMouseLeave={() => setTimeout(() => setOpen(false), 200)}
			>
				{menu}
			</div>
		</div>
	);
}

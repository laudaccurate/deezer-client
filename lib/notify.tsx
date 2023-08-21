/* eslint-disable import/no-extraneous-dependencies */
import { notifications } from "@mantine/notifications";
import { TbX, TbCheck, TbAlertTriangle } from "react-icons/tb";
import React from "react";

const notify = {
	success: (props: any) => {
		notifications.show({
			color: "green",
			icon: <TbCheck className="w-6 h-6 " />,
			...props,
			radius: "md",
			classNames: {
				title: "text-green-600 text-[16px]",
				root: "bg-white before:bg-white p-3",
				body: "bg-white text-neutral-600",
				icon: "bg-green-600 text-white  font-bold",
				color: "text-gree-600",
				loader: "bg-green-500",
				description: "font-normal text-neutral-600",
				closeButton: "text-neutral-600 hover:bg-white hover:text-green-500",
			},
		});
	},
	warn: (props: any) => {
		notifications.show({
			color: "yellow",

			icon: <TbAlertTriangle className="w-6 h-6" />,
			...props,
			radius: "md",
			classNames: {
				title: "text-yellow-600 text-[16px]",
				root: "bg-yellow-400 before:bg-white p-3",
				body: "bg-yellow-400",
				icon: "bg-amber-500  font-bold ",
				loader: "bg-yellow-400",
				description: "font-normal text-neutral-600",
				closeButton: "text-neutral-600 hover:bg-white hover:text-yellow-400",
			},
		});
	},
	error: (props: any) => {
		notifications.show({
			color: "red",

			icon: <TbX className="w-6 h-6 " />,
			...props,
			radius: "md",
			classNames: {
				title: "text-red-600 text-[16px] font-medium",
				root: "bg-red-500 before:bg-white p-3",
				body: "bg-white",
				icon: "text-red-600  font-bold ",
				loader: "bg-red-500",
				description: "font-normal text-neutral-600",
				closeButton: "text-neutral-600 hover:bg-white hover:text-red-500",
			},
		});
	},
};

export default notify;

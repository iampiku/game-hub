import { Image } from "@nextui-org/react";
import { memo } from "react";

interface Props {
	errorCode: 404 | 400 | 500;
}

const ShowError = memo(({ errorCode }: Readonly<Props>) => {
	const errorMessage: {
		[key: number]: { title: string; subtitle: string };
	} = {
		404: {
			title: "Item not found!",
			subtitle: "The item you were looking for does'nt exits",
		},
		400: {
			title: "Bad Request!",
			subtitle: "The request you made is invalid",
		},
		500: {
			title: "Internal Server Error!",
			subtitle: "Something went wrong on the server",
		},
	} as const;

	const errorIcon = {
		404: "",
		400: "",
		500: "",
	} as const;

	return (
		<div className="">
			<Image src={errorIcon[errorCode]}></Image>
			<strong>{errorMessage[errorCode].title}</strong>
			<p>{errorMessage[errorCode].subtitle}</p>
		</div>
	);
});

export default ShowError;

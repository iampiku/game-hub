import { memo } from "react";

import { Image } from "@nextui-org/react";

import ServerErrorSVG from "@/assets/internal_server_error.gif";
import NotFoundErrorSVG from "@/assets/not_fount_error.gif";
import BadRequestErrorSVG from "@/assets/bad_request_error.gif";

interface Props {
	errorCode: 404 | 400 | 500;
	customDescription?: string;
}

const ShowError = memo(({ errorCode, customDescription }: Readonly<Props>) => {
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
		404: NotFoundErrorSVG,
		400: BadRequestErrorSVG,
		500: ServerErrorSVG,
	} as const;

	const errorSubtitle = customDescription ?? errorMessage[errorCode].subtitle;

	return (
		<div className="flex flex-col justify-center items-center pb-6">
			<Image width={300} alt="error_image" src={errorIcon[errorCode]}></Image>
			<strong className="text-lg">{errorMessage[errorCode].title}</strong>
			<p>{errorSubtitle}</p>
		</div>
	);
});

export default ShowError;

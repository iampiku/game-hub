import { useMemo } from "react";

interface Props {
	errorCode: 404 | 400 | 500;
}

export default function ShowError({ errorCode }: Readonly<Props>) {
	const errorMessage: { title: string; subtitle: string } = useMemo(() => {
		const errorMessageMapping: {
			[key: number]: { title: string; subtitle: string };
		} = {
			404: {
				title: "Item not found!",
				subtitle: "The item you were looking for does'nt exits",
			},
		};
		return errorMessageMapping[errorCode];
	}, [errorCode]);
	return <span>Oops! something went wrong {errorCode}</span>;
}

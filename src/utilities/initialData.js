import { getDate } from "./getDate";

export const initialData = [
	{
		folderName: "example folder",
		documents: [
			{
				title: "example document",
				content: "example content",
				date : getDate()
			},
		],
		config: {
			protecteed: true,
		},
	}
];

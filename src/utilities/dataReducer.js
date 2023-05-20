import { produce } from "immer";

export const dataReducer = produce((draft, action) => {
	//folder actions
	switch (action.type) {
		case "create-folder":
			draft.push({
				folderName: action.data.folderName,
				documents: [
					
				],
				config: {
					protecteed: false,
				},
			});
			break;

		default:
			break;
	}
});

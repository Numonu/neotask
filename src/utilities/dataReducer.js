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
		case "rename-document":
			draft[action.data.folderOrder].documents[action.data.docOrder].title = action.data.content;
			break;
		case "update-document":
			draft[action.data.folderOrder].documents[action.data.docOrder].content = action.data.content;
			break;
		case "create-document":
			draft[action.data.folderOrder].documents.push({
				title : "",
				content : "",
				date : ""
			});
			break;
		default:
			break;
	}
});

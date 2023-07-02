import * as React from "react"

// this library is client-side only
import { SimpleMdeReact } from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const SimpleMdeReactComponent = () => {
	const delay = 100;
	const autosavedValue = localStorage.getItem(`smde_paragraph`) || "A minimalist notebook - all notes are stored locally in your browser.";
	const anOptions = React.useMemo(() => {
		return {
			autosave: {
				enabled: true,
				uniqueId: "paragraph",
				delay,
			},
			autofocus: true,
			spellChecker: false,
			fullScreen: true,
		};
	}, [delay]);

	return (
		<SimpleMdeReact id="paragraph" value={autosavedValue} options={anOptions} />
	)
}

export default SimpleMdeReactComponent

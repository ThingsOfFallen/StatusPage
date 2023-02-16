import {Component, createEffect, ParentProps} from "solid-js";
import NavigationBar from "@/components/NavigationBar";
import Loader from "@/components/Loader";

interface Props {
	title?: string;
}

const PageBlock: Component<ParentProps<Props>> = ({ title, children }) => {
	createEffect(() => {
		if (title) document.title = title;
	}, [title]);

	return (
		<>
			<NavigationBar/>
			{children}
		</>
	);
};

export default PageBlock;

import {Component, ParentProps} from "solid-js";

interface Props {
	title?: string;
	description?: string;
}

const Box: Component<ParentProps<Props>> = ({ title, description, children }) => {
	return (
		<div class={'mt-8'}>
			{title && <h2>{title}</h2>}
			{description && <p class={'text-gray-400'}>{description}</p>}
			<div class={'flex flex-col h-auto w-full mt-2 p-3 bg-gray-800 rounded-lg divide-y-2 divide-transparent'}>
				{children}
			</div>
		</div>
	)
};

export default Box;

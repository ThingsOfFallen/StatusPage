import {Component, ParentProps} from "solid-js";

const Container: Component<ParentProps> = ({ children }) => {
	return (
		<div class={'w-full my-0 mx-auto px-4 max-w-6xl'}>
			{children}
		</div>
	)
};

export default Container;

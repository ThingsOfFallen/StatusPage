import {Component, createSignal} from "solid-js";
import classNames from "classnames";

interface Props {
	style?: string;
	size: 1|2|3|4|5;
}

interface PingProps {
	cl: string;
	size: number;
	style?: string;
}

const Ping: Component<PingProps> = ({ style, size, cl }) => {
	const [s, setS] = createSignal('h-3 w-3');

	switch (size) {
		case 2:
			setS('h-4 w-4');
			break;

		case 3:
			setS('h-5 w-5');
			break;

		case 4:
			setS('h-6 w-6');
			break;

		case 5:
			setS('h-7 w-7');
			break;
	}

	return (
		<div class={classNames('flex', s(), style)}>
			<div class={classNames('rounded-full', s(), cl)}/>
			<div class={classNames('absolute opacity-75 rounded-full animate-ping', s(), cl)}/>
		</div>
	);
};

const RedPing: Component<Props> = (props) => (
	<Ping {...props} cl={'bg-red-500'}/>
);

const BluePing: Component<Props> = (props) => (
	<Ping {...props} cl={'bg-blue-500'}/>
);

const GreenPing: Component<Props> = (props) => (
	<Ping {...props} cl={'bg-green-600'}/>
);

const YellowPing: Component<Props> = (props) => (
	<Ping {...props} cl={'bg-yellow-500'}/>
)

const _Ping = Object.assign(Ping, {
	Red: RedPing,
	Blue: BluePing,
	Green: GreenPing,
	Yellow: YellowPing
});

export default _Ping;

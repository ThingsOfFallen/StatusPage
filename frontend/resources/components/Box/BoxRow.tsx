import {Component, createSignal, JSXElement} from "solid-js";
import Ping from "@/components/Ping";
import {A} from "@solidjs/router";
import {Icon} from "solid-heroicons";
import {chevronRight} from "solid-heroicons/solid";

interface Props {
	id: number;
	name: string;
	status: { alive: boolean, maintenance: boolean };
}

const BoxRow: Component<Props> = ({ id, name, status }) => {
	const [stats, setStats] = createSignal<JSXElement>();
	const statsProps: { size: 1|2|3|4|5, style: string } = { size: 2, style: 'ml-1 mr-2.5' };

	if (status.alive) setStats(<Ping.Green {...statsProps}/>); else setStats(<Ping.Red {...statsProps}/>);
	if (status.maintenance) setStats(<Ping.Yellow {...statsProps}/>);

	return (
		<div class={'flex justify-between items-center h-14 w-full my-1 p-3 rounded first:mt-0 last:mb-0 hover:bg-gray-700'}>
			<div class={'inline-flex items-center cursor-pointer'}>
				<div>
					{stats}
				</div>
				<A href={'/'}>
					<h4>{name}</h4>
				</A>
			</div>
			<div class={'inline-flex'}>
				<Icon path={chevronRight} height={24} width={24} class={'cursor-pointer'}/>
			</div>
		</div>
	);
};

export default BoxRow;

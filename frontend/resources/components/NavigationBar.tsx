import {Component} from "solid-js";
import Container from "@/components/Container";
import {A} from "@solidjs/router";

const NavigationBar: Component = () => {
	return (
		<div class={'py-4'}>
			<Container>
				<div class={'flex justify-center items-center sm:justify-between'}>
					<A href={'/'}>
						<h1>FallenStatus Inc</h1>
					</A>
					<span class={'text-right hidden sm:block'}>
						<h3>System Status</h3>
						<p class={'text-sm text-gray-400'}>Last Updated: 69:420 PM</p>
					</span>
				</div>
			</Container>
		</div>
	);
};

export default NavigationBar;

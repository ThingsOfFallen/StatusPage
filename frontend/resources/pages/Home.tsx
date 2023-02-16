import {Component, createSignal, onMount, Suspense} from "solid-js";
import PageBlock from "@/components/PageBlock";
import Container from "@/components/Container";
import Ping from "@/components/Ping";
import {Box, BoxRow} from "@/components/Box";
import {all, Status} from "@/api/status";
import {all as allMonitor, Monitor} from "@/api/monitor";
import Loader from "@/components/Loader";
import {createStore} from "solid-js/store";

const Home: Component = () => {
	const [monitors, setMonitors] = createSignal();
	//const [data, setData] = createSignal<Status[]>();
	const [loaded, setLoaded] = createSignal(false);

	// if (!loaded()) {
	// 	//all().then((data) => setData(data.data));
	// 	allMonitor().then((data) => setMonitors(data.data));
	// 	setLoaded(true);
	// 	console.log('loaded');
	// 	console.log(monitors());
	// }

	onMount(() => {
		// all().then((data) => setData(data.data));
		allMonitor().then((data) => setMonitors(true));
		// console.log(data());
		console.log(monitors());
		setTimeout(() => {
			console.log(monitors());
		}, 1000);
	});

	if (!monitors()) return <Loader/>;

	return (
		<PageBlock title={'Home'}>
			<Container>
				<div class={'inline-flex items-center h-28 w-full p-6 text-center bg-gray-800 rounded-lg sm:h-20 sm:text-left'}>
					<Ping.Green size={5} style={'mr-3 hidden sm:flex'}/>
					<h1>All services operational</h1>
				</div>
				<Box title={'Websites'} description={'Status for all websites across the PornHub Network.'}>
						{/*{monitors()!.map((monitor) => {*/}
						{/*	// const array = data()!.filter((x) => x.monitorId === monitor._id);*/}
						{/*	// const status = Math.max(...array.map((x) => x.time));*/}
						{/*	// const alive = data()!.filter((x) => x.monitorId === monitor._id && x.time === status);*/}
						{/*	// return <BoxRow id={monitor._id} name={monitor.name} status={{ alive: alive[0].alive, maintenance: monitor.maintenance }}/>;*/}
						{/*	return monitor.name;*/}
						{/*})}*/}
				</Box>
			</Container>
		</PageBlock>
	);
};

export default Home;

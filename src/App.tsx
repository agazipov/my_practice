import Canvas from "./components/Canvas/Canvas";
import { Slider } from "./components/Slider/Slider"
import { Slider_2 } from "./components/Slider_2/Slider_2"
import { Task } from "./components/Task/Task"
import { createBlock } from "./data/data";

function App() {

	return (
		<>
			<Canvas width={500} height={300} block={createBlock(500, 300)} />

			<Slider />

			<Task />

			<Slider_2 />
		</>
	);
}

export default App;

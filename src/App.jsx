import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)

const App = () => {
	return (
		<main>
			<div className="w-screen h-screen bg-zinc-900">
				<h1 className="text-white">hola mi amigos</h1>
			</div>
		</main>
	);
};

export default App;
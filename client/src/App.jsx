import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Sidebar from "./layouts/Sidebar";
import Routing from "./routes/router";
import './App.css';

function App() {

	return (
		<div className="min-h-screen flex flex-col relative bg-slate-100">
			<Header />

			<div id="MainView" className="flex flex-grow min-h-full bg-slate-100">
				<Sidebar />
				
					<Routing />
				
			</div>

			<Footer/>
		</div>
	);
}

export default App;

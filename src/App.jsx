import "./App.css";
import Routers from "./routes/Routers";
import Layout from "./components/Layout/Layout";

function App() {
	return (
		<>
			<Layout>
				<Routers />
			</Layout>
		</>
	);
}

export default App;

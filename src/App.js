import { Example } from './Example'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
// import './App.css';

function App() {
	return (
		// <div className="App">
		<div>
			<DndProvider backend={HTML5Backend}>
				<Example />
			</DndProvider>
		</div>
	);
}

export default App;

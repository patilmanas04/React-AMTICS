import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Eligible_Alert from './components/EligiableMassage';

function App() {
	return (
		<>
		<Header/>
		<div className="alert">
			<Eligible_Alert/>
		</div>
		<Form/>
		<Footer/>

		</>
	);
}

export default App;

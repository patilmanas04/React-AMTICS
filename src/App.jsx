import Header from './components/Header';
import FormPCMTheory from './components/FormPCMTheory';
import FormPCMTheoryAndPractical from './components/FormPCMTheoryAndPracticals';
import FormPMCoTheoryAndPractical from './components/FormPMCoTheoryAndPractical';
import Footer from './components/Footer';
import CheckEligibility from './contexts/CheckEligibility';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
	const [marks, setMarks] = useState({physics: 0, maths: 0, chemistry: 0})
	const [category, setCategory] = useState("general")

	return (
		<>
		<CheckEligibility>
			<Router>
				<Header/>
				<Routes>
					<Route exact path='/' element={<FormPCMTheory marks={marks} setMarks={setMarks} setCategory={setCategory}/>}/>
					<Route exact path='/pcmtheoryandpractical' element={<FormPCMTheoryAndPractical marks={marks} setMarks={setMarks} category={category}/>}/>
					<Route exact path='/pmcotheoryandpractical' element={<FormPMCoTheoryAndPractical category={category}/>}/>
				</Routes>
				<Footer/>
			</Router>
		</CheckEligibility>
		</>
	);
}

export default App;
import Header from './components/Header';
import FormPCMCoTheoryAndPractical from './components/FormPCMCoTheoryAndPractical';
import Footer from './components/Footer';
import CheckEligibility from './contexts/CheckEligibility';
import './App.css';
import { useState } from 'react';
import EligibleMassage from './components/EligiableMassage/Index';

function App() {
	
	return (
		<>
		<CheckEligibility>
				<Header/>
				<div className="alert">
					<EligibleMassage/>
				</div>
				<FormPCMCoTheoryAndPractical/>
				<Footer/>
		</CheckEligibility>
		</>
	);
}

export default App;
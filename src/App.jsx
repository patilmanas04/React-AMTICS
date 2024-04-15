import Header from './components/Header';
import FormPCMCoTheoryAndPractical from './components/FormPCMCoTheoryAndPractical';
import Footer from './components/Footer';
import CheckEligibility from './contexts/CheckEligibility';
import './App.css';
import { useState } from 'react';

function App() {
	return (
		<>
		<CheckEligibility>
				<Header/>
				<FormPCMCoTheoryAndPractical/>
				<Footer/>
		</CheckEligibility>
		</>
	);
}

export default App;
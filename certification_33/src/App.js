import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { Indexpage } from './pages/Indexpage';
import { Aboutpage } from './pages/Aboutpage';
import { Contactspage } from './pages/Contactspage';
import { Lkpage } from './pages/Lkpage';


class App extends React.Component {

	render() {

		return (
			<div className="wrapper" >
				<Routes>
					<Route path="/" element={<Indexpage />} />
					<Route path="/about" element={<Aboutpage />} />
					<Route path="/contacts" element={<Contactspage />} />
					<Route path="/lk" element={<Lkpage />} />
				</Routes>
			</div >
		);
	}


}
export default App;

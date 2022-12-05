import React from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { Indexpage } from './pages/Indexpage';
import { Aboutpage } from './pages/Aboutpage';
import { Contactspage } from './pages/Contactspage';
import { Lkpage } from './pages/Lkpage';
import { Basket } from "./pages/Basket";
import { Registration } from "./pages/Registration";





class App extends React.Component {

	render() {

		return (
			<div className="wrapper" >
				<Routes>

					<Route path="/" element={<Indexpage />} />

				</Routes>
			</div >
		);
	}


}
export default App;

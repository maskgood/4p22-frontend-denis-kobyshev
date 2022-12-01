import { Link, Outlet } from 'react-router-dom';
import Header from '../header/Header';


function DefaultLeyout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}

export default DefaultLeyout;
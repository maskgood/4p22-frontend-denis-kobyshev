import { Link, Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';


const Layout = () => {
	return (
		<>
			<header>Header</header>
			<Outlet />
			<footer>Footer</footer>
		</>
	)
}

export { Layout };
import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from '../order/Order';
import { Routes, Route, Link } from 'react-router-dom'
import './Header.css';


const showCount = (props) => {
	let orderCount = 0;
	props.orders.forEach(el => orderCount = orderCount + 1);
	if (orderCount > 0) {
		return (
			<span className='shopping-cart-count' >{orderCount} </span >
		)
	}
}


const showOrders = (props) => {
	let summ = 0;
	props.orders.forEach(el => summ += Number.parseFloat(el.price));

	return (
		<div>
			{props.orders.map(el => (
				<Order onDelete={props.onDelete} key={el.id} item={el} />
			))}

			<p className='header__summ'>Итого: {new Intl.NumberFormat().format(summ)} ₽</p>
			<p className='header__order-btn'>Заказать</p>

		</div>
	)
}

const showNothing = () => {
	return (
		<div className='empty'>
			<h2>Нет товаров</h2>
		</div>
	)
}

export default function Header(props) {
	let [cartOpen, setCartOpen] = useState(false);

	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__logo'>Магазин одежды</div>
				<div className='header__nav-wrapper'>
					<ul className='header__nav'>
						<li className='header__nav-link shopping-cart'><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`header__cart-icon ${cartOpen && 'active'}`} /> {showCount(props)}</li>

						{cartOpen && (
							<div className='header__shop-cart'>
								{props.orders.length > 0 ?
									showOrders(props) : showNothing()
								}

							</div>
						)}
						<li className='header__nav-link'><Link to="/about">О нас</Link></li>
						<li className='header__nav-link'><Link to="/contacts">Контакты</Link></li>
						<li className='header__nav-link'><Link to="/lk">Кабинет</Link></li>
					</ul>
				</div>
			</div>
			<div className='header__advert'>

			</div>

		</header>
	)
}

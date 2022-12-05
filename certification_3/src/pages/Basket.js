import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";
import './basket.css'


export function Basket() {

	const [count, setCount] = useState(1)

	const handDec = () => {
		if (count === 0) {
			return
		} else {
			setCount(count - 1)
		}
	}
	const handInc = () => {
		setCount(count + 1)
	}

	let basketData = JSON.parse(localStorage.getItem('object'));
	console.log(basketData);
	const showCount = () => {
		let orderCount = 0;
		basketData.forEach(el => orderCount = orderCount + 1);
		if (orderCount > 0) {
			return (
				<span className="basket__products-count">{orderCount} </span >
			)
		}
	}


	return (

		< div className="basket__wrapper" >
			<header className='header reg__header'>
				<div className='header__container'>
					<div className='header__logo'>Интернет-магазин</div>
					<div className='header__nav-wrapper'>
						<ul className='header__nav'>
							<li className='header__nav-link'><Link to="/">Главная</Link></li>
							<li className='header__nav-link'><Link to="/contacts">Контакты</Link></li>
							<li className='header__nav-link'><Link to="/lk">Войти</Link></li>
						</ul>
					</div>
				</div>
				<div className='header__advert'>
				</div>
			</header>

			<div className="basket__content">
				<div className="basket__products">
					<div className="basket__products-title">Корзина</div>
					<div className="basket__products-wrap">

						{basketData.map(home => <>
							<div className="basket__products-item" key={home.id}>
								<div className="basket__products-item-img">
									<img src={home.image} />
								</div>
								<div className="basket__products-item-text">
									<div className="basket__products-item-title">{home.title}</div>
								</div>
								<div className="basket__products-item-counter">
									<button onClick={handDec} className="basket__products-count-dec">-</button>
									<span className="basket__products-count-num">{count}</span>
									<button onClick={handInc} className="basket__products-count-inc">+</button>
								</div>
								<div className="basket__products-item-price">{home.price * count}</div>
								<div className="basket__products-item-trash"><FaTrash className='order__trash-icon' /></div>
							</div>
						</>
						)}
					</div>
				</div>
			</div>
			<Footer />

		</ div >
	)
}






















// const Basket = () => {
// 	return (

// 		<div className="basket">
// 			<h1 className="basket__title">Корзина</h1>
// 			<div className="basket__content">
// 				<div className="basket__item">
// 					<div className="basket__product">
// 						<img src="" className="basket__product-img" />
// 						<p className="basket__product-title"></p>
// 					</div>
// 					<div className="basket__count">
// 						<button className="basket__count-btn-increment">+</button>
// 						<span className="basket__count-number">0</span>
// 						<button className="basket__count-btn-decrement">-</button>
// 					</div>
// 					<div className="basket__amount"></div>
// 					<div className="basket__trash"></div>
// 				</div>
// 				<div className="basket__total">

// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export { Basket }
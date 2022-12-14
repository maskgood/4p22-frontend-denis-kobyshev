import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Items from "../components/items/Items";
import FullCard from "../components/fullcard/FullCard";
import { Routes, Route, Link } from 'react-router-dom'


class Indexpage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			items: [],
			// cat: [],
			showFullItem: false,
			fullItem: {}

		}

		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.onShowItem = this.onShowItem.bind(this)
	}

	componentDidMount() {
		fetch("https://fakestoreapi.com/products")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						items: result
					});
				}
			)
	}

	render() {

		let newArr = this.state.items.map((item) => ({ name: item.category }));
		let arr_2 = Array.from(new Set(newArr.map((item) => item.name)));
		arr_2.unshift('all');
		// this.setState({ cat: arr_2 });

		return (
			<div className="wrapper" >

				<Header orders={this.state.orders} onDelete={this.deleteOrder} />

				{/* <Categories choseCategory={this.choseCategory} /> */}

				<div className="search__wrapper">

					<select className="search__select">
						{arr_2.map((item) => {
							return <option className="search__select-item">{item}</option>
						})}
					</select>

					<input className="search__input" id="search" type="text" name="search" placeholder="Я ищу..." />
				</div>

				<Items onShowItem={this.onShowItem} items={this.state.items} onAdd={this.addToOrder} />

				{this.state.showFullItem && <FullCard onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}

				<Footer />
			</div >
		);
	}

	onShowItem(item) {
		this.setState({ fullItem: item })
		this.setState({ showFullItem: !this.state.showFullItem })
	}

	// choseCategory(category) {
	// 	if (category === 'all') {
	// 		this.setState({ currentItems: this.state.items })
	// 		return
	// 	}
	// 	this.setState({
	// 		currentItems: this.state.items.filter(el => el.category === category)
	// 	})
	// }

	deleteOrder(id) {
		this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
	}

	addToOrder(item) {
		let isInArray = false;

		this.state.orders.forEach(el => {
			if (el.id === item.id)
				isInArray = true;
		})
		if (!isInArray)
			this.setState({ orders: [...this.state.orders, item] })
	}
}
export { Indexpage };

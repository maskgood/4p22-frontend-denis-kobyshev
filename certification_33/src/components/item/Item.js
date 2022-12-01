import React, { Component } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './Item.css';

export class Item extends Component {
	render() {
		return (
			<div className='item'>
				<div className='item__img-wrapper'>
					<img className='item__img' src={this.props.item.image} onClick={() => this.props.onShowItem(this.props.item)} />
				</div>
				{/* <img className='item__img' src={"./img" + this.props.item.img} /> */}
				<div className='item__description-wrapper'>
					<h2 className='item__title'>{this.props.item.title}</h2>
					{/* <p className='item__description'>{this.props.item.description}</p> */}
					<div className='item__price'>{this.props.item.price}</div>
				</div>
				<div className='item__add-wrapper'>
					<div className='item__add-to-cart' onClick={() => this.props.onAdd(this.props.item)}><FaShoppingCart className='item__cart-icon' /> В корзину</div>

				</div>
			</div>
		)
	}
}

export default Item;

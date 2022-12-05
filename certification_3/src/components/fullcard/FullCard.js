import React, { Component } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import './FullCard.css'

export class FullCard extends Component {
	render() {
		return (
			<div className='fullcard'>
				<div className='fullcard__wrapper'>
					<div className='fullcard__img-wrapper'>
						<img className='fullcard__img' src={this.props.item.image} onClick={() => this.props.onShowItem(this.props.item)} />
					</div>
					<div className='fullcard__description-wrapper'>
						<h2 className='fullcard__title'>{this.props.item.title}</h2>
						<p className='fullcard__description'>{this.props.item.description}</p>
						<div className='fullcard__price'>{this.props.item.price}</div>
					</div>
					<div className='fullcard__add-wrapper'>
						<div className='fullcard__add-to-cart' onClick={() => this.props.onAdd(this.props.item)}><FaShoppingCart className='fullcard__cart-icon' /> В корзину</div>
					</div>
					<span className='fullcard__close' onClick={() => this.props.onShowItem(this.props.item)}><FaTimes className='fullcard__close-icon' /></span>
				</div>
			</div >
		)
	}
}

export default FullCard
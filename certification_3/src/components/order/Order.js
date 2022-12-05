import React, { Component } from 'react'
import { FaTrash } from "react-icons/fa";

import './Order.css'

export class Order extends Component {

	render() {
		let cartTitle;
		if (this.props.item.title.length > 18) {

			cartTitle = this.props.item.title.slice(0, 22).trim() + '...';

		} else {
			cartTitle = this.props.item.title;
		}

		return (
			<div className='order'>
				<div className='order__img-wrapper'>
					<img className='order__img' src={this.props.item.image} />
				</div>
				<div className='order__description-wrapper'>
					<h2 className='order__title'>{cartTitle}</h2>
					<div className='order__price'>{this.props.item.price}
					</div>
				</div>
				<FaTrash className='order__trash-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
			</div>
		)
	}
}

export default Order
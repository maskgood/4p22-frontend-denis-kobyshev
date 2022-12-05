import React, { Component } from 'react'
import './Items.css'
import Item from '../item/Item'

export class Items extends Component {

	render() {
		return (
			<main className='items'>

				{this.props.items.map(el => (
					<Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd} />
				))}

			</main>
		)
	}
}

export default Items;
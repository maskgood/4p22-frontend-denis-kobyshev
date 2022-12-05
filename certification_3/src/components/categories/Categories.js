import React, { Component } from 'react'
import './Categories.css'
import { Indexpage } from '../../pages/Indexpage'

export class Categories extends Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [
				{
					key: "all",
					name: "Все"
				},
				{
					key: "men's clothing",
					name: "Мужчинам"
				},
				{
					key: "jewelery",
					name: "Украшения"
				},
				{
					key: "electronics",
					name: "Электроника"
				},
				{
					key: "women's clothing",
					name: "Женщинам"
				}
			]
		}
	}

	render() {

		return (
			<div className='categories'>
				{this.state.categories.map(el => (
					<div key={el.key} onClick={() => this.props.choseCategory(el.key)}>{el.key}</div>
				))
				}
			</div>
		)
	}
}

export default Categories
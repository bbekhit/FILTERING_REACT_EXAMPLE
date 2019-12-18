import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = props => {
	return (
		<nav>
			<div className='nav-container'>
				<h1>
					Shirt<span>Mate</span>
				</h1>
				<div className='shopping-bag'>
					<FaShoppingCart className='shopping-bag-icon' />
					<span>0</span>
				</div>
			</div>
		</nav>
	)
}

export default Navbar

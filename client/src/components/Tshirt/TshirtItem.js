import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/allActions'

const TshirtItem = ({ cart: { cartItems }, item }) => {
	const inCart = cartItems.includes(item)

	return (
		<div className='item'>
			<div
				className='item-img'
				style={{
					backgroundImage: `url(${item.img}),
          linear-gradient(white, white)`,
				}}
			/>
			<h4 className='item-name'>{item.name}</h4>
			<div className='sizes-list'>
				<span>Sizes: </span>
				{item.sizes.map(
					(size, i) =>
						size !== 'all' && (
							<strong key={i} className='size-tag'>
								{size}
							</strong>
						)
				)}
			</div>
			<div className='price-add-to-cart-wrapper'>
				<div className='price'>${item.price}</div>
				<button
					className={inCart ? 'red-button' : 'green-button'}
					onClick={() => {
						!inCart ? actions.addToCart(item) : actions.removeFromCart(item)
					}}
				>
					{inCart ? 'Remove from cart' : 'Add to cart'}
				</button>
			</div>
		</div>
	)
}

const mapStateToProps = ({ cart }) => {
	return {
		cart,
	}
}

export default connect(mapStateToProps, actions)(TshirtItem)

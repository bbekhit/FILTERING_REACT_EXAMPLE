import React from 'react'
import { connect } from 'react-redux'
import TshirtItem from './TshirtItem'

const TshirtList = ({ tshirt }) => {
	return (
		<div>
			<div className='items-wrapper'>
				{tshirt.length > 0 ? (
					tshirt.map((tshirt, i) => <TshirtItem key={i} item={tshirt} />)
				) : (
					<h3>No items to display</h3>
				)}
			</div>
		</div>
	)
}

const mapStateToProps = ({ tshirt }) => {
	return {
		tshirt,
	}
}

export default connect(mapStateToProps, null)(TshirtList)

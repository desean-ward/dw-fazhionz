import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'

import { addItem } from '../../redux/cart/cart.actions'

import './category-item.styles.scss'

const CategoryItem = ({ item, addItem }) => {
	/********** VARIABLES **********/
	const { name, price, imageUrl } = item
	const [isLoading, setIsLoading] = useState(true)

	const imgContainerRef = useRef(null)
	const imgRef = useRef(null)
	const btnRef = useRef(null)
	const nameRef = useRef(null)
	const priceRef = useRef(null)

	/********** FUNCTIONS **********/
	const renderCard = () => {
		imgContainerRef.current.classList.remove('loading')
		imgRef.current.style.visibility = 'visible'
		btnRef.current.style.visibility = 'visible'
		nameRef.current.classList.remove('loading')
		priceRef.current.classList.remove('loading')
	}

	/********** HOOKS  **********/
	useEffect(() => {
		const startRenderCard = () => {
			setIsLoading(true)

			if (!item) {
				return
			}

			setIsLoading(false)
			renderCard()
		}

		startRenderCard()
	}, [isLoading])

	return (
		/********** CATEGORY ITEM  **********/
		<div className='collection-item'>
			{/********** IMAGE **********/}
			<div ref={imgContainerRef} className='image-container loading'>
				<div
					ref={imgRef}
					className='image'
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
			</div>

			{/********** FOOTER **********/}
			<div className='collection-footer'>
				<span ref={nameRef} className='name loading'>
					{name}
				</span>
				<span ref={priceRef} className='price loading'>
					Price: ${price}
				</span>
			</div>

			{/*********** BUTTON **********/}
			<div ref={btnRef} className='btn-container'>
				<CustomButton onClick={() => addItem(item)} inverted>
					Add to Bag
				</CustomButton>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CategoryItem)

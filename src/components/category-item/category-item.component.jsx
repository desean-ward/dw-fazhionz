import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/custom-button.component'



import { addItem } from '../../redux/cart/cart.actions'

import './category-item.styles.scss'

import QuickView from '../../components/new-arrivals/quick-view.component'

const CategoryItem = ({ item, addItem }) => {
	/********** VARIABLES **********/
	const { name, price, imageUrl } = item
	const [isLoading, setIsLoading] = useState(true)
	const [ show, setShow ] = useState(false)
	const [ index, setIndex ] = useState(0)
	const [ popupBtns, setPopupBtns ] = useState([])
	const [ quickView, setQuickViews ] = useState([])

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

	const popup = (i) => {
		//i.preventDefault()
		setIndex(i)
		setShow(true)

		console.log("SHOW: " + i.incex)
	}

	const close = () => {
		setShow(false)
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

	useEffect(() => {
		setPopupBtns(document.querySelectorAll('.popup__btn'))

		setQuickViews(document.querySelectorAll('.quick__view'))
	}, [])

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
					alt='Image'
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
			<div ref={btnRef} className='popup__btn btn-container'>
				<CustomButton onClick={popup} inverted>
					Quick View
				</CustomButton>
			</div>

			<QuickView
				index={index}
				className='quick__view'
				show={show}
				close={close}
				category={item.category}
				name={item.name}
				price={item.price}
				imageUrl={item.imageUrl}
				item={item}
			/>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CategoryItem)

import React, { useEffect, useState, useRef } from 'react'

import QuickView from './quick-view.component'

import {
	Container,
	Footer,
	Header,
	Info,
	PopupProduct,
	PopupImage,
	PopupView,
	ProductCard,
	Description,
	AddSectionLinks,
} from './product.styles'

//import NEW_ARRIVALS from './new-arrivals.data.js'

const Product = ({ imageUrl, name, price, category, addItem, item, dispatch }) => {
	const [ show, setShow ] = useState(false)
	const [ popupBtns, setPopupBtns ] = useState([])
	const [ index, setIndex ] = useState(0)
	const [ quickView, setQuickViews ] = useState([])

	let currentIndex = null;

	const popup = (i) => {
		//popupViews[i].style.display = 'relative'
		// popupViews[i].style.visibility = 'visible'
		// popupViews[i].style.opacity = '1'
		// document.body.style.overflow = 'hidden'
		//setIndex(i)
		//index = i
		// if (i != index) {
		// 	 setIndex(i)
		// 	setShow(true)
		// }
		i.preventDefault()
		setIndex(i)
		setShow(true)

		
		
	}

	const close = () => {
		setShow(false)
	}

	// popupBtns.forEach((popupBtn, i) => {
	// 	popupBtn.addEventListener('click', (e) => {
	// 		e.preventDefault()
	// 		popup(i)
	// 	})
	// })


	useEffect(() => {
		setPopupBtns(document.querySelectorAll('.popup__btn'))

		setQuickViews(document.querySelectorAll('.quick__view'))
	}, [])

	
	return (
		<>
			{/**********  Card  **********/}
			<ProductCard className='product__card'>
				{/********** Header  **********/}
				<Header><h2>New Arrival</h2></Header>

				{/********** Product Name *********
				<h2 className='name'>{ name }</h2>*/}

				{/********** Product Image **********/}
				<img
					src={ item.imageUrl }
					alt='Product Image'
					className='product-img'
				/>

				{/********** Product Price *********
				<span className='price'>${ price }</span>*/}

				{/********** Popup Button **********/}
				<a href="#" className='popup__btn' onClick={popup}>
					Quick View
				</a>

				
				{/********** Footer  **********/}
				<Footer><h2>Get 15% Off</h2></Footer>
			</ProductCard>

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

		</>
	)
}



export default Product

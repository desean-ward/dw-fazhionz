import React, { useEffect, useState, useRef } from 'react'

import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import QuickView from '../../components/new-arrivals/quick-view.component'

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
import { selectCartHidden } from '../../redux/cart/cart.selectors';

//import NEW_ARRIVALS from './new-arrivals.data.js'

const Product = ({ imageUrl, name, price, category, addItem, item, dispatch }) => {
	const [ show, setShow ] = useState(false)
	const [ popupBtns, setPopupBtns ] = useState([])
	const [ index, setIndex ] = useState(0)
	const [ quickView, setQuickViews ] = useState([])

	let currentIndex = null;

	const popup = (i) => {
		i.preventDefault()
		setIndex(i)
		setShow(true)
	}

	const close = () => {
		setShow(false)
	}

	useEffect(() => {
		setPopupBtns(document.querySelectorAll('.popup__btn'))

		setQuickViews(document.querySelectorAll('.quick__view'))
	}, [])

	
	return (
		<>
			{/**********  Card  **********/}
			<ProductCard className='product__card'>
				{/********** Header  **********/}
				<Header><h3>New Arrival</h3></Header>

				{/********** Product Name *********
				<h3 className='name'>{ name }</h3>*/}

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
				<Footer><h3>Get 15% Off</h3></Footer>
			</ProductCard>

			<QuickView
				index={index}
				className='quick__view'
				show={show}
				close={close}
				//category={item.category}
				name={item.name}
				price={item.price}
				imageUrl={item.imageUrl}
				item={item}
			/>

		</>
	)
}



export default Product

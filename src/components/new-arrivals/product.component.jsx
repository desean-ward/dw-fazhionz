import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'

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

import { IoMdClose } from 'react-icons/io'
import NEW_ARRIVALS from './new-arrivals.data.js'

console.log("NEW ARRIVALS: " + NEW_ARRIVALS.length)

const Product = ({ name, category, price, imgUrl, item, addItem }) => {
	const [ popupViews, setPopupViews ] = useState([])
	const [ popupProducts, setPopupProducts ] = useState([])
	const [ popupBtns, setPopupBtns ] = useState([])
	const [ closeBtns, setCloseBtns ] = useState([])

	const nowPrice = price - (price * .15)

	const popup = (i) => {
		popupViews[i].style.visibility = 'visible'
		popupViews[i].style.opacity = '1'
		document.body.style.overflow = 'hidden'
	}

	const closePopUp = (i) => {
		popupViews[i].style.visibility = 'hidden'
		popupViews[i].style.opacity = '0'
		document.body.style.overflow = 'auto'
	}

	popupBtns.forEach((popupBtn, i) => {
		popupBtn.addEventListener('mousedown', () => {
			popup(i)
		})
	})

	closeBtns.forEach((closeBtn, i) => {
		closeBtn.addEventListener('mousedown', () => {
			closePopUp(i)
		})
	})

	useEffect(() => {
		setPopupViews(document.querySelectorAll('.popup__view'))
		setPopupProducts(document.querySelectorAll('.popup__product'))
		setPopupBtns(document.querySelectorAll('.popup__btn'))
		setCloseBtns(document.querySelectorAll('.close__btn'))
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
					src={ imgUrl }
					alt='Product Image'
					className='product-img'
				/>

				{/********** Product Price *********
				<span className='price'>${ price }</span>*/}

				{/********** Popup Button **********/}
				<a href="#" className='popup__btn'>
					Quick View
				</a>

				
				{/********** Footer  **********/}
				<Footer><h2>Get 15% Off</h2></Footer>
			</ProductCard>

			{/********** Quick View Popup  **********/}
			<PopupView className='popup__view'>
				

				<PopupProduct className='popup__product'>
					{/********** Close Button **********/}
					<IoMdClose className='close__btn' />

					{/********** Product Image **********/}
					<PopupImage className='popup__img'>
						<img src={ imgUrl} alt='Product Image' />
					</PopupImage>

					{/********** Product Info **********/}
					<Info className='info'>
						
					

						<h2>
							{ name }
							<br />
							<span>{ category }</span>
						</h2>

							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta nulla, similique, dignissimos quaerat amet doloremque nobis pariatur, a id harum! Nam ipsam omnis explicabo ipsa? Exercitationem, expedita, vero asperiores non quam amet dolorum nobis repudiandae quae alias obcaecati doloribus libero quo animi. Omnis, similique ipsum optio incidunt unde quia, harum deserunt at, accusamus odio ipsa eum alias ipsam vitae?
							
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta nulla, similique, dignissimos quaerat amet doloremque nobis pariatur, a id harum! Nam ipsam omnis explicabo ipsa? Exercitationem, expedita, vero asperiores non quam amet dolorum nobis repudiandae quae alias obcaecati doloribus libero quo animi. Omnis, similique ipsum optio incidunt unde quia, harum deserunt at, accusamus odio ipsa eum alias ipsam vitae?
							</p>

						<span className='wasPrice'>${price}.00</span>
						<span className='price'>${nowPrice}</span>
						
						<AddSectionLinks>
							<a href='#' 
								className='add__cart__btn' 
								onClick={() => addItem(item)}
							>
								ADD TO BAG
							</a>
							<a href='#' className='add__wish'>
								Add to Wishlist
							</a>
						</AddSectionLinks>
					</Info>
					
				</PopupProduct>
			</PopupView>
		</>
	)
}

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(Product)

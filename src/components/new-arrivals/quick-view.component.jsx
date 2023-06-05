import React, { useEffect, useState, useContext } from 'react'
import ReactDom from 'react-dom'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import { CategoriesContext } from '../../context/categories.context'

import { updateCartInDB } from '../../utils/firebase/firebase.utils'

import { motion, AnimatePresence} from 'framer-motion'

import {
	Info,
	PopupProduct,
	PopupImage,
	PopupView,
    Description,
	AddSectionLinks,
} from './product.styles'


import { IoMdClose } from 'react-icons/io'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import CartIcon from '../../components/cart-icon/cart-icon.component'
import { MotionConfig } from 'framer-motion';


const QuickView = ({ show, close, index, imageUrl, title, price, category, name, item, description }) => {
    const [ popupViews, setPopupViews ] = useState([])
	const [ popupProducts, setPopupProducts ] = useState([])
	const [ closeBtns, setCloseBtns ] = useState([])

    const { currentUser, setCurrentUser } = useContext(UserContext)
    const { cartItems, setCartItems, addItemToCart} = useContext(CartContext)
    const { productDescriptions } = useContext(CategoriesContext)
	const nowPrice = price - (price * .15)

    

    const addToBag = (e) => {
		e.preventDefault();

        addItemToCart(item)
        updateCartInDB(currentUser, cartItems)
    }
       

    function handleClose() {
		const fadeIn = document.querySelector('.popup__view')
		fadeIn.classList.remove('show')

    // Return close property to parent
		setTimeout(() => {
            index = null
			close()
		}, 500)
	}

    useEffect(() => {
		if (show) {
			const fadeIn = document.querySelector('.popup__view')
			fadeIn.classList.add('show')
			
			return
		}
	}, [show])

    const variants = {
        hidden: { scale: 0 },
        visible: { scale: 1 },
        exit: { scale: 0 },
        exitBeforeEnter: true
    }
    
  return ReactDom.createPortal(
      <>
      {
          show ? (
            <PopupView className='popup__view'>
                <AnimatePresence exitBeforeEnter>
                    <motion.div
                        variants={variants}
                        initial='hidden'
                        animate='visible'
                        exit='exit'
                        transition={{ duration: 0.3 }}
                    >
                        <PopupProduct className='popup__product'>
                            {/********** Close Button **********/}
                            <IoMdClose 
                            className='close__btn'
                            onClick={() =>handleClose()} />

                            {/********** Product Image **********/}
                            <PopupImage className='popup__img'>
                                <img src={ imageUrl } alt='Product Image' />
                            </PopupImage>

                            {/********** Product Info **********/}
                            <Info className='info'>
                                <h3>
                                    { name }
                                    <br />
                                    <span>{ title }</span>
                                </h3>

                                <Description>
                                    <p>{description}</p>
                                </Description>

                                <span className='wasPrice'>${price}.00</span>
                                <span className='price'>${nowPrice.toFixed(2)}</span>
                                
                                <AddSectionLinks className='links'>
                                    <a href='#' 
                                        className='add__cart__btn' 
                                        onClick={addToBag}
                                        onTouchEnd={addToBag}
                                    >
                                        ADD TO BAG
                                    </a>
                                </AddSectionLinks>
                            </Info>
                        
                        </PopupProduct>
                    </motion.div>
                </AnimatePresence>
            </PopupView>
          ) 
          : null
        }
      </>,
      document.getElementById('modal')
  )
};

// const mapDispatchToProps = (dispatch) => ({
// 	addItem: (item) => dispatch(addItem(item))
// })

// export default connect(null, mapDispatchToProps)(QuickView)

export default QuickView

import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom'

import { connect } from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'

import {
	Info,
	PopupProduct,
	PopupImage,
	PopupView,
	AddSectionLinks,
} from './product.styles'

import { IoMdClose } from 'react-icons/io'


const QuickView = ({ show, close, index, imageUrl, name, price, category, addItem, item, dispatch }) => {
    const [ popupViews, setPopupViews ] = useState([])
	const [ popupProducts, setPopupProducts ] = useState([])
	const [ closeBtns, setCloseBtns ] = useState([])

	const nowPrice = price - (price * .15)

    const addToBag = e => {
		e.preventDefault();
		addItem(item)
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

    // function handleOpen() {
    //     const fadeIn = document.querySelector('.popup__view')
	// 		fadeIn.classList.add('show')
			
	// 		return
    // }

    useEffect(() => {
		if (show) {
			const fadeIn = document.querySelector('.popup__view')
			fadeIn.classList.add('show')
			
			return
		}
	}, [show])
    
  return ReactDom.createPortal(
      <>
      {
          show ? (
            <PopupView className='popup__view'>
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
                        
                        <AddSectionLinks className='links'>
                            <a href='#' 
                                className='add__cart__btn' 
                                onClick={addToBag}
                                onTouchEnd={addToBag}
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
          ) 
          : null
        }
      </>,
      document.getElementById('modal')
  )
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(QuickView)

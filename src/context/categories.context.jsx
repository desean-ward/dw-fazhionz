import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

import PRODUCTS from '../routes/shop/shop.data1.js'

export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({})
    const value = { categoriesMap }

    // Initially used to transfer the shop data to the database -- KEEP COMMENTED OUT!!!
   /*  useEffect(() => {
        addCategoriesAndDocuments('categories', PRODUCTS)
    }) */

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            
            setCategoriesMap(categoryMap)
        }

        getCategoriesMap()
    }, [])

    return (
        <CategoriesContext.Provider value={value}>{ children }</CategoriesContext.Provider>
    )
}
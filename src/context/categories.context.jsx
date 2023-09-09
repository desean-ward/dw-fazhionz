import { createContext, useState, useEffect } from 'react'

import { getCategoriesAndDocuments, getProductDescriptions } from '../utils/firebase/firebase.utils.js'

import PRODUCTS from '../routes/shop/shop.data1.js'

export const CategoriesContext = createContext({
    categoriesMap: {},
})




export const CategoriesProvider = ({ children }) => {
    const [ categoriesMap, setCategoriesMap ] = useState({})
    const [ productDescriptions, setProductDescriptions ] = useState([])
    

    // Initially used to transfer the shop data to the database -- KEEP COMMENTED OUT!!!
   /*  useEffect(() => {
        addCategoriesAndDocuments('categories', PRODUCTS)
    }) */

    // Retrieve the Products and Product Descriptions from the database
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoryMap)
        }

        const getProductDescription = async () => {
            const descriptions = await getProductDescriptions()
            setProductDescriptions(descriptions)
        }

        getCategoriesMap()
        getProductDescription()

    }, [])


    const value = { categoriesMap, productDescriptions }

    return (
        <CategoriesContext.Provider value={value}>{ children }</CategoriesContext.Provider>
    )
}
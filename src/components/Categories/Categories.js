import React from 'react'
import { categories } from '../../data/data'
import Itemcategory from './Itemcategory/Itemcategory'
import {StyledCategoriesContainer} from './StyledComponentCategories'

const Categories = () => {
    return (
        <StyledCategoriesContainer>
            {categories.map(item => (
                <Itemcategory item={item} key={item.id} />
            ))}
        </StyledCategoriesContainer>
    )
}

export default Categories


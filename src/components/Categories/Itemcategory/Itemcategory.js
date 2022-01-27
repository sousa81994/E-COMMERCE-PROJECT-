import React from "react";
import { NavLink } from "react-router-dom";
import {StyledItemCategoryContainer, StyledItemCategoryImage, StyledItemCategoryInfo, StyledItemCategoryTitle,} from'./StyledComponentItemCategory'
import Button from '../../Button/Button'

const CategoryItem = ({ item }) => {
    return (
        <StyledItemCategoryContainer>
            <StyledItemCategoryImage src={item.img} />
            <StyledItemCategoryInfo>
                <StyledItemCategoryTitle style={{color: 'Grey'}}>{item.title}</StyledItemCategoryTitle>
                <NavLink to='/products'><Button style={{backgroundColor: '#5F021F'}}>SHOP NOW</Button></NavLink>
            </StyledItemCategoryInfo>
        </StyledItemCategoryContainer>
    );
};

export default CategoryItem;

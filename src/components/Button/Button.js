import React from 'react'
import { StyledButtonComponent } from './StyledButtonComponent'



const Button = ({ children, isGoogleSignIn, ...otherProps}) => {
    return (
        <div>
            <StyledButtonComponent className={`${isGoogleSignIn ? 'google-sign-in' : ''} button`} {...otherProps}>
        {children}
    </StyledButtonComponent>
        </div>
    )
}

export default Button

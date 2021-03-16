import React, { Children } from 'react';
import './Button.css';
import {Link} from 'react-router-dom';
const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'button--large']
export const Button =({
     children, 
     type,
     onClick, 
     buttonStyle, 
     buttonSize
    }) => {
     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
     const ckeckButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
     return(
        <Link to='/photos' className='btn-mobile'>
           <button className={`btn ${ckeckButtonSize} ${checkButtonStyle}`}
           onClick={onClick}
           type={type}
           >
            {children}
           </button>
            
        </Link>
     );
 };


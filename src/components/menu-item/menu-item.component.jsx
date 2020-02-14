import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imgSrc, size}) => {
    return ( 
        <div className = {`${size} menu-item`} >
            <div className="background-image" style = {{
            backgroundImage: `url(${imgSrc})`
            }}/>
                <div className= 'content' >
                    <h1 className="menu-title">
                        {title}
                    </h1>
                    <span className="menu-description">
                        SHOP NOW
                    </span>
                </div>
            
            
        </div>
    );
    
    }

 
export default MenuItem;
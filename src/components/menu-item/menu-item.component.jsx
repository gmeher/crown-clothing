import React from 'react';
import './menu-item.styles.scss';
import {withRouter, Link} from 'react-router-dom';

const MenuItem = ({title, imgSrc, size, history,linkUrl, match}) => {
    console.log(`${match.url}${linkUrl}`)
    return ( 
        <div className = {`${size} menu-item`} onClick={ () => history.push(`${match.url}${linkUrl}`)} >

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

 
export default withRouter(MenuItem);
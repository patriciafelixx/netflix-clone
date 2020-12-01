import React, { useState } from 'react';
import './Collection.css';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Collection(props) {

    const [ marginLeft, setMarginLeft] = useState(0);

    const toLeft = () => {
        if (marginLeft < 0) {
            setMarginLeft(marginLeft + (window.innerWidth / 2));
        }
    }

    const listWidth = props.array.length * 200;
    const toRight = () => {
        if (marginLeft > (window.innerWidth - listWidth)) {
            setMarginLeft(marginLeft - (window.innerWidth / 2));
        }
    }
    
    return (
        <div className="items" style={{marginLeft: marginLeft}}>
            {props.array.map(item => (
                <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} />
            ))}
            <div className="before-icon" onClick={toLeft}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="next-icon" onClick={toRight}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
        </div>
    )
}

export default Collection;
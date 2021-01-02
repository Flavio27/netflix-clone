import React, { useState } from 'react';
import './css/MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';



export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);

    const handleLeftArrow = () => {
        let previous = scrollX + Math.round(window.innerWidth / 2);
        //Limit previous click
        if (previous > 0){
             previous = 0;
        }
        setScrollX(previous)
    }

    const handleRightArrow = () => {
        let next = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        //Limit next click
        if ((window.innerWidth - listW) > next) {
            next = (window.innerWidth - listW) - 60;
        }
        setScrollX(next)
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left">
                <NavigateBeforeIcon style={{ fontSize: 50 }} onClick={handleLeftArrow} />
            </div>
            <div className="movieRow--right">
                <NavigateNextIcon style={{ fontSize: 50 }} onClick={handleRightArrow} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150

                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
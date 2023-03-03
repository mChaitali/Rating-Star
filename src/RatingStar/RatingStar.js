import { useState } from "react";
import './RatingStar.css';

const RatingStar = () => {
    const [rating, setRating] = useState(-1);
    const [onHover, setOnHover] = useState(-1);
    return (
        <div className="wrapper">
            {[...Array(5)].map((star, index)=>
                <button key={index}
                    className = {`star ${onHover > index || onHover === index? 'hoverStar' : ''}
                    ${rating > index || rating === index? 'selected' : ''}`}
                    onClick={()=>
                        setRating(index === rating ? index-1 : index)}
                    onMouseOver={()=> setOnHover(index)}
                    onMouseLeave={()=> setOnHover(-1)}>
                &#9733;
                </button>
            )}
        </div>
    )
}

export default RatingStar;
import React from "react";
import './card.css';

function Card({ imageUrl,text }) {
    const fillStyle = {
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
    };

    return (
        <div className="parent" >
            <div className="fill" style={fillStyle}>
            <div className="text-container">
                    <p className="bottom-text">{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;

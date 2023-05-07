import React from "react";

const CardBack = ({cvv, card, date, isFlip}) => {
    return (
        <div id={card === "visa" ? "visa-back" : "mastercard-back"} className={`back-card ${!isFlip ? "" : "active"}`}>
            <div className="card__container">
                <span className="card__magnet"/>
                <span className="card__date">{date.substring(0,5)}</span>
                <span className="card__cvv">{cvv}</span>
            </div>
        </div>
    )
}
export default CardBack
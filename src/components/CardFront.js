import React from "react";
import chip from "../images/chip.png"
import visa from "../images/visa.png"
import mastercard from "../images/mastercard.png"
import '../styles/Card.scss';

const CardFront = ({number, user, card, onClick, isFlip, isStats}) => {

    return (
        <div id={card === "visa" ? "visa-front" : "mastercard-front"}
        className={`front-card ${!isFlip ? "" : "active"} ${!isStats ? "" : "stats"}`}>
            <div className="card__container" onClick={onClick}>
                <img className="card__chip" src={chip} alt=""/>
                <span className="card__number">
                    {number}
                </span>
                <span className="card__user">
                    {user}
                </span>
                <img className="card__logo" src={card === "visa" ? visa : mastercard} alt=""/>
            </div>
        </div>
    )
}

export default CardFront;

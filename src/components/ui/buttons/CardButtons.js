import React from "react";
import btn1see from "../../../images/btn1s.png"
import btn1hide from "../../../images/btn1h.png";
import btn2 from "../../../images/btn2.png";
import btn3 from "../../../images/btn3.png";
import Button from "./Button";

const CardButtons = (props) => {
    const buttons = [
        {
            img: props.isActiveIcon ? btn1see: btn1hide,
            id: 1,
            handleClick: props.showNumber
        },
        {
            img: btn2,
            id: 2,
            handleClick: props.cardStats
        },
        {
            img: btn3,
            id: 3,
            handleClick: props.cardFlip
        }
    ]
    return (
            <div className="card__options">
                {buttons.map((option) => (
                    <Button key={option.id} img={option.img} onClick={option.handleClick}/>
                ))}
            </div>
    )
}

export default CardButtons
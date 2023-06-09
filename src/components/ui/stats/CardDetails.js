import React, {useContext} from "react";
import {useParams} from "react-router";
import {CardsContext} from "../../context/CardsContext";
import CardOption from "./CardOption";

const CardDetails = () => {
    const {cardId} = useParams()
    const {cards} = useContext(CardsContext)

    const renderCard = () => {
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].id === Number(cardId)) {
                return (<CardOption{...cards[i]}/>)
            }
        }
    }

    return (
        <div className="details">
            {renderCard()}
        </div>
    )
}

export default CardDetails
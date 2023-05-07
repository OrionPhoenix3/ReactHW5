import React from "react";
import {Link} from "react-router-dom";
import MenuCard from "../business/MenuCard";

const Main = ({cards}) => {
    return (
        <>
            {cards.length === 0 ?
                'Error: cards not found'
                :
                <div className="cards">
                    {cards.map((prop) => {
                        const {number, numberVisible, card, user, id} = prop
                        return (
                            <Link key={id} className="toggleBtn" to={`/details/${id}`}>
                                <MenuCard number={number} numberVisible={numberVisible} card={card} user={user}/>
                            </Link>
                        )})}
                </div>}
        </>
    )
}

export default Main
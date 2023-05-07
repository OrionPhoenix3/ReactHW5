import React from "react";
import Operations from "./Operations";

const CardStats = ({stats}) => {
    return (
        <div className="items">
            <p className="card-stats">Card stats</p>
            {stats && stats.map(item => <Operations key={item.id} {...item}/>)}
        </div>
    )
}

export default CardStats
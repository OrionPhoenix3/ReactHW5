import React, {useEffect, useState} from "react";

export const CardsContext = React.createContext();

export const CardsProvider = (props) => {
    const [card, setCard] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://my.api.mockaroo.com/cards_shema.json?key=a8019390")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Problem with server")
                }})
                .then((res) => setCard(res))
            }
        fetchData()
            .catch(err => console.log(err.message))  
    }, [])

    const addCard = (card) => {
        setCard((prevState) => [card, ...prevState, ])
    }

    return (
        <CardsContext.Provider value={{
            cards: card,
            addCard,
        }}>
            {props.children}
        </CardsContext.Provider>
    )
};
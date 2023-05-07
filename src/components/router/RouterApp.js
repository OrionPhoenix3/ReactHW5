import React, {Component} from "react";
import {Route, Routes} from "react-router";
import Main from "../pages/Main";
import CardDetails from "../ui/stats/CardDetails";
import CreateCard from "../pages/CreateCard";
import {CardsContext} from "../context/CardsContext";
import Header from "../business/Header";
import Details from "../pages/Details";

export default class RouterApp extends Component {
    render() {
        return (
            <CardsContext.Consumer>
                {({cards, addCard}) => {
                    return (
                        <>
                            <Header />
                            <Routes>
                                <Route path="/" element={<Main cards={cards}/>}/>
                                <Route path="/create" element={<CreateCard id={cards.length + 1} addCard={addCard}/>}/>
                                <Route path="/details" element={<Details/>}>
                                    <Route path=":cardId" element={<CardDetails/>}/>
                                </Route>
                            </Routes>
                        </>
                    )
                }}
            </CardsContext.Consumer>
        )
    }
}
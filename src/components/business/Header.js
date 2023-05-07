import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import add from "../../images/add.png";
import back from "../../images/back.png";

const Header = () => {
    const [title, setTitle] = useState();
    const [img, setImg] = useState();
    const {pathname} = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (pathname === "/") {
            setTitle("Your Cards")
            setImg(add)
        } else if (pathname === "/create") {
            setTitle("Create a new card")
            setImg(back)
        } else {
            setTitle("Card details")
            setImg(back)
        }
    }, [pathname])

    const backBtn = () => {
        if (pathname !== "/") {
            navigate("/")
            setTitle("Your Cards")
        } else {
            navigate("/create")
        }
    }
    return (
        <div className="header">
            <span className="title">{title}</span>
            <span className="backBtn" onClick={backBtn}>
                <img className="backBtn__img" src={img} alt=""/>
            </span>
        </div>
    )
}
export default Header
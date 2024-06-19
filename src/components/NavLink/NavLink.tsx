import React from "react";
import "./NavLink.css";
import question_mark_icon from "../../images/question-mark.svg";

const NavLink: React.FC = () => {
    return (
        <div className="nav-bar__container">
            <a className="nav-bar-link">
                <img className="nav-bar-link__icon" src={question_mark_icon}></img>
                <span className="nav-bar-link__text">How it works</span>
            </a>
        </div>
    );
};

export default NavLink;

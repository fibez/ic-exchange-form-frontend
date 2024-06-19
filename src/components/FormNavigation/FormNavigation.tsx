import React from "react";
import "./FormNavigation.css";

const FormNavigation: React.FC = () => {
    return (
        <div className="form-navigation">
            <ul className="form-navigation__links">
                <li>
                    <a className="form-navigation__link">New</a>
                </li>
                <li>
                    <a className="form-navigation__link">Portfolio</a>
                </li>
            </ul>
            <button className="form-navigation__button">Connect wallet</button>
        </div>
    );
};

export default FormNavigation;

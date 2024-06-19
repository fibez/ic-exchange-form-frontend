import React from "react";
import "./RadioButtons.css";

interface RadioButtonsProps {
    frequency: string;
    setFrequency: (value: string) => void;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({ frequency, setFrequency }) => {
    const options = ["Daily", "Weekly", "Biweekly", "4 weeks", "1 hour", "4 hours", "8 hours", "12 hours"];

    return (
        <div className="radio-button-container">
            {options.map((option, index) => (
                <div className="radio-button" key={option}>
                    <input
                        type="radio"
                        id={`radio-${index}`}
                        name="frequency"
                        value={option}
                        checked={frequency === option}
                        onChange={(e) => setFrequency(e.target.value)}
                    />
                    <label className="radio-button__label" htmlFor={`radio-${index}`}>
                        {option}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default RadioButtons;

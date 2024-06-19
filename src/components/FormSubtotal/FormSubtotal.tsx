import React from "react";

interface FormSubtotalProps {
    buyOption: string;
    sellOption: string;
    frequency: string;
    endDate: string;
}

const FormSubtotal: React.FC<FormSubtotalProps> = ({ buyOption, sellOption, frequency, endDate }) => {
    return (
        <div>
            <h2>Summary</h2>
            <p>You buy: {buyOption}</p>
            <p>You sell: {sellOption}</p>
            <p>Frequency: {frequency}</p>
            <p>End date: {endDate}</p>
        </div>
    );
};

export default FormSubtotal;

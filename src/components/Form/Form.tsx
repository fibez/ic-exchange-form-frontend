import React, { useState } from "react";
import "./Form.css";
import FormSubtotal from "../FormSubtotal/FormSubtotal";
import RadioButtons from "../RadioButtons/RadioButtons";

const Form: React.FC = () => {
    const [buyOption, setBuyOption] = useState<string>("BTC");
    const [sellOption, setSellOption] = useState<string>("USD");
    const [frequency, setFrequency] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Обработка отправки формы
        console.log({ buyOption, sellOption, frequency, endDate });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form">
                <div className="form__select-container">
                    <label htmlFor="buy" className="form__select-label">
                        You buy:
                    </label>
                    <select
                        id="buy"
                        className="form__select-list"
                        value={buyOption}
                        onChange={(e) => setBuyOption(e.target.value)}
                    >
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="TON">TON</option>
                    </select>
                </div>
                <div className="form__select-container">
                    <label htmlFor="sell" className="form__select-label">
                        You sell:
                    </label>
                    <select
                        id="sell"
                        className="form__select-list"
                        value={sellOption}
                        onChange={(e) => setSellOption(e.target.value)}
                    >
                        <option value="USD">USD</option>
                        <option value="GEL">GEL</option>
                        <option value="RUB">RUB</option>
                    </select>
                </div>
                <RadioButtons frequency={frequency} setFrequency={setFrequency} />
                <div>
                    <label htmlFor="endDate">End date:</label>
                    <input type="date" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <FormSubtotal buyOption={buyOption} sellOption={sellOption} frequency={frequency} endDate={endDate} />
        </>
    );
};

export default Form;

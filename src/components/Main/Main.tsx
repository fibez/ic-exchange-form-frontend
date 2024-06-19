import React from "react";
import "./Main.css";
import FormContainer from "../FormContainer/FormContainer";
import FormNavigation from "../FormNavigation/FormNavigation";
import Form from "../Form/Form";

const Main: React.FC = () => {
    return (
        <main className="main">
            <FormContainer>
                <FormNavigation></FormNavigation>
                <Form></Form>
            </FormContainer>
        </main>
    );
};

export default Main;

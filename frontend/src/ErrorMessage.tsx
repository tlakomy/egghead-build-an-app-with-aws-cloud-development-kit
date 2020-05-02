import React from "react";
import styled from "@emotion/styled";

const Error = styled.main`
    padding: 3rem;
    font-size: 2.4em;
    text-align: center;
    color: red;
`;

const ErrorMessage = () => {
    return (
        <Error>
            <h1>Whoops, something is broken - check the console for details</h1>
        </Error>
    );
};

export default ErrorMessage;

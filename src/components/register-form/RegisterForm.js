import React from "react";
import styled from "styled-components";
import { Header } from "../header/Header";

/**
 * Returns the registration form.
 * 
 * @return {JSX.Element} Registration form
 */
export function RegisterForm() {

    const Wrapper = styled.div`
        padding: 35px;
    `;

    return (
        <Wrapper>
            <Header />
        </Wrapper>
    );
}
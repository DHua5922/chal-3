import React from "react";
import styled from "styled-components";

/**
 * Returns the header for the registration form.
 * 
 * @return {JSX.Element} Header for the registration form
 */
export function Header() {
    const Title = styled.h1`
        margin: 0;
        font-size: 49px;
        font-family: Verdana;
    `; 

    const SubTitle = styled.h2`
        margin-top: 8px;
        color: darkgrey;
        font-size: 19px;
        font-family: Arial;
    `;

    const Row = styled.div`
        display: flex;
        justify-content: space-between;
    `;

    const Logo = styled.img`
        width: 40px;
        height: 60px;
    `;

    return (
        <Row>
            <div>
                <Title className="title">Register</Title>
                <SubTitle className="title">Thanks for joining Kluster</SubTitle>
            </div>
            <Logo src={require("../../img/kluster_logo.png")} />
        </Row>
    );
}
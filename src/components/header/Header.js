import React from "react";
import styled from "styled-components";

/**
 * Returns the header for the registration form.
 * 
 * @return {JSX.Element} Header for the registration form
 */
export function Header() {
    const Title = styled.div`
        margin: 0;
        font-size: 55px;
        font-family: Berlin Sans FB;
    `; 

    const SubTitle = styled.div`
        color: #C0C0C0;
        font-weight: bold;
        font-size: 15px;
        font-family: Arial;
    `;

    const Row = styled.div`
        display: flex;
        justify-content: space-between;
        margin-bottom: 14px;
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
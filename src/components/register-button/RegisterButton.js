import React from "react";
import styled from "styled-components";
import { AccountLogin } from "@styled-icons/open-iconic/AccountLogin";

/**
 * Returns the button for registering.
 * 
 * @return {JSX.Element} The button for registering
 */
export function RegisterButton() {
    const Icon = styled(AccountLogin)`
        margin-right: 11px;
    `;
    
    const Button = styled.div`
        border-radius: 30px;
        background: black;
        color: white;
        padding: 18px 0;
        width: 100%;
        margin-top: 28px;
        text-align: center;
        font-size: 20px;
        font-family: Berlin Sans FB;
        
        &:focus {
            outline: none;
        }
    `;
    
    return (
        <Button>
            <Icon size="18" />
            Register
        </Button>
    );
}
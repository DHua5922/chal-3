import React from "react";
import styled from "styled-components";

/**
 * Returns form input.
 * 
 * @return {JSX.Element} form input
 */
export function Input(props) {

    const InputGroup = styled.div`
        position: relative;
        width: 100%;
    `;

    const LeftIcon = styled(props.leftIcon)`
        color: grey;
        position: absolute;
        margin-top: 25px;
        margin-left: 23px;
    `;

    const Input = styled.input`
        border: 1.34px solid #C0C0C0;
        border-radius: 10px;
        padding: 15px 0px;
        margin-top: 15px;
        width: 100%;
        text-indent: 72px;
        font-family: Arial;
        background: GhostWhite;
        font-weight: bold;
        opacity: 0.6;

        &:focus {
            box-shadow: 0 0 2px 1px black;
            outline: 0;
            opacity: 1.0;
        }
    `;

    let RightIcon = props.rightIcon 
        ? styled(props.rightIcon.icon)
            `
                color: ${props.rightIcon.color};
                background: ${props.rightIcon.background};
                position: absolute;
                right: 0;
                margin-right: 17px;
                bottom: 10px;
                border-radius: 30px;
                width: 28px;
                top: 25px;
            `
        : null;

    return (
        <InputGroup>
            <LeftIcon size="27" />
            <Input 
                placeholder={props.placeholder} 
                type={props.type}
                value={props.value}
            />
            { RightIcon && <RightIcon /> }
        </InputGroup>
    )
}
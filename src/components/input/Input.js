import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// See logs in console for any errors
Input.propTypes = {
    placeholder: PropTypes.string.isRequired, // Field placeholder value
    type: PropTypes.string.isRequired, // Field type
    defaultValue: PropTypes.string.isRequired, // Default field value
    leftIcon: PropTypes.any.isRequired, // Icon on left side of input
    rightIcon: PropTypes.exact({ // Icon on right side of input
        icon: PropTypes.any.isRequired, // Icon
        color: PropTypes.string.isRequired, // Color for icon
        background: PropTypes.string.isRequired, // Background color for icon
    }),
};

/**
 * Returns form input.
 * 
 * @param {any} props Properties for this input
 * @return {JSX.Element} Form input
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
        margin-left: 16px;
    `;

    const Input = styled.input`
        border: 1.34px solid #C0C0C0;
        border-radius: 10px;
        padding: 15px 0px;
        margin-top: 15px;
        width: 100%;
        text-indent: 58px;
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
                defaultValue={props.defaultValue}
            />
            { RightIcon && <RightIcon /> }
        </InputGroup>
    )
}
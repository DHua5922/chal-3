import React from "react";
import styled from "styled-components";
import { Header } from "../header/Header";
import { Input } from "../input/Input";
import { Mail } from "@styled-icons/heroicons-outline/Mail";
import { PersonOutline } from "@styled-icons/material/PersonOutline";
import { Key } from "@styled-icons/feather/Key";
import { Check } from "@styled-icons/boxicons-regular/Check";
import { Cross } from "@styled-icons/entypo/Cross";
import { RegisterButton } from "../register-button/RegisterButton";

/**
 * Returns the registration form.
 * 
 * @return {JSX.Element} Registration form
 */
export function RegisterForm() {

    const Wrapper = styled.div`
        padding: 35px;
    `;

    const Row = styled.div`
        display: flex;
    `;

    const Gap = styled.div`
        width: 30px;
    `;

    // Initialize attributes of fields for entering
    // first and last names
    const rowInputProperties = [
        {
            placeholder: "First",
            type: "text",
            defaultValue: "",
            leftIcon: PersonOutline
        },
        {
            placeholder: "Last",
            type: "text",
            defaultValue: "",
            leftIcon: PersonOutline
        },
    ];

    // Initialize attributes of fields for email
    // and password
    const inputProperties = [
        {
            placeholder: "Email",
            type: "email",
            defaultValue: "",
            leftIcon: Mail
        },
        {
            placeholder: "Password",
            type: "password",
            defaultValue: "",
            leftIcon: Key,
            rightIcon: {
                icon: Check,
                color: "LimeGreen",
                background: "rgba(0, 255, 54, .2)"
            },
        },
        {
            placeholder: "Confirm Password",
            type: "password",
            defaultValue: "11111111111",
            leftIcon: Key,
            rightIcon: {
                icon: Cross,
                color: "rgba(255, 0, 0, .5)",
                background: "rgba(255, 0, 0, .2)"
            },
        },
    ]

    return (
        <Wrapper>
            <Header />
            <Row>
                {   // Return fields for first and last names
                    rowInputProperties.map((input, index) => {
                        
                        return (
                            <>
                                <Input
                                    placeholder={input.placeholder}
                                    type={input.type}
                                    defaultValue={input.defaultValue}
                                    leftIcon={input.leftIcon}
                                />
                                { index < rowInputProperties.length - 1 &&
                                    <Gap />
                                }
                            </>
                        )
                    })
                }
            </Row>

            {   // Return fields for email and password
                inputProperties.map(input => {
                    
                    return (
                        <Row>
                            <Input
                                placeholder={input.placeholder}
                                type={input.type}
                                defaultValue={input.defaultValue}
                                leftIcon={input.leftIcon}
                                rightIcon={input.rightIcon}
                            />
                        </Row>
                    )
                })
            }

            <RegisterButton />
        </Wrapper>
    );
}
import React from 'react';
import styled from "styled-components";
import { RegisterForm } from "../register-form/RegisterForm";
import "./App.css";

function App() {

  const Container = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 500px;
      height: 475px;
      background: white;
      border-radius: 20px;
  `;

  return(
    <div className="app">
      <Container>
        <RegisterForm />
      </Container>
    </div>
  );
}

export default App;

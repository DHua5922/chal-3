import React from 'react';
import styled from "styled-components";
import "./App.css";

function App() {

  const Container = styled.div`
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      width: 500px;
      height: 500px;
      background: white;
      border-radius: 20px;  
  `;

  return(
    <div className="app">
      <Container>

      </Container>
    </div>
  );
}

export default App;

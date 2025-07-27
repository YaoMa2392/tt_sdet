/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import FadeInWords from "../../components/FadeInWords/FadeInWords";


const words = "Feel free to ask any questions!".split(' ');

const GradientBackground = styled.div`
  background: #66d3fc;
  height: 62vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;


const QA = () => {
    const words = "Feel free to ask any questions!".split(' '); // Words as input

    return (
        <GradientBackground>
            <FadeInWords words={words} /> {/* Pass words to the FadeInWords component */}
        </GradientBackground>
    );
};

export default QA;

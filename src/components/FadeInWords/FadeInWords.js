import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  text-align: center;
`;

const Word = styled(motion.span)`
  font-size: 3em;
  font-weight: bold;
  color: #000000;
  margin: 0 8px;
  display: inline-block;
`;

const dropVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
        }
    }
};

const DropInWords = ({ words }) => {
    return (
        <TextContainer>
            {words.map((word, index) => (
                <Word
                    key={index}
                    variants={dropVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.3 }}
                >
                    {word}
                </Word>
            ))}
        </TextContainer>
    );
};

export default DropInWords;

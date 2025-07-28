import React, { useState, useEffect, useRef } from "react";
import "./WordCloud.css";

const words = [
    { text: "Software Engineer", value: 60 },
    { text: "Software Test Engineer", value: 50 },
    { text: "Automation Frameworks", value: 45 },
    { text: "Release Management", value: 45 },
    { text: "Platform Thinking", value: 45 },
    // { text: "NYU", value: 46 },
    { text: "Computer Science", value: 48 },
    { text: "Master's Degree", value: 50 },
    { text: "Detail-oriented", value: 40 },
    { text: "Team Player", value: 42 },
    { text: "Global Collaboration", value: 40 },
    { text: "Problem Solver", value: 40 },
    { text: "Adaptable", value: 50 },
    { text: "Curious", value: 40 },
    { text: "Proactive", value: 40 },
    { text: "Self-motivated", value: 48 },
    { text: "Mission-driven", value: 45 },
    { text: "Collaborative", value: 50 },
    { text: "Analytical Thinking", value: 43 },
    { text: "Solution-oriented", value: 47 },
    { text: "End-to-End Ownership", value: 44 },
    { text: "Kafka", value: 40 },
    { text: "Docker & K8s", value: 40 },
    { text: "Scalability", value: 38 }
];



const WordCloud = () => {
    const [hoveredWord, setHoveredWord] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const wordCloudRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const handleMouseEnter = (word) => {
        setHoveredWord(word);
    };

    const handleMouseLeave = () => {
        setHoveredWord(null);
    };

    const getWordPosition = (index) => {
        const { x, y } = mousePosition;
        const offsetX = Math.sin(index) * 400;
        let offsetY = Math.cos(index) * 320;

        return {
            transform: `translate(${x / 50 + offsetX}px, ${y / 50 + offsetY + 100}px)`
        };
    };


    return (
        <div className="word-cloud" ref={wordCloudRef}>
            {words.map((word, index) => {
                const fontSize = `${word.value}px`;
                const isHovered = hoveredWord === word.text;
                return (
                    <span
                        key={index}
                        className={`word ${isHovered ? "hovered" : ""}`}
                        style={{
                            fontSize,
                            color: isHovered ? "#FE2C55" : "#25F4EE",
                            transform: `${getWordPosition(index).transform} ${
                                isHovered ? "scale(1.5)" : "scale(1)"
                            }`,
                        }}
                        onMouseEnter={() => handleMouseEnter(word.text)}
                        onMouseLeave={handleMouseLeave}
                    >
                        {word.text}
                    </span>
                );
            })}
        </div>
    );
};

export default WordCloud;

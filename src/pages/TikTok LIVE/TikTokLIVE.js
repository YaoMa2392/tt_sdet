// eslint-disable-next-line
import {motion} from "framer-motion";
import "./TikTokLIVE.css";
import web from "../../assets/live_pc.PNG";
import mobile from "../../assets/live_ios.png";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import ttlivesd from "../../assets/ttlive_sd.PNG";


const FadeInSection = ({children}: { children: React.ReactNode }) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: "easeOut"}}
            className="fade-section"
        >
            {children}
        </motion.div>
    );
};

export default function TikTokLIVE() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    // Handle changes in mouse position
    const handleMouseMove = (e) => {
        const {clientX: x, clientY: y} = e;
        setMousePosition({x, y});
    };

    // Set styles and animation effects for images
    const imageStyle = {
        transform: `translate(${(mousePosition.x - window.innerWidth / 2) / 30}px, ${(mousePosition.y - window.innerHeight / 2) / 30}px)`,
        transition: 'transform 0.1s ease-out', // Add smooth transition effect
    };

    return (
        <div className="live-wrapper">
            <div className="live-container" onMouseMove={handleMouseMove}>
                {/* Hero Section */}
                <section className="title-section">
                    <img
                        src="https://p16-ttark.tiktokcdn-us.com/tos-useast5-i-1rzkm2vceq-tx/acf493e846430d78c050e9d8d7382c6b.svg~tplv-1rzkm2vceq-default:0:0:q75.image"
                        alt="TikTok Logo"
                        className="relative w-[128px] top-[4px] ml-[6px] lg:mr-[90px] rtl:mr-[6px] mb-[30px]"
                    />
                    <motion.h1
                        initial={{opacity: 0, y: -30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        className="live-title"
                    >
                        LIVE
                    </motion.h1>
                </section>

                {/* Project Details */}
                <section className="content-section">
                    <div className="project-image-container">
                        <h2 className="live-pic-title">
                            TikTok Live – iOS App UI
                        </h2>
                        <img src={mobile} alt="Project screenshot 2" className="project-image-live-ios"/>
                    </div>
                </section>

                {/* Project Details */}
                <section className="content-section">
                    <div className="live-image-container">
                        <img src={web} alt="Project screenshot 2" className="project-image-live-web"/>
                        <h2 className="live-pic-title-web">
                            TikTok Live – Web App UI
                        </h2>
                    </div>
                </section>

                {/* Project Details */}
                <section className="live-content-section">
                    <FadeInSection>
                        <h2 className="project-section-title center-title">Simplified System Architecture Overview for
                            TikTok LIVE</h2>
                    </FadeInSection>

                    <div className="project-image-container-testTpes">
                        <img src={ttlivesd} alt="Project screenshot 2" className="project-image-ttlivesd"/>
                    </div>
                </section>
            </div>
        </div>
    );
}

/* eslint-disable no-unused-vars */
import React from "react";
import {motion} from "framer-motion";
import WordCloud from "../../components/WordCloud/WordCloud";
import "./AboutMe.css";

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

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="page-content">
                {/* Hero Section with Word Cloud */}
                <section className="aboutme-hero-section">
                    <motion.h1
                        initial={{opacity: 0, y: -30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        className="aboutme-hero-title"
                    >
                        Yao Ma
                    </motion.h1>
                    <WordCloud/>
                </section>

                {/* About Me Details */}
                <section className="content-section">
                    <FadeInSection>
                        <h2 className="section-title">Key Achievements</h2>

                        <p className="section-text">
                            <strong>90% Test Time Reduction:</strong> Automated regression testing, reducing time from 4-5 days to 3-4 hours.
                        </p>
                        <p className="section-text">
                            <strong>30% Lower Bug Rate:</strong> Delivered projects with a bug rate 30% lower than the team average by identifying root causes.
                        </p>
                        <p className="section-text">
                            <strong>50+ Team Members Trained:</strong> Led end-to-end testing for multiple projects, while training 50+ department members during rollouts.
                        </p>
                        <p className="section-text">
                            <strong>Improved Feature Alignment:</strong> Collaborated closely with PMs and Developers to refine FRDs, make development processes smoother.
                        </p>
                    </FadeInSection>

                    <FadeInSection>
                        <h2 className="section-title">Key Strengths & Soft Skills</h2>
                        <p className="section-text">
                            <strong>Problem Solver:</strong> Strong problem-solving abilities to tackle complex
                            challenges.
                        </p>
                        <p className="section-text">
                            <strong>Creative:</strong> Innovative thinking to generate new ideas and solutions.
                        </p>
                        <p className="section-text">
                            <strong>Detail-Focused:</strong> Attention to detail ensures accuracy and quality in every
                            task.
                        </p>
                        <p className="section-text">
                            <strong>Communication:</strong> Excellent verbal and written communication skills for
                            effective collaboration.
                        </p>
                        <p className="section-text">
                            <strong>Teamwork:</strong> Collaborative and supportive team player to achieve common goals.
                        </p>
                    </FadeInSection>

                    <FadeInSection>
                        <h2 className="section-title">Software Test Engineer</h2>
                        <p className="section-text">
                            <strong>Experience:</strong> 2 years as an SDE Tester, 1 year as an SDE.
                        </p>
                        <p className="section-text">
                            <strong>Master's Degree:</strong> MSCS @ NYU Courant Institute of Mathematical Sciences.
                        </p>
                        <p className="section-text">
                            <strong>Test Expertise:</strong> Smoke, Functional, Regression, Integration, Performance,
                            API, Security, Recovery.
                        </p>
                        <p className="section-text">
                            <strong>Automation Tools:</strong> Python, Java, R, Selenium, Pytest, OpenCV, Cypress,
                            TestNG, JUnit.
                        </p>
                        <p className="section-text">
                            <strong>Documentation Skills:</strong> Test Plans, Test Cases, Bug Tickets, Test Reports,
                            PRDs, FRDs.
                        </p>
                        <p className="section-text">
                            <strong>CI/CD & Tools:</strong> Jira, Confluence, JMeter, Jenkins, GitHub Actions.
                        </p>
                    </FadeInSection>


                </section>
            </div>
        </div>
    );
};

export default AboutMe;

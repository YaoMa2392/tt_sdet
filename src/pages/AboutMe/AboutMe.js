/* eslint-disable no-unused-vars */
import React from "react";
import {motion} from "framer-motion";
import WordCloud from "../../components/WordCloud/WordCloud";
import "./AboutMe.css";
import poslink from "../../assets/logo-poslink.PNG";
import posket from "../../assets/POSKet.PNG";
import android from "../../assets/logo-android.png";
import odoo from "../../assets/logo-odoo.png";
import broadpos from "../../assets/logo-broadpos.PNG";

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
                        <div className="title-bg-bar"></div>
                    </motion.h1>
                    <WordCloud/>
                </section>

                <section className="content-section">
                    <FadeInSection>
                        <h2 className="section-title">Selected Projects
                        </h2>
                        <div className="project-logo-row">
                            <img
                                className="logo-uptrillion"
                                src="https://www.uptrillion.com/wp-content/uploads/2023/06/uptrillion_logo_5.3.23_Gannon-16.png"
                                alt="UpTrillion"
                            />
                            <img
                                className="logo-50"
                                src={posket}
                                alt="POSket"
                            />
                            <img
                                className="logo-40"
                                src={poslink}
                                alt="POSLink"
                            />
                            {/*<img*/}
                            {/*    className="logo-40"*/}
                            {/*    src={broadpos}*/}
                            {/*    alt="broadpos"*/}
                            {/*/>*/}
                            <img
                                className="logo-40"
                                src="https://www.tsys.com/-/media/project/gpn/tsys/tsys/site-logo/logoprimary.svg?rev=6a776fcd04694486b1e078229c8f33ee"
                                alt="TSYS"
                            />
                            <img
                                className="logo-40"
                                src="https://faqs.pax.us/wp-content/uploads/2021/07/cropped-PAXSTORE-Logo-North-America-Opt-1.png"
                                alt="PAXSTORE"
                            />
                            <img
                                className="logo-40"
                                src="https://lirp.cdn-website.com/d09ffce6/dms3rep/multi/opt/front+txt+logo+purple-192w.png"
                                alt="Front"
                            />
                            <img
                                className="logo-40"
                                src={android}
                                alt="Android"
                            />
                            <img
                                className="logo-40"
                                src={odoo}
                                alt="Odoo"
                            />
                        </div>
                    </FadeInSection>

                    <FadeInSection>
                        <h2 className="section-title">Software Test Engineer</h2>
                        <p className="section-text">
                            <strong>Experience:</strong> 2 YOE as SDET, 1 YOE as SDE; M.S. in CS @ NYU Courant.
                        </p>
                        <p className="section-text">
                            <strong>Test Skills:</strong> Functional, Automation Frameworks, Performance, API.
                        </p>
                        <p className="section-text">
                            <strong>Programming & Tools:</strong> Java, Python, Java, Selenium, Pytest, TestNG, JUnit, Jenkins, GitHub Actions.
                        </p>
                        <p className="section-text">
                            <strong>System Experience:</strong> REST APIs, microservices, Redis, Kafka, Docker, Kubernetes.
                        </p>
                        <p className="section-text">
                            <strong>CI/CD & Collaboration:</strong> Jira, Confluence, PR reviews, release validation & feedback loop.
                        </p>
                    </FadeInSection>

                    <FadeInSection>
                        <h2 className="section-title">Key Achievements</h2>

                        <p className="section-text">
                            <strong>90% Test Time Reduction:</strong> Automated regression and integration tests across modules, reducing validation time from 4–5 days to 4- hours.
                        </p>
                        <p className="section-text">
                            <strong>Cross-Team Platform Contributor:</strong> Built shared test utilities and workflows to support backend/frontend pipelines and improve coverage.
                        </p>
                        <p className="section-text">
                            <strong>Improved Release Stability:</strong> Led validation and CI checks for QA-UAT-PROD app releases; ensured zero-blocker rollout for 12+ versions.
                        </p>
                        <p className="section-text">
                            <strong>Trained 50+ Team Members:</strong> Led test reviews, onboarding, and debugging sessions across global QA/dev teams.
                        </p>
                    </FadeInSection>

                    <FadeInSection>
                        <h2 className="section-title">Key Strengths & Soft Skills</h2>
                        <p className="section-text">
                            <strong>Systematic Thinker:</strong> Proficient in designing E2E test strategies and driving quality at scale.
                        </p>
                        <p className="section-text">
                            <strong>Ownership & Delivery:</strong> Able to independently drive testing for complex features, manage risks, and meet release deadlines.
                        </p>
                        <p className="section-text">
                            <strong>Tool Builder:</strong> Experienced in creating internal tools to enhance productivity of QA/Dev teams.
                        </p>
                        <p className="section-text">
                            <strong>Effective Collaborator:</strong> Strong communication skills across time zones, functions, and cultures.
                        </p>
                    </FadeInSection>
                </section>

            </div>
        </div>
    );
};

export default AboutMe;

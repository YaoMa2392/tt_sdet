/* eslint-disable no-unused-vars */
import {motion} from "framer-motion";
import "./Analytics.css";
import analytics from "../../../assets/uptrillion_analytics.jpg";
import analytics1 from "../../../assets/Uptrillion_web.png";
import analytics2 from "../../../assets/uptrillion_Analytics.png";
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

export default function Analytics() {
    const [inView, setInView] = useState(false);

    const handleScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setInView(true);
                observer.unobserve(entry.target);  // Stop observing once in view
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.5,  // When 50% of the element is visible
        });

        const images = document.querySelectorAll('.analytics-product-section img');
        images.forEach(image => observer.observe(image));

        return () => {
            images.forEach(image => observer.unobserve(image)); // Clean up observer
        };
    }, []);

    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setCurrentImage(imageSrc);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="analytics-page-wrapper">
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="analytics-showcase"
            >
                {/* Header Section */}
                <header className="analytics-header">
                    <h1 className="inventory-title">Reporting & Analytics</h1>
                    <div className="title-bg-bar"></div>
                </header>

                {/* Product Section */}
                <section className="analytics-section">
                    <motion.div
                        className="analytics-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>Empowering Business Decisions</strong></p>
                        <p>
                            Uptrillion not only streamlines payment processing and inventory management but also offers
                            robust analytics
                            capabilities. This feature enables merchants to gain valuable insights into their business
                            operations through detailed data visualization and reporting, facilitating informed
                            decision-making and strategic planning.
                        </p>
                        <p><strong>Key Benefits of Uptrillion Analytics:</strong></p>
                        <ul>
                            <li><strong>Custom Reports:</strong> Create tailored reports to focus on key metrics,
                                enabling
                                targeted business analysis.
                            </li>
                            <li><strong>Data Export:</strong> Export data for further analysis or integration with other
                                tools to gain deeper insights.
                            </li>
                            <li><strong>Performance Monitoring:</strong> Track sales and inventory performance to
                                identify
                                trends and optimize operations.
                            </li>
                        </ul>

                    </motion.div>

                    <motion.img
                        src={analytics}
                        alt="Argo System"
                        className="analytics-pic"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                {/* Inventory Images Section */}
                <section className="analytics-product-section">
                    <motion.img
                        src={analytics1}
                        alt="Argo System"
                        className="analytics-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                        onClick={() => handleImageClick(analytics1)} // Open modal with this image
                    />
                    <motion.img
                        src={analytics2}
                        alt="Argo System"
                        className="analytics-image"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                        onClick={() => handleImageClick(analytics2)} // Open modal with this image
                    />
                </section>

                {/* Modal for Enlarged Image */}
                {modalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <img src={currentImage} alt="Enlarged view" className="modal-image"/>
                            <button className="close-btn" onClick={closeModal}><FontAwesomeIcon icon={faTimes}/>
                            </button>
                        </div>
                    </div>
                )}

            </motion.div>
        </div>
    );
}

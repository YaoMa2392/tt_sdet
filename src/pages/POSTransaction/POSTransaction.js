/* eslint-disable no-unused-vars */
import {motion} from "framer-motion";
import "./POSTransaction.css";
import React, {useEffect, useState} from "react";
import TitleBar from "../../components/TitleBar/TitleBar";
import posHomepage from "../../assets/pos_homepage.jpg";
import posCard from "../../assets/pos_input_card.jpg";
import posAmout from "../../assets/pos_input_number.jpg"
import a920 from "../../assets/a920.jpg"
import dollar from "../../assets/transaction-image.webp"
import sales1 from "../../assets/uptrillion_sales1.png";
import sales2 from "../../assets/uptrillion_sales2.png";
import sales3 from "../../assets/uptrillion_sales3.png";

export default function POSTransaction() {
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

        const images = document.querySelectorAll('.design-product-section img');
        images.forEach(image => observer.observe(image));

        return () => {
            images.forEach(image => observer.unobserve(image)); // Clean up observer
        };
    }, []);

    return (
        <div className="pos-container">
            <section className="title-section">
                <img
                    src={dollar}
                    alt="dollar"
                    className="dollar-image"
                />
                <motion.h1
                    initial={{opacity: 0, y: -30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1}}
                    className="pos-title"
                >
                    POS Transaction
                </motion.h1>
            </section>
            <TitleBar title="Transaction Security "/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="pos-showcase"
            >

                <section className="pos-section">
                    <motion.div
                        className="pos-description"
                        initial={{opacity: 0, x: -50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3}}
                    >
                        <p><strong>1. Initiate Transaction</strong></p>
                        <p><strong>2. Enter Transaction Amount</strong></p>
                        <li>Input amount manually.</li>
                        <li>Validate: correct format, decimal precision, min/max limits.</li>
                        <p><strong>3. Enter Card Information</strong></p>
                        <li>Card input methods: <br/>
                            Tap (NFC / contactless) / Swipe (magnetic stripe) / <br/>
                            Insert (chip / EMV) / Manual entry (PAN, expiry, CVV)
                        </li>
                        <p><strong>4. Process Payment</strong></p>
                        <li>POS sends encrypted request to backend/payment gateway.</li>
                        <li>Await authorization response (Approved / Declined / Timeout).</li>
                        <p><strong>5. Transaction Result Display</strong></p>
                        <li>Show result on screen: amount, status, masked card info.</li>
                        <li>Log locally and in backend for traceability.</li>
                        <p><strong>6. Receipt Options</strong></p>
                        <li>Choose receipt type: Print / Email / SMS / No receipt.</li>
                        <li>Receipt includes merchant, time, masked card, amount, transaction ID.</li>
                        <p><strong>7. Transaction Record (History)</strong></p>
                        <li>Viewable in transaction history list.</li>
                        <li>Accessible for further operations (e.g., refunds).</li>
                        <p><strong>8. Refund (if applicable)</strong></p>
                        <li>Select past transaction → choose full or partial refund.</li>
                        <li>Refund flow mirrors original: validation → backend processing → confirmation.</li>
                    </motion.div>

                    <motion.img
                        src={a920}
                        alt="Argo System"
                        className="pos-pic"
                        initial={{opacity: 0, x: 50}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>

                <section className="pos-product-section">
                    <img
                        src={posHomepage}
                        alt="posHomepage"
                        className="pos-image"
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                    <img
                        src={posAmout}
                        alt="posCard"
                        className="pos-image"
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                    <img
                        src={posCard}
                        alt="posCard"
                        className="pos-image"
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>
            </motion.div>
        </div>
    );
}

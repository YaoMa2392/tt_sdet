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
import alipax from "../../assets/payment_alipayPOS.PNG"
import alipaxQR from "../../assets/payment_alipayA920QR.PNG"
import alipaxScan from "../../assets/payment_alipayA920Scan.PNG"
// import order from "../../assets/resautrant_order.jpg";
import testFlow from "../../assets/payment_posTestFlow.PNG";

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
                    POS Payment
                </motion.h1>
            </section>
            <TitleBar title="POS Payment Test Flow"/>
            <div className="image-container">
                <img
                    src={testFlow}
                    alt="testFlow"
                    className="testFlow-image"
                />
            </div>

            <TitleBar title="Functional Flow"/>
            <section className="alipos-section">
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

            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="pos-showcase"
            >
                <section className="pos-product-section">
                    <img
                        src={posHomepage}
                        alt="posHomepage"
                        className="pospayment-image"
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                    <img
                        src={posAmout}
                        alt="posCard"
                        className="pospayment-image"
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                    <img
                        src={posCard}
                        alt="posCard"
                        className="pospayment-image"
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                </section>
            </motion.div>
            <TitleBar title="Alipay on PAX POS"/>
            {/* Product Section */}
            <section className="alipos-section">
                <motion.div
                    className="sales-description"
                    initial={{opacity: 0, x: -50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.3}}
                >
                    <p>PAX POS terminals support Alipay through two flows: Merchant-Presented QR (POS generates a
                        dynamic QR for the customer to scan) and Customer-Presented QR (POS scans the Alipay QR from the
                        customer’s app).</p>
                    <ul>
                        <li><strong>Merchant-Presented QR:</strong> POS generates a dynamic QR code for scanning.
                        </li>
                        <li><strong>Customer-Presented QR:</strong> POS scans a QR code from the Alipay app.
                        </li>
                    </ul>
                    <p>Both flows use PAX’s secure SDK and PAXPAY gateway, handling transaction
                        requests via encrypted APIs with real-time authorization and settlement. This integration
                        ensures compliance with EMV and PCI standards, reduces payment latency, and provides seamless
                        reconciliation for merchants across industries.</p>

                </motion.div>

                <motion.img
                    src={alipax}
                    alt="uptrillion sales"
                    className="alipos-image"
                    initial={{opacity: 0, x: 50}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.5}}
                />
            </section>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="pos-showcase"
            >

                <section className="pos-product-section">
                    <img
                        src={alipaxQR}
                        alt="posCard"
                        className="pos-image"
                        initial={{opacity: 0, x: 50}}
                        animate={inView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 1, delay: 0.5}}
                    />
                    <img
                        src={alipaxScan}
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

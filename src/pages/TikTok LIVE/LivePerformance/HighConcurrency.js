/* eslint-disable no-unused-vars */
import {motion} from "framer-motion";
import "./HighConcurrency.css";
import React, {useEffect, useState} from "react";
import TitleBar from "../../../components/TitleBar/TitleBar";
import FeatureGrid from "../../../components/FeatureGrid/FeatureGrid";

export default function HighConcurrency() {
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

        const images = document.querySelectorAll('.functional-product-section img');
        images.forEach(image => observer.observe(image));

        return () => {
            images.forEach(image => observer.unobserve(image)); // Clean up observer
        };
    }, []);

    // const headers = ['ID', 'Function', 'Description', 'HighConcurrency'];
    const data = [
        {
            id: 1,
            challenge: "Live Streaming",
            solution: "Video stream uploading, transcoding, and distribution",
            result: "Massive concurrent viewers causing high bandwidth and CDN pressure; requires smooth, uninterrupted streaming."
        },
        {
            id: 2,
            challenge: "Live Chat / Danmaku (Real-time Comments)",
            solution: "Real-time chat messages and danmaku overlay",
            result: "Millisecond-level latency, large volume of high-frequency messages; system must process and broadcast quickly."
        },
        {
            id: 3,
            challenge: "Gift Sending & Virtual Inventory",
            solution: "Sending virtual gifts, gift consumption, and inventory management",
            result: "High peak transaction concurrency; requires order consistency, payment processing, and inventory accuracy."
        },
        {
            id: 4,
            challenge: "Co-hosting / Guest Interaction",
            solution: "Real-time audio and video interaction between hosts and users",
            result: "Multiple low-latency audio-video streams; significant bandwidth and computing resource usage."
        },
        {
            id: 5,
            challenge: "Co-host Queue Management",
            solution: "User requests for co-hosting and queue management",
            result: "Large volume of concurrent queue requests; requires real-time synchronization and conflict prevention."
        },
        {
            id: 6,
            challenge: "User Activity Metrics",
            solution: "Real-time statistics like viewer count, likes, shares",
            result: "High throughput for real-time updates; data accuracy with minimal latency is critical."
        },
        {
            id: 7,
            challenge: "Live Room Moderation",
            solution: "Actions like muting users, kicking out users, managing permissions",
            result: "Concurrent multi-user moderation actions; maintaining state consistency and permission verification under pressure."
        },
        {
            id: 8,
            challenge: "Live Commerce (Shopping)",
            solution: "Product display, order placement, inventory control",
            result: "High concurrency in transactions; requires strong consistency in payment and inventory."
        },
        {
            id: 9,
            challenge: "Red Packet / Red Envelope Rain",
            solution: "User participation in time-limited “red envelope” cash giveaways",
            result: "Instantaneous, massive concurrent requests; anti-cheating and prevention of over-distribution; ensures fund security and accurate accounting."
        },
        {
            id: 10,
            challenge: "System Notifications",
            solution: "Broadcasting system announcements and promotional messages during live streams",
            result: "Timely delivery to large user bases; high reliability and performance demands."
        },
        {
            id: 11,
            challenge: "Content Moderation & Review",
            solution: "Real-time or near-real-time filtering of chat messages and comments",
            result: "Large volume of text data requiring fast processing; ensures compliance and user safety."
        },
        {
            id: 12,
            challenge: "Audience Interaction Games",
            solution: "Live quiz, polls, mini-games inside the live room",
            result: "Many users participating simultaneously; requires real-time state synchronization and low interaction latency."
        },
        {
            id: 13,
            challenge: "Host Co-hosting & PK Battles",
            solution: "Multiple hosts co-hosting or competing live (PK)",
            result: "Complex multi-stream audio/video mixing; very low latency and high bandwidth usage."
        },
        {
            id: 14,
            challenge: "Live Stream Replay",
            solution: "Playback requests of past live streams",
            result: "Surge in replay traffic after streams end; storage and bandwidth bottlenecks."
        },
        {
            id: 15,
            challenge: "Live Recording & Storage",
            solution: "Recording live streams, segment uploading, and storage",
            result: "Concurrent recording and uploads; storage system under heavy load."
        },
        {
            id: 16,
            challenge: "Security & Anti-Cheat Monitoring",
            solution: "Real-time monitoring for fraud detection, spam, or abuse",
            result: "High-throughput behavior data analysis; real-time or near-real-time threat detection."
        }
    ];


    return (
        <div>
            <TitleBar title="High Concurrency @ TikTok LIVE"/>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                className="analytics-showcase"
            >

            {/*    <section className="functional-section">*/}
            {/*        <motion.div*/}
            {/*            className="functional-description"*/}
            {/*            initial={{opacity: 0, x: -50}}*/}
            {/*            animate={{opacity: 1, x: 0}}*/}
            {/*            transition={{duration: 1, delay: 0.3}}*/}
            {/*        >*/}
            {/*            <p><strong>Functional Testing in Uptrillion POSket App</strong></p>*/}
            {/*            <p>*/}
            {/*                In the POSket app, functional testing confirms that item customization, cart management,*/}
            {/*                pricing, and checkout work correctly. It is primarily conducted in early development or*/}
            {/*                small updates, ensuring quick validation before deployment.*/}
            {/*            </p>*/}
            {/*            <p>Key aspects</p>*/}
            {/*            <ul>*/}
            {/*                <li><strong>Positive testing</strong>: Verifying that the system functions as intended under*/}
            {/*                    normal conditions (e.g., adding an item to the cart, successful payment).*/}
            {/*                </li>*/}
            {/*                <li><strong>Negative testing</strong>: Ensuring the system handles invalid inputs or edge*/}
            {/*                    cases properly*/}
            {/*                    (e.g., adding an invalid coupon, invalid payment details).*/}
            {/*                </li>*/}
            {/*                <li><strong>Exception testing</strong>: Checking how the system reacts to unexpected*/}
            {/*                    scenarios (e.g., network*/}
            {/*                    failure during checkout).*/}
            {/*                </li>*/}

            {/*            </ul>*/}

            {/*        </motion.div>*/}

            {/*        <motion.img*/}
            {/*            src={sales}*/}
            {/*            alt="Argo System"*/}
            {/*            className="performance-image"*/}
            {/*            initial={{opacity: 0, x: 50}}*/}
            {/*            animate={{opacity: 1, x: 0}}*/}
            {/*            transition={{duration: 1, delay: 0.5}}*/}
            {/*        />*/}
            {/*        <motion.img*/}
            {/*            src={sales2}*/}
            {/*            alt="Argo System"*/}
            {/*            className="performance-image"*/}
            {/*            initial={{opacity: 0, x: 50}}*/}
            {/*            animate={{opacity: 1, x: 0}}*/}
            {/*            transition={{duration: 1, delay: 0.5}}*/}
            {/*        />*/}
            {/*    </section>*/}

            {/*    <Divider/>*/}

                <section className="liveperformanace-section7">
                    <FeatureGrid data={data}/>
                </section>
            </motion.div>
        </div>
    );
}

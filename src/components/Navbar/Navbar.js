import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [projectMenuOpen, setProjectMenuOpen] = useState(false);
    const [testMenuOpen, setTestMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-container">
                {/* 左侧 Logo */}
                <Link to="/yao_sdet" className="navbar-logo">
                    Alipay
                </Link>

                {/* 右侧链接 */}
                <div className="navbar-links">
                    <Link to="/AboutMe">About Me</Link>

                    <div
                        className="dropdown"
                        onMouseEnter={() => setTestMenuOpen(true)}
                        onMouseLeave={() => setTestMenuOpen(false)}
                    >
                        <Link to="/POSTransaction" className="dropdown-title">Payment</Link>
                        {/*{testMenuOpen && (*/}
                        {/*    <div className="dropdown-menu">*/}
                        {/*        <Link to="/Test/TestDesign">Test Design</Link>*/}
                        {/*        <Link to="/Test/Regression">Regression Testing [Auto]</Link>*/}
                        {/*        <Link to="/Test/Functional">Functional Testing</Link>*/}
                        {/*        <Link to="/Test/Performance">Performance Testing</Link>*/}
                        {/*        <Link to="/Test/CICD">CI/CD</Link>*/}
                        {/*        <Link to="/Test/Documentation">Documentation</Link>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                    </div>

                    <div
                        className="dropdown"
                        onMouseEnter={() => setProjectMenuOpen(true)}
                        onMouseLeave={() => setProjectMenuOpen(false)}
                    >
                        <Link to="/Project" className="dropdown-title">Saas</Link>
                        {projectMenuOpen && (
                            <div className="dropdown-menu">
                                <Link to="/Project/Sales">Sales</Link>
                                <Link to="/Project/Payment">Payment</Link>
                                <Link to="/Project/Inventory">Inventory</Link>
                                <Link to="/Project/Analytics">Analytics</Link>
                            </div>
                        )}
                    </div>

                    <div
                        className="dropdown"
                        onMouseEnter={() => setTestMenuOpen(true)}
                        onMouseLeave={() => setTestMenuOpen(false)}
                    >
                        <Link to="/Test" className="dropdown-title">Test</Link>
                        {testMenuOpen && (
                            <div className="dropdown-menu">
                                <Link to="/Test/TestDesign">Test Design</Link>
                                <Link to="/Test/Regression">Regression Testing</Link>
                                <Link to="/Test/Functional">Functional Testing</Link>
                                <Link to="/Test/Performance">Performance Testing</Link>
                                <Link to="/Test/CICD">CI/CD</Link>
                                <Link to="/Test/Documentation">Documentation</Link>
                            </div>
                        )}
                    </div>


                    {/*<div*/}
                    {/*    className="dropdown"*/}
                    {/*    onMouseEnter={() => setTestMenuOpen(true)}*/}
                    {/*    onMouseLeave={() => setTestMenuOpen(false)}*/}
                    {/*>*/}
                    {/*    <Link to="/TikTokLIVE" className="dropdown-title">TikTok LIVE</Link>*/}
                    {/*    {testMenuOpen && (*/}
                    {/*        <div className="dropdown-menu">*/}
                    {/*            <Link to="/TikTokLIVE/HighConcurrency">High Concurrency</Link>*/}
                    {/*            /!*<Link to="/TikTokLIVE/Regression">Regression Testing</Link>*!/*/}
                    {/*            /!*<Link to="/TikTokLIVE/Functional">Functional Testing</Link>*!/*/}
                    {/*            /!*<Link to="/TikTokLIVE/Performance">Performance Testing</Link>*!/*/}
                    {/*            /!*<Link to="/TikTokLIVE/CICD">CI/CD</Link>*!/*/}
                    {/*            /!*<Link to="/TikTokLIVE/Documentation">Documentation</Link>*!/*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</div>*/}

                    <Link to="/QA">Q&A</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

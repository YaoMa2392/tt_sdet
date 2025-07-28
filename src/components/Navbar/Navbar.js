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
                <Link to="/tt_sdet" className="navbar-logo">
                    <img
                        src="https://lf16-recruit-overseas-cdn-sg-sign.larksuite.com/obj/recruit-overseas-flie-sg/32961959/495010931/1519231217/7e84759d5008072e31da9a2402accc9122587086-7621x2341.png?x-expires=1755046808&x-signature=bTEppoDalw6swFAls2%2FvUhkVNNE%3D"
                        alt="logo"
                        style={{ width: "100px", height: "auto" }}
                    />
                </Link>

                {/* 右侧链接 */}
                <div className="navbar-links">
                    <Link to="/AboutMe">About Me</Link>

                    <div
                        className="dropdown"
                        onMouseEnter={() => setProjectMenuOpen(true)}
                        onMouseLeave={() => setProjectMenuOpen(false)}
                    >
                        <Link to="/Project" className="dropdown-title">Project</Link>
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
                                <Link to="/Test/Regression">Regression Testing [Auto]</Link>
                                <Link to="/Test/Functional">Functional Testing</Link>
                                <Link to="/Test/Performance">Performance Testing</Link>
                                <Link to="/Test/CICD">CI/CD</Link>
                                <Link to="/Test/Documentation">Documentation</Link>
                            </div>
                        )}
                    </div>

                    <div
                        className="dropdown"
                        onMouseEnter={() => setTestMenuOpen(true)}
                        onMouseLeave={() => setTestMenuOpen(false)}
                    >
                        <Link to="/TikTokLIVE" className="dropdown-title">TikTok LIVE</Link>
                        {testMenuOpen && (
                            <div className="dropdown-menu">
                                <Link to="/TikTokLIVE/LivePerformance">Performance Testing</Link>
                                {/*<Link to="/TikTokLIVE/Regression">Regression Testing</Link>*/}
                                {/*<Link to="/TikTokLIVE/Functional">Functional Testing</Link>*/}
                                {/*<Link to="/TikTokLIVE/Performance">Performance Testing</Link>*/}
                                {/*<Link to="/TikTokLIVE/CICD">CI/CD</Link>*/}
                                {/*<Link to="/TikTokLIVE/Documentation">Documentation</Link>*/}
                            </div>
                        )}
                    </div>

                    <Link to="/QA">Q&A</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

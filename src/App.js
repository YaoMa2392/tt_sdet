import React from "react";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {NotFound} from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Project from "./pages/Project/Project";
import Regression from "./pages/Test/Regression/Regression";
import Workflow from "./pages/Test/Workflow/Workflow";
import Sales from "./pages/Project/Sales/Sales";
import Payment from "./pages/Project/Payment/Payment";
import Inventory from "./pages/Project/Inventory/Inventory";
import Analytics from "./pages/Project/Analytics/Analytics";
import Functional from "./pages/Test/Functional/Functional";
import CICD from "./pages/Test/CICD/CICD";
import TestDesign from "./pages/Test/TestDesign/TestDesign";
import Footer from "./components/Footer/Footer";
import Documentation from "./pages/Test/Documentation/Documentation";
import Performance from "./pages/Test/Performance/Performance";
import QA from "./pages/Q&A/QA";
import TikTokLIVE from "./pages/TikTok LIVE/TikTokLIVE";
import HighConcurrency from "./pages/TikTok LIVE/LivePerformance/HighConcurrency";

const routes = [
    {
        path: "/tt_sdet",
        // element: <Presentation/>,
        element: <AboutMe/>,
    },
    {
        path: "/AboutMe",
        element: <AboutMe/>,
    },
    {
        path: "/Project",
        element: <Project/>,
    },
    {
        path: "/Project/Sales",
        element: <Sales/>,
    },
    {
        path: "/Project/Payment",
        element: <Payment/>,
    },
    {
        path: "/Project/Inventory",
        element: <Inventory/>,
    },
    {
        path: "/Project/Analytics",
        element: <Analytics/>,
    },
    {
        path: "/Test",
        element: <Workflow/>,
    },
    {
        path: "/Test/TestDesign",
        element: <TestDesign/>,
    },
    {
        path: "/Test/Regression",
        element: <Regression/>,
    },
    {
        path: "/Test/Functional",
        element: <Functional/>,
    },
    {
        path: "/Test/Performance",
        element: <Performance/>,
    },
    {
        path: "/Test/CICD",
        element: <CICD/>,
    },
    {
        path: "/Test/Documentation",
        element: <Documentation/>,
    },
    {
        path: "/TikTokLIVE",
        element: <TikTokLIVE/>,
    },
    {
        path: "/TikTokLIVE/HighConcurrency",
        element: <HighConcurrency/>,
    },
    {
        path: "/QA",
        element: <QA/>,
    },
    {
        path: "*", // Catch-all route for not found
        element: <NotFound/>,
    },
];

class App extends React.Component {
    render() {
        console.log('Rendering App');
        return (
            <BrowserRouter>
                <Navbar />
                <div className="main-content">
                    <Routes>
                        {routes.map((routeData, index) => (
                            <Route
                                key={index}
                                path={routeData.path}
                                element={routeData.element}
                            />
                        ))}
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>

        );
    }
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPages";
import AboutIconLink from "./components/AboutIconLink";
import {FeedbackProvider} from "./context/FeedbackContext";


function App(){

    return (
        <FeedbackProvider>
            <Router>
                <Header ></Header>
                <div className="container">
                    <Routes>
                        <Route exact path= '/'  element = {
                            <div>
                                <FeedbackForm />
                                <FeedbackStats />
                                <FeedbackList />
                            </div>
                        } >
        
                        </Route>

                        <Route path= '/about' element={<AboutPage />}></Route>
                    </Routes>
                    <AboutIconLink />
                </div>

            </Router>
        </FeedbackProvider>
    )
}

export default App;
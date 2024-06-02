// import { React, useState } from 'react';
import { React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SideBar from '../../components/navigation/SideBar';
import Header from '../../components/navigation/Header';
import HomePage from './HomePage';
import Favorites from './Favorites';
import WatchLater from './WatchLater';
import './dashboard.css';

const Dashboard = ({
    userUsername,
    setIsLoggedIn
}) => {
    return (
        <div className="dash">
            <BrowserRouter>
                <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
                <div>
                    <SideBar />
                    <main>
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route exact path="/favorites" element={<Favorites />} />
                            <Route exact path="/watchlater" element={<WatchLater />} />
                            {/* <Route path="/*" element={<Navigate to="/" />} /> */}
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default Dashboard;

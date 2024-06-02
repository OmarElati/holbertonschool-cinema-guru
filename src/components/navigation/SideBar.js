import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Activity from '../Activity';
import axios from "axios";
import './navigation.css'

const SideBar = () => {
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);


    const setPage = (pageName) => {
        setSelected(pageName);
      }


      const navigate = useNavigate()

      useEffect(() => {
        const accessToken = localStorage.getItem('accessToken')
        axios.get(process.env.REACT_APP_API_ACT, {
            headers: { authorization: `Bearer ${accessToken}` }
        })
        .then(response => setActivities(response.data))
    }, []);

    return (
        <nav className={`sidebar ${small ? "small" : ""}`} onMouseEnter={() => { setSmall(false); setTimeout(() => setShowActivities(true), 500) }} onMouseLeave={() => { setSmall(true); setShowActivities(false) }}>
            <ul className="navigation">
                <li className={selected === 'home' ? 'active' : ''} onClick={() => {
                    setSelected('home')
                    navigate('/')
                }}>Home</li>
                <li className={selected === 'favorites' ? 'active' : ''} onClick={() => {
                    setSelected('favorites')
                    navigate('/favorites')
                }}>Favorites</li>
                <li className={selected === 'watchLater' ? 'active' : ''} onClick={() => {
                    setSelected('watchLater')
                    navigate('/watchlater')
                }}>Watch Later</li>
            </ul>
            {!small && (
                <ul className="activities">
                    <h1>Latest Activities</h1>
                    <Activity></Activity>
                </ul>)}
        </nav >
    );
}

export default SideBar;

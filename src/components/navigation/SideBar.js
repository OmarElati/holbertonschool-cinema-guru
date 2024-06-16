import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Activity from '../Activity';
import axios from "axios";
import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faClock } from '@fortawesome/free-solid-svg-icons';


const SideBar = () => {
    const [selected, setSelected] = useState("home");
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        axios.get(process.env.REACT_APP_API_ACT, {
            headers: { authorization: `Bearer ${accessToken}` }
        })
        .then(response => setActivities(response.data))
        .catch(error => console.error('Error fetching activities:', error));
    }, []);

    return (
        <nav className={`sidebar ${small ? "small" : ""}`} onMouseEnter={() => setSmall(false)} onMouseLeave={() => setSmall(true)}>
            <ul className="navigation">
            <li className={selected === 'home' ? 'active' : ''} onClick={() => {
                    setSelected('home');
                    navigate('/');
                }}>
                    {small ? (
                        <FontAwesomeIcon icon={faHome} />
                    ) : (
                        <><FontAwesomeIcon icon={faHome} /> <span className="nav-text">Home</span></>
                    )}
                </li>
                <li className={selected === 'favorites' ? 'active' : ''} onClick={() => {
                    setSelected('favorites');
                    navigate('/favorites');
                }}>
                    {small ? (
                        <FontAwesomeIcon icon={faStar} />
                    ) : (
                        <><FontAwesomeIcon icon={faStar} /> <span className="nav-text">Favorites</span></>
                    )}
                </li>
                <li className={selected === 'watchLater' ? 'active' : ''} onClick={() => {
                    setSelected('watchLater');
                    navigate('/watchlater');
                }}>
                    {small ? (
                        <FontAwesomeIcon icon={faClock} />
                    ) : (
                        <><FontAwesomeIcon icon={faClock} /> <span className="nav-text">Watch Later</span></>
                    )}
                </li>
            </ul>
            {!small && (
                <ul className="activities">
                    <h1>Latest Activities</h1>
                    {activities.map((activity, index) => (
                        <Activity key={index} activity={activity} />
                    ))}
                </ul>
            )}
        </nav>
    );
}

export default SideBar;

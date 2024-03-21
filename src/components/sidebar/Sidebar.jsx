import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(null);

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    useEffect(() => {
        // Update the active item in the state when the component mounts
        setActiveItem(window.location.pathname);
    }, []);

    return (
        <div className="d-flex flex-column flex-shrink-0 bg-dark" style={{ width: '4.5rem' }}>
            <Link to="#" onClick={() => handleItemClick('#')} className={`d-block p-3 link-dark text-decoration-none ${activeItem === 'dashboard' ? 'active' : ''}`} title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" className="bi bi-bootstrap-fill" color='white' viewBox="0 0 16 16">
                    <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z" />
                    <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z" />
                </svg>
                <span className="visually-hidden">Icon-only</span>
            </Link>

            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li className="nav-item">
                    <Link to='/dashboard' onClick={() => handleItemClick('/dashboard')} className={`nav-link py-3 border-bottom ${activeItem === 'dashboard' ? 'active' : ''}`} aria-current="page" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                        </svg>
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;

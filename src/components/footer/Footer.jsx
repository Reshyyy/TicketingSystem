import React from 'react'

const Footer = () => {
    return (
        <footer className="footer text-center p-2 d-flex justify-content-center align-items-center">
            <div>
                &copy; {new Date().getFullYear()} Ramon Aboitiz Foundation Inc.
            </div>
        </footer>
    )
}

export default Footer

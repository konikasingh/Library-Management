import React from 'react'
import '../Css/Footer.css'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-logo">
                    <h2>Literary Lounge</h2>
                </div>
                <div className="footer-links">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/browsebooks'}>Browse Books</Link>
                    <Link to={'/addbook'}>Add Books</Link>
                </div>
                <div className="footer-social">
                    <a href="https://main--ephemeral-cannoli-a899f8.netlify.app/" target='_blank'><i className="ri-user-fill"></i></a>
                    <a href="https://github.com/Kuldeepkant26" target='_blank'><i className="ri-github-line"></i></a>
                    <a href=" www.linkedin.com/in/kuldeep-kant-975746281" target='_blank'><i className="ri-linkedin-fill"></i></a>
                </div>
                <div className="footer-copyright">
                    <p>&copy; 2024 Literary Lounge. All Rights Reserved.</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer

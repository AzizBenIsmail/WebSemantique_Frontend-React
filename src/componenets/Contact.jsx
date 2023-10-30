import React from 'react';

function Contact() {
    return (
        <div>
            <h1>Rent4u</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/cars">Cars</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
            <div>
                <h2>Contact Us</h2>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" />

                    <button type="submit">Send</button>
                </form>
            </div>
            <footer>
                <p>
                    Copyright © 2020 All Rights Reserved. Design by Free Html Templates
                </p>
            </footer>
        </div>
    );
}

export default Contact;

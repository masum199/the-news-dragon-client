import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>our terms and condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ut incidunt quam cum praesentium pariatur, eos eaque eligendi illum sit alias molestiae quaerat. Laboriosam quibusdam molestias doloribus quisquam ducimus eius aliquid quae? Fuga, nisi accusamus aspernatur et praesentium illum aut odit ad laudantium iste quaerat optio distinctio? Excepturi, sunt libero.</p>
            <p>go back to <Link to="/register">register</Link></p>
        </div>
    );
};

export default Terms;
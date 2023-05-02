import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://the-news-dragon-server-selfish199.vercel.app/catagories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(err => console.error(err))
    }, [])


    return (
        <div>
            <h2>All Categorie</h2>
            <div className='p-4 '>
                {
                    categories.map(category => <p key={category.id}><Link to={`/category/${category.id}`} className='text-decoration-none text-black'>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;
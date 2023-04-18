import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4 className='mt-4'>Log In With</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button className='px-3' variant="outline-secondary"> <FaGithub/>Login with Github</Button>
            <div>
                <h4 className='mt-4'>Find us on</h4>
                <ListGroup>
      <ListGroup.Item> <FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter/>Twitter </ListGroup.Item>
      <ListGroup.Item> <FaInstagram/> Instagram</ListGroup.Item>
    </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
            <img src={bg} alt="" />
            <div className='text-center text-white position-absolute top-0'>
                <h4>Create an<br/> Amazing <br/>Newspaper</h4>
                <p>Discover thousands of <br/>options, easy to <br/>customize layouts, one<br/>-click to import demo <br/>and much more.</p>
            </div>
            </div>
        </div>
    );
};

export default RightNav;
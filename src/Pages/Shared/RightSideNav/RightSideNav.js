import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaFacebook, FaInstagram, FaQuora, FaTwitch, FaTwitter } from 'react-icons/fa'
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"><FcGoogle /> Login With Google</Button>
                <Button variant="outline-secondary"><BsGithub /> Login With Github</Button>
            </ButtonGroup>
            <div className='mt-2'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaQuora /> Qoura</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch /> Twitch</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel />
            </div>
        </div>
    );
};

export default RightSideNav;
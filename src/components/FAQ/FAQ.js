import React from 'react';
import { Accordion } from 'react-bootstrap';

const FAQ = () => {
    return (
        <div className='container w-75 my-5'>
                <div className="text-center">
                    <h1 className='mb-4 text-primary'>Welcome, how can we help you?</h1>
                    <p>We warrant that your information including the sensitive information submitted by you is protected both online and off-line. While you are making the payment, the page is secure, encrypted and protected with the best encryption software in the industry – SSL. You can choose one favorite from the payment methods below.</p>
            </div>
            <Accordion className='my-5' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Can the products be applied during rainy season?</Accordion.Header>
                    <Accordion.Body>
                    We enough time for the paint to dry , you might have to face problems. Hence, we recommend you to observe the weather condition and then go ahead with painting.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How long should one wait before painting in case of a construction?</Accordion.Header>
                    <Accordion.Body>
                    Well, every product has its own drying time. And its quite risky to paint during the rainy season. If in case, you go ahead with the painting and it rains heavily, not allowing enough time for the paint to dry , you might have to face problems. Hence, we recommend you to observe the weather condition and then go ahead with painting.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Can ink or other stains be washed off??</Accordion.Header>
                    <Accordion.Body>
                     it rains heavily, not allowing enough time for the paint to dry , you might have to face problems. Hence, we recommend you to observe the weather condition and then go ahead with painting.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>How do the stains on the floor be removed after the painting is over?</Accordion.Header>
                    <Accordion.Body>
                     you go ahead with the painting and it rains heavily, not allowing enough time for the paint to dry , you might have to face problems. Hence, we recommend you to observe the weather condition and then go ahead with painting.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What is the expiry date of the paints?</Accordion.Header>
                    <Accordion.Body>
                     it rains heavily, not allowing enough time for the paint to dry , you might have to face problems. Hence, we recommend you to observe the weather condition and then go ahead with painting.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>What is the difference between emulsions and distempers?</Accordion.Header>
                    <Accordion.Body>
                    Well, every product has its own drying time. And its quite risky to paint during the rainy season. If in case, you go ahead with the painting and it rains heavily, not allowing enough time for the paint to dry
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default FAQ;
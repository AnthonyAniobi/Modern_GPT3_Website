import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Let's Build Something amazing with GPT-3 OpenAI
                </h1>
                <p>Barney is a dinsaour from holly immagination, after school they meet to play and sing of happy places. Barney's friends are big and small they come from lots of places, ABCs and 123s I love to be your friend</p>
                <div className="gpt3__header-content__input">
                    <input type='email' placeholder='Your Email' />
                    <button type='button'>Get Started</button>
                </div>
                <div className="gpt3__header-content__people">
                    <img src={people} alt='people' />
                    <p>1600 people requested access a visit last 24 hours</p>
                </div>
            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt='ai' />
            </div>
        </div>
    )
}

export default Header
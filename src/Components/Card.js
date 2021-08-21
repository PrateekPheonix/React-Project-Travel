import React from 'react'
import CardItem from './CardItem'
import './CSS/Card.css'

function Card() {
    return (
        <div className='card'>
            <h1>Check out these EPIC DESTINATIONS!!</h1>
            <div className="card_container">
                <div className="card_wrapper">
                    <ul className="card_items">
                        <CardItem 
                            src='Images\img-9.jpg' 
                            text="Explore the hidden waterfall deep inside the Amazon Jungle" 
                            label='Adventure' 
                            path='/services' 
                        />
                        <CardItem
                        src='Images/img-2.jpg'
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Luxury'
                        path='/services'
                        />
                    </ul>
                    <ul className='card_items'>
                        <CardItem
                        src='Images/img-3.jpg'
                        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                        label='Mystery'
                        path='/services'
                        />
                        <CardItem
                        src='Images/img-4.jpg'
                        text='Experience Football on Top of the Himilayan Mountains'
                        label='Adventure'
                        path='/products'
                        />
                        <CardItem
                        src='Images/img-8.jpg'
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card

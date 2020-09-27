import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out this EPIC destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image-1.jpg"
                        text="Explore amazing destinations for your beach adventure"
                        label="Beach"
                        path="/services"/>
                        <CardItem 
                        src="images/image-2.jpg"
                        text="Find secrete waterfalls in Amazons jungle"
                        label="Jungles"
                        path="/services"/>
                          <CardItem 
                        src="images/image-3.jpg"
                        text="Adventure trip to the Great Pyramids of Giza in Cairo, Egypt"
                        label="Pyramids"
                        path="/services"/>
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src="images/image-4.jpg"
                        text="Grand Mountain Adventure. An open-world skiing & snowboarding adventure. We're heading for Steam, wishlist and come with ideas"
                        label="Mountains"
                        path="/services"/>
                        <CardItem 
                        src="images/image-5.jpg"
                        text="Highly Rated On Travel Sites. We Ensure That You Will Love Our Itineraries & Tour Formats."
                        label="City"
                        path="/services"/>
                          <CardItem 
                        src="images/image-6.jpg"
                        text="Travel to the amazing African continent with us. Watch elephants, monkeys, lions and other African wildlife"
                        label="Nature"
                        path="/services"/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

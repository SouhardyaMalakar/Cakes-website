import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these options!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          <CardItem
              src='images/photos.jpg'
              text='Choose cakes u want from here..'
              label='Order Cakes'
              path='/products'
            />
            </ul>
          <ul className='cards__items'>
             <CardItem
              src='images/Exclusive.jpg'
              text='For any custom order plz visit here..'
              label='Luxary'
              path='/custom'
            />
            <CardItem
              src='images/classes.jpg'
              text='Want to learn baking.? contact here..'
              label='Cooking Classes'
              path='/classes'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Business.jpg'
              text='For Business related quaries contact here..'
              label='Business'
              path='/custom'
            />
            <CardItem
              src='images/classes.jpg'
              text='Want to learn baking.? contact here..'
              label='Cooking Classes'
              path='/classes'
            />
            <CardItem
              src='images/services.jpg'
              text='Customer service'
              label='Service'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
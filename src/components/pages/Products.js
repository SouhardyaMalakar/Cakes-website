import {React} from 'react';
import '../Cards.css';
import CardItem from '../CardItem';
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import '../../App.css'

function Cards() {
  return (
    <body >
    
      <h1>Choose What You Want.</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         <ul className='cards__items'>
            <CardItem
              src='images/photos.jpg'
              text='Choose cakes you want and love from here.. '
              label='Normal'
              path='/form'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Choose cakes you want and love from here.. '
              label='Themed'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='For any custom order plz visit here..'
              label='Luxary'
              path='/Fonden'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Want to learn baking.? contact here..'
              label='Cooking Classes'
              path='/Fruit'
            />
           
          </ul>
        </div>
        <Link to="/"><Button variant="contained" color="primary">
  Home
</Button>
</Link>
        
      </div>
    
    </body>
   
  );
}

export default Cards;
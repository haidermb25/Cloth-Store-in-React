import React, { useState } from 'react';
import './MainPage.css';
import Cards from '../../Components/Cards'; // Ensure the path is correct

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Example data for cards
  const cardData = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'Card 1',
      description: 'This is the description for Card 1',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Card 2',
      description: 'This is the description for Card 2',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Card 3',
      description: 'This is the description for Card 3',
    },
  ];

  return (
    <div className='mainContainer'>
      <div className='freeDelivery'>
        Free Home Delivery on all orders
      </div>
      <div className="header">
        <div className={`hamBurger hamBurgurShow`}>
          <h1>HamBurgur</h1>
        </div>
        <div className='Logo'>
          <h1>Logo</h1>
        </div>
        <div className='optionbox'>
          my side options
        </div>
      </div>
      <div className='categories'>
        <div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">New Arrival</a></li>
            <li><a href="#">Winter Collection</a></li>
            <li><a href="#">Printed Winter Collection</a></li>
            <li><a href="#">Summer Collection</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </div>
      </div>
      <div className="sidebar">
        <div>
          <ul>
            <li>X</li>
            <li><a href="#">Home</a></li>
            <li><a href="#">New Arrival</a></li>
            <li><a href="#">Winter Collection</a></li>
            <li><a href="#">Printed Winter Collection</a></li>
            <li><a href="#">Summer Collection</a></li>
            <li><a href="#">Sale</a></li>
          </ul>
        </div>
      </div>
      <div className='FrontPicture'>
        Picture
      </div>
      <div className='itemsBox'>
        <div className='heading'>
          <p>New Arrival</p>
        </div>
        <div className='items'>
          {/* Map through cardData to render multiple Cards */}
          {cardData.map((card, index) => (
            <Cards 
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;

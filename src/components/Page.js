import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Page(props) {
  const { onAddCardPopupOpen } = props;
  
  return (
    <div className = "page">
      <Header />
      <Main
        cards = {props.cards}
        onAddCardPopupOpen = {onAddCardPopupOpen}
      />
      <Footer />
    </div>
  )
}

export default Page;
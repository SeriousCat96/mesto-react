import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function Page(props) {
  return (
    <div className = "page">
      <Header />
      <Main {...props} />
      <Footer />
    </div>
  )
}

export default Page;